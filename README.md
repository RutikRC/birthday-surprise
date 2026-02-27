# Birthday Surprise ❤️

A beautiful, locked-until-March-5 virtual birthday surprise built with React + Vite.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview
```

## Features

- **Date lock**: Before March 5 (user’s local time), only the countdown lock screen is shown. On March 5 it unlocks and shows the full birthday page.
- **Lock screen**: Dreamy gradient/starry background, glassmorphism card, live countdown, floating hearts.
- **Birthday page**: Hero, heartfelt apology note, friendship note, best-friend vibe cards (images from Unsplash), compliments cards, final message with confetti button.
- **Optional music**: Add a soft instrumental file as `public/music.mp3` and use the floating music toggle on the birthday page.

## Tech

- React 19 + Vite 7
- Functional components, hooks
- CSS (no Tailwind): custom properties, responsive (mobile-first)
- No backend; date logic uses the browser’s local date/time

## Customization

- **Unlock date**: Edit `MARCH_5` in `src/useDateLock.ts` (month is 0-indexed: 0 = Jan, 2 = Mar).
- **Best-friend cards**: Edit the `CARDS` array in `src/components/FriendshipCards.tsx` to change captions or image URLs (defaults use Unsplash).
