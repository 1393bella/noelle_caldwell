const mongoose = require('mongoose');
const path = require('path');
const Player = mongoose.model('Player');
const players = require('../controllers/player_controller.js');

module.exports = (app) => {
    app.get('/players', players.index);
    app.post('/player', players.add);
    app.post('/player/destroy', players.destroy);
    app.post('/player/edit', players.update);
    app.all('*', (req, res, next) => {
        res.sendfile(path.resolve('./team-ang/dist/index.html'));
    })
}