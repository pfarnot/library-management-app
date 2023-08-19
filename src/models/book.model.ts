import { Model, Column, Table, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Reader } from './reader.model';

@Table
export class Book extends Model<Book> {
  @Column({ primaryKey: true, autoIncrement: true })
  id: number;

  @Column
  name: string;

  @Column
  isbn: string;

  @Column({ defaultValue: true })
  available: boolean;

  @ForeignKey(() => Reader)
  @Column
  readerId: number;

  @BelongsTo(() => Reader)
  reader: Reader;
}
