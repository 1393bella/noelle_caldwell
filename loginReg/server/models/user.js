const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const uniqueValidator = require('mongoose-unique-validator');

const UserSchema = new mongoose.Schema({
  name: {
    first: {
      type: String,
      required: true,
      minlength: [2, "First name should be at least 2 characters"],
      trim: true,
      validate: [{
        validator: (txt) => {
          return /^(?=.*[A-Za-z])/.test(txt);
        },
        message: "First name should only be letters"
      }]
    },
    last: {
      type: String,
      required: true,
      minlength: [2, "Last name should be at least 2 characters"],
      trim: true,
      validate: [{
        validator: (txt) => {
          return /^(?=.*[A-Za-z])/.test(txt);
        },
        message: "Last name should only be letters"
      }]
    }
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  birthday: {
    type: Date,
    required: true,
    validate: [{
      validator: (bd) => {
        return bd < Date.now();
      },
      message: "You haven't been born yet?"
    }]
  },
  password: {
    type: String,
    required: true,
    minlength: [8, "Password must be at least 8 characters"],
    validate: {
      validator: (val) => {
        return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,32}/.test(val);
      },
      message: "Password must have at least 1 number, uppercase letter, and special character"
    }
  }
}, {timestamps: true});

UserSchema.plugin(uniqueValidator, {message: 'A user is already registered with that email'});

UserSchema.pre('save', function(done) {
  this.email = this.email.toLowerCase();
  this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(8));
  done();
})

mongoose.model('User', UserSchema);
