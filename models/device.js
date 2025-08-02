"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Device extends Model {
    static associate(models) {}
  }

  Device.init(
    {
      name: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      model: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      documentation_url: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      three_model_path: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      manufacture_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      category_id: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Device",
      tableName: "devices",
      underscored: true,
      timestamps: true,
    }
  );

  return Device;
};
