const  reverseFac  = require("../maths.js");
const { expect } = require("chai");

describe("factorial check tests", () => {
    it("should equal 5!", () => {
        expect(5 +"!").to.equal(reverseFac(120))
    })
});
  