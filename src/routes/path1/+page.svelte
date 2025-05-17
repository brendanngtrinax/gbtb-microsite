<script lang="ts">
  import { BackButton, NextButton } from "$lib";
  import { EnvironmentCategories } from "$lib/types";
  import { environmentCategory } from "$lib/shared";
  let urlPath = "";

  let cards = [
    {
      imagePath: "/water.png",
      description: "Water Conservation",
      urlPath: "water",
    },
    {
      imagePath: "/energy.png",
      description: "Energy Conservation",
      urlPath: "energy",
    },
    {
      imagePath: "/waste.png",
      description: "Waste Reduction and Recycling",
      urlPath: "waste",
    },
    {
      imagePath: "/sustainable.png",
      description: "Sustainable Living",
      urlPath: "sustainable",
    },
    {
      imagePath: "/environment.png",
      description: "Environment Care",
      urlPath: "environment",
    },
  ];
</script>

<main class="max-w-md mx-auto px-6 py-8 text-center">
  <h1 class="text-2xl text-white font-bold mb-2">Craft your story</h1>
  <p class="text-xs text-[#E7AEF6] mb-8 max-w-sm mx-auto">
    How will you pledge for a better tomorrow that reflects your commitment?
  </p>

  <div class="grid grid-cols-2 gap-4 justify-center mx-5">
    {#each cards as card, index}
      <button
        on:click={() => {
          $environmentCategory = index;
          urlPath = card.urlPath;
        }}
        class={`aspect-square flex flex-col items-center justify-center rounded-[24px] transition
          ${
            $environmentCategory === index
              ? "border-2 border-[#949494] bg-[#EDFCE2]"
              : "border border-[#F3F3F3] bg-[#F3F3F3] "
          }
          hover:border-gray-400
        `}
      >
        <div
          class="w-10 h-10 rounded-full mb-3 flex items-center justify-center"
        >
          <img src={card.imagePath} alt="icon" class="w-10 h-10" />
        </div>
        <p class="text-xxs font-semibold leading-tight">{card.description}</p>
      </button>
    {/each}
  </div>

  <div class="flex justify-center mt-12 max-w-md mx-auto gap-2">
    <BackButton />
    <NextButton
      urlPath="/path1/{urlPath}"
      disabledCondition={$environmentCategory === EnvironmentCategories.NULL}
    />
  </div>
</main>
