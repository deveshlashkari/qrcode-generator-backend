// backend/routes/qrRoutes.js
const express = require("express");
const { generateQR } = require("../controller/qrController");

const router = express.Router();

router.post("/", generateQR);

module.exports = router;
