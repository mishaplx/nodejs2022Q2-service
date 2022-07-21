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
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginService = void 0;
const common_1 = require("@nestjs/common");
const db = require("../db/db");
const dotenv = require("dotenv");
const bcrypt = require("bcrypt");
const jwt_1 = require("@nestjs/jwt");
dotenv.config();
let LoginService = class LoginService {
    constructor(jwtService) {
        this.jwtService = jwtService;
    }
    async singup(loginUser) {
        const user = () => db.user.find((item) => item.login === loginUser.login);
        const currentUser = user();
        if (currentUser) {
            const match = await bcrypt.compare(loginUser.password, currentUser.password);
            if (match) {
                return {
                    token: await this.jwtService.sign({
                        id: currentUser.id,
                        login: currentUser.firstName,
                        password: currentUser.password,
                    }, {
                        secret: process.env.JWT_SECRET_KEY,
                    }),
                };
            }
        }
    }
    async verify(token) {
        return this.jwtService.verifyAsync(token, {
            secret: process.env.JWT_SECRET_KEY,
        });
    }
};
LoginService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_1.JwtService])
], LoginService);
exports.LoginService = LoginService;
//# sourceMappingURL=login.service.js.map