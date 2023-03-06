const { DataTypes } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  const UserMessage = sequelize.define(
    "user_message",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      text: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: false,
      freezeTableName: true,
      underscored: true,
    }
  );

  return UserMessage;
};
