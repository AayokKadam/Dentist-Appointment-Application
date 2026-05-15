const express = require("express");
const controller = require("../controller/controller");

const router = express.Router();

router.post("/app",controller.createAppointment);
router.get("/get",controller.getAppointments);

module.exports = router;