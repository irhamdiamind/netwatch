const hostService = require("../services/host.service");
const {
  createHostSchema,
  updateHostSchema,
} = require("../validations/host.validation");

exports.getAll = async (req, res) => {
  try {
    const {
      search = "",
      status = "",
      deviceTypeId = "",
      page = 1,
      limit = 10,
    } = req.query;

    const { hosts, pagination } = await hostService.getAll(
      search.trim() || null,
      status.trim() || null,
      deviceTypeId.trim() || null,
      parseInt(page),
      parseInt(limit)
    );

    if (pagination.page > pagination.totalPages && pagination.total > 0) {
      return res.status(400).json({
        status: "fail",
        message: `Page ${pagination.page} exceeds total pages (${pagination.totalPages}) for current search`,
      });
    }

    return res.status(200).json({
      status: "success",
      data: hosts,
      pagination: pagination,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      status: "fail",
      message: "Could not retrieve hosts",
      error: error?.message || String(error),
    });
  }
};

exports.getById = async (req, res) => {
  try {
    const host = await hostService.getById(req.params.id);
    if (!host) {
      return res.status(404).json({
        status: "fail",
        message: `Host with ID ${req.params.id} not found`,
      });
    }

    return res.status(200).json({
      status: "success",
      data: host,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      status: "fail",
      message: "Could not retrieve host",
      error: error?.message || String(error),
    });
  }
};

exports.create = async (req, res) => {
  const parsed = createHostSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({
      status: "fail",
      message: "Validation failed",
      error: parsed.error,
    });
  }

  try {
    const existing = await hostService.getByIpAddress(parsed.data.ip_address);
    if (existing) {
      return res.status(409).json({
        status: "fail",
        message: `IP address ${parsed.data.ip_address} already exists`,
      });
    }

    const host = await hostService.create(parsed.data);
    return res.status(201).json({
      status: "success",
      data: host,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      status: "error",
      message: "Failed to create host",
      error: error?.message || String(error),
    });
  }
};

exports.update = async (req, res) => {
  const parsed = updateHostSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({
      status: "fail",
      message: "Validation failed",
      error: parsed.error,
    });
  }

  try {
    const existing = await hostService.getById(req.params.id);
    if (!existing) {
      return res.status(404).json({
        status: "fail",
        message: `Host with ID ${req.params.id} not found`,
      });
    }

    if (parsed.data.ip_address !== existing.ip_address) {
      const duplicate = await hostService.getByIpAddress(
        parsed.data.ip_address
      );
      if (duplicate) {
        return res.status(409).json({
          status: "fail",
          message: `IP address ${parsed.data.ip_address} is already in use.`,
        });
      }
    }

    await hostService.update(req.params.id, parsed.data);
    const updated = await hostService.getById(req.params.id);
    return res.status(200).json({
      status: "success",
      data: updated,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      status: "error",
      message: "Failed to update host",
      error: error?.message || String(error),
    });
  }
};

exports.remove = async (req, res) => {
  try {
    const existing = await hostService.getById(req.params.id);

    if (!existing) {
      return res.status(404).json({
        status: "fail",
        message: `Host with ID ${req.params.id} not found`,
      });
    }

    await hostService.remove(req.params.id);

    return res.status(200).json({
      status: "success",
      message: "Host moved to recycle bin successfully",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      status: "error",
      message: "Failed to delete host",
      error: error?.message || String(error),
    });
  }
};

exports.restore = async (req, res) => {
  try {
    await hostService.restore(req.params.id);
    const restored = await hostService.getById(req.params.id);
    return res.status(200).json({
      status: "success",
      message: "Host restored successfully",
      data: restored,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      status: "fail",
      message: "Failed to restore host",
      error: error?.message || String(error),
    });
  }
};
