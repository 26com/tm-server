import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IMessage } from './interfaces/message.interface';
import { Message } from './message.entity';

@Injectable()
export class MessagesService {
  constructor(
    @InjectRepository(Message) private messageRepository: Repository<Message>,
  ) {}
  private readonly messages: IMessage[] = [];

  create(message: IMessage) {
    // this.messages.push(message);
    this.messageRepository.save(message);
  }

  getAll(): IMessage[] {
    return this.messages;
  }
}
