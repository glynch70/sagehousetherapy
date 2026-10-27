# Sage House Therapy

A production-ready Next.js foundation for Sage House Therapy.

## Maintenance mode

Maintenance mode is enabled in `proxy.ts`. All page requests return the branded
maintenance notice with HTTP 503, a one-day retry hint and no caching. The original
pages remain unchanged. To reopen the site, set `maintenanceMode` to `false` in
`proxy.ts` and deploy. No public query string or cookie bypass is provided.

Previous live deployment: `dpl_Gb37g7H5efhhrUdmTERgLZEEa6he` (commit `d6b93b1`).

## Tech stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- ESLint
- Prettier
- Vercel-ready project structure

## Development

```bash
npm install
npm run dev
```

## Quality checks

```bash
npm run lint
npm run format:check
npm run build
```
