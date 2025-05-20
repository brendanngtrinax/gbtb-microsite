<script>
  let { children } = $props();
  import "../app.css";
</script>

<!-- Background image container -->
<div
  class="fixed bottom-0 left-0 w-full h-full z-[-10] bg-[#530F66] overflow-hidden"
>
  <img
    src="/background.png"
    alt="background"
    class="fixed bottom-0 w-full object-cover"
  />
</div>

<!-- Foreground content (normal stacking) -->
<div class="relative z-0 min-h-screen">
  {@render children()}
</div>
