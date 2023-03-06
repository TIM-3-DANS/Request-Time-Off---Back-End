const { DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    const Job = sequelize.define("job", {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      jobTitle: {
        type: DataTypes.STRING,
        allowNull: false
      },
      startDate: {
        type: DataTypes.DATE,
        allowNull: false
      },
      endDate: {
        type: DataTypes.DATE,
        allowNull: false
      }
    }, {
        timestamps: false,
        underscored: true,
        freezeTableName: true,
    });
  
    return Job;
  };