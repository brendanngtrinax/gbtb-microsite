<script lang="ts">
  import { BackButton, NextButton } from "$lib";
  import { EnvironmentCategories } from "$lib/types";
  import { environmentCategory } from "../../shared";

  let cards = [
    { imagePath: "/undefined.png", description: "Water Conservation" },
    { imagePath: "/undefined.png", description: "Energy Conservation" },
    {
      imagePath: "/undefined.png",
      description: "Waste Reduction and Recycling",
    },
    { imagePath: "/undefined.png", description: "Sustainable Living" },
    { imagePath: "/undefined.png", description: "Environment Care" },
  ];
</script>

<main class="max-w-md mx-auto px-6 py-8 text-center">
  <h1 class="text-2xl font-bold mb-2">Select a category</h1>
  <p class="text-xs text-gray-700 mb-8 max-w-sm mx-auto">
    Create your pledge you wish to convey about your sustainability thoughts.
  </p>

  <div class="grid grid-cols-2 gap-6 justify-center mx-5">
    {#each cards as card, index}
      <button
        on:click={() => ($environmentCategory = index)}
        class={`aspect-square flex flex-col items-center justify-center rounded-[24px] bg-[#F3F3F3] transition
          ${
            $environmentCategory === index
              ? "border-2 border-[#949494]"
              : "border border-[#F3F3F3]"
          }
          hover:border-gray-400
        `}
        style="min-width: 120px;"
      >
        <div
          class="w-10 h-10 rounded-full bg-gray-300 mb-3 flex items-center justify-center"
        >
          <img src={card.imagePath} alt="icon" class="w-6 h-6" />
        </div>
        <p class="text-xxs font-semibold leading-tight">{card.description}</p>
      </button>
    {/each}
  </div>

  <div class="flex justify-between mt-12 max-w-md mx-auto">
    <BackButton />
    <NextButton
      urlPath="/path1/template"
      disabledCondition={$environmentCategory === EnvironmentCategories.NULL}
    />
  </div>
</main>
