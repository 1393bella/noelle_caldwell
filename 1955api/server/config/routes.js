const person = require('../controllers/people.js');

module.exports = (app) => {
  app.get('/', (req, res) => {
    person.showAll(req, res);
  })
  app.get('/new/:name/', (req, res) => {
    person.add(req, res);
  })
  app.get('/remove/:name/', (req, res) => {
    person.remove(req, res);
  })
  app.get('/:name/', (req, res) => {
    person.show(req, res);
  })
}
