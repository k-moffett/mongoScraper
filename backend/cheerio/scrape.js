const request = require('request');
const cheerio = require('cheerio');
const articleModel = require('../db/models/article')

request('https://www.npr.org/sections/news/', function(error,  response, body){
    console.log('error:', error); 
    console.log('statusCode:', response && response.statusCode); 
    let $ = cheerio.load(body);
    $('.item-info').each(function(i, element) {
        let title = $(element).children($('.title')).text()
        let preview = $(element).children($('.teaser')).text()
        let link = $(element).children($('.teaser')).children('a').attr('href')
        let articleData = {
            title: $(element).children($('.title')).text(),
            preview: $(element).children($('.teaser')).text(),
            link: $(element).children($('.teaser')).children('a').attr('href')
        }
        articleModel(articleData)
    })

});