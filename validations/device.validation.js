const { z } = require("zod");

const baseSchema = z.object({
  name: z.string().max(50),
  model: z.string().optional(),
  description: z.string().optional(),
  documentation_url: z.string().url().optional(),
  three_model_path: z.string().optional(),
  manufacture_id: z.number().int(),
  category_id: z.string(),
});

exports.deviceCreateSchema = baseSchema;
exports.deviceUpdateSchema = baseSchema.partial();
