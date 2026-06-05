import { scoreSignal } from "./scoring.js";
import { type EcosystemSource, type OpportunityRepository, type ServiceOpportunity } from "./types.js";

export class MarketIntelligencePipeline {
  constructor(
    private readonly sources: EcosystemSource[],
    private readonly repository: OpportunityRepository,
  ) {}

  async run(): Promise<ServiceOpportunity[]> {
    const scans = await Promise.all(this.sources.map((source) => source.scan()));

    const opportunities = scans.flatMap((scan) =>
      scan.signals.map((signal, index) => ({
        id: `${scan.source.toLowerCase().replace(/\s+/g, "-")}-${index}-${Date.now()}`,
        serviceName: `${signal.category} utility for ${signal.problem}`,
        summary: `Agent utility for ${signal.problem} (${signal.category})`,
        source: scan.source,
        score: scoreSignal(signal),
        generatedAt: new Date(),
      })),
    );

    const ranked = opportunities.sort((a, b) => b.score - a.score);

    await Promise.all([
      ...scans.map((scan) => this.repository.saveScan(scan)),
      this.repository.saveOpportunities(ranked),
    ]);

    return ranked;
  }
}
