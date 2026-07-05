import { NarrationMode, VoicePreset, AvatarPreset } from '../enums/narration';

export interface NarrationInput {
  refinedVideoPath: string;
  featureSummary: string;
  mode: NarrationMode;
  voicePreset?: VoicePreset;
  avatarPreset?: AvatarPreset;
}

export interface NarrationOutput {
  script: string;
  audioPath: string;
  avatarVideoPath?: string;
  timing: NarrationTiming[];
}

export interface NarrationTiming {
  startMs: number;
  endMs: number;
  text: string;
}