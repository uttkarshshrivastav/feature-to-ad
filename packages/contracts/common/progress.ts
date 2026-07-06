import { PipelineStage } from '../enums/pipeline';

export interface ProgressEvent {
  stage: PipelineStage;
  step: string;
  progress: number;
  message?: string;
  timestamp: number;
}