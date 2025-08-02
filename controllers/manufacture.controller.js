const service = require("../services/manufacture.service");
const {
  manufactureCreateSchema,
  manufactureUpdateSchema,
} = require("../validations/manufacture.validation");

exports.getAll = async (req, res) => {
  const data = await service.getAll();
  res.json(data);
};

exports.getById = async (req, res) => {
  const data = await service.getById(req.params.id);
  if (!data) return res.status(404).json({ error: "Not found" });
  res.json(data);
};

exports.create = async (req, res) => {
  const parsed = manufactureCreateSchema.safeParse(req.body);
  if (!parsed.success)
    return res.status(400).json({ error: parsed.error.errors });

  const data = await service.create(parsed.data);
  res.status(201).json(data);
};

exports.update = async (req, res) => {
  const parsed = manufactureUpdateSchema.safeParse(req.body);
  if (!parsed.success)
    return res.status(400).json({ error: parsed.error.errors });

  await service.update(req.params.id, parsed.data);
  res.json({ message: "Updated" });
};

exports.remove = async (req, res) => {
  await service.remove(req.params.id);
  res.json({ message: "Deleted" });
};

exports.restore = async (req, res) => {
  try {
    await service.restore(req.params.id);
    const restored = await service.getById(req.params.id);
    return res.status(200).json({
      status: "success",
      message: "Manufacture restored successfully",
      data: restored,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      status: "fail",
      message: "Failed to restore manufacture",
      error: error?.message || String(error),
    });
  }
};
