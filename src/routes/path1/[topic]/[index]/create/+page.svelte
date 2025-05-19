<script lang="ts">
  import { getContext, onMount } from "svelte";
  import { page } from "$app/state";
  import { BackButton, pledgeTemplates } from "$lib";
  import { avatarImgPaths, backgroundImgPaths } from "$lib/shared";
  import Card from "$lib/Card.svelte";
  import PostButton from "$lib/PostButton.svelte";
  import Navbar from "$lib/navbar.svelte";
  import type { Writable } from "svelte/store";
  import { goto } from "$app/navigation";

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

  let isPosted = false;
  function onclick() {
    console.log("name", name);
    console.log("pledge", pledge);
    console.log("avatar", selectedAvatar);
    console.log("background", selectedBackground);
    isPosted = true;
    setTimeout(() => {
      goto("/");
    }, 5000);
  }
</script>

<main class="bg-[#50046B] min-h-screen px-4 py-6">
  <Navbar stepNumber={3} />
  <div class="w-full flex flex-col items-center mb-8">
    <h1 class="text-2xl text-white font-semibold mb-4">
      Customise your pledge to life
    </h1>
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
              class="absolute -top-1 -right-1 z-10 w-6 h-6 rounded-full bg-[#530F66] border border-[#E7AEF6] flex items-center justify-center text-white"
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
    <PostButton disabledCondition={false} {onclick} />
  </div>
  {#if isPosted}
    <!-- show the modal -->
    <div
      class="fixed z-20 inset-0 bg-black/50 flex items-center justify-center"
    >
      <div
        class="bg-linear-to-b from-[#520C5E] to-[#E93165] w-[90%] max-w-lg h-100 rounded-3xl shadow-lg overflow-hidden flex flex-col"
      >
        <!-- Top section -->
        <div
          class="h-full flex flex-col items-center justify-around pt-8 px-6 text-center"
        >
          <div class="">
            <img
              src={avatarImgPaths[selectedAvatar]}
              alt="avatar"
              class="w-24"
            />
          </div>
          <h2 class="text-md font-semibold text-white">
            Thank you for making a difference.<br />
            We're preparing your message to inspire many!
          </h2>
        </div>

        <!-- Bottom section -->
        <div
          class="relative h-1/2 w-full flex flex-col justify-center items-center bg-[#D78792]"
        >
          <img
            src="/masks/dragonfly.png"
            alt="dragonfly"
            class="absolute h-full right-0"
          />
          <div class="w-full flex items-center justify-between px-8">
            <div class="flex items-center justify-center text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                ><g
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  ><path d="M12 13V2l8 4l-8 4" /><path
                    d="M20.561 10.222a9 9 0 1 1-12.55-5.29"
                  /><path d="M8.002 9.997a5 5 0 1 0 8.9 2.02" /></g
                ></svg
              >
              <p class="text-xs text-white ml-2">Green Plan 2030</p>
            </div>
            <div class="rounded-full bg-[#7C3A43] px-3 py-1.5">
              <p class="text-xxs text-white">Fun facts</p>
            </div>
          </div>
          <div class="w-full justify-start">
            <p class="text-xxs text-white mt-2 px-12 w-[80%]">
              Singapore's Green Plan 2030 sets out green targets, including
              reducing household water consumption to 130 litres per person per
              day.
            </p>
          </div>
        </div>
      </div>
    </div>
  {/if}
</main>
