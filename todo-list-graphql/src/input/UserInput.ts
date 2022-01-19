import { InputType, Field,} from "type-graphql";

@InputType()
class UserInput {
  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  age: number;
}

export { UserInput}
