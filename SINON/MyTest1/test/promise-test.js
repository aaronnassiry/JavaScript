const sinon = require('sinon');
const subject = require('../src/promise.js');
const expect = require('chai').expect;

const myStub = sinon.stub(subject, "test");


describe('Test Promise', () => {
    it('call stub with resolves', () => {
        subject.validate(8);
        myStub.resolves()
    });
});