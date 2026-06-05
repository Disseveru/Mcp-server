import { bootstrap } from "./app/bootstrap.js";

const app = bootstrap();

console.info("MCP platform booted with x402 paid tools:", app.mcpServer.tools.map((tool) => tool.name));
