const polka = require('polka');

var Airtable = require('airtable');


var base = new Airtable({apiKey: process.env.AIRTABLE_KEY}).base('appKtbJqeWLLfgK20');

async function listGuests(){
  let guests = []
  return await base('Guests').select().all()
}



polka()
  .get("/api/guests", async (req, res) => {
    let guests = await base('Guests').select().all()
    res.end(JSON.stringify(guests))
  })
  .listen(3000, err => {
    if (err) throw err;
    console.log(`> Running on localhost:3000`);
  })
