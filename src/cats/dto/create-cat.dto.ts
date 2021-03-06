import { ObjectType, Field, Int, ID } from 'type-graphql';

@ObjectType()
export class CreateCatDto {
  @Field( () => ID)
  readonly id: number;
  @Field()
  readonly name: string;
  @Field(() => Int)
  readonly age: number;
  @Field()
  readonly breed: string;
}
