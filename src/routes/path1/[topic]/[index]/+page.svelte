<script lang="ts">
  import { page } from "$app/state";
  import {
    pledgeTemplates,
    BackButton,
    NextButton,
    PledgeDropdown,
  } from "$lib";
  let topic = page.params.topic;
  let index = page.params.index;
  let pledgeTemplate = pledgeTemplates[topic][parseInt(index)];
  let selectedAnswers = $state(
    Array(pledgeTemplate.templateAnswers.length).fill(null)
  );
  let livePledgeHtml: string = $derived.by(() => {
    let result = "";
    for (
      let i = 0;
      i <
      pledgeTemplate.template.length + pledgeTemplate.templateAnswers.length;
      i++
    ) {
      if (i % 2 === 0) {
        result +=
          '<span class="text-white">' +
          pledgeTemplate.template[Math.floor(i / 2)] +
          " </span>";
      } else {
        if (selectedAnswers[Math.floor(i / 2)] === null) {
          result += "...";
          break;
        }
        result +=
          '<span class="text-[#FF79A0]">' +
          pledgeTemplate.templateAnswers[Math.floor(i / 2)][
            selectedAnswers[Math.floor(i / 2)]
          ] +
          " </span>";
      }
    }
    return result;
  });
</script>

<main
  class="min-h-screenflex flex-col items-center px-6 py-8 text-white font-sans"
>
  <div
    contenteditable="true"
    bind:innerHTML={livePledgeHtml}
    class="w-full max-w-3xl p-4 mb-8 rounded-lg text-xl font-semibold text-white"
  ></div>

  <PledgeDropdown {pledgeTemplate} bind:selectedAnswers />

  <div class="absolute bottom-40">
    <div class="w-full justify-between">
      <BackButton />
      <NextButton urlPath={"/nothing"} disabledCondition={false} />
    </div>
  </div>
</main>
