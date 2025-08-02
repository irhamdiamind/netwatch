const express = require("express");
const router = express.Router();

const hostRouter = require("./v1/host.routes");
const deviceTypeRouter = require("./v1/device_type.routes");

router.use("/v1/hosts", hostRouter);
router.use("/v1/device-types", deviceTypeRouter);

module.exports = router;
