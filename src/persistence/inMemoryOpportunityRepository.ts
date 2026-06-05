import { type EcosystemScan, type OpportunityRepository, type ServiceOpportunity } from "../intelligence/types.js";

export class InMemoryOpportunityRepository implements OpportunityRepository {
  private readonly scans: EcosystemScan[] = [];
  private readonly opportunities: ServiceOpportunity[] = [];

  async saveScan(scan: EcosystemScan): Promise<void> {
    this.scans.push(scan);
  }

  async saveOpportunities(opportunities: ServiceOpportunity[]): Promise<void> {
    this.opportunities.push(...opportunities);
  }

  async listTopOpportunities(limit: number): Promise<ServiceOpportunity[]> {
    return [...this.opportunities].sort((a, b) => b.score - a.score).slice(0, limit);
  }
}
