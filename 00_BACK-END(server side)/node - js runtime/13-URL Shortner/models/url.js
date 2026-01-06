const mongoose = require("mongoose");

const urlSchema = mongoose.Schema({
    longURL: { type: String, required: true },
    shortURL: { type: String, required: true },
    clickCount: { type: Number, default: 0 },
    createdAt: { type: Date, default: Date.now } // Track creation time
});

const url = mongoose.model("short-URLs", urlSchema);

module.exports = url;
