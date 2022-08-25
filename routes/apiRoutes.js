// LOAD DATA
let dB = require("../db/db.json");
const { v4: uuid } = require('uuid')
const fs = require('fs')

// API ROUTING:

module.exports = (app) => {
  
    //* GET `/api/notes` - Should read the `db.json` file and return all saved notes as JSON.
    let noteList = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));

    // API GET Requests
    // Below code handles when users "visit" a page.

    app.get('/api/notes', (req, res) => res.json(noteList));

    // API POST Requests
    app.post('/api/notes', (req, res) => {
        let id = uuid();
        let newNote = req.body;
        newNote.id = id;

        noteList.push(newNote);
        console.log(noteList);
    });
    
    //Delete post
    app.post('/api/notes/:id', (req, res) => {
    console.log(req.params);
    });
}; 