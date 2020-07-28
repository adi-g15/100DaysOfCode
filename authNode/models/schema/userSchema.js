const mongoose = require('mongoose');
const bcrypt = require('bcrypt')

const Schema = mongoose.Schema;

const userSchema = new Schema({
    //String is shorthand for `{type: String}`
    userName: { //required
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    name: {
        type: String,
        default: this.userName,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    },

    createdAt: {
        type: Date,
        default: Date.now
    }
});

    //Runs before any 'save' event happens (ie. before any addition to the db)
userSchema.pre('save', (next) => {
    const cb = (err, hashedStr) => {
        if(err) return next(err)

        this.password = hashedStr
        return next()
    }
    
    const user = this
    bcrypt.hash( this.password, 10, cb) //The callback is called after the hash function has finished exceution, and has found the hash for given string
})

module.exports = mongoose.model('Users', userSchema);   //returning the compiled model (compiled from the schema)

//LEARNT -> collections are instances of the model class