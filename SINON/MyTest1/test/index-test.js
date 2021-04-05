//https://sinonjs.org/releases/latest/spies/
const sinon = require('sinon');
const subject = require('../src/index.js');
const expect = require('chai').expect;

const mySpy = sinon.spy(subject, "func");

describe('Test Describe', () => {

    it('1st unit called', () => {
        subject.func("test1", "test2");
        expect(mySpy.called).to.equal(true);
        expect(mySpy.calledWith('test1')).to.equal(true);
    });

    it('1st unit calledWith', () => {
        subject.func("test1", "test2");
        expect(mySpy.calledWith('test1')).to.equal(true);
    });

    it('1st unit neverCalledWith', () => {
        subject.func("test1", "test2");
        expect(mySpy.neverCalledWith('test3')).to.equal(true);
    });

    it('1st unit calledWithExactly', () => {
        subject.func("test1", "test2");
        expect(mySpy.calledWithExactly('test1', 'test2')).to.equal(true);
    });

    it('1st unit Throw', () => {
        try{
            subject.func("test1", "fail");
        } catch (e){}
        expect(mySpy.threw()).to.be.true;
    });
  });