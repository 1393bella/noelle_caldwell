const mongoose = require('mongoose');
const User = mongoose.model('User');
const bcrypt = require('bcrypt');
mongoose.Promise = global.Promise;

module.exports = {
  register: (req, res) => {
    if (req.body.password != req.body.confirm) {
      res.render('index', {error: "Passwords do not match"});
    } else {
      let user = new User(
        {name: {first: req.body.fname, last: req.body.lname},
         email: req.body.email,
         birthday: req.body.bday,
         password: req.body.password});

      let promise = user.save();

      promise.then((doc) => {
        res.redirect('/success');
      }).catch((err) => {
        res.render('index', {errors: err});
      })
    }
  },
  login: (req, res) => {
    User.findOne({email: req.body.email.toLowerCase()}, (err, user) => {
      if (err) {
        res.render('login', {error: err});
      }
      else {
        if (user == null) {
          res.render('login', {error: "No user registered with that email."});
        }
        else if (!bcrypt.compareSync(req.body.password,user.password)) {
          res.render('login', {error: "Incorrect password."});
        }
        else {
          res.redirect('/success');
        }
      }
    })
  }
}
