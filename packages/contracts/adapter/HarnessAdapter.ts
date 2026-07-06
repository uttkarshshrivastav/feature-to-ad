import { CheckpointResult } from '../io/checkpoint';
import { ProgressEvent } from '../common/progress';
import { PipelineError } from '../common/error';
import { LLMResult } from '../common/llm';
import { NarrationMode } from '../enums/narration';
import {  LayoutOption, VideoGrouping } from '../enums/assembly';


export interface HarnessAdapter {
  presentSummaryCheckpoint(summary: string): Promise<CheckpointResult>;
  presentCaptureCheckpoint(videoPath: string): Promise<CheckpointResult>;
  presentNarrationCheckpoint(audioPath: string): Promise<CheckpointResult>;
  presentFinalCheckpoint(videoPath: string): Promise<CheckpointResult>;

  askLocalUrl(): Promise<string>;
  askNarrationMode(): Promise<NarrationMode>;
  askLayoutOption(): Promise<LayoutOption>;
  askVideoGrouping(): Promise<VideoGrouping>;

  requestManualLogin(url: string): Promise<void>;

  reportProgress(event: ProgressEvent): void;
  reportError(error: PipelineError): void;

  generateText(prompt: SanitizerInput): Promise<LLMResult>;
}