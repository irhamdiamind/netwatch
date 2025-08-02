const { Device } = require("../models");

exports.getAll = async () => {
  return await Device.findAll();
};

exports.getById = async (id) => {
  return await Device.findByPk(id);
};

exports.create = async (data) => {
  return await Device.create(data);
};

exports.update = async (id, data) => {
  return await Device.update(data, { where: { id } });
};

exports.remove = async (id) => {
  return await Device.destroy({ where: { id } });
};
