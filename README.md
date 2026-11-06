# POS System

Next.js app for the POS System admin and restaurant portals.

## Prerequisites

- Node.js 20+
- MongoDB Atlas account: https://cloud.mongodb.com/

## Setup

1. Create an Atlas cluster, database user, and network access rule.
2. Copy the connection string.

```bash
cd new-system
cp .env.example .env.local
```

Set these values in `.env.local`:

```env
MONGODB_URI=mongodb+srv://USER:PASSWORD@CLUSTER.mongodb.net/pos_system?retryWrites=true&w=majority
AUTH_SECRET=replace-with-a-long-random-string-at-least-32-chars
APP_NAME=POS System
NEXT_PUBLIC_APP_NAME=POS System
```

## Run

```bash
npm install
npm run seed
npm run dev
```

Open http://localhost:3000

### Demo users

| Portal     | Email                  | Password         |
|------------|------------------------|------------------|
| Admin      | `admin@pos.local`      | `Admin123!`      |
| Restaurant | `restaurant@pos.local` | `Restaurant123!` |

## Scripts

| Script          | Purpose                      |
|-----------------|------------------------------|
| `npm run dev`   | Start local development      |
| `npm run seed`  | Create/update demo users     |
| `npm run build` | Production build             |
| `npm run start` | Run the production server    |
