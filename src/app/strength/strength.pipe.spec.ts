import { StrengthPipe } from "./strength.pipe";

describe("The function transform", () => {
    // arrange - systeme under test
    const strengthPipe = new StrengthPipe();
    beforeEach(() => {
    })
    it('Should be terminate with weak if value < 10', () => {

        const result = strengthPipe.transform(5);
        // assert
        expect(result).toBe("5 (weak)")
    })
    it('Should be terminate with strong if value between 10 and 20', () => {
        // acte
        const result = strengthPipe.transform(15);
        // assert
        expect(result).toBe("15 (strong)")
    })
    it('Should be terminate with unbelievable if value greater than 20', () => {

        // acte and expect in same statement
        expect(strengthPipe.transform(20)).toBe("20 (unbelievable)")
    })


})