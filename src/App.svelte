<script>
  import navaid from "navaid"
  import { onMount } from "svelte"
  import Info from "./Info.svelte"
  import Registry from "./Registry.svelte"
  import Photos from "./Photos.svelte"
  
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
  .on("/info", params => {
    page = "info"
  })
  .on("/more", params => {
    page = "more"
  })
  .on("/registry", params => {
    page = "registry"
  })
  .on("/photos", params => {
    page = "photos"
  })

  router.listen()

  onMount(() => {
    setInterval(() => {
      shadow = transition[shadow]
    }, 800)
  })
</script>
<style>
.shadow-white {
  color: grey;
}

.shadow-red {
  color: #a7371b;
}

.shadow-green {
  color: #187150;
}
.shadow-yellow {
  color: #a79c06;
}
.shadow-blue {
  color: #293c6a;
}

</style>
<div class="bg-drawing bg-hero-pattern flex flex-col md:flex-col">
  {#if !page || page == "home"}
    <div class="justify-evenly self-center md:mt-4">
      <img src="couch.jpg" class="opacity-90 w-2/3 m-auto"/>
    </div>
    <div class="inline-flex flex-col p-8 flex-grow rounded">
      <div class="self-center z-20">
        <h1 class="{shadow} text-4xl md:text-7xl mb-2 text-center antialiased">We're getting married!</h1>
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
        <div class="p-8 text-xl inline-flex flex-col space-y-6 w-80 items-center items-stretch">
          <a href="https://forms.gle/V6EJDn4qD1ZTj4ZW6">
            <div class="inline-flex justify-evenly rounded-full py-3 px-6 bg-black w-60 text-white font-bold">
              RSVP
            </div>
          </a>
          <a href="/info">
            <div class="inline-flex justify-evenly rounded-full py-3 px-6 bg-white w-60 border-2 border-black font-bold">
              Info
            </div>
          </a>
          <a href="/registry">
            <div class="inline-flex justify-evenly rounded-full py-3 px-6 bg-white w-60 border-2 border-black font-bold">
              Registry
            </div>
          </a>
          <a href="/photos">
            <div class="inline-flex justify-evenly rounded-full py-3 px-6 bg-white w-60 border-2 border-black font-bold">
              Photos
            </div>
          </a>
        </div>
      </div>
      </div>
    </div>

  {:else if page == "info"}
    <Info />
  {:else if page == "photos"}
    <Photos />
  {:else if page == "registry"}
    <Registry />
  {/if}

</div>