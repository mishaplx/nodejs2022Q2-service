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
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const user_dto_1 = require("./dto/user.dto");
const update_dto_1 = require("./dto/update.dto");
const user_service_1 = require("./user/user.service");
let UserController = class UserController {
    constructor(Userservice) {
        this.Userservice = Userservice;
    }
    getall() {
        return this.Userservice.getall();
    }
    create(createuser) {
        if (createuser.hasOwnProperty('login') == false ||
            createuser.hasOwnProperty('password') == false) {
            throw new common_1.BadRequestException({
                status: common_1.HttpStatus.BAD_REQUEST,
                message: 'BAD_REQUEST',
            });
        }
        return this.Userservice.create(createuser);
    }
    getById(id) {
        if (id.split('-').length !== 5) {
            console.log(id.split('-').length);
            throw new common_1.BadRequestException({
                status: common_1.HttpStatus.BAD_REQUEST,
                error: 'BAD_REQUEST',
            });
        }
        if (this.Userservice.getById(id)) {
            return this.Userservice.getById(id);
        }
        else {
            throw new common_1.NotFoundException({
                status: common_1.HttpStatus.NOT_FOUND,
                error: 'NOT_FOUND',
            });
        }
    }
    updatePass(id, updatePassdto) {
        if (id.split('-').length !== 5) {
            console.log(id.split('-').length);
            throw new common_1.BadRequestException({
                status: common_1.HttpStatus.BAD_REQUEST,
                error: 'BAD_REQUEST',
            });
        }
        if (this.Userservice.updatePass(id, updatePassdto)) {
            return this.Userservice.updatePass(id, updatePassdto);
        }
        else {
            throw new common_1.NotFoundException({
                status: common_1.HttpStatus.NOT_FOUND,
                error: 'NOT_FOUND',
            });
        }
    }
    delUser(id) {
        if (id.split('-').length !== 5) {
            console.log(id.split('-').length);
            throw new common_1.BadRequestException({
                status: common_1.HttpStatus.BAD_REQUEST,
                error: 'BAD_REQUEST',
            });
        }
        if (this.Userservice.deleteUser(id)) {
            return this.Userservice.deleteUser(id);
        }
        else {
            throw new common_1.NotFoundException({
                status: common_1.HttpStatus.NOT_FOUND,
                error: 'NOT_FOUND',
            });
        }
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, common_1.HttpCode)(200),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UserController.prototype, "getall", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(201),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.CreateUserDto]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "getById", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_dto_1.UpdatePasswordDto]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "updatePass", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.HttpCode)(204),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "delUser", null);
UserController = __decorate([
    (0, common_1.Controller)('user'),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map