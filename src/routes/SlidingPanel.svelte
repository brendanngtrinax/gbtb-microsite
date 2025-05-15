<script>
  let posts = [
    {
      profilePic: "/profile1.jpg",
      name: "John Doe",
      pledge: "I pledge to reduce plastic waste.",
      bg: "/bg1.jpg",
    },
    {
      profilePic: "/profile2.jpg",
      name: "Jane Smith",
      pledge: "I pledge to plant more trees.",
      bg: "/bg2.jpg",
    },
    {
      profilePic: "/profile3.jpg",
      name: "Alice Johnson",
      pledge: "I pledge to conserve water.",
      bg: "/bg3.jpg",
    },
  ];
</script>

<div class="sliding-panel">
  <h2 class="sliding-panel-title">Featured posts that will inspire you</h2>
  {#snippet panel(profilePicChoice, name, pledge, backgroundChoice)}
    <div class="panel-card">
      <div class="panel-content">
        <img class="avatar" src={profilePicChoice} alt="Profile" />
        <div class="text-content">
          <p class="name">{name}</p>
          <p class="pledge">{pledge}</p>
        </div>
      </div>
      <img
        class="background-pattern"
        src={backgroundChoice}
        alt=""
        aria-hidden="true"
      />
    </div>
  {/snippet}
  <div class="panel-scroll">
    {#each posts as post}
      {@render panel(post.profilePic, post.name, post.pledge, post.bg)}
    {/each}
  </div>
</div>

<style>
  .sliding-panel {
    width: 100%;
    text-align: left;
  }
  .sliding-panel-title {
    font-size: 0.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }
  .panel-card {
    border: 1px solid #ccc;
    border-radius: 1rem;
    padding: 1rem;
    background: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 250px;
    height: 140px;
    box-sizing: border-box;
    overflow: hidden;
    position: relative;
    margin-right: 1rem;
    flex-shrink: 0;
  }

  .panel-content {
    display: flex;
    align-items: center;
    z-index: 1;
  }

  .avatar {
    width: 40px;
    height: 40px;
    border-radius: 999px;
    background: #ddd;
    object-fit: cover;
    margin-right: 0.75rem;
  }

  .text-content {
    display: flex;
    flex-direction: column;
  }

  .name {
    font-weight: 700;
    margin: 0;
    font-size: 0.9rem;
  }

  .pledge {
    margin: 0.25rem 0 0 0;
    font-size: 0.85rem;
    color: #333;
  }

  .background-pattern {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: auto;
    object-fit: cover;
    z-index: 0;
    pointer-events: none;
    opacity: 0.6;
  }
  .panel-scroll {
    display: flex;
    overflow-x: auto;
    padding-bottom: 1rem;
    margin-left: 1rem;
  }
</style>
