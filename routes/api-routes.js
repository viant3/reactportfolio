const axios = require("axios")
const router = require("express").Router();
const GuestController = require("../controllers/GuestController");
const db = require("../models");

router.get("/Guest", (req, res) => {
  axios
    .get("/api/saveGuest")
    .then(({ data: { items } }) => res.json(items))
    .catch(err => res.status(422).json(err));
});

router.route("/saveGuest")
  .get(GuestController.findAll)
  .post(GuestController.create)

router.route("/saveGuest/:_id")
  .delete(GuestController.remove);




module.exports = router;