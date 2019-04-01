import Users from './data/user';
import Videos from './data/video';

export const getUsers = () => Users;
export const getVideos = () => Videos;
export const getById = id => {
    const filteredUsers = Users.filter(user => user.id === id);
    return filteredUsers[0];
};
export const signUpUser = (username, email, password) => {
    const newUser = {
        id: Users.length + 1,
        username,
        password,
        email,
        videoid: []
    };
    Users.push(newUser);
    return newUser;
};
export const signInUser = (username, email, password) => 
Users.filter(user => user.username === username &&
                     user.email === email &&
                     user.password === password);