import { Field, 
        Int,
        ObjectType, 
        Float} from 'type-graphql';
import 'reflect-metadata';

@ObjectType()
export default class videos {
    @Field(type => Int, { nullable: true })
    id: number;

    @Field({ nullable: true })
    title: string;

    @Field(() => String, { nullable: true })
    genres: string[];

    @Field(type => Float, { nullable: true })
    rating: number;

    @Field({ nullable: true })
    language: string;

    @Field({ nullable: true})
    medium_cover_image: string;

    @Field({ nullable: true })
    description_intro: string;
}