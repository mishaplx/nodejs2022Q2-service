"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const bcrypt = require("bcrypt");
const uuid_1 = require("uuid");
const db = require("../../db/db");
let UserService = class UserService {
    constructor() {
        this.user = db.user;
    }
    getall() {
        return db.user;
    }
    async create(CreateUserDto) {
        const newUser = Object.assign(Object.assign({}, CreateUserDto), { id: (0, uuid_1.v4)(), password: await bcrypt.hash(CreateUserDto.password, 10), version: 0, createdAt: new Date().toString(), updatedAt: new Date().toString() });
        db.user.push(newUser);
        return newUser;
    }
    getById(id) {
        return db.user.find((item) => item.id === id);
    }
    async updatePass(id, updatePassdto) {
        const user = db.user.find((item) => item.id === id);
        const check = async function (updatePassdto) {
            console.log(updatePassdto);
            const match = await bcrypt.compare(updatePassdto.oldPassowrd, user.password);
            return match;
        };
        const checkFlag = check(updatePassdto);
        if (checkFlag) {
            user.password = await bcrypt.hash(updatePassdto.newPassword, 10);
            return user;
        }
        else {
            return !checkFlag;
        }
    }
    deleteUser(id) {
        const newArr = db.user.filter((item) => item.id !== id);
        console.log(newArr);
        this.user = newArr;
        if (this.user.length == db.user.length) {
            return false;
        }
        return this.user;
    }
};
UserService = __decorate([
    (0, common_1.Injectable)()
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map