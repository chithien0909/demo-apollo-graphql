import { EntityRepository, Repository } from 'typeorm';
import { Cats } from './cats.entity';
import { CatType } from './inputs/cat.input';

@EntityRepository(Cats)
export class CatsRepository extends Repository<Cats> {
  async createCat(createCatDto: CatType): Promise<Cats> {
    const { name, age, breed} = createCatDto;
    const cat = new Cats();
    cat.name = name;
    cat.age = age;
    cat.breed = breed;
    return await cat.save();
  }
}
