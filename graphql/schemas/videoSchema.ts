import { Field, Int, ObjectType} from 'type-graphql';
import 'reflect-metadata';

@ObjectType()
export default class users {
    @Field(type => Int)
    id: number;

    @Field()
    name: string;

    @Field(type => Int)
    price: number;
}