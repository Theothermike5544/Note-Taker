// LOAD DATA
let dB = require("../db/db.json");
const fs = require('fs')

// ROUTING

module.exports = (app) => {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get('/api/notes', (req, res) => res.json(dB));

  // API POST Requests
  app.post('/api/notes', (req, res) => {
      console.log(req.body);
      fs.writeFile

  });

  //Delete post
  app.post('/api/notes/:id', (req, res) => {
    console.log(req.params);

});


}; 