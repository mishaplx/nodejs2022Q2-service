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
exports.FavsController = void 0;
const auth_guard_1 = require("./../auth/auth.guard");
const common_1 = require("@nestjs/common");
const favs_service_1 = require("./favs/favs.service");
let FavsController = class FavsController {
    constructor(Favservice) {
        this.Favservice = Favservice;
    }
    getAll() {
        return this.Favservice.gelAll();
    }
    addTrack(id) {
        return this.Favservice.addTrack(id);
    }
    addAlbum(id) {
        return this.Favservice.addAlbum(id);
    }
    addArtist(id) {
        return this.Favservice.addArtist(id);
    }
    deleteTrack(id) {
        return this.Favservice.deleteTrack(id);
    }
    deleteAlbum(id) {
        return this.Favservice.deleteAlbum(id);
    }
    deleteArtist(id) {
        return this.Favservice.deleteArtist(id);
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, common_1.HttpCode)(200),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], FavsController.prototype, "getAll", null);
__decorate([
    (0, common_1.Post)('track/:id'),
    (0, common_1.HttpCode)(201),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FavsController.prototype, "addTrack", null);
__decorate([
    (0, common_1.Post)('album/:id'),
    (0, common_1.HttpCode)(201),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FavsController.prototype, "addAlbum", null);
__decorate([
    (0, common_1.Post)('artist/:id'),
    (0, common_1.HttpCode)(201),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FavsController.prototype, "addArtist", null);
__decorate([
    (0, common_1.Delete)('track/:id'),
    (0, common_1.HttpCode)(204),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FavsController.prototype, "deleteTrack", null);
__decorate([
    (0, common_1.Delete)('album/:id'),
    (0, common_1.HttpCode)(204),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FavsController.prototype, "deleteAlbum", null);
__decorate([
    (0, common_1.Delete)('track/:id'),
    (0, common_1.HttpCode)(204),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FavsController.prototype, "deleteArtist", null);
FavsController = __decorate([
    (0, common_1.Controller)('favs'),
    (0, common_1.UseGuards)(auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [favs_service_1.FavsService])
], FavsController);
exports.FavsController = FavsController;
//# sourceMappingURL=favs.controller.js.map