<a class="ml-4 mt-4 underline" href="/">
  <img class="fixed" width="35px" src="left-arrow.png" />
</a>
<div class="w-4/5 m-auto">
  <h1 class="text-6xl m-auto mb-4 mt-6">Photos</h1>

  <div class="row">
    <div class="column">
      <img src="us.jpg" class="inline opacity-90 w-1/3"  />
      <img src="climbing.jpg" class="inline opacity-90" />
      <img src="engagement.jpg" class="inline opacity-90 w-2/3" />
      
    </div>
    <div class="column">
      <img src="australia.jpg" class="inline opacity-90 w-2/3" />
      <img src="laughing-crop.jpg" class="inline opacity-90 w-2/3" />
      <img src="us-ftgreen-full.jpg" class="inline opacity-90 w-2/3" />
    </div>
    <div class="column">
      <img src="flowers.jpg" class="inline opacity-90 w-2/3" />
      <img src="france.jpg" class="inline opacity-90 w-2/3" />
      <img src="hiking.jpg" class="inline opacity-90 w-2/3" />
    </div>
  </div>
</div>

<style>

.row {
  display: flex;
  flex-wrap: wrap;
  padding: 0 4px;
}

/* Create four equal columns that sits next to each other */
.column {
  flex: 33%;
  max-width: 33%;
  padding: 0 4px;
}

.column img {
  margin-top: 8px;
  vertical-align: middle;
  width: 100%;
}

/* Responsive layout - makes a two column-layout instead of four columns */
@media screen and (max-width: 800px) {
  .column {
    flex: 50%;
    max-width: 50%;
  }
}

/* Responsive layout - makes the two columns stack on top of each other instead of next to each other */
@media screen and (max-width: 600px) {
  .column {
    flex: 100%;
    max-width: 100%;
  }
}

</style>