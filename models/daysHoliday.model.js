const { DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const DaysHoliday = sequelize.define(
    "days_holiday",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      timestamps: false,
      underscored: true,
      freezeTableName: true,
    }
  );

  return DaysHoliday;
};
