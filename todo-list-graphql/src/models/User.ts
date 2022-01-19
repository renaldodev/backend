import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";
import { ObjectType, Field, ID} from "type-graphql";

@Entity()
@ObjectType()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  @Field((_) => ID)

  id: string;
  @Column()
  @Field()
  
  firstName: string;
  @Column()
  @Field()
  
  lastName: string;
  
  @Column({ type: "int" })
  @Field()
  age: number;
}
