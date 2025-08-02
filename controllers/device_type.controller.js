const service = require("../services/device_type.service");
const {
  createDeviceTypeSchema,
  updateDeviceTypeSchema,
} = require("../validations/device_type.validation");

exports.getAll = async (req, res) => {
  const data = await service.getAll();
  res.json(data);
};

exports.getById = async (req, res) => {
  const data = await service.getById(req.params.id);
  if (!data) return res.status(404).json({ message: "Not found" });
  res.json(data);
};

exports.create = async (req, res) => {
  const parsed = createDeviceTypeSchema.safeParse(req.body);
  if (!parsed.success)
    return res.status(400).json({ message: parsed.error.errors });

  const data = await service.create(parsed.data);
  res.status(201).json(data);
};

exports.update = async (req, res) => {
  const parsed = updateDeviceTypeSchema.safeParse(req.body);
  if (!parsed.success)
    return res.status(400).json({ message: parsed.error.errors });

  await service.update(req.params.id, parsed.data);
  res.json({ message: "Updated" });
};

exports.remove = async (req, res) => {
  await service.remove(req.params.id);
  res.json({ message: "Deleted" });
};

exports.restore = async (req, res) => {
  await service.restore(req.params.id);
  res.json({ message: "Restored" });
};
