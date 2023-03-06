const { DataTypes } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  const Application = sequelize.define(
    "application",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      reason: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      startDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      endDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      status: {
        type: DataTypes.ENUM,
        values: ["Approved", "Rejected", "Pending"],
        allowNull: false,
      },
      type: {
        type: DataTypes.ENUM,
        values: ["Normal", "Student", "Illness", "Marriage"],
        allowNull: false,
      },
    },
    {
      timestamps: false,
      underscored: true,
      freezeTableName: true,
    }
  );

  return Application;
};
