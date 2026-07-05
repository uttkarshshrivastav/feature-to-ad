export interface RefinementInput {
  rawVideoPath: string;
  editInstructions: EditInstruction[];
}

export interface RefinementOutput {
  refinedVideoPath: string;
  editsApplied: EditInstruction[];
}

export interface EditInstruction {
  type: 'trim' | 'speed' | 'freeze' | 'remove';
  startMs: number;
  endMs?: number;
  factor?: number;
}