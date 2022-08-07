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
exports.AlbumController = void 0;
const auth_guard_1 = require("./../auth/auth.guard");
const common_1 = require("@nestjs/common");
const error_handler_1 = require("../errorhandler/error.handler");
const album_service_1 = require("./album/album.service");
const album_dto_1 = require("./dto/album.dto");
const update_dto_1 = require("./dto/update.dto");
let AlbumController = class AlbumController {
    constructor(Albumservice) {
        this.Albumservice = Albumservice;
        this.error = new error_handler_1.ErrorHandler();
    }
    getall() {
        return this.Albumservice.getall();
    }
    async getById(id) {
        const Album = await this.Albumservice.getById(id);
        if (!Album)
            return this.error.notFound('Album');
        return Album;
    }
    create(createAlbum) {
        return this.Albumservice.create(createAlbum);
    }
    delUser(id) {
        if (id.split('-').length !== 5) {
            console.log(id.split('-').length);
            throw new common_1.BadRequestException({
                status: common_1.HttpStatus.BAD_REQUEST,
                error: 'BAD_REQUEST',
            });
        }
        if (this.Albumservice.delete(id)) {
            return this.Albumservice.delete(id);
        }
        else {
            throw new common_1.NotFoundException({
                status: common_1.HttpStatus.NOT_FOUND,
                error: 'NOT_FOUND',
            });
        }
    }
    updateTrack(id, UpdateAldto) {
        return this.Albumservice.update(id, UpdateAldto);
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, common_1.HttpCode)(200),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AlbumController.prototype, "getall", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AlbumController.prototype, "getById", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(201),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [album_dto_1.CreateAlbumDto]),
    __metadata("design:returntype", Promise)
], AlbumController.prototype, "create", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.HttpCode)(204),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AlbumController.prototype, "delUser", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_dto_1.UpdateAlbumDto]),
    __metadata("design:returntype", void 0)
], AlbumController.prototype, "updateTrack", null);
AlbumController = __decorate([
    (0, common_1.Controller)('album'),
    (0, common_1.UseGuards)(auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [album_service_1.AlbumService])
], AlbumController);
exports.AlbumController = AlbumController;
//# sourceMappingURL=album.controller.js.map