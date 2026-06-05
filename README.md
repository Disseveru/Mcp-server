# Mcp-server

Production-shaped TypeScript starter for a monetized AI-agent services platform.

## What this includes

- **Paid MCP tool surface over x402** via `src/mcp/*`
- **Bazaar-discoverable registrations** generated for each paid tool
- **Internal market-intelligence agent** (`src/intelligence/*`) that scans:
  - `x402 ecosystem`
  - `agentic.market`
- **12-hour scheduler** (`src/scheduler/intervalScheduler.ts`)
- **Whitespace scoring framework** tuned for operational agent utilities:
  - normalization
  - validation
  - deduplication
  - feasibility checks
  - workflow infrastructure services
- **Persistence abstraction** plus starter in-memory repository

## Project structure

- `src/config` - runtime configuration
- `src/mcp` - paid tool catalog, x402 metadata, Bazaar registration mapping
- `src/intelligence` - scanner contracts, scoring, pipeline orchestration
- `src/persistence` - repository interface implementation(s)
- `src/scheduler` - recurring job scheduling
- `src/app` - bootstrap/wiring
- `test` - focused unit tests

## Quick start

```bash
npm install
npm run lint
npm test
npm run build
npm run dev
```

## Notes

This starter intentionally focuses on repeat-purchase operational utilities for agent workflows, not generic search/content APIs.
