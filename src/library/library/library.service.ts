import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Book } from '../../models/book.model';
import { Reader } from '../../models/reader.model';
import { Loan } from '../../models/loan.model';

@Injectable()
export class LibraryService {
  constructor(
    @InjectModel(Book) private bookModel: typeof Book,
    @InjectModel(Reader) private readerModel: typeof Reader,
    @InjectModel(Loan) private loanModel: typeof Loan,
  ) {}

  async getAllBooks(): Promise<Book[]> {
    return this.bookModel.findAll();
  }

  async addBook(name: string, isbn: string): Promise<Book> {
    return this.bookModel.create({ name, isbn });
  }

  async deleteBook(bookId: number): Promise<void> {
    const book = await this.bookModel.findByPk(bookId);
    if (book) {
      await book.destroy();
    }
  }

  async loanBook(bookId: number, readerId: number): Promise<Loan> {
    const book = await this.bookModel.findByPk(bookId);
    const reader = await this.readerModel.findByPk(readerId);

    if (!book || !reader || !book.available) {
      throw new Error('Invalid book or reader');
    }

    const loan = await this.loanModel.create({
      bookId,
      readerId,
      loanDate: new Date(),
    });

    book.available = false;
    book.readerId = readerId;
    await book.save();

    return loan;
  }
}
