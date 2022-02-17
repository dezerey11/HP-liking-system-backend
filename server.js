// DEPENDENCIES //
const express = require("express");
require("dotenv").config();
const { PORT = 3000, SECRET } = process.env;
const jwt = require("jsonwebtoken");
const cors = require("cors");
const morgan = require("morgan");
const mongoose = require("./db/db");
const CharacterRouter = require("./controllers/character");
const UserRouter = require("./controllers/user");
const AuthRouter = require("./controllers/auth");

// APPLICATION OBJECT //
const app = express();

// MIDDLEWARE //
app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));

// ROUTES //
app.use("/auth", AuthRouter);
app.use("/characters", CharacterRouter);
app.use("/users", UserRouter);

// LISTENER //
app.listen(3000, () => console.log("Listening on port 3000"));
