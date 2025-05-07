// api/ai.js
const { AzureKeyCredential } = require('@azure/core-auth');
const { ModelClient, isUnexpected } = require('@azure-rest/ai-inference');

module.exports = async (req, res) => {
  const token = process.env.GITHUB_TOKEN;  // GitHub Token in Environment Variables
  const endpoint = 'https://models.github.ai/inference';
  const model = 'openai/gpt-4.1';

  const client = ModelClient(endpoint, new AzureKeyCredential(token));

  try {
    const response = await client.path('/chat/completions').post({
      body: {
        messages: [
          { role: 'system', content: '' },
          { role: 'user', content: req.body.message }
        ],
        temperature: 1,
        top_p: 1,
        model
      }
    });

    if (isUnexpected(response)) {
      throw response.body.error;
    }

    res.status(200).json({ reply: response.body.choices[0].message.content });
  } catch (error) {
    res.status(500).json({ error: 'Failed to generate AI response' });
  }
};
