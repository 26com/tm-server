import { Repository } from 'typeorm';
import { IMessage } from './interfaces/message.interface';
import { Message } from './message.entity';
export declare class MessagesService {
    private messageRepository;
    constructor(messageRepository: Repository<Message>);
    private readonly messages;
    create(message: IMessage): void;
    getAll(): IMessage[];
}
