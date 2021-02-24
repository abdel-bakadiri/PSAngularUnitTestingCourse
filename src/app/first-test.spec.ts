describe("Test year if equal to 2021 ", () => {
    let year;

    beforeEach(() => {
        year = null;
    })
    it("Should be equal to 2021", () => {
        //arrange
        year = 1999;
        //acte
        year = 2021;
        // assert
        expect(year).toBe(2021);
    })
})