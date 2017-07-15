const mongoose = require('mongoose');

const PlayerSchema = new mongoose.Schema({
    pname: {type: String},
    preferred_position: {type: String},
    games: Object
}, {timestamps: true});

mongoose.model('Player', PlayerSchema);