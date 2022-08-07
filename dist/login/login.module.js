"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginModule = void 0;
const jwt_1 = require("@nestjs/jwt");
const singup_entity_1 = require("./../entitys/singup.entity");
const login_service_1 = require("./services/login.service");
const login_controller_1 = require("./controller/login.controller");
const typeorm_1 = require("@nestjs/typeorm");
const common_1 = require("@nestjs/common");
const dotenv = require("dotenv");
dotenv.config();
let LoginModule = class LoginModule {
};
LoginModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([singup_entity_1.SingupEntity])],
        controllers: [login_controller_1.LoginController],
        providers: [login_service_1.LoginService, jwt_1.JwtService],
    })
], LoginModule);
exports.LoginModule = LoginModule;
//# sourceMappingURL=login.module.js.map