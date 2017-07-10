const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = 8000;
const mongoose = require('mongoose');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, './static')));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

mongoose.connect('mongodb://localhost/messageBoard', {useMongoClient: true});
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;

const MessageSchema = new mongoose.Schema({
  name: {type: String, required: true, minLength: 4},
  content: {type: String, required: true},
  comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
}, {timestamps: true});

const CommentSchema = new mongoose.Schema({
  _message: {type: Schema.Types.ObjectId, ref: 'Message'},
  name: {type: String, required: true, minLength: 4},
  content: {type: String, required: true}
}, {timestamps: true});

mongoose.model('Message', MessageSchema);
mongoose.model('Comment', CommentSchema);

const Message = mongoose.model('Message');
const Comment = mongoose.model('Comment');

app.get('/', (req, res) => {
  Message.find({}).populate('comments').exec((err, msg) => {
    if (err) {
      res.render('board', err);
    }
    else {
      res.render('board', {messages: msg});
    }
  })
})

app.post('/messages', (req, res) => {
  let message = new Message({name: req.body.name, content: req.body.msg});
  let promise = message.save();

  promise.then((doc) => {
    res.redirect('/');
  })
  promise.catch((err) => {
    res.render('board', {err: mongoose.errors});
  })
})

app.post('/comments', (req, res) => {
  Message.findOne({_id: req.body.msgId}, (err, msg) => {
    let comment = new Comment({name: req.body.cname, content: req.body.cmt});
    comment._message = msg._id;
    msg.comments.push(comment);
    let promise = comment.save();
    promise.then((doc) => {
      let promise2 = msg.save();
      promise2.then((doc) => {
        res.redirect('/');
      })
      promise2.catch((err) => {
        res.render('board', {cerr: msg.errors});
      })
    })
    promise.catch((err) => {
      res.render('board', {cerr: comment.errors});
    })
  })
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
})
