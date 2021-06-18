module.exports = (app) => {
    const notes = require('../controller/controller.js');

    // Create a new Note
    app.post('/user', notes.user);
    app.post('/headlines', notes.headlines);
    app.get('/getHeadlines', notes.getHeadlines);
}