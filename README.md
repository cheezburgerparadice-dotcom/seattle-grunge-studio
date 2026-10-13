# Seattle Grunge Studio

A simple GitHub Pages site for generating original grunge-inspired lyrics and guitar riffs with a dirty Seattle vibe.

## What it does

- Generates original lyric drafts in a gritty, emotional, Seattle-grunge style
- Builds a rough guitar chord/progression output
- Lets you copy or download the generated text
- Runs entirely as a static site for GitHub Pages

## Local preview

Open `index.html` in a browser, or run a local static server:

```bash
python3 -m http.server 8000
```

Then visit:

```text
http://localhost:8000
```

## Deploy to GitHub Pages

1. Push these files to your repository.
2. In GitHub, open the repository.
3. Go to Settings → Pages.
4. Set Source to `Deploy from a branch`.
5. Choose the `main` branch and `/root` folder.
6. Save.

GitHub will publish the site at a URL like:

```text
https://<username>.github.io/seattle-grunge-studio/
```

## Notes

This version is intentionally static and frontend-only. It is a good starter for a GitHub Pages site. For a real model-powered version, you can later add a backend API or serverless function to connect to an LLM or a licensed fine-tuned model.

## License

This project is licensed under the MIT License.
