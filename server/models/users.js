const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 3,
    },
    feeds: [
      {
        type: Schema.Types.ObjectId,
        ref: "Feed",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const User = model("user", userSchema);

module.exports = User;
