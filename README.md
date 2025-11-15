# Loot Box Animation Examples

A comprehensive showcase of 8 different loot box animation patterns and reward claim lifecycle states designed for maximum user engagement.

## Features

### 8 Unique Animation Patterns

1. **Classic Spinner** - Traditional spinning box with scale effects
2. **Treasure Chest** - Classic chest opening with light beam reveal
3. **Card Flip** - 3D card flip reveal animation
4. **Slot Machine** - Vegas-style spinning slots
5. **Particle Burst** - Explosive particle reveal effect
6. **Multi-Stage Unlock** - Progressive unlock with multiple layers
7. **Shake & Open** - Shake animation before opening
8. **Glow Pulse** - Pulsing glow with energy effects

### Reward Claim Lifecycle States

Each animation demonstrates 5 discrete states for optimal user engagement:

- **Idle/Available** - Ready to be opened, with subtle hover effects
- **Anticipation** - Brief pulse/glow when user clicks
- **Opening/Active** - Main animation sequence
- **Revealing** - Reward display with particles and effects
- **Claimed/Complete** - Final state with visual feedback

## Tech Stack

- **Next.js 16** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS v4** - Utility-first CSS with custom animations
- **React Hooks** - State management for animation sequences

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the demo.

Build for production:

```bash
npm run build
```

## Deploy on Vercel

This project is optimized for deployment on Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/animation-demos)

1. Push to your GitHub repository
2. Import the project in Vercel
3. Deploy with one click

## Custom Animations

The project includes custom Tailwind animations defined in `app/globals.css`:

- Shake animation for gift boxes
- Slot machine spin effect
- Particle burst animations (4 directions)
- Scale-in with rotation
- Fade-in effects
- 3D transform utilities for card flips

## Usage

Click any loot box to see the complete animation lifecycle. Each box automatically resets after completion, allowing you to test different patterns.

## License

MIT
