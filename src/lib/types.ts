export enum EnvironmentCategories {
  WaterConservation,
  EnergyConservation,
  WasteReductionAndRecycling,
  SustainableLiving,
  EnvironmentCare,
  NULL,
}

export type PledgeTemplate = {
  template: string[]; // ["I pledge to", "water by"]
  templateAnswersSize: string[]; // ["small", "medium", "large"]
  templateAnswers: string[][]; // [["reduce", "conserve", "protect"], ["taking shorter showers", "reusing water", "turning off taps while washing hands"]]
};
