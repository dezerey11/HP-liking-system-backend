const mongoose = require("mongoose");
// Import Schema and Model
const { Schema, model } = require("mongoose");

// The User Schema
const UserSchema = new Schema(
  {
    username: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    liked: {
      type: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Character",
        },
      ],
      default: [],
    },
  },
  { timestamps: true }
);

// The User Model
const User = model("User", UserSchema);

// Export the Models
module.exports = {
  User,
};
