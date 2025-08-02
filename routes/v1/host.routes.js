const express = require("express");
const router = express.Router();
const hostController = require("../../controllers/host.controller");

router.get("/", hostController.getAll);
router.get("/:id", hostController.getById);
router.post("/", hostController.create);
router.put("/:id", hostController.update);
router.delete("/:id", hostController.remove);
router.patch("/:id/restore", hostController.restore);

module.exports = router;
