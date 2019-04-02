import { Arg, Resolver, Query, Mutation } from 'type-graphql';
import { getUsers, getVideos, getById, signUpUser, signInUser } from './db';
import usersSchema from './schemas/userSchema';
import videoSchema from './schemas/videoSchema';
import { Users, userData } from './data/user';
import { Videos, videoData } from './data/video';
import 'reflect-metadata';


@Resolver(of => usersSchema)
export default class videoSeller {
    constructor(private videoService: videoSeller) {}
    @Query(returns => usersSchema, { nullable: true })
    users() {
        getUsers();
    }

    @Query(returns => videoSchema, { nullable: true })
    videos() {
        getVideos();
    }

    @Query(returns => usersSchema, { nullable: true })
    user(@Arg("id") id: number) {
        getById(id);
    }

    @Mutation(returns => usersSchema)
    signUpUser(@Arg("username") username: string, @Arg("email") email: string, @Arg("password") password: string) {
        signUpUser(username, email, password);
    }

    @Mutation(returns => usersSchema)
    signInUser(@Arg("username") username: string, @Arg("email") email: string, @Arg("password") password: string) {
        signInUser(username, email, password);
    }
};