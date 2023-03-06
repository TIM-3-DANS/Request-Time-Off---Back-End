const { DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    const Expense = sequelize.define("expense", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        expenseItemName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        expenseItemStore: {
            type: DataTypes.STRING,
            allowNull: false
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false
        },
        amount: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
        timestamps: false,
        underscored: true,
        freezeTableName: true,
    });

    return Expense;
};