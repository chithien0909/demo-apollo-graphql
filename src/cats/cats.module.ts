import { Module } from '@nestjs/common';
import { CatsResolver } from './cats.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CatsRepository } from './cats.repository';
import { CatsService } from './cats.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([CatsRepository]),
  ],
  providers: [
    CatsResolver,
    CatsService],
})
export class CatsModule {}
