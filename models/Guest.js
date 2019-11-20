const mongoose = require('mongoose')
const Schema = mongoose.Schema

const GuestSchema = new Schema(
    {
        Name: { type: [String], required: true },
        Email: {type: [String], required: true },
        Message: { type:[String], required: true },
    },
    { timestamps: true },
)
const Guest = mongoose.model("Guest", GuestSchema);
module.exports = Guest;
