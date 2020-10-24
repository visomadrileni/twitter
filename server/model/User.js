const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const UserSchema = new Schema({
    name:String,
    indentifier:String,
    phone: Number,
    password: String
})

UserSchema.pre('save', function(next){
    if(!this.isModified('password')){ next() }
    this.password = bcrypt.hash(this.password,10,(err,hash) => hash);
});

module.exports = mongoose.model('User',UserSchema);