import { Field, Int, ObjectType} from 'type-graphql';
import 'reflect-metadata';

@ObjectType()
export default class videos {
    @Field(type => Int)
    id: number;

    @Field()
    name: string;

    @Field(type => Int)
    price: number;
}