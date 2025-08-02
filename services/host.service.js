const { Host } = require("../models");
const { Op } = require("sequelize");

exports.getAll = async (search, status, deviceId, page = 1, limit = 10) => {
  const where = {};

  if (search) {
    where[Op.or] = [
      { name: { [Op.like]: `%${search}%` } },
      { ip_address: { [Op.like]: `%${search}%` } },
      { location: { [Op.like]: `%${search}%` } },
      { description: { [Op.like]: `%${search}%` } },
    ];
  }

  if (status) {
    where.status = status;
  }

  if (deviceId) {
    where.device_id = deviceId;
  }

  const offset = (page - 1) * limit;

  const { count, rows } = await Host.findAndCountAll({
    where,
    limit: limit,
    offset: offset,
  });

  const totalPages = Math.ceil(count / limit);

  return {
    hosts: rows,
    pagination: {
      total: count,
      page: page,
      limit: limit,
      totalPages: totalPages,
      hasPrevPage: page > 1,
      hasNextPage: page < totalPages,
    },
  };
};

exports.getById = async (id) => {
  return await Host.findByPk(id);
};

exports.getByIpAddress = async (ipAddress) => {
  return await Host.findOne({ where: { ip_address: ipAddress } });
};

exports.create = async (data) => {
  return await Host.create(data);
};

exports.update = async (id, data) => {
  return await Host.update(data, { where: { id: id } });
};

exports.remove = async (id) => {
  return await Host.destroy({ where: { id: id } });
};

exports.restore = async (id) => {
  return await Host.restore({ where: { id: id } });
};
