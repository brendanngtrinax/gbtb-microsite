<script lang="ts">
  let posts = [
    {
      profilePic: 0,
      name: "John Doe",
      pledge: "I pledge to reduce plastic waste.",
      bg: 0,
    },
    {
      profilePic: 1,
      name: "Jane Smith",
      pledge: "I pledge to plant more trees.",
      bg: 1,
    },
    {
      profilePic: 2,
      name: "Alice Johnson",
      pledge: "I pledge to conserve water.",
      bg: 2,
    },
    {
      profilePic: 0,
      name: "Bob Brown",
      pledge: "I pledge to use public transport.",
      bg: 0,
    },
    {
      profilePic: 1,
      name: "Charlie Davis",
      pledge: "I pledge to recycle more.",
      bg: 1,
    },
    {
      profilePic: 2,
      name: "Diana Evans",
      pledge: "I pledge to support local farmers.",
      bg: 2,
    },
  ];

  let profilePics = ["/profile.png", "/profile.png", "/profile.png"];
  let backgrounds = ["/bg.png", "/bg.png", "/bg.png"];
</script>

<div class="w-full text-left">
  <h2 class="text-xs font-bold mb-4">Featured posts that will inspire you</h2>

  {#snippet panel(
    profilePicChoice: number,
    name: string,
    pledge: string,
    backgroundChoice: number
  )}
    <div
      class="relative flex-shrink-0 w-[250px] h-[140px] bg-white rounded-3xl border border-gray-300 p-4 mr-4 overflow-hidden"
    >
      <div class="relative z-10 flex items-center">
        <img
          class="w-10 h-10 rounded-full object-cover bg-gray-300 mr-3"
          src={profilePics[profilePicChoice]}
          alt="Profile"
        />
        <div class="flex flex-col">
          <p class="text-sm font-bold">{name}</p>
          <p class="text-xs text-gray-700 mt-1">{pledge}</p>
        </div>
      </div>

      <div
        class="absolute bottom-1 left-1/2 transform -translate-x-1/2 flex items-center justify-center w-60"
      >
        <img
          class="opacity-60 z-0 pointer-events-none"
          src={backgrounds[backgroundChoice]}
          alt="background of gbtb"
          aria-hidden="true"
        />
      </div>
    </div>
  {/snippet}

  <div class="overflow-x-auto px-4 pb-4">
    <div class="grid grid-flow-col auto-cols-max grid-rows-2 gap-4">
      {#each posts as post, i}
        <div class={i % 2 === 1 ? "translate-x-1/2" : ""}>
          {@render panel(post.profilePic, post.name, post.pledge, post.bg)}
        </div>
      {/each}
    </div>
  </div>
</div>
