const { z } = require("zod");

const baseSchema = z.object({
  name: z.string().max(100),
  support_url: z.string().max(255).optional(),
});

exports.manufactureCreateSchema = baseSchema;
exports.manufactureUpdateSchema = baseSchema.partial();
