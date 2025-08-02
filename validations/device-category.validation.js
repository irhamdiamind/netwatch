const { z } = require("zod");

const baseSchema = {
  name: z.string().min(1).max(50),
  description: z.string().optional(),
};

exports.createDeviceCategorySchema = z.object(baseSchema);
exports.updateDeviceCategorySchema = z.object({
  ...baseSchema,
});
