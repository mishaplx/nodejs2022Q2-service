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
exports.UserService = void 0;
const user_entity_1 = require("./../../entitys/user.entity");
const common_1 = require("@nestjs/common");
const bcrypt = require("bcrypt");
const uuid_1 = require("uuid");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let UserService = class UserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    getall() {
        return this.userRepository.find();
    }
    async create(CreateUserDto) {
        const newUser = Object.assign(Object.assign({}, CreateUserDto), { id: (0, uuid_1.v4)(), password: await bcrypt.hash(CreateUserDto.password, 10), version: 0, createdAt: new Date().toString(), updatedAt: new Date().toString() });
        const newUserSave = await this.userRepository.create(newUser);
        await this.userRepository.save(newUserSave);
        return newUserSave;
    }
    async getById(id) {
        const UserById = await this.userRepository.findBy({ id: id });
        console.log(UserById);
        return UserById[0];
    }
    async updatePass(id, updatePassdto) {
        const user = await this.userRepository.findBy({ id: id });
        console.log(user);
        const check = async function (updatePassdto) {
            const match = await bcrypt.compare(updatePassdto.oldPassowrd, user[0].password);
            return match;
        };
        const checkFlag = check(updatePassdto);
        if (checkFlag) {
            const nerPass = await bcrypt.hash(updatePassdto.newPassword, 10);
            this.userRepository.update({ password: user[0].password }, { password: nerPass });
            return user;
        }
    }
    deleteUser(id) {
        const deleteUser = this.userRepository.delete({ id: id });
        return deleteUser;
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.UserEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map