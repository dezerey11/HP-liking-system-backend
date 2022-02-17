const axios = require("axios");
const { Character } = require("../models/Character");

// get data from API
const seed = async () => {
  try {
    const response = await axios.get(
      "http://hp-api.herokuapp.com/api/characters"
    );
    const characters = response.data;

    characters.forEach(async (character) => {
      const user = await Character.findOne({ name: character.name });
      if (!user) {
        await Character.create({
          name: character.name,
          image_url: character.image,
          house: character.house,
          patronus: character.patronus,
          likes: 0,
        });
      }
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = seed;
