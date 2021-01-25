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
 /* Sending http get request using axios */
 axios
 .get('https://' + process.env.SUBDOMAIN + '.zendesk.com/api/v2/tickets/' + req.params.ticketId, config)
 .then(function (response) {

}
exports.singleTicket = singleTicket;