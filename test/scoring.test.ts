import test from "node:test";
import assert from "node:assert/strict";
import { scoreSignal } from "../src/intelligence/scoring.js";

test("scoreSignal prioritizes repeat purchase and tedious workflows", () => {
  const score = scoreSignal({
    problem: "deduplicating noisy runs",
    category: "deduplication",
    repeatPurchaseLikelihood: 1,
    implementationReadiness: 0.6,
    tediousness: 1,
    marketGap: 0.5,
  });

  assert.equal(score, 0.845);
});
