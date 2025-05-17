<script lang="ts">
  let { urlPath, disabledCondition } = $props();
</script>

<button
  onclick={() => (window.location.href = urlPath)}
  disabled={disabledCondition}
  class="w-38 h-12 rounded-lg text-white font-norma transition flex items-center justify-center gap-1
  {disabledCondition
    ? 'cursor-not-allowed bg-[#949494]'
    : 'bg-[#9021DA] active:opacity-80 active:scale-95'}"
  aria-label="Go next"
>
  <p class="pl-2">Next</p>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    ><path
      fill="currentColor"
      fill-rule="evenodd"
      d="m9.005 4l8 8l-8 8L7 18l6.005-6L7 6z"
    /></svg
  >
</button>
