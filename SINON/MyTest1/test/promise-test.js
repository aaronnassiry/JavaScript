const sinon = require('sinon');
const subject = require('../src/promise.js');
const expect = require('chai').expect;

const myStub = sinon.stub(subject, "validate");


describe('Test Promise', () => {
    it.only('call stub with resolves', () => {
        //console.log('test');
        subject.validate("9");
        myStub.withArgs({param1: 9}).rejects();
        //subject.validate();
        //myStub.resolves(7);
        //myStub.rejects({err: 'Fail'});
    });
});