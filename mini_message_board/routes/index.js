var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user:"Armando",
    added: new Date(),
  },

  {
    text: " NCAA Basketball Season Is On",
    user: "RJ Davis",
    added: new Date(),
  },
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
