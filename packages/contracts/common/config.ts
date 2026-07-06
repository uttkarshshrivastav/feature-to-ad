// packages/contracts/common/config.ts
// Shared configuration utilities.

import { CaptureConfig } from '../config/capture';
import { NarrationConfig } from '../config/narration';
import { OrchestratorConfig } from '../config/orchestrator';
import { AdapterConfig } from '../config/adapter';

/**
 * Top-level configuration schema.
 */
export interface ProjectConfig {
  capture: CaptureConfig;
  narration: NarrationConfig;
  orchestrator: OrchestratorConfig;
  adapter: AdapterConfig;
}

/**
 * Validates a ProjectConfig against contracts.
 * Throws if validation fails.
 */
export function validateConfig(config: ProjectConfig): void {
  // Validate originLock is a valid URL
  if (!config.capture.originLock.startsWith('http')) {
    throw new Error(`Invalid originLock: ${config.capture.originLock}`);
  }

  // Validate runsDir is not empty
  if (!config.orchestrator.runsDir.trim()) {
    throw new Error('runsDir cannot be empty');
  }

  // Validate timeouts
  if (config.orchestrator.defaultTimeoutMs <= 0) {
    throw new Error('defaultTimeoutMs must be positive');
  }
  if (config.capture.actionTimeoutMs <= 0) {
    throw new Error('actionTimeoutMs must be positive');
  }

  // Validate SecretRefs
  if (!config.narration.elevenLabsKey.startsWith('@')) {
    throw new Error(`Invalid elevenLabsKey: must start with '@' (SecretRef)`);
  }
  if (!config.narration.heygenKey.startsWith('@')) {
    throw new Error(`Invalid heygenKey: must start with '@' (SecretRef)`);
  }
  if (config.adapter.claudeApiKey && !config.adapter.claudeApiKey.startsWith('@')) {
    throw new Error(`Invalid claudeApiKey: must start with '@' (SecretRef)`);
  }
  if (config.adapter.openCodeToken && !config.adapter.openCodeToken.startsWith('@')) {
    throw new Error(`Invalid openCodeToken: must start with '@' (SecretRef)`);
  }
}