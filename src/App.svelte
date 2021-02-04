<!-- App.svelte -->
<script>
  import Rsvp from "./Rsvp.svelte"
  import {flip} from 'svelte/animate';
  let x;
  let click;
  $: url = x > 765 ? "us_sm" : "us_crop"

  const rsvp = async () => click = 'rsvp'
  const options = {};
</script>
<style>

.bg-drawing {
  z-index: 0;
}

.bg-drawing:before {
  background-image: url("us-ftgreen-full.jpg");
  z-index: 1;
  position: absolute;
  left: 0;
  top: 0;
  display: block;
  width: 100%;
  height: 100%;
  content: '';
  opacity: .55;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}


@media only screen and (max-width: 600px) {
  .bg-drawing:before {
    background-image: url("climbing.jpg")
  }
}
</style>

<svelte:window bind:outerWidth={x}/>
<div class="bg-drawing bg-hero-pattern flex flex-col md:flex-row">
  <!-- <div class="inline-flex md:h-screen ms:w-screen">
    <img src="/{url}.jpg" alt="us" class="us md:h-full md:w-auto z-50">
  </div> -->
  <div class="inline-flex flex-col md:m-9 p-8 flex-grow rounded">
    <div class="self-center z-20">
      <h1 class="text-7xl mt-8 mb-2 text-center antialiased">We're getting married!</h1>
      <div class="p-8 text-xl">
        <ul>
          <li><strong>When</strong>: October 16th, 2021</li>
          <li><strong>Where</strong>: Whiteface Club and Resort, Lake Placid NY</li>
        </ul>
      </div>
      <div class="flex flex-col items-center self-center">
      {#if click == undefined}
        <a on:click={rsvp} class='flex px-8 py-3 rounded text-center bg-gray-800 text-white text-sm font-bold' href="#">
          RSVP
        </a>
      {:else if click == 'rsvp'}
        <Rsvp />
      {/if}
      </div>
    </div>
  </div>
</div>
