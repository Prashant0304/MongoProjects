const assert = require('assert');
const Student = require('../src/student');

describe("Read the data", () => {
  let jason;
    let jason2;
  beforeEach((done) => { // Fixed: Add done parameter
    jason = new Student({ name: 'Jason' });
    jason2 = new Student({name : 'Jason'});
    jason2.save()
    jason.save()
      .then(() => done())
      .catch((error) => done(error));

      console.log(jason);
      console.log(jason2);
  });

//   it("Find the Jason", async () => {
//     const students = await Student.find({ name: 'Jason' });
//     assert(students[0]._id.toString() === jason._id.toString());
   
//   });

    it('Find one of the Jasons', async()=>{
        const students = await Student.findOne({_id: jason._id});
        console.log(students);
        assert(students.name == 'Jason')
    });
});
