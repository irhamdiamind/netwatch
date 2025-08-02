const { z } = require("zod");

const baseSchema = {
  type: z.string().min(1).max(50),
  description: z.string().optional(),
};

exports.createDeviceTypeSchema = z.object(baseSchema);
exports.updateDeviceTypeSchema = z.object({
  ...baseSchema,
});
