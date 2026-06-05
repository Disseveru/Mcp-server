import { type ScanSignal } from "./types.js";

export interface ScoreWeights {
  repeatPurchaseLikelihood: number;
  implementationReadiness: number;
  tediousness: number;
  marketGap: number;
}

export const defaultScoreWeights: ScoreWeights = {
  repeatPurchaseLikelihood: 0.4,
  implementationReadiness: 0.2,
  tediousness: 0.25,
  marketGap: 0.15,
};

export const scoreSignal = (signal: ScanSignal, weights: ScoreWeights = defaultScoreWeights): number => {
  const weighted =
    signal.repeatPurchaseLikelihood * weights.repeatPurchaseLikelihood +
    signal.implementationReadiness * weights.implementationReadiness +
    signal.tediousness * weights.tediousness +
    signal.marketGap * weights.marketGap;

  return Number(weighted.toFixed(3));
};
