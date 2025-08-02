"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Host extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }

  Host.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.TEXT,
      ip_address: DataTypes.STRING,
      location: DataTypes.STRING,
      status: DataTypes.ENUM("active", "inactive", "maintenance", "retired"),
      three_object_id: DataTypes.INTEGER,
      device_type_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Host",
      tableName: "hosts",
      underscored: true,
      paranoid: true,
      timestamps: true,
    }
  );

  return Host;
};
