# C++ Space Academy 🚀

Welcome to **C++ Space Academy**, a highly interactive, gamified web application designed to teach C++ programming concepts. Journey through the galaxy, explore planets (modules), complete lessons, take quizzes, and earn badges as you master C++!

## 🛠 Tech Stack

- **Framework:** Next.js (App Router) v16+
- **Styling:** Tailwind CSS & Framer Motion (for smooth animations and transitions)
- **Database:** Neon (Serverless Postgres)
- **ORM:** Drizzle ORM
- **Deployment:** Render (with Static Site Generation)

## 🏗 Project Architecture & Key Features

### 1. The Star Map (Progression System)
The core navigation interface is the **Star Map**, designed as a connected skill-tree path.
- Modules (Planets) are visually connected.
- The UI dynamically locks and unlocks planets based on user progress.
- **State Management:** User progress (completed lessons, projects, and earned badges) is tracked in the browser's `localStorage`. This ensures persistence across sessions without requiring complex user authentication out of the gate.

### 2. High-Performance Canvas Starfield
The background features a fully custom, highly optimized HTML5 `<canvas>` starfield.
- Previously, this was DOM/CSS-based, which caused UI lag.
- The new implementation uses `requestAnimationFrame` and canvas drawing to render hundreds of stars smoothly without impacting page performance.

### 3. Dynamic Routes & Static Site Generation (SSG)
The curriculum content is served through dynamic routes:
- `/lesson/[id]`
- `/project/[id]`
- `/quiz/[id]`

**Important Note for Future Developers:**
To ensure this app deploys correctly on static hosting environments (like Render), we utilize Next.js's `generateStaticParams` in these dynamic route files. This forces Next.js to statically generate all possible curriculum pages at build time, preventing 404 errors in production.

### 4. Database Integration
We use a **Neon Serverless Postgres** database managed via **Drizzle ORM**.
- Database connection strings are required to run database migrations or interact with the DB directly.
- The schema currently defines structures for potential server-side progress tracking and badge metadata.

---

## 💻 Local Development Setup

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn

### 1. Installation
Clone the repository and install dependencies inside the app folder:
`cd cpp-space-academy`
`npm install`

### 2. Environment Variables
Create a `.env.local` file in the `cpp-space-academy` directory and add your Neon Database URL:
`DATABASE_URL="postgresql://user:password@your-neon-host.neon.tech/dbname?sslmode=require"`

### 3. Running the Development Server
`npm run dev &`
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

## 🚀 Deployment (Render)

This application is deployed on **Render**.

### Subdirectory Workaround
Because the Next.js app lives inside the `cpp-space-academy` subdirectory rather than the repository root, Render needs a way to build and start the app from the root.

We solve this using a "proxy" `package.json` located at the **root** of the repository (`/package.json`):

`{`
`  "name": "cpp-space-academy-root",`
`  "private": true,`
`  "scripts": {`
`    "build": "cd cpp-space-academy && npm install && npm run build",`
`    "start": "cd cpp-space-academy && npm run start"`
`  }`
`}`

**Render Configuration:**
- **Build Command:** `npm run build`
- **Start Command:** `npm run start`

When Render executes these, it safely changes into the `cpp-space-academy` directory, installs dependencies, and runs the Next.js build/start commands.

---

## 🗺 Navigating the Codebase

- `app/`: Next.js App Router root. Contains global layouts, page definitions, and API routes.
- `app/components/`: Reusable React components (e.g., `Starfield.tsx`, UI buttons).
- `app/lesson/`, `app/project/`, `app/quiz/`: Dynamic route folders for educational content.
- `db/`: Drizzle ORM configuration and schema definitions.
- `public/`: Static assets (images, icons).

Enjoy building the future of C++ education! 🌌
