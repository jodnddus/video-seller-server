import { Field, Int, ObjectType, buildSchema} from 'type-graphql';
import 'reflect-metadata';

@ObjectType()
export default class users {
    @Field(type=> Int)
    id: number;

    @Field()
    username: string;

    @Field()
    email: string;

    @Field()
    password: string;
}