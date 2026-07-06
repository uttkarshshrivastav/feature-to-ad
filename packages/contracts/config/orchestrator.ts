// packages/contracts/config/orchestrator.ts
// Configuration for the Orchestrator.

export interface OrchestratorConfig {
  /**
   * Default timeout (ms) for stage execution.
   * @default 600000 (10 minutes)
   */
  defaultTimeoutMs: number;

  /**
   * Maximum number of parallel stages allowed.
   * @default 2
   */
  maxParallelStages: number;

  /**
   * Directory where run artifacts are stored (relative to project root).
   * @default "./runs/"
   */
  runsDir: string;

  /**
   * Enable checksum verification for `project.json`.
   * @default true
   */
  enableChecksum: boolean;
}