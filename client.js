
var express = require('express');
var sfFile = require('./util/sf-file');
var router = express.Router();
var Promise = require('promise');
var cheerio = require('cheerio');

router.get('/:url', function(req, res) {
    var url=req.params.url;

    Promise.all([sfFile.read('./'+url+'.html', 'utf8')])
        .then(function (files) {
            var html = files[0];
            $ = cheerio.load(html);
            var indexjs=require('./views/'+url);
            indexjs.index($,res);
        });
});

module.exports = router;