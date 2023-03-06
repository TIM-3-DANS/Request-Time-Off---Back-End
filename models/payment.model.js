const { DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    const Payment = sequelize.define("payment", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        paymentType: {
            type: DataTypes.ENUM,
            values: ['Check', 'Bank Transfer', 'Cash'],
            allowNull: false
        },
        paymentMonth: {
            type: DataTypes.DATE,
            allowNull: false
        },
        paymentDate: {
            type: DataTypes.DATE,
            allowNull: false
        },
        paymentFine: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        paymentAmount: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        comments: {
            type: DataTypes.STRING,
            allowNull: true
        }
    }, {
        timestamps: false,
        underscored: true,
        freezeTableName: true,
    });

    return Payment;
};