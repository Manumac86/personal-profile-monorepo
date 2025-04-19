# Personal Profile Monorepo

This monorepo contains the applications and shared configurations for the personal profile website.

## Structure

- `apps/professional-profile`: Astro frontend application for the public-facing profile.
- `apps/content-manager`: Strapi CMS for managing website content.
- `packages/tailwind-config`: Shared Tailwind CSS configuration.
- `packages/tsconfig`: Shared TypeScript configurations (replace '@repo/typescript-config' if different).
- `packages/eslint-config`: Shared ESLint configuration (replace '@repo/eslint-config' if different).
- `packages/ui`: (Optional) Shared React components (if kept from `create-turbo`).

## Getting Started

### Prerequisites

- Node.js (LTS version recommended)
- pnpm

### Installation

Install dependencies from the root directory:

```bash
pnpm install
```

### Development

**Configure `turbo.json` and root `package.json` scripts:**

Ensure your root `package.json` has scripts like:

```json
"scripts": {
  "dev": "turbo dev",
  "build": "turbo build",
  "lint": "turbo lint",
  // Add other scripts as needed
}
```

Ensure your `turbo.json` pipeline correctly defines the `dev`, `build`, and `lint` tasks for `professional-profile` (e.g., `astro dev`, `astro build`, `astro check && eslint .`) and `content-manager` (e.g., `strapi develop`, `strapi build`, `eslint .`).

**Run both applications concurrently:**

```bash
pnpm dev
```

This command should:

- Start the Strapi development server (`content-manager`) typically on `http://localhost:1337`.
- Start the Astro development server (`professional-profile`) typically on `http://localhost:4321`.

**Run a specific application:**

```bash
# Run Strapi CMS (adjust script name if needed)
pnpm --filter content-manager dev

# Run Astro frontend (adjust script name if needed)
pnpm --filter professional-profile dev
```

**Build all applications:**

```bash
pnpm build
```

## Configuration Notes

- The Astro app (`professional-profile`) is configured to use the shared `tailwind-config`, `tsconfig`, and `eslint-config`.
- The Strapi app (`content-manager`) is configured to use the shared `tsconfig` and `eslint-config`.
- Environment variables for the Astro app (e.g., Strapi API endpoint) should be placed in `apps/professional-profile/.env`. Strapi environment variables go in `apps/content-manager/.env`.

## Strapi Admin

Access the Strapi admin panel (after starting the `content-manager` app via `pnpm --filter content-manager dev`) at `http://localhost:1337/admin`. You will need to create an admin user on the first run.
