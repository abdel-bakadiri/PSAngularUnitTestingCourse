describe('my first test', () => {
    let sut;
    beforeEach(() => {
        sut = {};
    });
    it(" Should be true if it's true", () => {
        // arrange
        sut.a = false;
        //acte
        sut.a = true;
        //aserte
        expect(sut.a).toBe(true);
    })
})