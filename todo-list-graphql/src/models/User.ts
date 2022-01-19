import { ObjectType,ID, Field } from "type-graphql";

@ObjectType()
class User{
   @Field(_=>ID)
   id:number;
   
}
export {User}
