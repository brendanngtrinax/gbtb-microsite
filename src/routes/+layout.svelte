<script>
  let { children } = $props();
  import "../app.css";
</script>

<img
  src="/background.png"
  alt="Background"
  class="absolute inset-0 w-full h-full object-cover z-[-10]"
/>

{@render children()}
