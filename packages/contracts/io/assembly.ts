import { LayoutOption, VideoGrouping } from '../enums/assembly';
import { NarrationOutput } from './narration';

export interface AssemblyInput {
  refinedVideoPath: string;
  narrationOutput: NarrationOutput;
  layoutOption: LayoutOption;
  videoGrouping: VideoGrouping;
}

export interface AssemblyOutput {
  finalVideoPath: string;
  layout: LayoutOption;
}