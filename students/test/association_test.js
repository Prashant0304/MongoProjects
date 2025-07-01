const mongoose = require('mongoose');
const Student = require('../src/student');
const Comment = require('../src/comment');
const ArticleBlog = require('../src/articleBlog');

describe('Association Test',() =>{
    let jason, artcleBlog, comment;

    beforeEach(done =>{
        jason = new Student({name:'Jason'});
        articleBlog = new ArticleBlog({title: 'MongoDb', content:'Mongoose and Mocha'});
        comment = new Comment({content:'Well Done!'})

        jason.articleBlog.push(artcleBlog);
        articleBlog.comments.push(comment);
        comment.students = jason;

       

        Promise.all([jason.save(), articleBlog.save(), comment.save()])
        .then(() => done())
    })

    it.only('Associat student with artcleBlog', done =>{
        Student.findOne({name : 'Jason'})
        .then(student =>{
            console.log(student)
            done()
        })
    })
})