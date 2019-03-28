describe("A suite", function() {
    it("contains spec with an expectation", function() {
      expect(true).toBe(true);
    });
  });

  describe("Performs Arithmetic", function() {
    it("adds 1 + 2 to equal 3", function() {
      const sum = require("../src/app");
        expect(sum(1,2)).toEqual(3);
    })
});

