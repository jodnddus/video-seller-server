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
const db_1 = require("./db");
const userSchema_1 = require("./schemas/userSchema");
const videoSchema_1 = require("./schemas/videoSchema");
require("reflect-metadata");
let videoSeller = class videoSeller {
    constructor(videoService) {
        this.videoService = videoService;
    }
    users() {
        db_1.getUsers();
    }
    videos() {
        db_1.getVideos();
    }
    user(id) {
        db_1.getById(id);
    }
    signUpUser(username, email, password) {
        db_1.signUpUser(username, email, password);
    }
    signInUser(username, email, password) {
        db_1.signInUser(username, email, password);
    }
};
__decorate([
    type_graphql_1.Query(returns => userSchema_1.default, { nullable: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], videoSeller.prototype, "users", null);
__decorate([
    type_graphql_1.Query(returns => videoSchema_1.default, { nullable: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], videoSeller.prototype, "videos", null);
__decorate([
    type_graphql_1.Query(returns => userSchema_1.default, { nullable: true }),
    __param(0, type_graphql_1.Arg("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], videoSeller.prototype, "user", null);
__decorate([
    type_graphql_1.Mutation(returns => userSchema_1.default),
    __param(0, type_graphql_1.Arg("username")), __param(1, type_graphql_1.Arg("email")), __param(2, type_graphql_1.Arg("password")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", void 0)
], videoSeller.prototype, "signUpUser", null);
__decorate([
    type_graphql_1.Mutation(returns => userSchema_1.default),
    __param(0, type_graphql_1.Arg("username")), __param(1, type_graphql_1.Arg("email")), __param(2, type_graphql_1.Arg("password")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", void 0)
], videoSeller.prototype, "signInUser", null);
videoSeller = __decorate([
    type_graphql_1.Resolver(of => userSchema_1.default),
    __metadata("design:paramtypes", [videoSeller])
], videoSeller);
exports.default = videoSeller;
;
//# sourceMappingURL=resolvers.js.map