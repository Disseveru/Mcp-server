import { defaultConfig } from "../config/index.js";
import { MarketIntelligencePipeline } from "../intelligence/pipeline.js";
import { type EcosystemSource } from "../intelligence/types.js";
import { createMcpServerDescriptor } from "../mcp/server.js";
import { InMemoryOpportunityRepository } from "../persistence/inMemoryOpportunityRepository.js";
import { IntervalScheduler } from "../scheduler/intervalScheduler.js";

const x402Source: EcosystemSource = {
  name: "x402 ecosystem",
  async scan() {
    return {
      source: "x402 ecosystem",
      scannedAt: new Date(),
      signals: [
        {
          problem: "tool payload normalization",
          category: "normalization",
          repeatPurchaseLikelihood: 0.93,
          implementationReadiness: 0.8,
          tediousness: 0.91,
          marketGap: 0.74,
        },
      ],
    };
  },
};

const agenticMarketSource: EcosystemSource = {
  name: "agentic.market",
  async scan() {
    return {
      source: "agentic.market",
      scannedAt: new Date(),
      signals: [
        {
          problem: "feasibility checks before long-running jobs",
          category: "feasibility",
          repeatPurchaseLikelihood: 0.87,
          implementationReadiness: 0.77,
          tediousness: 0.88,
          marketGap: 0.7,
        },
      ],
    };
  },
};

export const bootstrap = () => {
  const repository = new InMemoryOpportunityRepository();
  const scheduler = new IntervalScheduler();
  const pipeline = new MarketIntelligencePipeline([x402Source, agenticMarketSource], repository);

  scheduler.schedule(async () => {
    const opportunities = await pipeline.run();
    const top = opportunities[0];

    if (top) {
      console.info("[market-intelligence] top whitespace opportunity:", top.serviceName, top.score);
    }
  }, defaultConfig.scanEveryHours * 60 * 60 * 1000);

  return {
    scheduler,
    pipeline,
    repository,
    mcpServer: createMcpServerDescriptor(defaultConfig.mcpEndpoint),
  };
};
