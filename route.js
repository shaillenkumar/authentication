const authentication = require('./controller/Authentication');

module.exports = function(app){
  app.get('/', function(req, res, next){
    res.send(['sun','sand','water']);
  });
  app.post('/signup', authentication.signup);
}
