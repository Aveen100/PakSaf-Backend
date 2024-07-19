const express = require("express");
const router = express.Router();
const RiderController = require("../controllers/RiderController");

router.post("/createRider", RiderController.createRider);
router.get("/FetchRiders", RiderController.GetAllRiders);

module.exports = router;
