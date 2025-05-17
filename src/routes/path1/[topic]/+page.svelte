<script lang="ts">
  import { BackButton, NextButton, pledgeTemplates } from "$lib";
  import { page } from "$app/stores";
  import PledgeButton from "$lib/PledgeButton.svelte";

  let topic = $page.params.topic;
  let index: number | null = null;
</script>

<main class="max-w-md mx-auto px-6 py-8 text-center">
  <h1 class="text-2xl font-bold mb-2">I pledge to</h1>
  <p class="text-sm text-gray-700 mb-8 max-w-sm mx-auto">
    Select a structured pledge statement<br />
    and customise them specifically.
  </p>

  <div class="space-y-4 flex flex-col items-center">
    {#each pledgeTemplates[topic] as template, i}
      <PledgeButton
        pledgeTemplate={template}
        isSelected={index === i}
        isButtonDisabled={false}
        onclick={() => {
          index = i;
        }}
      />
    {/each}
  </div>

  <div class="flex justify-between mt-12 max-w-md mx-auto">
    <BackButton />
    <NextButton
      urlPath={`/path1/${topic}/${index}`}
      disabledCondition={index === null}
    />
  </div>
</main>
