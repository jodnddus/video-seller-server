import { Arg, Resolver, Query, Mutation } from 'type-graphql';
import usersSchema from './schemas/userSchema';
import videoSchema from './schemas/videoSchema';
import { Users, userData } from './data/user';
import { Videos, videoData } from './data/video';
import 'reflect-metadata';

@Resolver()
export default class videoSeller {
    private Users: userData[];
    private Videos: videoData[];

    constructor() {
        this.Users = Users;
        this.Videos = Videos;
    }

    @Query(() => [usersSchema])
    users() {
        return this.Users;
    }

    @Query(() => [videoSchema])
    videos() {
        return this.Videos;
    }

    @Query(() => usersSchema)
    user(@Arg("id") id: number) {
        const filteredUsers = Users.filter(user => user.id === id);
        return filteredUsers[0];
    }

    @Mutation(() => usersSchema)
    signUpUser(@Arg("username") username: string, @Arg("email") email: string, @Arg("password") password: string) {
        const newUser: userData = {
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