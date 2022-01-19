import {
  Resolver,
  Arg,
  Query,
} from "type-graphql";

@Resolver()
export class PrimaryResolver{
  @Query((_) => String)
  getSting(@Arg("nome") nome: string) {
    return  `ola ${nome}`;
  }
}
