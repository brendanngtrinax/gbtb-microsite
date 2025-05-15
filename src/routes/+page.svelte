<script>
  import SlidingPanel from "./SlidingPanel.svelte";

  function onclick() {
    // Placeholder — trigger sliding panel or form logic here
    console.log("Button clicked");
  }
</script>

<svelte:head>
  <link
    href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<main>
  <img src="/gbtb_logo.avif" alt="Gardens by the Bay logo" class="logo" />

  <div class="content">
    <h1 class="title">Join our sustainability efforts</h1>
    <p class="subtitle">
      Lorem ipsum dolor sit amet consectetur. Et tincidunt bibendum pulvinar
      diam. Purus lobortis lectus commodo id viverra pellentesque consectetur
      tellus sed. Lectus nibh pellentesque.
    </p>
  </div>

  <div class="input-section">
    <p>How can we address you?</p>
    <input type="text" placeholder="Name you'd like us to use" />
    <button on:click={onclick} aria-label="Submit"> Begin your journey </button>
  </div>

  <SlidingPanel />
</main>

<style>
  :global(body) {
    font-family: "Inter", sans-serif;
    margin: 0;
    padding: 0.5rem;
    background: white;
    color: #222;
  }

  main {
    max-width: 480px;
    margin: 0 auto;
    padding: 2rem 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .title {
    font-size: 1.3rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }

  .logo {
    width: 160px;
    margin-top: 4rem;
    margin-bottom: 1.5rem;
  }

  .content {
    text-align: center;
    margin-bottom: 2rem;
  }

  h1 {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }

  .subtitle {
    font-size: 0.5rem;
    color: #444;
    line-height: 1.5;
    font-weight: 400;
  }

  .input-section {
    width: 100%;
    text-align: left;
    margin-bottom: 2rem;
  }

  .input-section p {
    margin-bottom: 0.5rem;
    font-weight: 400;
  }

  input[type="text"] {
    height: 3rem;
    width: 100%;
    padding: 0.75rem;
    border-radius: 0.75rem;
    border: 0px solid #ccc;
    font-size: 0.5rem;
    margin-bottom: 1rem;
    box-sizing: border-box;
    background-color: #f3f3f3;
  }

  button {
    height: 3rem;
    width: 100%;
    padding: 0.75rem;
    border-radius: 0.75rem;
    background-color: #4f4f4f;
    color: white;
    font-size: 1rem;
    font-weight: 400;
    border: none;
    cursor: pointer;
    transition: background 0.2s ease;
  }

  button:hover {
    background-color: #000;
  }
</style>
