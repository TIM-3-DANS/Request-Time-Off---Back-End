'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const process = require('process');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config')[env];
const db = {};
require("dotenv").config();

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js' &&
      file.indexOf('.test.js') === -1
    );
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

// Models
db.user = require("./user.model")(sequelize, Sequelize);
db.userPersonalInfo = require("./userPersonalInfo.model")(sequelize, Sequelize)
db.userFinancialInfo = require("./userFinancialInfo.model")(sequelize, Sequelize)
db.userPersonalEvent = require("./userPersonalEvent.model")(sequelize, Sequelize)
db.department = require("./department.model")(sequelize, Sequelize);
db.deptAnnouncement = require("./deptAnnouncement.model")(sequelize, Sequelize);
db.job = require("./job.model")(sequelize, Sequelize);
db.application = require("./application.model")(sequelize, Sequelize);
db.payment = require("./payment.model")(sequelize, Sequelize);
db.expense = require("./expense.model")(sequelize, Sequelize);
db.userMessage = require("./userMessage.model")(sequelize, Sequelize);

// User Associations
db.user.hasOne(db.userPersonalInfo, {foreignKey: {allowNull: false}})
db.user.hasOne(db.userFinancialInfo, {foreignKey: {allowNull: false}})
db.user.hasMany(db.userPersonalEvent, {foreignKey: {allowNull: false}, onDelete: 'CASCADE', hooks: true})
db.user.hasMany(db.application, {foreignKey: {allowNull: false}, onDelete: 'CASCADE', hooks: true})
db.user.hasMany(db.deptAnnouncement, {foreignKey: {name: 'createdByUserId', allowNull: false}, onDelete: 'CASCADE', hooks: true})
db.user.hasMany(db.job, {foreignKey: {allowNull: false}, onDelete: 'CASCADE', hooks: true})
db.user.belongsTo(db.department, {foreginKey: {allowNull: true}})

// User Financial Informations Assocations
db.userFinancialInfo.belongsTo(db.user, {foreignKey: {allowNull: false}})

// Department Associations
db.department.hasMany(db.user, {onDelete: 'CASCADE', hooks: true})
db.department.hasMany(db.deptAnnouncement, {foreignKey: {allowNull: true}, onDelete: 'CASCADE', hooks: true})
db.department.hasMany(db.expense, {foreignKey: {allowNull: false}})

// Expense Association
db.expense.belongsTo(db.department, {foreignKey: {allowNull: false}})

// Job Associations
db.job.hasMany(db.payment, {foreginKey: {allowNull: true}, onDelete: 'CASCADE', hooks: true})
db.job.belongsTo(db.user, {foreignKey: {allowNull: false}})

// Application Associations
db.application.belongsTo(db.user)

// Payment Associations
db.payment.belongsTo(db.job)

// Announcement Associations
db.deptAnnouncement.belongsTo(db.department, {foreignKey: {allowNull: true}})
db.deptAnnouncement.belongsTo(db.user, {foreignKey: {name: 'createdByUserId', allowNull: false}})

module.exports = db;
