const express = require('express');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 8081;

// Endpoint to translate text
app.post('/translate', async (req, res) => {
  const { text, target_lang, source_lang, glossary_id } = req.body;
  try {
    const result = await axios.post(
      'https://api.deepl.com/v2/translate',
      {
        text,
        target_lang,
        source_lang,
        glossary_id
      },
      {
        headers: {
          'Authorization': 'DeepL-Auth-Key 5555555555555555555555555555555555',
          'Content-Type': 'application/json'
        }
      }
    );
    res.send(result.data);
  } catch (error) {
    console.error('Error while translating text:', error);
    res.status(500).send('Error while translating text');
  }
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
