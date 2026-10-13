# Seattle Grunge Studio

A simple GitHub Pages site for generating original grunge-inspired lyrics and guitar riffs with a dirty Seattle vibe.

This version now includes a minimal chat UI that can connect to a serverless API to behave like a conversational assistant (ChatGPT-like). The repository still serves the static frontend via GitHub Pages; the chat backend must be deployed separately as a serverless function (Vercel recommended).

## What to deploy for chat

This repo includes an example serverless endpoint for Vercel at `api/generate.js` (Node). The function forwards chat messages to the OpenAI Chat Completions API and returns the assistant reply.

Do NOT commit your API key to the repo. Instead, set it in your deployment platform's environment variables.

### Recommended quick path (Vercel + OpenAI)

1. Create a Vercel account and link this GitHub repository.
2. In Vercel, add environment variables for the project:
   - `OPENAI_API_KEY` = your OpenAI API key
   - (optional) `OPENAI_MODEL` = the model name (defaults to `gpt-4o-mini` if unset)
3. Deploy the Vercel project. The serverless function will be available at:

```
https://<your-vercel-domain>/api/generate
```

4. Keep GitHub Pages enabled for the static frontend, or host the frontend on Vercel as well (recommended if you want the chat to work without CORS issues). If you keep GitHub Pages, configure the `fetch` URL in `app.js` to call your Vercel endpoint (replace `/api/generate` with your full Vercel function URL).

## API contract

Frontend POST body: { messages: [{ role, content }, ...] }
Response: { reply: "assistant text", raw: { ... } }

## Local testing

You can run a local server that proxies requests to OpenAI using a small Express app and your OPENAI_API_KEY set locally, but the recommended path is Vercel serverless for simplicity.

## License

MIT
