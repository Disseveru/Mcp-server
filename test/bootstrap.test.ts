import test from "node:test";
import assert from "node:assert/strict";
import { bootstrap } from "../src/app/bootstrap.js";

test("bootstrap logs top-ranked whitespace opportunity", async () => {
  const captured: unknown[][] = [];
  const originalInfo = console.info;

  console.info = (...args: unknown[]) => {
    captured.push(args);
  };

  try {
    const app = bootstrap();
    await new Promise((resolve) => setTimeout(resolve, 0));
    app.scheduler.stopAll();

    const topLog = captured.find((entry) => entry[0] === "[market-intelligence] top whitespace opportunity:");

    assert.ok(topLog);
    assert.equal(topLog[1], "normalization utility for tool payload normalization");
  } finally {
    console.info = originalInfo;
  }
});
