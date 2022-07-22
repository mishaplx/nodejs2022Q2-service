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
const error_handler_1 = require("./../errorhandler/error.handler");
const common_1 = require("@nestjs/common");
const atrist_service_1 = require("./artists/atrist.service");
const create_artist_dto_1 = require("./dto/create-artist.dto");
const update_artist_dto_1 = require("./dto/update-artist.dto");
let ArtistController = class ArtistController {
    constructor(artistservice) {
        this.artistservice = artistservice;
        this.error = new error_handler_1.ErrorHandler();
    }
    getall() {
        return this.artistservice.getall();
    }
    async getById(id) {
        const artist = await this.artistservice.findOne(id);
        if (!artist)
            return this.error.notFound('Artist');
        return artist;
    }
    create(createArtist) {
        return this.artistservice.create(createArtist);
    }
    async delete(id) {
        const track = await this.artistservice.delete(id);
        if (!track)
            return this.error.notFound('Track');
        return this.error.deleted('Track');
    }
    update(id, updateArtistDto) {
        return this.artistservice.update(updateArtistDto, id);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ArtistController.prototype, "getall", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ArtistController.prototype, "getById", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_artist_dto_1.CreateArtistDto]),
    __metadata("design:returntype", Promise)
], ArtistController.prototype, "create", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ArtistController.prototype, "delete", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_artist_dto_1.UpdateArtistDto]),
    __metadata("design:returntype", Promise)
], ArtistController.prototype, "update", null);
ArtistController = __decorate([
    (0, common_1.Controller)('artist'),
    __metadata("design:paramtypes", [atrist_service_1.AtristService])
], ArtistController);
exports.ArtistController = ArtistController;
//# sourceMappingURL=artist.controller.js.map