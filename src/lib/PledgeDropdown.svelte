<script lang="ts">
  import type { PledgeTemplate } from "$lib/types";
  let {
    pledgeTemplate,
    isSelected,
    isButtonDisabled,
    isDropdownDisabled,
    onclick,
  } = $props();
  let template = pledgeTemplate.template;
  let answerSize = pledgeTemplate.templateAnswersSize;
  let answers = pledgeTemplate.templateAnswers;
  let selectedAnswers = new Array(answers.length).fill(null);
</script>

<button
  disabled={isButtonDisabled}
  class="w-full py-4 px-2 rounded-lg text-xxs transition-all duration-150 border-2 flex justify-center flex-wrap gap-2
  {isSelected
    ? 'border-gray-700 bg-[#78338B] shadow-md text-white'
    : 'border-transparent bg-[#F3F3F3]'}"
  {onclick}
  aria-label="Pledge Button"
>
  {#each Array(template.length + answers.length) as _, i}
    {#if i % 2 === 0}
      <p class="flex-initial">{template[Math.floor(i / 2)]}</p>
    {:else}
      <div
        class="border-b-1"
        style="flex-grow: {answerSize[Math.floor(i / 2)] === 'small'
          ? 1
          : answerSize[Math.floor(i / 2)] === 'medium'
            ? 2
            : 3}"
      ></div>
    {/if}
  {/each}
</button>
