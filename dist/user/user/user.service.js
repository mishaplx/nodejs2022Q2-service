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
const error_handler_1 = require("./../../errorhandler/error.handler");
const user_entity_1 = require("./../../entitys/user.entity");
const common_1 = require("@nestjs/common");
const bcrypt = require("bcrypt");
const uuid_1 = require("uuid");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let UserService = class UserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
        this.error = new error_handler_1.ErrorHandler();
        this.userResponce = {
            id: 'id',
            login: '',
            version: 1,
            updatedAt: 1,
            createdAt: 1,
        };
    }
    findAll() {
        return this.userRepository.find();
    }
    async create(CreateUserDto) {
        const newUser = Object.assign(Object.assign({}, CreateUserDto), { id: (0, uuid_1.v4)(), password: await bcrypt.hash(CreateUserDto.password, 10), version: 0, createdAt: new Date().toString(), updatedAt: new Date().toString() });
        const newUserSave = await this.userRepository.create(newUser);
        await this.userRepository.save(newUserSave);
        for (const key in newUser) {
            if (key !== 'password') {
                this.userResponce[key] = newUser[key];
            }
        }
        return this.userResponce;
    }
    async getById(id) {
        const UserById = await this.userRepository.findBy({ id: id });
        return UserById[0];
    }
    async updatePass(id, updatePassdto) {
        const user = await this.userRepository.findBy({ id: id });
        const allUser = await this.findAll();
        console.log(user);
        if (!user) {
            return this.error.notFound('user');
        }
        else {
            allUser.map((User) => {
                if (User.id === id) {
                    if (User.password !== updatePassdto.oldPassowrd) {
                        return this.error.notMatch();
                    }
                    User.password = updatePassdto.newPassword;
                    User.version += 1;
                    User.updatedAt = Date.now().toString();
                    for (const key in User) {
                        if (key !== 'password') {
                            this.userResponce[key] = User[key];
                        }
                    }
                }
            });
            return this.userResponce;
        }
    }
    deleteUser(id) {
        const user = this.userRepository.delete({ id: id });
        return !!user ? this.error.deleted('user') : null;
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.UserEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map