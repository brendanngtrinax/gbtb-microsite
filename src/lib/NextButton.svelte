<script lang="ts">
  let { urlPath, disabledCondition } = $props();
</script>

<button
  onclick={() => (window.location.href = urlPath)}
  disabled={disabledCondition}
  class="w-42 h-12 rounded-xl border border-black text-white text-base font-normal hover:bg-gray-100 transition
  {disabledCondition
    ? 'cursor-not-allowed bg-[#949494]'
    : 'bg-[#4f4f4f] hover:bg-black active:opacity-80 active:scale-95'}"
  aria-label="Go next"
>
  Next
</button>
