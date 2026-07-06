import { SecretRef } from "../security";
export interface CaptureInput {
  featureSummary: string;
  localUrl: string;
  authState: AuthSnapshot;
}

export interface CaptureOutput {
  recordingPath: string;
  captureLog: CaptureLogEntry[];
  pageModels: PageModel[];
  durationMs: number;
}

export interface AuthSnapshot {
  cookies: Cookie[];
  localStorage: Record<string, SecretRef>;
  sessionStorage: Record<string, SecretRef>;
}

export interface CaptureLogEntry {
  step: number;
  action: BrowserAction;
  timestamp: string;
  success: boolean;
  error?: string;
}

export interface PageModel {
  url: string;
  snapshot: AccessibilitySnapshot;
  timestamp: string;
}

export interface AccessibilitySnapshot {
  role: string;
  name?: string;
  children: AccessibilitySnapshot[];
}

export interface BrowserAction {
  type: 'click' | 'fill' | 'upload' | 'wait' | 'navigate' | 'keyboard' | 'scroll';
  selector?: string;
  value?: string;
  url?: string;
  key?: string;
  delay?: number;
}

export interface Cookie {
  name: string;
  value: string;
  domain: string;
  path: string;
  expires?: number;
  httpOnly: boolean;
  secure: boolean;
  sameSite: 'Strict' | 'Lax' | 'None';
}