import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Book } from './models/book.model';
import { Reader } from './models/reader.model';
import { Loan } from './models/loan.model';
import { LibraryModule } from './library/library.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost', // Cambia a '127.0.0.1' si es necesario
      port: 3306,
      username: 'root', // Usuario de la base de datos
      password: '', // Contraseña de la base de datos
      database: 'library_management', // Nombre de la base de datos
      models: [Book, Reader, Loan],
      autoLoadModels: true,
      sync: {
        force: false, // Cambia a false si no quieres borrar y recrear las tablas en cada inicio
      }
    }),
    LibraryModule,
  ],
})
export class AppModule {}
