<script>
  import { name } from "../shared.js";
  import SlidingPanel from "./SlidingPanel.svelte";
</script>

<svelte:head>
  <link
    href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<main
  class="max-w-[480px] mx-auto px-4 py-8 font-['Inter'] text-[#222] bg-white"
>
  <img
    src="/gbtb_logo.png"
    alt="Gardens by the Bay logo"
    class="w-40 mt-16 mb-6 mx-auto"
  />

  <div class="text-center mb-8">
    <h1 class="text-xl font-semibold mb-4">Join our sustainability efforts</h1>
    <p class="text-xs text-[#444] leading-relaxed font-normal">
      Lorem ipsum dolor sit amet consectetur. Et tincidunt bibendum pulvinar
      diam. Purus lobortis lectus commodo id viverra pellentesque consectetur
      tellus sed. Lectus nibh pellentesque.
    </p>
  </div>

  <div class="w-full text-left mb-10">
    <p class="mb-2 font-normal">How can we address you?</p>
    <input
      type="text"
      placeholder="Name you'd like us to use"
      class="w-full h-12 px-3 py-2 rounded-xl text-xs bg-gray-100 mb-4 border border-transparent focus:outline-none focus:ring-2 focus:ring-gray-300"
      bind:value={$name}
    />
    <a
      on:click={() => console.log("name:", $name)}
      href="/fork"
      class="w-full h-12 bg-[#4f4f4f] text-white text-base font-normal rounded-xl hover:bg-black active:opacity-80 active:scale-95 transition duration-150 text-center flex items-center justify-center"
      aria-label="Submit"
    >
      Begin your journey
    </a>
  </div>

  <SlidingPanel />
</main>
