const assert= require('assert');
const Student = require('../src/student');
const { title } = require('process');

describe('subdocument',()=>{
    // it('Creating subdocument', done =>{
    //     const jason = new Student({
    //         name : 'Jason',
    //         articles:[{title :'Javascript'}]
    //     })
    //     jason.save()
    //     .then(()=>{
    //         Student.findOne({name :'Jason'})
    //         .then(student =>{
    //             assert(student.articles[0].title === 'Javascript')
    //             done()  
    //         })
    //     })
    // })


    it('Adding new record', done => {
        const jason = new Student({name : 'Jason', articles:[]})
        jason.save()
        .then(()=>Student.findOne({name : 'Jason'}))
        .then(student =>{
            student.articles.push({title: 'MongoDB'})
            return student.save()
        })
       .then(() => Student.findOne({name : 'Jason'}))
        .then(student=>{
            assert(student.articles[0].title === 'MongoDB')
            done()
        })  
    })
})