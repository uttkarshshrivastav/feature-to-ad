import { NarrationMode, VoicePreset, AvatarPreset} from '../enums/narration';
import { LayoutOption,VideoGrouping} from '../enums/assembly';

export interface PipelineInput {
  sourceType: 'pr' | 'commit-range' | 'release';
  sourceRef: string;
  localUrl: string;
  narrationMode: NarrationMode;
  voicePreset?: VoicePreset;
  avatarPreset?: AvatarPreset;
  layoutOption: LayoutOption;
  videoGrouping: VideoGrouping;
}

export interface PipelineOutput {
  outputVideoPath: string;
  durationMs: number;
}