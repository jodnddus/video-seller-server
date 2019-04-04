import { Arg, Resolver, Query, Mutation } from 'type-graphql';
import fetch from 'node-fetch';
import usersSchema from './schemas/userSchema';
import videoSchema from './schemas/videoSchema';
import { Users } from './data/user';
import 'reflect-metadata';

@Resolver()
export default class videoSeller {


    public YTS_API = `https://yts.am/api/v2/list_movies.json`;
    private Users: usersSchema[];

    constructor() {
        this.Users = Users;
    }

    @Query(() => [usersSchema])
    users() {
        return this.Users;
    }

    @Query(() => [videoSchema])
    videos() {
        return fetch(this.YTS_API).then(res => res.json()).then(json => json.data.movies);
    }

    @Query(() => usersSchema)
    user(@Arg("id") id: number) {
        const filteredUsers = Users.filter(user => user.id === id);
        return filteredUsers[0];
    }

    @Mutation(() => usersSchema)
    signUpUser(@Arg("username") username: string, @Arg("email") email: string, @Arg("password") password: string) {
        const newUser: usersSchema = {
            id: Users.length + 1,
            username,
            password,
            email,
            videoId: []
        };
        Users.push(newUser);
        return newUser;
    }

    @Mutation(() => usersSchema)
    signInUser(@Arg("username") username: string, @Arg("email") email: string, @Arg("password") password: string) {
        var searchedUser = Users.filter(user => user.username === username && user.email === email && user.password === password);
        return searchedUser[0];
    }
};