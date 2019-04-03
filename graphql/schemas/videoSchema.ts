import { Field, Int, ObjectType} from 'type-graphql';
import 'reflect-metadata';

@ObjectType()
export default class videos {
    @Field(type => Int, { nullable: true })
    id: number;

    @Field({ nullable: true })
    name: string;

    @Field(type => Int, { nullable: true })
    price: number;
}