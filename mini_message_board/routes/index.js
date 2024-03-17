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

const testing = "Testing_IT_Out";
const test = ['carbon', 'nitrogen', 'helium','hydrogen']
const number = 69

var express = require('express');
var router = express.Router();

const person = {
  name: "John Doe",
  age: 30
};

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {title: 'Hey', test: test[1], info: messages})
  
});

router.get('/new', function(req,res,next) {
  res.render('form')
})

module.exports = router;
