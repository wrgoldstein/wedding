<script>
  import navaid from "navaid"
  import { onMount } from "svelte"
  import Accomodations from "./Accommodations.svelte"
  import More from "./More.svelte"
  
  // color flashing
  let shadow = 'shadow-white'
  let transition = {
    'shadow-white': 'shadow-blue',
    'shadow-blue': 'shadow-red',
    'shadow-red': 'shadow-green',
    'shadow-green': 'shadow-yellow',
    'shadow-yellow': 'shadow-white',
  }

  // routing
  let page
  let router = navaid()
  router
  .on("/", () => {
    page = "home"
  })
  .on("/accommodations", params => {
    page = "accommodations"
  })
  .on("/more", params => {
    page = "more"
  })

  router.listen()

  onMount(() => {
    setInterval(() => {
      shadow = transition[shadow]
    }, 800)
  })
</script>
<style>
/* 
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
  background-attachment: fixed;
}


@media only screen and (max-width: 600px) {
  .bg-drawing:before {
    background-image: url("climbing.jpg")
  }
} */
.shadow-white {
  text-shadow: 3px 3px white;
}

.shadow-red {
  text-shadow: 3px 3px red;
}

.shadow-green {
  text-shadow: 3px 3px green;
}
.shadow-yellow {
  text-shadow: 3px 3px yellow;
}
.shadow-blue {
  text-shadow: 3px 3px blue;
}

</style>

<div class="bg-drawing bg-hero-pattern flex flex-col md:flex-row">
  {#if !page || page == "home"}
    <div class="inline-flex flex-col md:m-9 p-8 flex-grow rounded">
      <div class="self-center z-20">
        <h1 class="{shadow} text-4xl md:text-7xl mt-8 mb-2 text-center antialiased">We're getting married!</h1>
        <div class="text-xl mt-12 max-w-lg m-auto">
          On October 16th, 2021, at the <a class="underline" href="https://whitefaceclubresort.com/">Whiteface Club</a>
          in <a class="underline" href="https://www.google.com/maps?q=lake+placid+ny&rlz=1C5GCEM_enUS907US907&um=1&ie=UTF-8&sa=X&ved=2ahUKEwiFub_cms_uAhUQFlkFHREpBZ0Q_AUoAXoECBsQAw">Lake Placid, NY</a>.
        </div>
        <div class="text-xl mt-12 max-w-lg m-auto p-4 rounded-lg border-4 border-red-200 border-dashed">
          We know it might seem foolhardy to plan a wedding in a pandemic, 
          but we're crossing our fingers and monitoring the situation closely. 
          We hope we are able to celebrate safely with you all in October!
        </div>
        <div class="text-center mt-4">
        <div class="p-8 text-xl inline-flex flex-col space-y-6">
          <div class="inline-flex justify-evenly rounded-full py-3 px-6 bg-black text-white font-bold">
            <a href="/accommodations"> Accommodations </a>
          </div>
          <div class="inline-flex justify-evenly rounded-full py-3 px-6 bg-white border-2 border-black font-bold">
            <a href="/more"> More to come </a>
          </div>
        </div>
      </div>
      </div>
    </div>

  {:else if page == "accommodations"}
    <Accomodations />
  {:else if page == "more"}
    <More />
  {/if}

</div>