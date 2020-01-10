import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CatsRepository } from './cats.repository';
import { CreateCatDto } from './dto/create-cat.dto';
import { Cats } from './cats.entity';
import { CatType } from './inputs/cat.input';

@Injectable()
export class CatsService {
  constructor(
    @InjectRepository(CatsRepository)
    private catsRepository: CatsRepository,
  ) {}
  async createCat(createCatDto: CatType): Promise<Cats> {
    return this.catsRepository.createCat(createCatDto);
  }
  async findAll(): Promise<any> {
    return await this.catsRepository.find();
  }
}
