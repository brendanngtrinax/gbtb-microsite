<script lang="ts">
  import { page } from "$app/state";
  import {
    pledgeTemplates,
    BackButton,
    NextButton,
    PledgeDropdown,
  } from "$lib";
  import Navbar from "$lib/navbar.svelte";
  import { selectedAnswers, answerWidths } from "$lib/stores";
  let topic = page.params.topic;
  let index = page.params.index;
  let pledgeTemplate = pledgeTemplates[topic][parseInt(index)];

  $selectedAnswers = Array(pledgeTemplate.templateAnswers.length).fill(null);

  let livePledgeHtml: string = $derived.by(() => {
    let result = "";
    let total =
      pledgeTemplate.template.length + pledgeTemplate.templateAnswers.length;
    for (let i = 0; i < total; i++) {
      if (i % 2 === 0) {
        result +=
          '<span class="text-white">' +
          pledgeTemplate.template[Math.floor(i / 2)];
      } else {
        if ($selectedAnswers[Math.floor(i / 2)] === null) {
          result += "...";
          break;
        }
        result +=
          '<span class="text-[#FF79A0]">' +
          pledgeTemplate.templateAnswers[Math.floor(i / 2)][
            $selectedAnswers[Math.floor(i / 2)]
          ];
      }
      if (i === total - 1) {
        result += "</span>.";
      } else {
        result += " </span>";
      }
    }
    return result;
  });
</script>

<main class="min-h-screenflex flex-col items-center px-6 py-8 text-white">
  <Navbar stepNumber={2} />
  <div class="flex gap-1 text-[#CECECE] text-xxs">
    <svg xmlns="http://www.w3.org/2000/svg" class="w-4" viewBox="0 0 24 24"
      ><path
        fill="currentColor"
        d="M12 20a8 8 0 1 0 0-16a8 8 0 0 0 0 16m0 2C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10m-1-11v6h2v-6zm0-4h2v2h-2z"
      /></svg
    >
    <p>Preview your live customisation</p>
  </div>
  <div
    contenteditable="true"
    bind:innerHTML={livePledgeHtml}
    class="w-full max-w-3xl p-4 rounded-lg text-xl font-semibold text-white"
  ></div>
  <div class="absolute top-80 left-1/2 transform -translate-x-1/2 w-[90%]">
    <PledgeDropdown {pledgeTemplate} />
  </div>

  <div class="absolute bottom-10 left-1/2 transform -translate-x-1/2">
    <div class="w-full justify-center flex gap-2">
      <BackButton />
      <NextButton
        urlPath={"/path1/" + topic + "/" + index + "/create"}
        disabledCondition={!$selectedAnswers.every((answer) => answer !== null)}
      />
    </div>
  </div>
</main>
