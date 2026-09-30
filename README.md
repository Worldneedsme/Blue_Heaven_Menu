# Blue Heaven Apart Hotel Website

Informative website for **Blue Heaven Apart Hotel** in Alanya, Antalya, Türkiye.

- No online booking / payments / guest login
- Content is edited in Cursor via TypeScript data files
- Languages: **English (default)**, **Finnish**, **Turkish**

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — you will be redirected to `/en`.

## How to update content (no CMS)

Edit files under `src/data/`, save, then push to deploy (e.g. Vercel). Live site updates in about 1–3 minutes after deploy.

| What to change | File |
|----------------|------|
| Phone, email, address, maps, social | [`src/data/hotel.ts`](src/data/hotel.ts) |
| Homepage “Why Blue Heaven” cards | [`src/data/features.ts`](src/data/features.ts) |
| Rooms | [`src/data/rooms.ts`](src/data/rooms.ts) |
| Restaurant menu & prices | [`src/data/menu.ts`](src/data/menu.ts) |
| Massage treatments | [`src/data/massage.ts`](src/data/massage.ts) |
| Gallery images list | [`src/data/gallery.ts`](src/data/gallery.ts) |
| Location / attractions | [`src/data/location.ts`](src/data/location.ts) |
| Restaurant page copy | [`src/data/restaurant.ts`](src/data/restaurant.ts) |
| Extra guest services | [`src/data/services.ts`](src/data/services.ts) |
| Guest reviews | [`src/data/reviews.ts`](src/data/reviews.ts) |
| UI translations (nav, buttons) | [`src/messages/en.json`](src/messages/en.json), [`fi.json`](src/messages/fi.json), [`tr.json`](src/messages/tr.json) |

### Images

1. Drop files into `public/images/...`
2. Make sure the path in the matching data file points to that file

Logo: [`public/images/brand/logo.png`](public/images/brand/logo.png)

## Deploy (Vercel)

1. Push this repo to GitHub
2. Import the project in [Vercel](https://vercel.com)
3. Deploy — Root Directory can stay the repo root
4. Every future `git push` redeploys automatically

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS
- next-intl (EN / FI / TR)
