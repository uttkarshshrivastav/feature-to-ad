import { ApprovalStatus } from '../enums/approval';

export interface CheckpointResult {
  status: ApprovalStatus;
  editedArtifact?: string;
}