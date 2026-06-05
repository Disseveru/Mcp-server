export interface AppConfig {
  mcpEndpoint: string;
  scanEveryHours: number;
}

export const defaultConfig: AppConfig = {
  mcpEndpoint: "https://api.example.com/mcp",
  scanEveryHours: 12,
};
