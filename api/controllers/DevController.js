var socketIOClient = require('socket.io-client');
var sailsIOClient = require('sails.io.js');



module.exports = {



  index : function (req, res) {
    return res.view('index');
  }

};

