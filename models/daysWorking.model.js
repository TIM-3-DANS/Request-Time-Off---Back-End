const { DataTypes } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    const DaysWorking = sequelize.define("days_working", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        day: {
            type: DataTypes.STRING,
            allowNull: false
        },
        startingHour: {
            type: DataTypes.STRING,
            allowNull: false
        }, 
        endingHour: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        timestamps: false,
        underscored: true,
        freezeTableName: true,
    });

    return DaysWorking;
};