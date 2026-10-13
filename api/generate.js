const fetch = require('node-fetch');

module.exports = async (req, res) => {
  if (req.method !== 'POST') return res.status(405).send('Method Not Allowed');

  const OPENAI_KEY = process.env.OPENAI_API_KEY;
  const OPENAI_MODEL = process.env.OPENAI_MODEL || 'gpt-4o-mini';

  if (!OPENAI_KEY) {
    return res.status(500).json({ error: 'Missing OPENAI_API_KEY environment variable' });
  }

  const body = req.body || {};
  const messages = body.messages || [];

  try {
    const resp = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${OPENAI_KEY}`
      },
      body: JSON.stringify({ model: OPENAI_MODEL, messages, max_tokens: 700 })
    });

    if (!resp.ok) {
      const txt = await resp.text();
      return res.status(resp.status).send(txt);
    }

    const data = await resp.json();
    const reply = data.choices && data.choices[0] && data.choices[0].message ? data.choices[0].message.content : '';
    return res.status(200).json({ reply, raw: data });
  } catch (err) {
    return res.status(500).json({ error: String(err) });
  }
};
