<script lang="ts">
  let { pledgeTemplate, selectedAnswers = $bindable() } = $props();
  let template = pledgeTemplate.template;
  let answerSize = pledgeTemplate.templateAnswersSize;
  let answers = pledgeTemplate.templateAnswers;
  let choiceIndex = $state(0);

  function toggleDropdown(index: number) {
    choiceIndex = choiceIndex === index ? -1 : index;
  }

  function selectAnswer(index: number, answerIndex: number) {
    selectedAnswers[index] = answerIndex;
  }
</script>

<div
  class="w-full py-4 px-2 rounded-lg text-xxs transition-all duration-150 flex justify-center flex-wrap gap-2 bg-[#78338B] text-white"
>
  {#each Array(template.length + answers.length) as _, i}
    {#if i % 2 === 0}
      <p class="flex-initial">{template[Math.floor(i / 2)]}</p>
    {:else}
      <div
        class="relative flex justify-between items-center"
        style="flex-grow: {answerSize[Math.floor(i / 2)] === 'small'
          ? 1
          : answerSize[Math.floor(i / 2)] === 'medium'
            ? 2
            : 3}"
      >
        <button
          aria-label="pledge options"
          class="w-full flex justify-between items-center border-b-1"
          onclick={() => toggleDropdown(Math.floor(i / 2))}
        >
          <p>
            {answers[Math.floor(i / 2)][selectedAnswers[Math.floor(i / 2)]] ||
              ""}
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-3 h-3"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              fill-rule="evenodd"
              d="m6 7l6 6l6-6l2 2l-8 8l-8-8z"
            />
          </svg>
        </button>
        {#if choiceIndex === Math.floor(i / 2)}
          <!-- Triangle -->
          <div
            class="absolute triangle top-5 left-1/2 -translate-x-1/2 w-8 bg-[#78338B]"
          ></div>
          <ul class="absolute top-15 text-white z-10">
            <!-- Each Option -->
            {#each answers[Math.floor(i / 2)] as answer, j}
              <li>
                <button
                  class="text-left px-3 py-1 mb-2 rounded-2xl border-1 min-h-8 border-white {selectedAnswers[
                    Math.floor(i / 2)
                  ] === j
                    ? 'bg-white text-black'
                    : 'bg-[#530F66]'}"
                  onclick={() => selectAnswer(Math.floor(i / 2), j)}
                >
                  {answer}
                </button>
              </li>
            {/each}
            <li>
              <button
                aria-label="close dropdown"
                class="text-left px-2 py-1 rounded-full border-1 h-8 border-white bg-[#530F66] rotate-180"
                onclick={() => (choiceIndex = -1)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-3 h-3"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    fill-rule="evenodd"
                    d="m6 7l6 6l6-6l2 2l-8 8l-8-8z"
                  />
                </svg>
              </button>
            </li>
          </ul>
        {/if}
      </div>
    {/if}
  {/each}
</div>
