const messages = [
  {
    text: "Lets Fucking Get It!",
    user:"Armando",
    added: new Date(),
  },

  {
    text: " We are so winning the ACC tournament",
    user: "RJ Davis",
    added: new Date(),
  },
];


var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  
  res.render('index', {info: messages})
  
});

router.get('/new', function(req,res,next) {
  res.render('form')
})

router.post('/new', function(req,res,next) {
  
  const message = req.body.message;
  const author = req.body.author;
  messages.push({text: message, user: author });
  
  res.redirect('/');
})

module.exports = router;
