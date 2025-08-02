const { DeviceCategory } = require("../models");

exports.getAll = async () => {
  return await DeviceCategory.findAll();
};

exports.getById = async (id) => {
  return await DeviceCategory.findByPk(id);
};

exports.create = async (data) => {
  return await DeviceCategory.create(data);
};

exports.update = async (id, data) => {
  return await DeviceCategory.update(data, { where: { id } });
};

exports.remove = async (id) => {
  return await DeviceCategory.destroy({ where: { id } });
};

exports.restore = async (id) => {
  return await DeviceCategory.restore({ where: { id } });
};
