const {DataTypes } = require("sequelize")

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("user", {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true
        },
        unique: {
          args: 'username',
          msg: 'This username is already taken!'
        }
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      fullName: { 
        type: DataTypes.STRING,
        allowNull: false,
        validate : {
          notEmpty : true
        }
      },
      role: {
        type: DataTypes.ENUM,
        values: ['ROLE_ADMIN', 'ROLE_MANAGER', 'ROLE_EMPLOYEE'],
        allowNull: false
      },
      active: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
          validate: {
            notEmpty: true
          }
      }
    }, {
        timestamps: false,
        underscored: true,
        freezeTableName: true
    });
  
    return User;
  };