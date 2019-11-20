const router = require("express").Router();
const GuestRoutes = require("./Guest");

// Book routes
router.use("/Guest", GuestRoutes);

module.exports = router;
