import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Book } from '../models/book.model';
import { Reader } from '../models/reader.model';
import { Loan } from '../models/loan.model';
import { LibraryController } from './library.controller';
import { LibraryService } from './library/library.service';

@Module({
  imports: [SequelizeModule.forFeature([Book, Reader, Loan])], // Agrega esta línea
  controllers: [LibraryController],
  providers: [LibraryService],
})
export class LibraryModule {}
