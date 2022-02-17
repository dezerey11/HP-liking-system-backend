# Liking System

## Project Summary

This project displays a roster page of characters from the Harry Potter films and their data. The user will be able to see how many people have "Liked" their favorite characters. If the user is logged in, they will have the ability to like and add themselves to that character's number of likes using the thumbs up voting widget. The button will disappear after the user clicks on "Like". To account for the dynamic API, the backend will search for any changes every 15 minutes (you can find this in the db/db.js file).

## Technology Used

- JavaScript
- Node.js
- Express
- Mongoose
- MongoDB
- Harry Potter Characters API (can be found at https://hp-api.herokuapp.com/)

## Getting Started

- Insert values for PORT, MONGODBURL, and SECRET in the .env.example file and rename it to .env file.
- Run `npm run dev` to start the dev server

## Models

User Model:

- username: { type: String, unique: true, required: true }
- password: { type: String, required: true }
- liked: {
  type: [
  {
  type: mongoose.Schema.Types.ObjectId,
  ref: "Character",
  },
  ],
  default: [],
  }

Character Model:

- name: { type: String, required: true }
- image_url: { type: String }
- house: { type: String}
- patronus: { type: String}
- likes: { type: Number, default: 0 }

## Route Map

| Method | Endpoint               | Resource                                                                                 |
| ------ | ---------------------- | ---------------------------------------------------------------------------------------- |
| GET    | "/characters"          | Get all of the data for characters                                                       |
| POST   | "/auth/signup"         | Creates a user using the given username and password                                     |
| POST   | "/auth/login"          | Logs in user and returns a JWT for future API calls                                      |
| PATCH  | "/characters/:id/like" | Updates the likes for an character and adds the character's id to the user's liked list. |
| GET    | "/users/me/liked"      | Get the user's list of likes                                                             |
