const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const apiRoutes = require("./routes/api-routes");

const API_PORT = process.env.PORT || 3001;
const app = express();

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/GuestBook";

mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/GuestBook").then(() => console.log("MongoDB successfully connected"))
.catch(err => console.log(err));

let db = mongoose.connection;

if (process.env.NODE_ENV === "production") {app.use(express.static("client/build"));}

db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(logger("dev"));


app.use("/api", apiRoutes);

app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));
