import { Arg, Resolver, Query, Mutation } from 'type-graphql';
import axios from 'axios';
import usersSchema from './schemas/userSchema';
import videoSchema from './schemas/videoSchema';
import { Users } from './data/user';
import 'reflect-metadata';

@Resolver()
export default class videoSeller {

    private Users: usersSchema[];

    constructor() {
        this.Users = Users;
    }

    @Query(() => [usersSchema])
    users() {
        return this.Users;
    }

    @Query(() => [videoSchema])
    async getvideos(@Arg("limit") limit: number) {
        let YTS_API = `https://yts.am/api/v2/list_movies.json?`;
        const {
            data: {
                data: { movies }
            }
        } = await axios(YTS_API, {
            params: {
                limit
            }
        });
        return movies;
    }

    @Query(() => videoSchema)
    async getVideoById(@Arg("id") id: number) {
        let YTS_API = `https://yts.am/api/v2/movie_details.json?`;
        const {
            data: {
                data: { movie }
            }
        } = await axios(YTS_API, {
            params: {
                movie_id: id
            }
        });
        return movie;
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