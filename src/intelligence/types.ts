export interface ScanSignal {
  problem: string;
  category: "normalization" | "validation" | "deduplication" | "feasibility" | "workflow-infra";
  repeatPurchaseLikelihood: number;
  implementationReadiness: number;
  tediousness: number;
  marketGap: number;
}

export interface EcosystemScan {
  source: string;
  scannedAt: Date;
  signals: ScanSignal[];
}

export interface ServiceOpportunity {
  id: string;
  serviceName: string;
  summary: string;
  score: number;
  source: string;
  generatedAt: Date;
}

export interface EcosystemSource {
  name: string;
  scan(): Promise<EcosystemScan>;
}

export interface OpportunityRepository {
  saveScan(scan: EcosystemScan): Promise<void>;
  saveOpportunities(opportunities: ServiceOpportunity[]): Promise<void>;
  listTopOpportunities(limit: number): Promise<ServiceOpportunity[]>;
}
