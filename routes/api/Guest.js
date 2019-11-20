const router = require("express").Router();
const GuestController = require("../../controllers/GuestController");

// Matches with "/api/Guest"
router.route("/")
  .get(GuestController.findAll)
  .post(GuestController.create);

// Matches with "/api/Guest/:id"
router
  .route("/:id")
  .get(GuestController.findById)
  .put(GuestController.update)
  .delete(GuestController.remove);

module.exports = router;
