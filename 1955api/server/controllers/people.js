const mongoose = require('mongoose');
const Person = mongoose.model('Person');
mongoose.Promise = global.Promise;

module.exports = {
  showAll: (req, res) => {
    Person.find({}, (err, people) => {
      if (err) {
        res.json(err);
      }
      else {
        res.json(people);
      }
    })
  },
  add: (req, res) => {
    let person = new Person({name: req.params.name});
    let promise = person.save();

    promise.then((doc) => {
      res.json("added!" + doc);
    })
    promise.catch((err) => {
      res.json(err);
    })
  },
  show: (req, res) => {
    Person.findOne({name: req.params.name}, (err, person) => {
      if (err) {
        res.json(err);
      }
      else {
        res.json(person);
      }
    })
  },
  remove: (req, res) => {
    Person.remove({name: req.params.name}, (err) => {
      if (err) {
        console.log("Issue deleting: " + err);
      }
      else {
        res.redirect('/');
      }
    })
  }
}
