var axios = require('axios');
var ejs = require('ejs');

function singleTicket(req, res) {

  /* Setting Authorization to send along with the http request*/

  var config = {
    auth: {
      username: "yashsomani2007@gmail.com",
      password: process.env.PASSWORD
    }
  };

}
exports.singleTicket = singleTicket;