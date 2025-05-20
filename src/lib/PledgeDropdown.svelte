<script lang="ts">
  import { onMount } from "svelte";
  import { fade, slide } from "svelte/transition";
  import { selectedAnswers, answerWidths } from "$lib/stores";
  let { pledgeTemplate } = $props();

  let template = pledgeTemplate.template;
  let answerSize = pledgeTemplate.templateAnswersSize;
  let answers = pledgeTemplate.templateAnswers;
  let choiceIndex = $state(-1);

  function toggleDropdown(index: number) {
    choiceIndex = choiceIndex === index ? -1 : index;
  }

  function selectAnswer(index: number, answerIndex: number) {
    $selectedAnswers[index] = answerIndex;
  }
</script>

<div>
  {#if $answerWidths.length != 0}
    <div
      class="flex text-white text-xxs justify-end mb-3"
      in:fade={{ delay: 300, duration: 200 }}
    >
      <button
        class="flex gap-1"
        onclick={() => {
          $selectedAnswers = Array(template.length).fill(null);
          choiceIndex = -1;
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-3.5"
          viewBox="0 0 24 24"
          ><path
            fill="currentColor"
            d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2v2a8 8 0 1 0 5.135 1.865L15 8V2h6l-2.447 2.447A9.98 9.98 0 0 1 22 12"
          /></svg
        >
        <p>Reset</p>
      </button>
    </div>
    <div
      class="w-full py-4 px-2 rounded-lg text-xxs transition-all duration-150 flex justify-center flex-wrap gap-2 bg-[#78338B] text-white"
      in:fade={{ delay: 300, duration: 200 }}
    >
      {#each Array(template.length + answers.length) as _, i}
        {#if i % 2 === 0}
          <p class="flex-initial">
            {template[Math.floor(i / 2)]}
          </p>
        {:else}
          <div class="relative flex justify-between items-center">
            <button
              aria-label="pledge options"
              class="flex justify-between items-center border-b-1 h-full"
              style="width: {$answerWidths[Math.floor(i / 2)]}px"
              onclick={() => toggleDropdown(Math.floor(i / 2))}
            >
              <p class="truncate">
                {answers[Math.floor(i / 2)][
                  $selectedAnswers[Math.floor(i / 2)]
                ] || ""}
              </p>
              {#if $selectedAnswers[Math.floor(i / 2)] === null}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-2.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    fill-rule="evenodd"
                    d="m6 7l6 6l6-6l2 2l-8 8l-8-8z"
                  />
                </svg>
              {/if}
            </button>
            {#if choiceIndex === Math.floor(i / 2)}
              <!-- Triangle -->
              <div
                class="absolute triangle top-5 left-1/2 -translate-x-1/2 w-8 bg-[#78338B]"
                transition:slide={{ duration: 150 }}
              ></div>
              <ul
                class="absolute top-15 text-white z-10 min-w-max {Math.floor(
                  i / 2
                ) ===
                answers.length - 1
                  ? 'right-0'
                  : 'left-0'}"
                transition:slide={{ duration: 250 }}
              >
                <!-- Each Option -->
                {#each answers[Math.floor(i / 2)] as answer, j}
                  <li
                    class="flex {Math.floor(i / 2) === answers.length - 1
                      ? 'justify-end'
                      : 'justify-start'}"
                  >
                    <button
                      class="text-left px-3 py-1 mb-2 rounded-2xl border-1 min-h-8 border-white {$selectedAnswers[
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
                <li
                  class="flex {Math.floor(i / 2) === answers.length - 1
                    ? 'justify-end'
                    : 'justify-start'}"
                >
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
  {/if}
</div>
