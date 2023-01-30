const { Configuration, OpenAIApi } = require("openai");
const express = require("express");
require("dotenv").config();
const cors = require('cors');
app.use(cors());

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const router = express.Router();

router.get("/get", async (req, res) => {
  console.log("here");
    const response = await openai.createCompletion({
      "model": "text-davinci-003",
      "prompt": "Q: ${What kind of emotions correspond with a calm, jungle scenery.}A:[]",
      "max_tokens": 1000,
      "temperature": 0,
      "top_p": 1,
      "n": 1,
      "stream": false,
      "logprobs": null,
      "stop": "[]"
    }
    );
    console.log(response.data.choices[0].text);
    text=response.data.choices[0].text;
    res.setHeader("Access-Control-Allow-Origin", "*");
    return res.json(text);
});

//module.exports = router
module.exports = router;