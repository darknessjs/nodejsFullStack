
var sfRequest = require('../util/sf-request');

function index($,res){
    console.log("getstart");
        sfRequest.get({url: 'http://localhost/demo.js', method: 'GET'})
        .then(function (data) {
                console.log("getend");
                console.log(data.body);
            var jsondata = JSON.parse(data.body);
            $("#ajaxtest").html(jsondata.name);
            res.set('Content-Type', 'text/html');
            res.send(new Buffer($.html()));
        });
}
exports.index=index;