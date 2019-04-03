"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const type_graphql_1 = require("type-graphql");
const userSchema_1 = require("./schemas/userSchema");
const videoSchema_1 = require("./schemas/videoSchema");
const user_1 = require("./data/user");
const video_1 = require("./data/video");
require("reflect-metadata");
let videoSeller = class videoSeller {
    constructor() {
        this.Users = user_1.Users;
        this.Videos = video_1.Videos;
    }
    users() {
        return this.Users;
    }
    videos() {
        return this.Videos;
    }
    user(id) {
        const filteredUsers = user_1.Users.filter(user => user.id === id);
        return filteredUsers[0];
    }
    signUpUser(username, email, password) {
        const newUser = {
            id: user_1.Users.length + 1,
            username,
            password,
            email,
            videoId: []
        };
        user_1.Users.push(newUser);
        return newUser;
    }
    signInUser(username, email, password) {
        var searchedUser = user_1.Users.filter(user => user.username === username && user.email === email && user.password === password);
        return searchedUser[0];
    }
};
__decorate([
    type_graphql_1.Query(() => [userSchema_1.default]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], videoSeller.prototype, "users", null);
__decorate([
    type_graphql_1.Query(() => [videoSchema_1.default]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], videoSeller.prototype, "videos", null);
__decorate([
    type_graphql_1.Query(() => userSchema_1.default),
    __param(0, type_graphql_1.Arg("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], videoSeller.prototype, "user", null);
__decorate([
    type_graphql_1.Mutation(() => userSchema_1.default),
    __param(0, type_graphql_1.Arg("username")), __param(1, type_graphql_1.Arg("email")), __param(2, type_graphql_1.Arg("password")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", void 0)
], videoSeller.prototype, "signUpUser", null);
__decorate([
    type_graphql_1.Mutation(() => userSchema_1.default),
    __param(0, type_graphql_1.Arg("username")), __param(1, type_graphql_1.Arg("email")), __param(2, type_graphql_1.Arg("password")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", void 0)
], videoSeller.prototype, "signInUser", null);
videoSeller = __decorate([
    type_graphql_1.Resolver(),
    __metadata("design:paramtypes", [])
], videoSeller);
exports.default = videoSeller;
;
//# sourceMappingURL=resolvers.js.map