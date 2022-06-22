import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { createMessageDto } from './dto/create-message.dto';
import { updateMessageDto } from './dto/update-message.dto';
import { MessagesService } from './messages.services';

@Controller('messages')
export class MessagesController {
  constructor(private messagesService: MessagesService) {}
  @Get()
  getAll() {
    return this.messagesService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return '~~> One/Message ID - ' + id;
  }

  @Post()
  create(@Body() message: createMessageDto) {
    this.messagesService.create(message);
  }

  @Put(':id')
  change(@Body() message: updateMessageDto, @Param('id') id: string) {
    return '~~> Change Mess' + message.text + ' with ID - ' + id;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return '~~> Delete Mess: ' + id;
  }
}
