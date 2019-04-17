import axios from 'axios';
import usersSchema from './schemas/userSchema';
import videoSchema from './schemas/videoSchema';
import { Users } from './data/user';

export const getAllUsers = (): usersSchema[] => { return Users; }
// 매개변수 data는 limit 혹은 Id의 값이 될 수 있다.
export const getVideosByLimit = async (data: number, YTS_API: string) => {
    const {
        data: {
            data: { movies }
        }
    } = await axios(YTS_API, {
        params: {
            data
        }
    });
    return movies;
}
export const getSuggestionVideosById = async (id: number, YTS_API: string) => {
    const {
        data: {
            data: { movies }
        }
    } = await axios(YTS_API, {
        params: {
            movie_id: id
        }
    });
    return movies;
}
export const getVideoById = async (id: number, YTS_API: string) => {
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
export const getUserById = (id: number): usersSchema => {
    const filteredUsers = Users.filter(user => user.id === id); 
    return filteredUsers[0];
}

export const getUserByUsername = (username: string): usersSchema => {
    const filteredUsers = Users.filter(user => user.username === username); 
    return filteredUsers[0];
}

export const addStarVideo = (argVideoId: number, argUsername: string): boolean => {
    var userVideoId = getUserByUsername(argUsername).videoId;
    var searchedVideoId = userVideoId.find(videoId => videoId === argVideoId);
    if (searchedVideoId == undefined) {
        userVideoId.push(argVideoId);
        return true;
    }
    else
        return false;
}
export const singUpUser = (username: string, email: string, password: string): usersSchema => {
    const newUser: usersSchema = {
        id: getAllUsers().length + 1,
        username,
        password,
        email,
        videoId: []
    };
    getAllUsers().push(newUser);
    return newUser;
}
export const signInUser = (username: string, email: string, password: string): usersSchema | undefined => {
    var searchedUser = getAllUsers().find(user => user.username === username && user.email === email && user.password === password);
    return searchedUser;
}