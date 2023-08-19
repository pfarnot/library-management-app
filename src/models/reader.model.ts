import { Model, Column, Table, HasMany } from 'sequelize-typescript';
import { Book } from './book.model';

@Table
export class Reader extends Model<Reader> {
  @Column({ primaryKey: true, autoIncrement: true })
  id: number;

  @Column
  name: string;

  @HasMany(() => Book)
  books: Book[];
}
