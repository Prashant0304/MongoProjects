const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/students_test');


mongoose.connection
    .once("open",()=> console.log("We connected"))
    .on("error",(error)=>{
          console.warn("An error occured", error)
    })

beforeEach((done) => { 
      mongoose.connection.collections.students.drop();
      done()
})    
  