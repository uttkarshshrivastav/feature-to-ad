import { AssemblyInput, AssemblyOutput } from '../io/assembly';
import { StageStatus } from './StageStatus';

export interface AssemblyState {
  status: StageStatus;
  input?: AssemblyInput;
  output?: AssemblyOutput;
  startedAt?: string;
  completedAt?: string;
  error?: string;
}