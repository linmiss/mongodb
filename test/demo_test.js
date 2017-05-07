const mocha = require('mocha');
const assert = require('assert');
const MarioChar = require('../models/mariochar');

describe('保存数据', () => {
    it('保存数据到数据库', (done) => {
       let char = new MarioChar({
           name: 'linmiss'
       });

       char.save().then(() => {
           assert(char.isNew === false);
           done();
       })
    });
})