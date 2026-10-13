# Seattle Grunge Studio

A simple GitHub Pages site for generating original grunge-inspired lyrics and guitar riffs with a dirty Seattle vibe.

This repo includes:
- a static frontend that generates lyric and riff output
- a chat window for a conversational songwriting assistant
- a serverless OpenAI API route for the actual chat backend

## Recommended architecture

- GitHub Pages: static frontend hosting
- Vercel: OpenAI backend hosting

This is the best setup for a public site that behaves like a ChatGPT-style assistant while keeping the API key on the backend instead of in the browser.

## Deploy the frontend to GitHub Pages

1. Push these files to your GitHub repository.
2. In GitHub, go to Settings → Pages.
3. Set Source to `Deploy from a branch`.
4. Choose the `main` branch and `/root` folder.
5. Save.

The site will publish at a URL like:

```text
https://<your-username>.github.io/seattle-grunge-studio/
```

## Deploy the chat backend to Vercel

1. Create a Vercel account and import this repo.
2. Add the following environment variables:
   - `OPENAI_API_KEY`
   - `OPENAI_MODEL` (optional; default is `gpt-4o-mini`)
3. Deploy the project.
4. Your chat endpoint will be available at:

```text
https://<your-project>.vercel.app/api/generate
```

5. Update the `API_ENDPOINT` constant in `app.js` to match your Vercel deployment URL.

Example:

```javascript
const API_ENDPOINT = "https://seattle-grunge-studio.vercel.app/api/generate";
```

## Important

Do not put your OpenAI API key in browser-side code. Keep it in Vercel environment variables only.

## Local / preview

If you want to preview the frontend locally:

```bash
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Notes

This is a starter product and not a full trained music model. It is a working public-facing songwriting app plus conversational assistant shell that can connect to OpenAI for actual chat generation.

## License

MIT
