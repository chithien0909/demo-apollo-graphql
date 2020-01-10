import { Field, InputType, Int } from 'type-graphql';

@InputType()
export class CatType {
  @Field()
  readonly name: string;
  @Field(() => Int)
  readonly age: number;
  @Field()
  readonly breed: string;
}
