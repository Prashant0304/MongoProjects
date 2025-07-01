const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ArticleBlogSchema= new Schema({
    title:String,
    content:String,
    comments:[{
        trypes:Schema.Types.ObjectId,
        ref:'comment'
    }]    
}) 

const ArticleBlog = mongoose.model('artcleBlog',ArticleBlogSchema)

module.exports = ArticleBlog;