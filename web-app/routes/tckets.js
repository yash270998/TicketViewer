var axios = require('axios');
var ejs = require('ejs');

function tickets(req, res) {

  if (req.params.pageNo === undefined) 
    req.params.pageNo = 1;
    
  /* Setting Authorization to send along with the http request*/
  var config = {
    auth: {
      username: "singh.kajal940@gmail.com",
      password: process.env.PASSWORD
    }
  };
 
  

exports.tickets = tickets;