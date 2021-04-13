const sinon = require('sinon');
const referee = require("@sinonjs/referee");
const assert = referee.assert;
const subject = require('../src/promise.js');
const expect = require('chai').expect;

const stub = sinon.stub(subject, "validate");



describe('Test Promise', () => {
    it.skip('call stub with resolves', () => {
        subject.validate("9");


        //assert.exception(stub);



        //expect(function () { subject("3"); }).to.throw();  // Function expression

        //subject.validate("9");
        //expect(function () { subject.validate(9); }).to.throw();
        //expect(subject.validate.bind("9")).to.throw();           // Bind
        //expect(() => subject.validate("9")).to.throw();             // ES6 arrow function


        //expect(() => subject.validate(42)).to.throw();         


        //myStub.withArgs({param1: 9}).rejects();
        //subject.validate();
        //myStub.resolves(7);
        //myStub.resolves("9");
        //myStub.rejects({err: 'Fail'});
    });
});
