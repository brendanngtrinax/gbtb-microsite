<script>
  import SlidingPanel from "./SlidingPanel.svelte";
  import { name } from "$lib/stores";
  import { goto } from "$app/navigation";
</script>

<svelte:head>
  <link
    href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<main class="px-4 font-['Inter'] text-white">
  <img
    src="/gbtb_logo.png"
    alt="Gardens by the Bay logo"
    class="w-20 mt-8 mb-6 mx-auto"
  />

  <div class="text-center mb-8">
    <h1 class="text-xl font-semibold mb-4">Join our sustainability efforts</h1>
    <p class="text-xs text-[#E7AEF6] leading-relaxed font-normal">
      Pledge one small change you have made towards an eco-driven lifestyle or
      share a sustainable moment at Gardens by the Bay that inspired you!
    </p>
  </div>

  <div class="w-full text-left mb-10">
    <p class="mb-2 font-normal">How can we address you?</p>
    <input
      type="text"
      placeholder="Name you'd like us to use"
      class="w-full h-12 px-3 py-2 rounded-xl text-xs text-[#414141] bg-gray-100 mb-4 border border-transparent focus:outline-none focus:ring-2 focus:ring-gray-300"
      bind:value={$name}
    />
    <button
      onclick={() => goto("/fork")}
      class="w-full h-12 bg-[#9021DA] text-white text-base font-normal rounded-xl hover:bg-black active:opacity-80 active:scale-95 transition duration-150 text-center flex items-center justify-center"
      aria-label="Submit"
    >
      Let My Sustainability Sprout
    </button>
  </div>

  <SlidingPanel />
</main>
