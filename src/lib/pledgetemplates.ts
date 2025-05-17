import type { PledgeTemplate } from "$lib/types";

const pledgeTemplates: Record<string, PledgeTemplate[]> = {
  water: [
    {
      template: ["I pledge to", "water by"],
      templateAnswersSize: ["small", "large"],
      templateAnswers: [
        ["reduce", "conserve", "protect"],
        [
          "taking shorter showers",
          "reusing water",
          "turning off taps while washing hands",
        ],
      ],
    },
    {
      template: ["I will make sure to", "water by"],
      templateAnswersSize: ["small", "large"],
      templateAnswers: [
        ["reduce", "conserve", "protect"],
        [
          "taking shorter showers",
          "reusing water",
          "turning off taps while washing hands",
        ],
      ],
    },
    {
      template: ["I choose to", "to", "because every drop"],
      templateAnswersSize: ["small", "small", "small"],
      templateAnswers: [
        ["reduce", "conserve", "protect"],
        [
          "taking shorter showers",
          "reusing water",
          "turning off taps while washing hands",
        ],
        ["matters", "counts", "is precious"],
      ],
    },
    {
      template: ["Saving water", "so I will"],
      templateAnswersSize: ["medium", "medium"],
      templateAnswers: [
        ["is important", "is essential", "is a priority"],
        [
          "take shorter showers",
          "reuse water",
          "turn off taps while washing hands",
        ],
      ],
    },
    {
      template: ["I will commit to", "water by"],
      templateAnswersSize: ["medium", "medium"],
      templateAnswers: [
        ["reduce", "conserve", "protect"],
        [
          "taking shorter showers",
          "reusing water",
          "turning off taps while washing hands",
        ],
      ],
    },
  ],
};

export default pledgeTemplates;
