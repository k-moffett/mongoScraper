const path = require('path');

module.exports = (app) => {

  app.get('/api', (req, res) => {
    res.send('apiRoutes');
  });


}