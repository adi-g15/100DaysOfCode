const mongoose = require('mongoose');
const _ = require('underscore')

console.log(_.VERSION)

mongoose.Promise = global.Promise;

// Connect MongoDB at default port 27017.
mongoose.connect('mongodb://localhost:27017/test', {
    useNewUrlParser: true,
    useCreateIndex: true,
}, (err) => {
    if (!err) {
        console.log('MongoDB Connection Succeeded.')
    } else {
        console.log('Error in DB connection: ' + err)
    }
});

// Declare the Schema of the Mongo model
var userSchema = new mongoose.Schema({
    n:{
        alias: 'name',
        type: String,
    },
    e:{
        alias: 'email',
        type: String,
    },
});

const data = {
    name: 'Adi',
    email: 'adig15035@gmail.com'
}

const tryModel = mongoose.model('User', userSchema);

tryModel.create(data).then((doc) => {
    console.log('🚀  Done', doc);

    tryModel.findById(doc._id, (err, doc) => {
       if(err){
           console.log(`Error: ` + err)
       } else{
         if(!doc){
             console.log("message")
         } else{
           console.log('Found -> ', doc)
         }
       }
    });
    

}).catch(err => console.error(err.code))
