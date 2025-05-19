<script lang="ts">
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
      window.location.href = cards[selected].url;
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
        on:click={() => (selected = index)}
        class={`w-36 h-36 rounded-2xl flex flex-col items-center justify-center p-4 text-center transition] ${
          selected === index
            ? "border-2 border-[#949494] bg-[#EDFCE2]"
            : "border border-[#F3F3F3] bg-[#F3F3F3]"
        }`}
      >
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
    on:click={handleSubmit}
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
