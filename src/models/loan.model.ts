import { Model, Column, Table, ForeignKey } from 'sequelize-typescript';
import { Book } from './book.model';
import { Reader } from './reader.model';

@Table
export class Loan extends Model<Loan> {
  @ForeignKey(() => Book)
  @Column
  bookId: number;

  @ForeignKey(() => Reader)
  @Column
  readerId: number;

  @Column
  loanDate: Date;
}
