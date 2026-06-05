export interface PaidTool {
  name: string;
  description: string;
  priceUsdCents: number;
  execute: (input: unknown) => Promise<unknown>;
}

export interface BazaarToolRegistration {
  name: string;
  category: string;
  tags: string[];
  mcpEndpoint: string;
}
