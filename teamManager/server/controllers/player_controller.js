const mongoose = require('mongoose');
const Player = mongoose.model('Player');
mongoose.Promise = global.Promise;

module.exports = {
    index: (req, res, next) => {
        Player.find({})
        .then((players) => {
            res.json(players);
        })
        .catch((err) => {
            res.status(500).json(err);
        })
    },
    add: (req, res, next) => {
        let p = new Player(req.body);
        p.save()
        .then(() => {
            res.json(true);
        })
        .catch((err) => {
            res.status(500).json(err);
        })
    },
    destroy: (req, res, next) => {
        let p = new Player(req.body);
        Player.remove({_id: p._id})
        .then(() => {
            res.json(true);
        })
        .catch((err) => {
            res.status(500).json(err);
        })
    },
    update: (req, res, next) => {
        let p = new Player(req.body);
        Player.findOne({_id: p._id})
        .then((player) => {
            player.games = p.games;
            player.save()
            .then(() => {res.json(true)})
            .catch((err) => {res.status(500).json(err)});
        })
        .catch((err) => {
            res.status(500).json(err);
        })
    }
}