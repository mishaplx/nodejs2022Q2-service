"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SingupService = void 0;
const common_1 = require("@nestjs/common");
const uuid_1 = require("uuid");
const bcrypt = require("bcrypt");
let SingupService = class SingupService {
    async singup(singupuser) {
        const newUser = Object.assign(Object.assign({}, singupuser), { password: await bcrypt.hash(singupuser.password, 10), id: (0, uuid_1.v4)(), version: 0, createdAt: new Date().toString(), updatedAt: new Date().toString() });
    }
};
SingupService = __decorate([
    (0, common_1.Injectable)()
], SingupService);
exports.SingupService = SingupService;
//# sourceMappingURL=singup.service.js.map