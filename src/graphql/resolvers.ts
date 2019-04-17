import { Arg, Resolver, Query, Mutation } from 'type-graphql';
import usersSchema from './schemas/userSchema';
import videoSchema from './schemas/videoSchema';
import 'reflect-metadata';
import {    getAllUsers, getUserById, 
            getVideosByLimitAndId, signInUser, 
            singUpUser, addStarVideo } from './behavior';

@Resolver()
export default class videoSeller {

    private Users: usersSchema[];

    constructor() {
        this.Users = getAllUsers();
    }

    @Query(() => [usersSchema])
    users() {
        return getAllUsers();
    }

    @Query(() => [videoSchema])
    async getvideos(@Arg("limit") limit: number) {
        let YTS_API = `https://yts.am/api/v2/list_movies.json?`;
        return getVideosByLimitAndId(limit, YTS_API);
    }

    @Query(() => videoSchema)
    async getVideoById(@Arg("id") id: number) {
        let YTS_API = `https://yts.am/api/v2/movie_details.json?`;
        return getVideosByLimitAndId(id, YTS_API);
    }

    @Query(() => [videoSchema])
    async getVideoSuggest(@Arg("id") id: number) {
        let YTS_API = `https://yts.am/api/v2/movie_suggestions.json?`;
        return getVideosByLimitAndId(id, YTS_API);
    }

    @Query(() => usersSchema)
    user(@Arg("id") id: number) {
        return getUserById(id);
    }

    @Mutation(() => usersSchema)
    signInUser(@Arg("username") username: string, @Arg("email") email: string, @Arg("password") password: string) {
        return signInUser(username, email, password);
    }

    @Mutation(() => usersSchema)
    signUpUser(@Arg("username") username: string, @Arg("email") email: string, @Arg("password") password: string) {
        return singUpUser(username, email, password);
    }

    @Mutation(() => Boolean)
    addStarVideo(@Arg("videoId") videoId: number, @Arg("userId") userId: number) {
        if (addStarVideo(videoId, userId) == true)
            return true;
        else
            return false;
    }
};