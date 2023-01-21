const { Configuration, OpenAIApi } = require("openai");
const express = require("express");
require("dotenv").config();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
 
const router = express.Router();

const openai = new OpenAIApi(configuration);

router.get("/get", async (req, res) => {
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: "Say this is a test",
        max_tokens: 7,
        temperature: 0,
    });
    text=response.choices[0].text;
    return res.json(text);
});

module.exports = router;