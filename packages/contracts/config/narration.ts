// packages/contracts/config/narration.ts
// Configuration for the Narration Module.

import { SecretRef } from '../security';

export interface NarrationConfig {
  /**
   * Narration mode: AI voice, avatar, or human.
   */
  narrationMode: 'ai_voice' | 'avatar' | 'human';

  /**
   * ElevenLabs voice ID (required for `ai_voice` or `avatar` modes).
   */
  voicePreset?: string;

  /**
   * HeyGen avatar ID (required for `avatar` mode).
   */
  avatarPreset?: string;

  /**
   * ElevenLabs API key (resolved via SecretRef).
   */
  elevenLabsKey: SecretRef;

  /**
   * HeyGen API key (resolved via SecretRef).
   */
  heygenKey: SecretRef;

  /**
   * Maximum length (chars) for generated narration scripts.
   * @default 2000
   */
  maxScriptLength?: number;
}