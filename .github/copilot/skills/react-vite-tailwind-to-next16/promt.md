# React + Vite + Tailwind → Next.js 16 Migration Execution Prompt

You are about to migrate this repository using the skill:

react-vite-tailwind-to-next16

Operate in structured autonomous migration mode.

Follow all phases strictly.

Do not skip validation.

---

# Execution Plan

## Step 1 — Full Repository Analysis

Scan entire codebase before making changes.

Identify and summarize:

- Routing system (react-router-dom usage)
- Entry file (main.tsx / main.jsx)
- Layout wrappers
- Tailwind configuration (tailwind.config.*, plugins, theme extensions)
- Dark mode configuration
- Global CSS file
- Environment variables (import.meta.env usage)
- State management
- API calls (axios / fetch)
- Dynamic routes
- Protected routes
- Lazy-loaded components
- Static asset directories

Return structured migration plan before proceeding.

Do NOT modify code yet.

---

## Step 2 — Initialize Next.js 16+

Create new project using:

npx create-next-app@latest app-name --typescript --tailwind --eslint --app

Requirements:

- Must use App Router
- Must use TypeScript
- Must enable strict mode
- Must enable Tailwind during setup
- Must not use Pages Router

Wait for successful setup before migrating files.

---

## Step 3 — Routing Migration

Convert React Router to filesystem routing.

Mapping rules:

BrowserRouter → Remove  
Routes → Folder structure  
Route path="/about" → app/about/page.tsx  
Nested routes → Nested folders  
NotFound route → app/not-found.tsx  
Dynamic route ":id" → app/[id]/page.tsx  

Replace:

useNavigate / useHistory → useRouter  
Link from react-router-dom → next/link  

Preserve route behavior exactly.

---

## Step 4 — Layout Migration

Move shared layout logic into:

app/layout.tsx

Convert Helmet or meta tags into:

export const metadata = { }

Remove root rendering logic from main.tsx.

---

## Step 5 — Tailwind Migration (Critical)

If Tailwind is detected:

- Copy tailwind.config.*
- Copy plugins
- Copy theme extensions
- Copy darkMode config
- Preserve custom fonts
- Preserve CSS variables

Update content paths:

content: [
  "./app/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}"
]

If src directory exists:

"./src/app/**/*.{js,ts,jsx,tsx}",
"./src/components/**/*.{js,ts,jsx,tsx}"

Move:

src/index.css → app/globals.css

Ensure it contains:

@tailwind base;
@tailwind components;
@tailwind utilities;

Import in layout.tsx:

import "./globals.css"

Do NOT modify Tailwind classes.

---

## Step 6 — Client vs Server Components

Add:

"use client"

ONLY when component uses:

- useState
- useEffect
- useContext
- event handlers
- browser APIs
- window/document
- localStorage/sessionStorage

Do NOT mark everything as client.

Prefer Server Components when safe.

---

## Step 7 — Environment Variables

Replace:

import.meta.env.VITE_*

With:

process.env.NEXT_PUBLIC_*

Rename variables in .env files accordingly.

Ensure no missing references.

---

## Step 8 — Static Assets

Move:

src/assets → public/

Replace image tags with next/image when safe.

Example:

import Image from "next/image"

<Image src="/image.png" width={500} height={500} alt="..." />

---

## Step 9 — Remove Vite

Remove:

- vite
- @vitejs/*
- react-router-dom
- index.html
- main.tsx

Ensure package.json contains:

- next
- react
- react-dom
- eslint-config-next

Clean unused dependencies.

---

## Step 10 — Validation Phase (Mandatory)

Run:

npm install  
npm run build  

Fix automatically:

- Type errors
- Import path errors
- Tailwind purge issues
- Hydration mismatches
- Server/client boundary errors
- Missing environment variables

Build must succeed.

---

# Safety Rules

Never:

- Use Pages Router
- Break existing business logic
- Remove Tailwind classes
- Overuse "use client"
- Change API behavior unintentionally
- Leave project in non-buildable state

Always:

- Preserve functionality
- Preserve styling
- Follow Next.js 16+ best practices
- Ensure production build success

---

# Expected Final Structure

app/
  layout.tsx
  page.tsx
  not-found.tsx
  about/page.tsx
  [id]/page.tsx
  globals.css

public/
next.config.js
package.json
tsconfig.json
tailwind.config.ts

---

# Execution Mode

Proceed incrementally.

Validate each phase before moving to the next.

Do not stop until:

- Migration is complete
- Project builds successfully
- All routes and styles work

---

End of Prompt