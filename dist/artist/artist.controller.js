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
exports.ArtistController = void 0;
const common_1 = require("@nestjs/common");
const atrist_service_1 = require("./atrists/atrist.service");
const artist_dto_1 = require("./dto/artist.dto");
const update_dto_1 = require("./dto/update.dto");
let ArtistController = class ArtistController {
    constructor(artistservice) {
        this.artistservice = artistservice;
    }
    getall() {
        return this.artistservice.getall();
    }
    getById(id) {
        if (id.split('-').length !== 5) {
            console.log(id.split('-').length);
            throw new common_1.BadRequestException({
                status: common_1.HttpStatus.BAD_REQUEST,
                error: 'BAD_REQUEST',
            });
        }
        if (this.artistservice.getById(id)) {
            return this.artistservice.getById(id);
        }
        else {
            throw new common_1.NotFoundException({
                status: common_1.HttpStatus.NOT_FOUND,
                error: 'NOT_FOUND',
            });
        }
    }
    create(createArtist) {
        if (createArtist.hasOwnProperty('name') == false) {
            throw new common_1.BadRequestException({
                status: common_1.HttpStatus.BAD_REQUEST,
                message: 'BAD_REQUEST',
            });
        }
        return this.artistservice.create(createArtist);
    }
    delUser(id) {
        if (id.split('-').length !== 5) {
            console.log(id.split('-').length);
            throw new common_1.BadRequestException({
                status: common_1.HttpStatus.BAD_REQUEST,
                error: 'BAD_REQUEST',
            });
        }
        if (this.artistservice.delete(id)) {
            return this.artistservice.delete(id);
        }
        else {
            throw new common_1.NotFoundException({
                status: common_1.HttpStatus.NOT_FOUND,
                error: 'NOT_FOUND',
            });
        }
    }
    updateTrack(id, UpdateArtistdto) {
        return this.artistservice.update(id, UpdateArtistdto);
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, common_1.HttpCode)(200),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ArtistController.prototype, "getall", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ArtistController.prototype, "getById", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [artist_dto_1.CreateArtistDto]),
    __metadata("design:returntype", void 0)
], ArtistController.prototype, "create", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.HttpCode)(204),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ArtistController.prototype, "delUser", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_dto_1.UpdateArtistDto]),
    __metadata("design:returntype", void 0)
], ArtistController.prototype, "updateTrack", null);
ArtistController = __decorate([
    (0, common_1.Controller)('artist'),
    __metadata("design:paramtypes", [atrist_service_1.AtristService])
], ArtistController);
exports.ArtistController = ArtistController;
//# sourceMappingURL=artist.controller.js.map