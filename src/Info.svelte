<script>
  import { onMount } from "svelte";

  let emoji = '🕺'

  function randomizeDancer(){
    emoji = emoji == '🕺' ? '💃' : '🕺'
  }

  onMount(() => {
    window.scrollTo(0, 0);
    setInterval(randomizeDancer, 1000);
  });
</script>

<div class="w-4/5 m-auto">
  <a class="ml-4 mt-4 underline" href="/">
    <img class="fixed" width="35px" src="left-arrow.png" />
  </a>
  <h1
    class="text-4xl break-words sm:text-5xl md:text-6xl mt-10 m-auto mb-4 mt-6"
  >
    Info
  </h1>

  <div class="text-2xl mt-6 mb-2">Hotel blocks</div>
  <div class="space-y-6">
    <div>
      <strong>Mirror Lake Inn</strong> (<a
        class="underline"
        href="https://mirrorlakeinn.com/">link</a
      >)
      <ul>
        <li>Room rate: $259/night</li>
        <li>
          <label>To book:</label> Call Stephanie at 518-302-3030 (M-F, 9-5)
        </li>
        <li>
          Details: Requires one night deposit at time of booking and a two night
          minimum on weekends. They offer cancellations up to 21 days before
          arrival.
        </li>
      </ul>
    </div>
    <div>
      <strong>Golden Arrow</strong> (<a
        class="underline"
        href="https://www.golden-arrow.com/">link</a
      >)
      <ul>
        <li>
          Room rate: Lakeside room-- $189/night for weekends, Villageside room--
          $159/night for weekends. (Lower Sunday -> Thursday)
        </li>
        <li>Group name: Weir and Goldstein Wedding</li>
        <li>To book: Call 800-582-5540 and mention group name + date</li>
        <li>
          Details: Can cancel or change up to 7 days prior to arrival. Rooms are
          released from the block after August 16th.
        </li>
      </ul>
    </div>
  </div>

  <div class="text-2xl mt-6 mb-2">Rentals</div>
  <div>
    The Whiteface Club has housing on the property, which you can find by
    searching for "Whiteface Club" on VRBO, Airbnb, or directly via the
    Whiteface Club website. You can also find Airbnbs in Lake Placid or the
    surrounding area.
  </div>

  <div class="text-2xl mt-6 mb-2">Transportation</div>
  <div>
    A bus will pick up from the Golden Arrow and Mirror Lake Inn before the ceremony and shuttle back and forth throughout the reception. The last shuttle will leave the Whiteface Club at 10:30pm. You don't have to be staying at the hotels to be picked up or dropped off there!
  </div>
  <div class="mt-6">
    Lake Placid is about 4½ hours from NYC or Boston, or 2½ from Albany, NY if
    you wish to fly in.
  </div>
  <div class="text-2xl mt-6 mb-2">Venue</div>
  <div class="mt-6">
    <ul>
      <li>Address: 373 Whiteface Inn Lane, Lake Placid, NY 12946.</li>
      <li>Telephone: 518.523.2551</li>
      <li>
        Website: <a
          class="text-blue-600"
          href="https://whitefaceclubresort.com/"
          >https://whitefaceclubresort.com/</a
        >
      </li>
    </ul>
  </div>
  <h1
    class="text-4xl break-words sm:text-5xl md:text-6xl mt-10 m-auto mb-4 mt-6"
  >
    Schedule
  </h1>
  <div class="mt-6 mb-32">
    <div>
      <div class="text-2xl mt-6 mb-2">Friday</div>
        At <b>Smoke Signals</b> on Mirror Lake (2489 Main St, Lake Placid, NY 12946):
        <ul class="list-disc list-inside">
          <li>7-10PM - Welcome drinks</li>
          <i>Dress code: Casual</i>
        </ul>
        
        <div class="text-2xl mt-6 mb-2">Saturday</div>
          At the <b>Whiteface Club</b> (373 Whiteface Inn Lane, Lake Placid, NY 12946):
          <ul class="list-disc list-inside">
            <li>3:00PM - Wedding ceremony <span class="aside">(Outside, weather permitting)</span></li>
            <li>3:45PM - Cocktail hour</li>
            <li>5-11PM - Dinner reception and dancing {emoji}</li>
            <i>Dress code: Semi-formal</i>
          </ul>
          <div class="text-2xl mt-6 mb-2">Sunday</div> 
          At the <b>Whiteface Club</b> (373 Whiteface Inn Lane, Lake Placid, NY 12946):
          <ul class="list-disc list-inside">
            <li>9-11AM (drop-in): Brunch</li>
          </ul>
    </div>
  </div>
</div>

<style>
  .foo {
    font-size: 2em;
  }

  h1 {
    hyphens: auto;
  }

  .fixed {
    top: 1.5em;
    left: 1.5em;
  }
</style>
