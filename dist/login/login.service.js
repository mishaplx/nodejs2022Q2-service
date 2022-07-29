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
exports.LoginService = void 0;
const singup_entity_1 = require("./../entitys/singup.entity");
const typeorm_1 = require("@nestjs/typeorm");
const common_1 = require("@nestjs/common");
const dotenv = require("dotenv");
const bcrypt = require("bcrypt");
const typeorm_2 = require("typeorm");
const jwt_1 = require("@nestjs/jwt");
dotenv.config();
let LoginService = class LoginService {
    constructor(userRep, jwtService) {
        this.userRep = userRep;
        this.jwtService = jwtService;
    }
    async login(loginUser) {
        const user = await this.userRep.findBy({ login: loginUser.login });
        if (user.length) {
            const match = await bcrypt.compare(loginUser.password, user[0].password);
            if (match) {
                return {
                    token: await this.jwtService.sign({
                        id: user[0].id,
                        login: user[0].login,
                        password: user[0].password,
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
    __param(0, (0, typeorm_1.InjectRepository)(singup_entity_1.SingupEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        jwt_1.JwtService])
], LoginService);
exports.LoginService = LoginService;
//# sourceMappingURL=login.service.js.map