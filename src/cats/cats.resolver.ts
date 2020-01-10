import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';
import { CatType } from './inputs/cat.input';

@Resolver()
export class CatsResolver {
  constructor(
    private readonly catsService: CatsService,
  ) {}
  @Query(() => String)
  async hello() {
    return 'hello world';
  }
  @Query( () => [CreateCatDto])
  async cats() {
    return this.catsService.findAll();
  }
  @Mutation( () => CreateCatDto)
  async createCat(@Args('input') input: CatType) {
    return this.catsService.createCat(input);
  }
}
