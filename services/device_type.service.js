const { DeviceType } = require("../models");

exports.getAll = async () => {
  return await DeviceType.findAll();
};

exports.getById = async (id) => {
  return await DeviceType.findByPk(id);
};

exports.create = async (data) => {
  return await DeviceType.create(data);
};

exports.update = async (id, data) => {
  return await DeviceType.update(data, { where: { id } });
};

exports.remove = async (id) => {
  return await DeviceType.destroy({ where: { id } });
};

exports.restore = async (id) => {
  return await DeviceType.restore({ where: { id } });
};
