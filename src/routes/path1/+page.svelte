<script lang="ts">
  import { BackButton, NextButton } from "$lib";
  import { EnvironmentCategories } from "$lib/types";
  import { environmentCategory } from "$lib/stores";
  import Navbar from "$lib/navbar.svelte";

  let urlPath = "";

  const topics = [
    {
      imagePath: "/topics/water.png",
      description: "Water Conservation",
      urlPath: "water",
    },
    {
      imagePath: "/topics/energy.png",
      description: "Energy Conservation",
      urlPath: "energy",
    },
    {
      imagePath: "/topics/waste.png",
      description: "Waste Reduction and Recycling",
      urlPath: "waste",
    },
    {
      imagePath: "/topics/sustainable.png",
      description: "Sustainable Living",
      urlPath: "sustainable",
    },
    {
      imagePath: "/topics/environment.png",
      description: "Environment Care",
      urlPath: "environment",
    },
  ];
</script>

<main class="max-w-md mx-auto px-6 py-8 text-center">
  <Navbar stepNumber={1} />
  <h1 class="text-2xl text-white font-bold mb-2">Craft your story</h1>
  <p class="text-xs text-[#E7AEF6] mb-8 max-w-sm mx-auto">
    How will you pledge for a better tomorrow that reflects your commitment?
  </p>

  <div class="grid grid-cols-2 gap-4 justify-center mx-5">
    {#each topics as topic, index}
      <button
        on:click={() => {
          $environmentCategory = index;
          urlPath = topic.urlPath;
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
          <img src={topic.imagePath} alt="icon" class="w-10 h-10" />
        </div>
        <p class="text-xxs font-semibold leading-tight">{topic.description}</p>
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
