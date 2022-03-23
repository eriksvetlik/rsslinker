const { Schema, model } = require("mongoose");

const feedSchema = new Schema(
  {
    xml: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Feed = model("feed", feedSchema);

module.exports = Feed;
