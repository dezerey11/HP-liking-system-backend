// Import Schema and Model
const { Schema, model } = require("mongoose");

// The Character Schema
const CharacterSchema = new Schema(
  {
    name: { type: String, required: true },
    image_url: { type: String },
    house: { type: String },
    patronus: { type: String },
    likes: { type: Number, default: 0 },
  },
  { timestamps: true }
);

// The Character Model
const Character = model("Character", CharacterSchema);

// Export the Models
module.exports = {
  Character,
};
