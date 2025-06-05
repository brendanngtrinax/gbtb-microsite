<script lang="ts">
  import { goto } from "$app/navigation";

  let selected: number | null = null;

  const cards = [
    {
      imagePath: "/paths/pledge_icon.png",
      url: "/path1",
      description: "Pledge my contribution towards sustainability",
    },
    {
      imagePath: "/paths/sustainability_icon.png",
      url: "/path2",
      description: "Share my sustainability experience at the Gardens",
    },
  ];

  function handleSubmit() {
    if (selected !== null) {
      goto(cards[selected].url);
    }
  }
</script>

<main class="max-w-md mx-auto px-4 py-8 text-center mt-20">
  <h1 class="text-2xl text-white font-semibold mb-4">
    What would you like to share with us today?
  </h1>
  <p class="text-xs text-[#E7AEF6] mb-8">
    Make a difference at Gardens by the Bay and decide how you want to share
    your journey.
  </p>

  <div class="flex justify-center gap-4 mb-6">
    {#each cards as card, index}
      <button
        onclick={() => (selected = index)}
        class={`relative w-36 h-36 rounded-2xl flex flex-col items-center justify-center p-4 text-center transition] ${
          selected === index
            ? "border-2 border-[#949494] bg-[#EDFCE2]"
            : "border border-[#F3F3F3] bg-[#F3F3F3]"
        }`}
      >
        {#if selected === index}
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
          class="w-10 h-10 rounded-full mb-2 flex items-center justify-center"
        >
          <img src={card.imagePath} alt="icon" class="w-10 h-10" />
        </div>
        <p class="text-xxs font-semibold">{card.description}</p>
      </button>
    {/each}
  </div>

  <button
    onclick={handleSubmit}
    disabled={selected === null}
    class={`w-[90%] h-12 text-white text-base font-normal rounded-xl transition ${
      selected === null
        ? "bg-[#949494] cursor-not-allowed"
        : "bg-[#9021DA] hover:bg-black active:opacity-80 active:scale-95"
    }`}
  >
    Let's Explore
  </button>
</main>
