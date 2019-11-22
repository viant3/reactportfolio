const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const Data = require("./models/data");

const API_PORT = process.env.PORT || 3001;
const app = express();
const router = express.Router();

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/GuestBook";

mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/GuestBook").then(() => console.log("MongoDB successfully connected"))
.catch(err => console.log(err));

let db = mongoose.connection;

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger("dev"));

router.get("/", (req, res) => {
  res.json({ message: "Welcome to Victor Politano's Web Portfolio" });
});

router.get("/getData", (req, res) => {
  Data.find((err, data) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: data });
  });
});

router.post("/updateData", (req, res) => {
  const { id, update } = req.body;
  Data.findByIdAndUpdate(id, update, err => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true });
  });
});

router.delete("/deleteData", (req, res) => {
  const { id } = req.body;
  Data.findByIdAndRemove(id, err => {
    if (err) return res.send(err);
    return res.json({ success: true });
  });
});

router.post("/putData", (req, res) => {
  let data = new Data();

  const { id, name, email, message } = req.body;

  if ((!id && id !== 0) || !name || !email || !message ) {
    return res.json({
      success: false,
      error: "INVALID INPUTS"
    });
  }
  data.name = name;
  data.email = email;
  data.message = message;
  data.id = id;
  data.save(err => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true });
  });
});

app.use("/api", router);

app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));
