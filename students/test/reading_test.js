const assert = require('assert');
const Student = require('../src/student');

describe("Read the data",()=>{
    let jason;

    beforeEach(()=>{
        jason = new Student({
            name : 'Jason'
        });
        jason.save()
        .then(()=>done())
    })
    it("Find the Jason" ,async ()=>{
      const students = await Student.find({name : 'Jason'})
      console.log(students)
    })
})