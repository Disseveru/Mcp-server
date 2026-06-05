import test from "node:test";
import assert from "node:assert/strict";
import { IntervalScheduler } from "../src/scheduler/intervalScheduler.js";

test("IntervalScheduler schedules immediate run and clears intervals", async () => {
  let runs = 0;
  const handles: number[] = [];
  const cleared: number[] = [];

  const fakeSetInterval = ((() => {
    const handle = handles.length + 1;
    handles.push(handle);
    return handle as unknown as ReturnType<typeof setInterval>;
  }) as unknown) as typeof setInterval;

  const fakeClearInterval = (((handle: ReturnType<typeof setInterval>) => {
    cleared.push(handle as unknown as number);
  }) as unknown) as typeof clearInterval;

  const scheduler = new IntervalScheduler(fakeSetInterval, fakeClearInterval);

  scheduler.schedule(() => {
    runs += 1;
  }, 1000, true);

  scheduler.stopAll();

  await new Promise((resolve) => setTimeout(resolve, 0));
  assert.equal(runs, 1);
  assert.deepEqual(cleared, [1]);
});
