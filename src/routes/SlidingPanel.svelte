<script lang="ts">
  import Card from "$lib/Card.svelte";

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
      bg: 0,
    },
    {
      profilePic: 0,
      name: "Bob Brown",
      pledge: "I pledge to use public transport.",
      bg: 1,
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
</script>

<div class="w-full text-left">
  <h2 class="text-xs font-bold mb-4">Featured posts that will inspire you</h2>

  <div class="overflow-x-auto px-4 pb-4">
    <div class="grid grid-flow-col auto-cols-max grid-rows-2">
      {#each posts as post, i}
        <div class={i % 2 === 1 ? "translate-x-1/2" : ""}>
          <Card
            name={post.name}
            pledge={post.pledge}
            avatarIndex={post.profilePic}
            bgIndex={post.bg}
            isSelected={false}
          />
        </div>
      {/each}
    </div>
  </div>
</div>
