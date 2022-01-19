import { Resolver, Arg, Query, Mutation} from "type-graphql";
import { UserInput } from "../input/UserInput";
import { User } from "../models/User";



@Resolver(User)
export class PrimaryResolver {
  @Query((_) => [User])
  async getSting() {
    return await User.find();
  }

  @Mutation((_) => User)
  async createUser(@Arg("user") user: UserInput) {
    const newUser = User.create(user);
    return await newUser.save();
  }
}
