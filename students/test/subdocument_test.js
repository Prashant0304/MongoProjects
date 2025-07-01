const assert= require('assert');
const Student = require('../src/student');


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


    // it('Adding new record', done => {
    //     const jason = new Student({name : 'Jason', articles:[]})
    //     jason.save()
    //     .then(()=>Student.findOne({name : 'Jason'}))
    //     .then(student =>{
    //         student.articles.push({title: 'MongoDB'})
    //         return student.save()
    //     })
    //    .then(() => Student.findOne({name : 'Jason'}))
    //     .then(student=>{
    //         assert(student.articles[0].title === 'MongoDB')
    //         done()
    //     })  
    // })

    it('Remove the records', (done) => {
    const jason = new Student({ name: 'Jason', articles: [{ title: 'React Native' }] });

    jason.save()
        .then(() => Student.findOne({ name: 'Jason' }))
        .then(student => {
            student.articles.splice(0, 1); // 👈 use splice to remove subdocument
            return student.save();
        })
        .then(() => Student.findOne({ name: 'Jason' }))
        .then(student => {
            assert(student.articles.length === 0);
            done();
        })
        .catch(done);
});

    
})