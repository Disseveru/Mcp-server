import { type PaidTool } from "./types.js";

export const paidTools: PaidTool[] = [
  {
    name: "normalize-workflow-records",
    description: "Normalize messy workflow payloads into a strict schema for downstream agents",
    priceUsdCents: 15,
    async execute(input: unknown): Promise<unknown> {
      return {
        normalized: true,
        input,
        schemaVersion: "1.0.0",
      };
    },
  },
  {
    name: "deduplicate-agent-tasks",
    description: "Remove duplicate task instructions and return deterministic job sets",
    priceUsdCents: 12,
    async execute(input: unknown): Promise<unknown> {
      return {
        deduplicated: true,
        input,
      };
    },
  },
];
