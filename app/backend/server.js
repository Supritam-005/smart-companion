const express = require("express");
const axios = require("axios");

const app = express();
app.use(express.json());

app.post("/ask-ai", async (req, res) => {
  try {
    const response = await axios.post(
      "http://localhost:11434/api/generate",
      {
        model: "qwen2.5:3b",
        prompt: req.body.prompt,
        stream: false
      }
    );

    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "AI failed" });
  }
});

app.listen(3000, () => console.log("Server running on port 3000"));