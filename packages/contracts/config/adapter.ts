// packages/contracts/config/adapter.ts
// Configuration for Harness Adapters.

import { SecretRef } from '../security';

export interface AdapterConfig {
  /**
   * Name of the harness (e.g., "claude-code", "cursor").
   */
  harnessName: string;

  /**
   * Claude API key (required for Claude adapter).
   */
  claudeApiKey?: SecretRef;

  /**
   * Cursor workspace ID (required for Cursor adapter).
   */
  cursorWorkspaceId?: string;

  /**
   * OpenCode workspace token (required for OpenCode adapter).
   */
  openCodeToken?: SecretRef;

  /**
   * Default timeout (ms) for harness LLM calls.
   * @default 120000 (2 minutes)
   */
  llmTimeoutMs?: number;
}