import { StrengthPipe } from "./strength.pipe";

describe("Strngth pipe", () => {
    let strengthPipe;
    beforeEach(() => {
        // arrange
        strengthPipe = new StrengthPipe();
    });
    it("Shoulde be 5 (weak) if the value is 5", () => {
        // acte
        let value = strengthPipe.transform(5)
        // aserte
        expect(value).toBe('5 (weak)')
    });
    it("Shoulde be 11 (strong) if the value is 11", () => {
        // acte
        let value = strengthPipe.transform(11)
        // aserte
        expect(value).toBe('11 (strong)')
    });
    it("Shoulde be 20 (unbelievable) if the value is 20", () => {
        // acte
        let value = strengthPipe.transform(20)
        // aserte
        expect(value).toBe('20 (unbelievable)')
    })
})