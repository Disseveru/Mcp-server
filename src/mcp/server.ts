import { paidTools } from "./paidTools.js";
import { toBazaarRegistration } from "./bazaarRegistry.js";

export interface MCPServerDescriptor {
  endpoint: string;
  paymentProtocol: "x402";
  tools: {
    name: string;
    description: string;
    priceUsdCents: number;
  }[];
  bazaarDiscovery: {
    registrations: ReturnType<typeof toBazaarRegistration>[];
  };
}

export const createMcpServerDescriptor = (endpoint: string): MCPServerDescriptor => ({
  endpoint,
  paymentProtocol: "x402",
  tools: paidTools.map((tool) => ({
    name: tool.name,
    description: tool.description,
    priceUsdCents: tool.priceUsdCents,
  })),
  bazaarDiscovery: {
    registrations: paidTools.map((tool) => toBazaarRegistration(tool, endpoint)),
  },
});
