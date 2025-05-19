<script lang="ts">
  import { BackButton, NextButton } from "$lib";
  import Navbar from "$lib/navbar.svelte";
  const topics = [
    {
      imagePath: "/photos/energyandwater.png",
      description: "Energy and Water Tour",
      urlPath: "energyandwater",
    },
    {
      imagePath: "/photos/carbonandclimate.png",
      description: "Carbon and Climate Tour",
      urlPath: "carbonandclimate",
    },
    {
      imagePath: "/photos/sensoryeat.png",
      description: "A Sensory Stroll - Can Eat or Not?",
      urlPath: "sensoryeat",
    },
    {
      imagePath: "/photos/sensoryhidden.png",
      description: "A Sensory Stroll - Hidden in Plain Sight",
      urlPath: "sensoryhidden",
    },
    {
      imagePath: "/photos/sustainability.png",
      description: "Race to Sustainability",
      urlPath: "sustainability",
    },
  ];
  let topicSelected = -1;
</script>

<main class="px-4 py-6 flex flex-col items-center">
  <Navbar stepNumber={1} />
  <h1 class="text-2xl text-white font-bold mb-2 text-center">
    Reflect your favourite green moments
  </h1>
  <p class="text-xs text-[#E7AEF6] mb-6 text-center max-w-xl">
    Share your sustainability thoughts and what you have learned at the Gardens.
  </p>
  <ul class="w-full max-w-md space-y-3">
    {#each topics as topic, index}
      <li class="relative">
        {#if topicSelected === index}
          <!-- Checkmark Circle Overlay -->
          <div
            class="absolute top-2 right-2 z-10 w-5 h-5 rounded-full bg-[#530F66] border border-[#E7AEF6] flex items-center justify-center text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              ><path
                fill="currentColor"
                fill-rule="evenodd"
                d="m6 10l-2 2l6 6L20 8l-2-2l-8 8z"
              /></svg
            >
          </div>
        {/if}
        <button
          class="flex items-center w-full text-black no-underline rounded-2xl p-2 shadow transition {topicSelected ===
          index
            ? 'bg-[#EDFCE2]'
            : 'bg-white'}"
          onclick={() => (topicSelected = index)}
        >
          <img
            src={topic.imagePath}
            alt={topic.description}
            class="w-18 h-18 rounded-xl mr-4 object-cover"
          />
          <p class="font-bold text-sm m-0">{topic.description}</p>
        </button>
      </li>
    {/each}
  </ul>
  <div class="flex justify-center mt-12 max-w-md mx-auto gap-2">
    <BackButton />
    <NextButton
      urlPath={`/path2/${topicSelected >= 0 ? topics[topicSelected].urlPath : ""}`}
      disabledCondition={topicSelected === null}
    />
  </div>
</main>
