import { Controller, Get, Post, Delete, Body, Param } from '@nestjs/common';
import { LibraryService } from './library/library.service';

@Controller('library')
export class LibraryController {
  constructor(private readonly libraryService: LibraryService) {}

  @Get('books')
  async getAllBooks() {
    return this.libraryService.getAllBooks();
  }

  @Post('books')
  async addBook(@Body('name') name: string, @Body('isbn') isbn: string) {
    return this.libraryService.addBook(name, isbn);
  }

  @Delete('books/:id')
  async deleteBook(@Param('id') id: number) {
    return this.libraryService.deleteBook(id);
  }

  @Post('loan')
  async loanBook(@Body('bookId') bookId: number, @Body('readerId') readerId: number) {
    return this.libraryService.loanBook(bookId, readerId);
  }
}

