const { Manufacture } = require("../models");

exports.getAll = async () => {
  return await Manufacture.findAll();
};

exports.getById = async (id) => {
  return await Manufacture.findByPk(id);
};

exports.create = async (data) => {
  return await Manufacture.create(data);
};

exports.update = async (id, data) => {
  return await Manufacture.update(data, { where: { id } });
};

exports.remove = async (id) => {
  return await Manufacture.destroy({ where: { id } });
};
