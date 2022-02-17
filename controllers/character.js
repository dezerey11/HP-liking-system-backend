const { Router } = require("express");
const router = Router();
const { Character } = require("../models/Character");
const { User } = require("../models/User");
const auth = require("../middleware/auth");
const mongoose = require("../db/db");

/////// GET CHARACTERS ///////
router.get("/", async (req, res) => {
  try {
    const characters = await Character.find({});
    res.json({ characters });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

///////// UPDATE LIKES ///////
router.patch("/:id/like", auth, async (req, res) => {
  try {
    const characterId = req.params.id;
    const character = await Character.findByIdAndUpdate(
      characterId,
      {
        $inc: {
          likes: 1,
        },
      },
      {
        new: true,
      }
    );

    const user = await User.findOne({ username: req.payload.username });
    user.liked.push(mongoose.Types.ObjectId(characterId));
    user.save();

    res.json({});
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
