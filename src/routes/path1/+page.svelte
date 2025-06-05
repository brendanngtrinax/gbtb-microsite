<script lang="ts">
  import { BackButton, NextButton } from "$lib";
  import { EnvironmentCategories } from "$lib/types";
  import { environmentCategory } from "$lib/stores";
  import Navbar from "$lib/navbarpath1.svelte";

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
        onclick={() => {
          $environmentCategory = index;
          urlPath = topic.urlPath;
        }}
        class={`relative aspect-square flex flex-col items-center justify-center rounded-[24px] transition
          ${
            $environmentCategory === index
              ? "border-2 border-[#949494] bg-[#EDFCE2]"
              : "border border-[#F3F3F3] bg-[#F3F3F3] "
          }
          hover:border-gray-400
        `}
      >
        {#if $environmentCategory === index}
          <svg
            class="absolute top-2 right-2 w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            ><path
              fill="#530F66"
              d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m-2 15l-5-5l1.41-1.41L10 14.17l7.59-7.59L19 8z"
            /></svg
          >
        {/if}
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
