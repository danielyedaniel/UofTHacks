const express = require("express");
require("dotenv").config();
const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);

  
const router = express.Router();

// Get all receipts for a user
router.get("/get", async (req, res) => {
    const response = await openai.createImage({
        prompt: "rainforest setting painting",
        n: 1,
        size: "1024x1024",
    });
    image_url = response.data.data[0].url;
    return res.json(image_url);
});

module.exports = router;
