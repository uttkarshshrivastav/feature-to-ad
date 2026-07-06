import { PipelineStage } from '../enums/pipeline';

export interface PipelineError {
  code: string;
  stage: PipelineStage;
  message: string;
  details?: Record<string, unknown>;
  recoverable: boolean;
  timestamp: number;
}