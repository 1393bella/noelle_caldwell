const users = require('../controllers/users.js');

module.exports = (app) => {
  app.get('/', (req, res) => {
    res.render('index');
  })
  app.get('/login', (req, res) => {
    res.render('login');
  })
  app.get('/success', (req, res) => {
    res.render('success');
  })
  app.post('/register', (req, res) => {
    users.register(req, res);
  })
  app.post('/login', (req, res) => {
    users.login(req, res);
  })
}
