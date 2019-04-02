"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("./data/user");
const video_1 = require("./data/video");
exports.getUsers = function () { return user_1.Users; };
exports.getVideos = function () { return video_1.Videos; };
exports.getById = function (id) {
    const filteredUsers = user_1.Users.filter(user => user.id === id);
    return filteredUsers[0];
};
exports.signUpUser = function (username, email, password) {
    const newUser = {
        id: user_1.Users.length + 1,
        username,
        password,
        email,
        videoId: []
    };
    user_1.Users.push(newUser);
    return newUser;
};
exports.signInUser = function (username, email, password) {
    var searchedUser = user_1.Users.filter(user => user.username === username && user.email === email && user.password === password);
    return searchedUser[0];
};
//# sourceMappingURL=db.js.map