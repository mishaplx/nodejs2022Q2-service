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
exports.SingupService = void 0;
const singup_entity_1 = require("./../entitys/singup.entity");
const common_1 = require("@nestjs/common");
const uuid_1 = require("uuid");
const bcrypt = require("bcrypt");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
let SingupService = class SingupService {
    constructor(singupRepository) {
        this.singupRepository = singupRepository;
    }
    async create(CreateUserDto) {
        const newUser = Object.assign(Object.assign({}, CreateUserDto), { id: (0, uuid_1.v4)(), password: await bcrypt.hash(CreateUserDto.password, 10) });
        const newUserSave = await this.singupRepository.create(newUser);
        await this.singupRepository.save(newUserSave);
        return newUserSave;
    }
};
SingupService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(singup_entity_1.SingupEntity)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], SingupService);
exports.SingupService = SingupService;
//# sourceMappingURL=singup.service.js.map