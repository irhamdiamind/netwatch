"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Manufacture extends Model {
    static associate(models) {
      // define associations here if needed
    }
  }

  Manufacture.init(
    {
      name: DataTypes.STRING(100),
      support_url: DataTypes.STRING(255),
    },
    {
      sequelize,
      modelName: "Manufacture",
      tableName: "manufactures",
      underscored: true,
      timestamps: true,
    }
  );

  return Manufacture;
};
