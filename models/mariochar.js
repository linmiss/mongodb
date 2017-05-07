const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//es6 promise
mongoose.Promise = global.Promise;

//创建一个模式和模型

const MarioCharSchema = new Schema({
    name:String,
    weight: Number
});

const MarioChar = mongoose.model('mariochar', MarioCharSchema);

module.exports = MarioChar;