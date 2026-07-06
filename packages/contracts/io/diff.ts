export interface DiffInput {
  startCommit: string;
  endCommit: string;
}

export interface DiffOutput {
  summaries: FeatureSummary[];
  demoSuggestions: DemoSuggestion[];
}

export interface FeatureSummary {
  id: string;
  title: string;
  description: string;
  demoSuggestion: string;
}

export interface DemoSuggestion {
  featureId: string;
  steps: string[];
  expectedOutcome: string;
}