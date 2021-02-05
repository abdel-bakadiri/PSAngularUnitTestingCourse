import { MessageService } from "./message.service";

describe("MessageService", () => {
    let messageService;
    beforeEach(() => {
        messageService = new MessageService();
    })
    it("Should be contain any message at start", () => {
        expect(messageService.messages.length).toBe(0);
    })
    it("Should be contain one message if we call add", () => {
        messageService.add('message1');
        expect(messageService.messages.length).toBe(1);
    })
    it("Should clear the messages table if we call clear", () => {
        messageService.add('message1');
        messageService.clear();
        expect(messageService.messages.length).toBe(0);
    })
})