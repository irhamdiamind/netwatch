const { z } = require("zod");

const baseSchema = z.object({
  name: z.string().max(100),
  description: z.string().optional(),
  ip_address: z.string().max(45),
  location: z.string().max(100).optional(),
  status: z.enum(["active", "inactive", "maintenance", "retired"]),
  three_object_id: z.number().int().optional(),
  device_id: z.number().int(),
});

exports.createHostSchema = baseSchema;
exports.updateHostSchema = baseSchema.partial;
