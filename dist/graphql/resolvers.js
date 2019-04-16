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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const type_graphql_1 = require("type-graphql");
const axios_1 = require("axios");
const userSchema_1 = require("./schemas/userSchema");
const videoSchema_1 = require("./schemas/videoSchema");
const user_1 = require("./data/user");
require("reflect-metadata");
let videoSeller = class videoSeller {
    constructor() {
        this.Users = user_1.Users;
    }
    users() {
        return this.Users;
    }
    getvideos(limit) {
        return __awaiter(this, void 0, void 0, function* () {
            let YTS_API = `https://yts.am/api/v2/list_movies.json?`;
            const { data: { data: { movies } } } = yield axios_1.default(YTS_API, {
                params: {
                    limit
                }
            });
            return movies;
        });
    }
    getVideoById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let YTS_API = `https://yts.am/api/v2/movie_details.json?`;
            const { data: { data: { movie } } } = yield axios_1.default(YTS_API, {
                params: {
                    movie_id: id
                }
            });
            return movie;
        });
    }
    getVideoSuggest(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let YTS_API = `https://yts.am/api/v2/movie_suggestions.json?`;
            const { data: { data: { movies } } } = yield axios_1.default(YTS_API, {
                params: {
                    movie_id: id
                }
            });
            return movies;
        });
    }
    user(id) {
        const filteredUsers = user_1.Users.filter(user => user.id === id);
        return filteredUsers[0];
    }
    addStarVideo(videoId, userId) {
        try {
            let user = this.user(userId);
            user.videoId.push(videoId);
            return true;
        }
        catch (e) {
            console.error(e);
            return false;
        }
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
    __param(0, type_graphql_1.Arg("limit")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], videoSeller.prototype, "getvideos", null);
__decorate([
    type_graphql_1.Query(() => videoSchema_1.default),
    __param(0, type_graphql_1.Arg("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], videoSeller.prototype, "getVideoById", null);
__decorate([
    type_graphql_1.Query(() => [videoSchema_1.default]),
    __param(0, type_graphql_1.Arg("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], videoSeller.prototype, "getVideoSuggest", null);
__decorate([
    type_graphql_1.Query(() => userSchema_1.default),
    __param(0, type_graphql_1.Arg("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], videoSeller.prototype, "user", null);
__decorate([
    type_graphql_1.Mutation(() => Boolean),
    __param(0, type_graphql_1.Arg("videoId")), __param(1, type_graphql_1.Arg("userId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], videoSeller.prototype, "addStarVideo", null);
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