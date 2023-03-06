const { DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const DeptAnnouncement = sequelize.define(
    "department_announcement",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      announcementTitle: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      announcementDescription: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      createdAt: {
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

  return DeptAnnouncement;
};
