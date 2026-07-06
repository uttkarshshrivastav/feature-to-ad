// packages/contracts/security/index.ts
/**
 * Zero-trust boundary contracts for the Feature-to-Ad Pipeline.
 * Enforces sanitization, allowlisting, secrets indirection, and redaction.
 * ALL LLM inputs/outputs, secrets, and human-facing artifacts MUST comply.
 */

// ===================== Allowlisted Actions =====================
/**
 * Closed enum for LLM-generated browser actions.
 * Rejects non-compliant outputs (e.g., `eval`, `navigate` to off-origin URLs).
 */
export type AllowlistedAction =
  | { type: 'click'; selector: string }
  | { type: 'fill'; selector: string; value: string }
  | {
      type: 'upload';
      selector: string;
      filePath: string; // Constrained to run directory
    }
  | { type: 'wait'; delay: number }
  | { type: 'keyboard'; key: string }
  | { type: 'scroll'; selector: string; direction: 'up' | 'down' };

// ===================== Sanitizer =====================
/***
 * Wrapper for untrusted text (DOM/page/diff/commit messages) destined for LLM prompts.
 * Neutralizes prompt-injection patterns (role markers, code fences).
 */
export interface SanitizerInput {
  rawText: string; // Untrusted content
  delimiterPrefix: string; // E.g., '<sanitized>'
  delimiterSuffix: string; // E.g., '</sanitized>'
}

/***
 * Sanitized output safe for LLM prompts.
 * `truncated` = true if length exceeded cap (prevents prompt stuffing).
 */
export interface SanitizerOutput {
  sanitizedText: string;
  truncated: boolean;
}

// ===================== Secrets =====================
/***
 * Opaque handle to a secret (e.g., API key, token).
 * Resolved at runtime from environment variables.
 * NEVER serialized in state/logs/checkpoint artifacts.
 */
export type  SecretRef= string;

// ===================== Redaction =====================
/***
 * Regex patterns to strip secrets/PII from logs and checkpoint artifacts.
 * Applied before rendering to users.
 */
export const RedactionPatterns = {
  SECRETS:/(api[_-]?key|secret|token|password|private[_-]?key)\s*[:=]\s*([^\s;,!]+)/gi,
  PII: /(\d{3}-\d{2}-\d{4})|(\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b)/g,
  CREDIT_CARDS: /\b(?:\d[ -]*?){13,16}\b/g,
  SESSION_IDS: /(session[_-]?id|token|access[_-]?token)[=:][^\s&]+/gi,
  FILE_PATHS: /(file:\/\/|\/|\\)(?:[^\s:/$]+)(?:\/[^\s:]*)*/g,
} as const;

// ===================== Error Classification =====================
/***
 * Structured error handling for orchestrator recovery logic.
 */
export enum ErrorClass {
  RECOVERABLE = 'recoverable', // Transient (e.g., network blip)
  FATAL = 'fatal', // Invalid state (e.g., checksum mismatch)
  USER_ACTIONABLE = 'userActionable', // Needs human input (e.g., malformed URL)
}

/**
 * Helper function to check if an action is allowlisted.
 * Used by `core/security` validator.
 */
export function isAllowlistedAction(action: unknown): action is AllowlistedAction {
  if (typeof action !== 'object' || action === null) return false;
  return ['click', 'fill', 'upload', 'wait', 'keyboard', 'scroll'].includes((action as any).type);
}