import { describe, test } from "mocha";
import { expect, should } from 'chai';

import { isFunction } from "../src";

should();

describe("isFunction", () => {
    test('test', () => {               
        expect( isFunction(/asdf/) ).to.be.false
        expect( isFunction(class MyClass{}) ).to.be.true
        expect( isFunction(function * MyFunc() {}) ).to.be.true
        expect( isFunction(() => {}) ).to.be.true
        expect( isFunction(async () => {}) ).to.be.true
        expect( isFunction(Math.random) ).to.be.true
    })
})