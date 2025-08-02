const router = require("express").Router();
const controller = require("../../controllers/device-category.controller");

router.get("/", controller.getAll);
router.get("/:id", controller.getById);
router.post("/", controller.create);
router.put("/:id", controller.update);
router.delete("/:id", controller.remove);
router.patch("/:id/restore", controller.restore);

module.exports = router;
