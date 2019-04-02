import { Users, userData } from './data/user';
import { Videos, videoData } from './data/video';

export const getUsers: () => userData[] = function() { return Users; };
export const getVideos: () => videoData[] = function() { return Videos; };
export const getById: (id: number) => userData = function(id: number) {
    const filteredUsers = Users.filter(user => user.id === id);
    return filteredUsers[0];
};
export const signUpUser: (username: string, email: string, password: string) => userData = 
    function (username: string, email: string, password: string) {
        const newUser: userData = {
            id: Users.length + 1,
            username,
            password,
            email,
            videoId: []
        };
        Users.push(newUser);
        return newUser;
    };
export const signInUser: (username: string, email: string, password: string) => userData = 
    function (username: string, email: string, password: string) {
        var searchedUser = Users.filter(user => user.username === username && user.email === email && user.password === password);
        return searchedUser[0];
    };