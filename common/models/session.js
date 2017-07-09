'use strict';

module.exports = function(Session) {
  Session.spy = function(sessionId, cb) {
    Session.findById( sessionId, function (err, instance){
      var response = instance.players
      console.log(response);      
    });
  }
    
  Session.remoteMethod (
    'spy',
    {
      http: {path: '/spy', verb: 'get'},
      accepts: {arg: 'id', type: 'string', http: {source: 'query'} },   
    }
  );
};
