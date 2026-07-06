import { ArtifactType } from '../enums/artifact';

export interface Artifact {
  id: string;
  type: ArtifactType;
  path: string;
  metadata: Record<string, unknown>;
  createdAt: number;
}