<script lang="ts">
  import { page } from "$app/state";
  import { pledgeTemplates, BackButton, NextButton, PledgeButton } from "$lib";
  let topic = page.params.topic;
  let index = page.params.index;
  let pledgeTemplate = pledgeTemplates[topic][parseInt(index)];
  let livePledge = [pledgeTemplate.template[0]];
  let livePledgeConcat = livePledge.join(" ") + "...";
</script>

<main>
  <h1 class="text-2xl font-bold mb-2">I pledge to</h1>
  <p>Have fun creating your own pledge</p>
  <textarea readonly value={livePledgeConcat}></textarea>
  <PledgeButton
    {pledgeTemplate}
    isSelected={true}
    isButtonDisabled={false}
    isDropdownDisabled={false}
    onclick={() => {}}
  />
</main>
