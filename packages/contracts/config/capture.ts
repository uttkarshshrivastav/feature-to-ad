// packages/contracts/config/capture.ts
// Configuration for the Capture Module.

import { SecretRef } from '../security';

export interface CaptureConfig {
  /**
   * Maximum number of retry attempts for failed browser actions.
   * @default 3
   */
  maxRetries: number;

  /**
   * Maximum wall-clock time (ms) for retry loops.
   * Prevents runaway LLM costs/DoS.
   * @default 300000 (5 minutes)
   */
  maxRetryDurationMs: number;

  /**
   * Maximum depth for DOM crawling (prevents infinite recursion).
   * @default 10
   */
  maxCrawlDepth: number;

  /**
   * Origin-lock for browser navigation (e.g., "http://localhost:3000").
   * Enforced at runtime to prevent SSRF-style attacks.
   */
  originLock: string;

  /**
   * Timeout (ms) for Playwright actions (e.g., clicks, fills).
   * @default 30000
   */
  actionTimeoutMs: number;

  /**
   * Browser launch options (e.g., headed/headless, slowMo).
   * Harness adapters may override for debugging.
   */
  browserOptions?: {
    headless: boolean;
    slowMo?: number; // Slow down Playwright actions for visibility
  };
}