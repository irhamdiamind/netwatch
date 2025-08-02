const express = require("express");
const router = express.Router();

const hostRouter = require("./v1/host.routes");
const deviceRouter = require("./v1/device.routes");
const deviceCategoryRouter = require("./v1/device-category.routes");
const manufactureRouter = require("./v1/manufacture.routes");

router.use("/v1/hosts", hostRouter);
router.use("/v1/devices", deviceRouter);
router.use("/v1/device-categories", deviceCategoryRouter);
router.use("/v1/manufactures", manufactureRouter);

module.exports = router;
