const { Router } = require("express");
const router = Router();
const { User } = require("../models/User");
const auth = require("../middleware/auth");

/////// GET USER LIKES (WHEN LOGGED IN) ///////
router.get("/me/liked", auth, async (req, res) => {
  try {
    const user = await User.findOne({ username: req.payload.username });
    res.json({ liked: user.liked });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
