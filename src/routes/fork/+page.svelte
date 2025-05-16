<script lang="ts">
  let selected: number | null = null;

  const cards = [
    {
      imagePath: "/undefined.png",
      url: "/path1",
      description: "Pledge my contribution towards sustainability",
    },
    {
      imagePath: "/undefined.png",
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
  <h1 class="text-2xl font-semibold mb-4">
    What would you like to share with us today?
  </h1>
  <p class="text-xs text-gray-600 mb-8">
    Lorem ipsum dolor sit amet consectetur. Et tincidunt bibendum pulvinar diam.
    Purus lobortis lectus commodo id viverra.
  </p>

  <div class="flex justify-center gap-4 mb-6">
    {#each cards as card, index}
      <button
        on:click={() => (selected = index)}
        class={`w-36 h-36 rounded-2xl flex flex-col items-center justify-center p-4 text-center transition bg-[#F3F3F3] ${
          selected === index
            ? "border-2 border-[#949494]"
            : "border border-[#F3F3F3]"
        }`}
      >
        <div
          class="w-10 h-10 rounded-full bg-gray-300 mb-2 flex items-center justify-center"
        >
          <img src={card.imagePath} alt="icon" class="w-6 h-6" />
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
        : "bg-[#4f4f4f] hover:bg-black active:opacity-80 active:scale-95"
    }`}
  >
    Start pledging
  </button>
</main>
