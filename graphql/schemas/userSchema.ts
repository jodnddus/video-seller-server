import { Field, Int, ObjectType} from 'type-graphql';
import 'reflect-metadata';

@ObjectType()
export default class users {
    @Field(type=> Int, { nullable: true })
    id: number;

    @Field({ nullable: true })
    username: string;

    @Field({ nullable: true })
    email: string;

    @Field({ nullable: true })
    password: string;

    @Field(type => Int)
    videoId: number[];
}