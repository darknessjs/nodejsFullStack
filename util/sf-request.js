var request = require('request');

var Promise = require('promise');


     exports.get = function(options) {
       return new Promise(function(resolve, reject) {
         request.get(options, function(err, res) {
           if (err) {
             reject(err);
           } else {
             resolve(err);
           }
         })
       })
     };

 exports.post = function(options) {
   return new Promise(function(resolve, reject) {
     request.post(options, function(err, res) {
       if (err) {
         reject(err);
       } else {
         resolve(err);
       }
     })
   })
 };


exports.get = Promise.denodeify(request.get);
exports.post = Promise.denodeify(request.post);