const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/nprScraper');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('Connected!');
});

let articleSchema = new mongoose.Schema({
    title: 'string',
    preview: 'string',
    link: 'string'
});

let article = mongoose.model('Article', articleSchema)

const articleModel = (articleData) => {
    let newArticle = new article({
        title: articleData.title,
        preview: articleData.preview,
        link: articleData.link
    });

    newArticle.save((err, newArticle) => {
        if (err) return console.log(err);
        console.log(newArticle)
    })

};

module.exports = articleModel;