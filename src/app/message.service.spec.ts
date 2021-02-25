import { MessageService } from "./message.service";

describe("Message service", () => {
    // arrange
    let message;
    beforeEach(() => {
        message = new MessageService();
    })
    it("Should have a messages array empty", () => {
        // acte 
        // we don't have acte because of we want not change the state
        // assert
        expect(message.messages.length).toBe(0);
    })
    it("Should have a message with one element when add is called", () => {
        // acte 
        message.add("First message");
        // assert
        expect(message.messages.length).toBe(1);
    })
    it("Should have two messages ", () => {
        // acte 
        message.add("First message");
        message.add("Seconde message");
        // assert
        expect(message.messages.length).toBe(2);
    })
    it("Should have no message when clear is called ", () => {
        // acte 
        message.add("First message");
        message.add("Seconde message");
        message.clear();
        // assert
        expect(message.messages.length).toBe(0);
    })
})