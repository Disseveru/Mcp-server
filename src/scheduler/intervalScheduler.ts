export class IntervalScheduler {
  private readonly handles = new Set<ReturnType<typeof setInterval>>();

  constructor(
    private readonly setIntervalFn: typeof setInterval = setInterval,
    private readonly clearIntervalFn: typeof clearInterval = clearInterval,
  ) {}

  schedule(task: () => Promise<void> | void, everyMs: number, runImmediately = true): void {
    if (runImmediately) {
      void Promise.resolve(task());
    }

    const handle = this.setIntervalFn(() => {
      void Promise.resolve(task());
    }, everyMs);

    this.handles.add(handle);
  }

  stopAll(): void {
    for (const handle of this.handles) {
      this.clearIntervalFn(handle);
    }
    this.handles.clear();
  }
}
