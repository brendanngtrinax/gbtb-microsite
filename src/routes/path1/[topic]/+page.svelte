<script lang="ts">
  import { onMount } from "svelte";
  import { BackButton, NextButton, pledgeTemplates } from "$lib";
  import { page } from "$app/stores";
  import PledgeButton from "$lib/PledgeButton.svelte";
  import Navbar from "$lib/navbar.svelte";

  let topic = $page.params.topic;
  let index: number | null = null;
</script>

<main class="max-w-md mx-auto px-6 py-8 text-center">
  <Navbar stepNumber={2} />
  <h1 class="text-2xl text-white font-bold mb-2">Get creative</h1>
  <p class="text-sm text-[#E7AEF6] mb-8 max-w-sm mx-auto">
    Personalise your pledge that contemplates your sustainability journey.
  </p>

  <div class="space-y-4 flex flex-col items-center">
    {#each pledgeTemplates[topic] as template, i}
      <PledgeButton
        pledgeTemplate={template}
        isSelected={index === i}
        isButtonDisabled={false}
        onclick={() => (index = i)}
        refCallback={(el: HTMLElement) => {
          let answerWidths: string[] = [];
          let answerWidthElements = el.querySelectorAll(".answer-width");
          answerWidthElements.forEach((element, j) => {
            answerWidths.push(
              Math.floor(element.getBoundingClientRect().width).toString()
            );
          });
          console.log("answerWidths", answerWidths);
          localStorage.setItem("answerWidths", JSON.stringify(answerWidths));
        }}
      />
    {/each}
  </div>

  <div class="flex justify-center mt-12 max-w-md mx-auto gap-2">
    <BackButton />
    <NextButton
      urlPath={`/path1/${topic}/${index}`}
      disabledCondition={index === null}
    />
  </div>
</main>
