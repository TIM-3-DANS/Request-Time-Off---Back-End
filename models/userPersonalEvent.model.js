const { DataTypes } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  const UserPersonalEvent = sequelize.define(
    "user_personal_event",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      eventTitle: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      eventDescription: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      eventStartDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      eventEndDate: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    },
    {
      timestamps: false,
      freezeTableName: true,
      underscored: true,
    }
  );

  return UserPersonalEvent;
};
