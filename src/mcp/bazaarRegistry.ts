import { type BazaarToolRegistration, type PaidTool } from "./types.js";

export const toBazaarRegistration = (tool: PaidTool, endpoint: string): BazaarToolRegistration => ({
  name: tool.name,
  category: "agent-infrastructure",
  tags: ["x402", "paid", "operations", "workflow-utility"],
  mcpEndpoint: endpoint,
});
