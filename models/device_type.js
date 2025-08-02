"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class DeviceType extends Model {
    static associate(models) {
      // define association here if needed
    }
  }

  DeviceType.init(
    {
      type: DataTypes.STRING(50),
      description: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "DeviceType",
      tableName: "device_types",
      underscored: true,
      paranoid: true,
      timestamps: true,
    }
  );

  return DeviceType;
};
