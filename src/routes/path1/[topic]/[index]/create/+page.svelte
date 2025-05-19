<script lang="ts">
  import { onMount } from "svelte";
  import { page } from "$app/state";
  import { BackButton, pledgeTemplates } from "$lib";
  import { avatarImgPaths, backgroundImgPaths } from "$lib/shared";
  import Card from "$lib/Card.svelte";
  import PostButton from "$lib/PostButton.svelte";

  let topic = page.params.topic;
  let index = page.params.index;

  let selectedPledge = pledgeTemplates[topic][parseInt(index)];
  let total =
    selectedPledge.template.length + selectedPledge.templateAnswers.length;

  let selectedAnswers = [];
  let name = "";
  let pledge = "";
  onMount(() => {
    selectedAnswers = JSON.parse(
      localStorage.getItem("selectedAnswers") || "[]"
    );
    for (let i = 0; i < total; i++) {
      let j = Math.floor(i / 2);
      if (i % 2 === 0) {
        pledge += selectedPledge.template[j];
      } else {
        pledge += selectedPledge.templateAnswers[j][selectedAnswers[j]];
      }
      if (i < total - 1) {
        pledge += " ";
      } else {
        pledge += ".";
      }
    }
    name = localStorage.getItem("name") || "";
  });

  let selectedAvatar = 0;
  let selectedBackground = 0;

  let scrollContainer: HTMLUListElement;
  let scrollTimeout: ReturnType<typeof setTimeout>;

  function handleScroll() {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      const containerCenter =
        scrollContainer.scrollLeft + scrollContainer.offsetWidth / 2;

      let closestIndex = 0;
      let closestDistance = Infinity;

      scrollContainer.querySelectorAll("li").forEach((li, index) => {
        const liCenter = li.offsetLeft + li.offsetWidth / 2;
        const distance = Math.abs(containerCenter - liCenter);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      selectedBackground = closestIndex;
    }, 100);
  }
</script>

<main class="bg-[#50046B] min-h-screen px-4 py-6 text-white">
  <div class="w-full flex flex-col items-center mb-8">
    <h1 class="text-2xl font-semibold mb-4">Customise your pledge to life</h1>
    <p class="text-xs text-[#E7AEF6] mb-8 text-center">
      Select an avatar and frame design that will help share your voice and make
      a difference.
    </p>
  </div>

  <!-- Avatar Selection -->
  <div class="mb-8">
    <h2 class="text-xs text-white mb-2">Select your avatar</h2>
    <ul class="flex gap-3 overflow-x-auto py-2">
      {#each avatarImgPaths as avatarImgPath, index}
        <li class="shrink-0 relative">
          {#if selectedAvatar === index}
            <!-- Checkmark Circle Overlay -->
            <div
              class="absolute -top-1 -right-1 z-10 w-6 h-6 rounded-full bg-[#530F66] border border-[#E7AEF6] flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
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
            class="w-20 rounded-full flex items-center justify-center border-2 transition-all duration-200
                {selectedAvatar === index
              ? 'border-white'
              : 'border-transparent'}"
            onclick={() => (selectedAvatar = index)}
          >
            <img
              src={avatarImgPath}
              alt="icon"
              class="w-full h-full object-cover rounded-full"
            />
          </button>
        </li>
      {/each}
    </ul>
  </div>

  <!-- Frame Design Selection -->
  <div>
    <h2 class="text-xs text-white mb-2">Select your frame design</h2>
    <ul
      bind:this={scrollContainer}
      onscroll={handleScroll}
      class="flex gap-1 overflow-x-auto snap-x snap-mandatory scroll-smooth scroll-pt-2 pb-2"
    >
      {#each backgroundImgPaths as backgroundImgPath, index}
        <li class="snap-center">
          <button>
            <Card
              {name}
              {pledge}
              avatarIndex={selectedAvatar}
              bgIndex={index}
              isSelected={selectedBackground === index}
            />
          </button>
        </li>
      {/each}
    </ul>
  </div>
  <div class="flex justify-center mt-12 max-w-md mx-auto gap-2">
    <BackButton />
    <PostButton disabledCondition={false} onclick={() => {}} />
  </div>
</main>
