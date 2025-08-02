"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class DeviceCategory extends Model {
    static associate(models) {
      // define association here if needed
    }
  }

  DeviceCategory.init(
    {
      name: DataTypes.STRING(50),
      description: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "DeviceCategory",
      tableName: "device_categories",
      underscored: true,
      paranoid: true,
      timestamps: true,
    }
  );

  return DeviceCategory;
};
