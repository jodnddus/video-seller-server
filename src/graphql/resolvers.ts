import { Arg, Resolver, Query, Mutation } from 'type-graphql';
import usersSchema from './schemas/userSchema';
import videoSchema from './schemas/videoSchema';
import 'reflect-metadata';
import {    getAllUsers, getUserById, 
            getSuggestionVideosById, getVideoById, getVideosByLimit, signInUser, 
            singUpUser, addStarVideo, getUserByUsername } from './behavior';

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
    async getvideosByLimit(@Arg("limit") limit: number) {
        let YTS_API = `https://yts.am/api/v2/list_movies.json?`;
        return getVideosByLimit(limit, YTS_API);
    }

    @Query(() => [videoSchema])
    async getVideoBySuggest(@Arg("id") id: number) {
        let YTS_API = `https://yts.am/api/v2/movie_suggestions.json?`;
        return getSuggestionVideosById(id, YTS_API);
    }

    @Query(() => videoSchema)
    async getVideoById(@Arg("id") id: number) {
        let YTS_API = `https://yts.am/api/v2/movie_details.json?`;
        return getVideoById(id, YTS_API);
    }

    @Query(() => usersSchema)
    getUserById(@Arg("id") id: number) {
        return getUserById(id);
    }

    @Query(() => usersSchema)
    getUserByUsername(@Arg("username") username: string) {
        return getUserByUsername(username);
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
    addStarVideo(@Arg("videoId") videoId: number, @Arg("username") username: string) {
        if (addStarVideo(videoId, username) == true)
            return true;
        else
            return false;
    }
};