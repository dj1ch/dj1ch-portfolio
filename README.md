# dj1ch-portfolio

You can visit it [here](https://dj1ch.pages.dev)

This is built with [Astro](https://astro.build/), a web framework for content-driven websites.

You can build and deploy my website like so...

```sh
npm i
npm build
npm run dev # to build locally
```

Please keep in mind this is a hybrid site, not a static one. The backend is required for the messaging system, in which a local API is queried which securely sends information through a webhook, if you wish. If you would like to add one, I would create a `.env` file in the root of the project with the following:

```env
SECRET_WEBHOOK_URL=https://yourwebhook.com/api/something
```

For the sake of Cloudflare, I also created a `wrangler.toml` in the root of the project with the following:

```toml
[env]
SECRET_WEBHOOK_URL = "https://yourwebhook.com/api/something"
```

Deployed and hosted through [Cloudflare](https://www.cloudflare.com/)