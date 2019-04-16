import axios from 'axios';
import usersSchema from './schemas/userSchema';
import videoSchema from './schemas/videoSchema';
import { Users } from './data/user';

export const getAllUsers = (): usersSchema[] => { return Users; }
// 매개변수 data는 limit 혹은 Id의 값이 될 수 있다.
export const getVideosByLimitAndId = async (data: number, YTS_API: string) => {
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
export const getUserById = (id: number): usersSchema => {
    const filteredUsers = Users.filter(user => user.id === id); 
    return filteredUsers[0];
}
export const addStarVideo = (videoId: number, userId: number): boolean => {
    try {
        let user = getUserById(userId);
        user.videoId.push(videoId);
        return true;
    } catch(e) {
        console.error(e);
        return false;
    }
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
export const signInUser = (username: string, email: string, password: string): boolean => {
    var searchedUser = getAllUsers().find(user => user.username === username && user.email === email && user.password === password);
    if(searchedUser === undefined)
        return false;
    else
        return true;
}