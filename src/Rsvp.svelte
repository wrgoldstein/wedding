<script>
  let guests;
  let names;

  const submit = async () => {
    let res = await fetch("/api/guests", { method: "POST" })

  }

</script>


<label for="who">Who are you RSVPing for?</label>
<input bind:value={names} placeholder="Billy, Bobby, and Buddy (Boondoggles)"/>

{#if names}
<label for="what">And are you coming?</label>
<button on:click={submit}></button>
{/if}