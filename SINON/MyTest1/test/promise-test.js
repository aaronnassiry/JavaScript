const sinon = require('sinon');
const subject = require('../src/promise.js');
const expect = require('chai').expect;

const myStub = sinon.stub(subject, "validate");


describe('Test Promise', () => {
    it('call stub with resolves', () => {
        subject.validate();
        //myStub.resolves(7);
        myStub.rejects({err: 'Fail'});
    });
});