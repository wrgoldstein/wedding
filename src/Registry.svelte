<script>
  import { onMount } from "svelte";

  onMount(() => {
    window.scrollTo(0, 0);
  });
</script>
<style>
  h1 {
    hyphens: auto;
  }

  .fixed {
    top: 1.5em;
    left: 1.5em;
  }
</style>
<div>
<div class="w-4/5 m-auto">
  <a class="ml-4 mt-4 underline" href="/">
    <img class="fixed" width="35px" src="left-arrow.png" />
  </a>
  <h1
    class="text-4xl break-words sm:text-5xl md:text-6xl mt-10 m-auto mb-4 mt-6"
  >
    Registry
  </h1>
  <div>
    Don't feel like you need to get us a gift! But if you'd like to, here are a few things we have our eyes on:
  </div>
  <ul class="mt-4 list-disc">
    <a class="underline" href="https://eastfork.com/apps/giftregistry/registry/138336?rsid=1"><li>East Fork (Dinnerware)</li></a>
    <a class="underline" href="https://www.frontgate.com/gr/11161081?view=list&sortByTopFive=&description=&sortBy=&printPreview=&prevSortBy="><li>Frontgate (Towels)</li></a>
    <a class="underline" href="https://www.zola.com/registry/weirstein"><li>Zola (Other things!)</li></a>
  </ul>
</div>
</div>