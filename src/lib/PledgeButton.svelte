<script lang="ts">
  let { pledgeTemplate, isSelected, isButtonDisabled, onclick, refCallback } =
    $props();
  let template = pledgeTemplate.template;
  let answerSize = pledgeTemplate.templateAnswersSize;
  let answers = pledgeTemplate.templateAnswers;

  let buttonElement: HTMLElement;
</script>

<button
  bind:this={buttonElement}
  disabled={isButtonDisabled}
  class="w-full py-4 px-2 rounded-lg text-xxs transition-all duration-150 flex justify-center flex-wrap gap-2 border-1
  {isSelected ? 'bg-[#78338B] text-white border-[#CB4AEE]' : 'bg-[#F3F3F3]'}"
  onclick={() => {
    onclick();
    refCallback(buttonElement);
  }}
  aria-label="Pledge Button"
>
  {#each Array(template.length + answers.length) as _, i}
    {#if i % 2 === 0}
      <p class="flex-initial">{template[Math.floor(i / 2)]}</p>
    {:else}
      <div
        class="border-b-1 answer-width"
        style="flex-grow: {answerSize[Math.floor(i / 2)] === 'small'
          ? 1
          : answerSize[Math.floor(i / 2)] === 'medium'
            ? 2
            : 3}"
      ></div>
    {/if}
  {/each}
</button>
