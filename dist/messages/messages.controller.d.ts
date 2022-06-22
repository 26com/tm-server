import { createMessageDto } from './dto/create-message.dto';
import { updateMessageDto } from './dto/update-message.dto';
import { MessagesService } from './messages.services';
export declare class MessagesController {
    private messagesService;
    constructor(messagesService: MessagesService);
    getAll(): import("./interfaces/message.interface").IMessage[];
    getOne(id: string): string;
    create(message: createMessageDto): void;
    change(message: updateMessageDto, id: string): string;
    remove(id: string): string;
}
