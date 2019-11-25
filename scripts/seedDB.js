// const mongoose = require("mongoose");
// const db = require("../models");

// // This file empties the Books collection and inserts the books below

// mongoose.connect(
//   process.env.MONGODB_URI ||
//   "mongodb://localhost/GuestBook"
// );

// const GuestSeed = [
//   {
//     Name: "Penelope",
//     Email: "Penelope@email.com",
//     Message: "just dropping by",
//     date: new Date(Date.now())
//   }
// ];

// db.Guest
//   .remove({})
//   .then(() => db.Guest.collection.insertMany(GuestSeed))
//   .then(data => {
//     console.log(data.result.n + " records inserted!");
//     process.exit(0);
//   })
//   .catch(err => {
//     console.error(err);
//     process.exit(1);
//   });