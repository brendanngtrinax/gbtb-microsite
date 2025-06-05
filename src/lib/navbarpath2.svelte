<script>
  import { getContext } from "svelte";
  let { stepNumber } = $props();
</script>

<div class="w-full flex justify-evenly items-center p-8 mb-4">
  <div class="relative flex flex-col items-center">
    <div
      class="w-10 h-10 rounded-full flex items-center justify-center border border-[#FBC7FF] {stepNumber >=
      1
        ? 'bg-[#FBC7FF] text-[#713D80]'
        : 'text-[#FBC7FF]'}"
    >
      <svg
        width="24"
        height="24"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 22 22"
      >
        <path
          fill="currentColor"
          d="M8 8H6V6h2m4 2h-2V6h2m4 2h-2V6h2m-8 6H6v-2h2m4 2h-2v-2h2m4 2h-2v-2h2m-8 6H6v-2h2m4 2h-2v-2h2m4 2h-2v-2h2m2 6H4v-1H3v-1H2V4h1V3h1V2h14v1h1v1h1v14h-1v1h-1m-1-1v-1h1V5h-1V4H5v1H4v12h1v1Z"
        />
      </svg>
    </div>
    <p
      class="absolute top-12 text-xxs text-center w-max {stepNumber >= 1
        ? 'text-white'
        : 'text-[#713D806]'}"
    >
      Select a programme
    </p>
  </div>
  <div class="border w-12 {stepNumber >= 1 ? 'border-[#FBC7FF]' : ''}"></div>
  <div class="relative flex flex-col items-center">
    <div
      class="w-10 h-10 rounded-full flex items-center justify-center border border-[#FBC7FF] {stepNumber >=
      2
        ? 'bg-[#FBC7FF] text-[#713D80]'
        : 'text-[#FBC7FF]'}"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="-2 -2 24 24"
        ><path
          fill="currentColor"
          d="m5.72 14.456l1.761-.508l10.603-10.73a.456.456 0 0 0-.003-.64l-.635-.642a.443.443 0 0 0-.632-.003L6.239 12.635zM18.703.664l.635.643c.876.887.884 2.318.016 3.196L8.428 15.561l-3.764 1.084a.9.9 0 0 1-1.11-.623a.9.9 0 0 1-.002-.506l1.095-3.84L15.544.647a2.215 2.215 0 0 1 3.159.016zM7.184 1.817c.496 0 .898.407.898.909a.903.903 0 0 1-.898.909H3.592c-.992 0-1.796.814-1.796 1.817v10.906c0 1.004.804 1.818 1.796 1.818h10.776c.992 0 1.797-.814 1.797-1.818v-3.635c0-.502.402-.909.898-.909s.898.407.898.91v3.634c0 2.008-1.609 3.636-3.593 3.636H3.592C1.608 19.994 0 18.366 0 16.358V5.452c0-2.007 1.608-3.635 3.592-3.635z"
        /></svg
      >
    </div>
    <p
      class="absolute top-12 text-xxs text-cente w-max {stepNumber >= 2
        ? 'text-white'
        : 'text-[#713D80]'}"
    >
      Reflect your thoughts
    </p>
  </div>
  <div
    class="border w-12 {stepNumber >= 2
      ? 'border-[#FBC7FF]'
      : 'border-[#713D80]'}"
  ></div>
  <div class="relative flex flex-col items-center">
    <div
      class="w-10 h-10 rounded-full flex items-center justify-center border border-[#FBC7FF] {stepNumber >=
      3
        ? 'bg-[#FBC7FF] text-[#713D80]'
        : 'text-[#FBC7FF]'}"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        ><path
          fill="currentColor"
          fill-rule="evenodd"
          d="m9.94 12.646l-2.248-.749c-2.353-.784-3.53-1.176-3.53-1.897c0-.72 1.177-1.113 3.53-1.897l8.513-2.838c1.656-.552 2.484-.828 2.921-.391s.161 1.265-.39 2.92l-2.839 8.514c-.784 2.353-1.176 3.53-1.897 3.53c-.72 0-1.113-1.177-1.897-3.53l-.75-2.247l4.354-4.354a1 1 0 0 0-1.414-1.414z"
          clip-rule="evenodd"
        /></svg
      >
    </div>
    <p
      class="absolute top-12 text-xxs text-center w-max {stepNumber >= 3
        ? 'text-white'
        : 'text-[#713D80]'}"
    >
      Customise and submit
    </p>
  </div>
</div>
