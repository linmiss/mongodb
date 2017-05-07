const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//创建一个模式和模型

const MarioCharSchema = new Schema({
    name:String,
    weight: Number
});

const MarioChar = mongoose.model('mariochar', MarioCharSchema);

module.exports = MarioChar;