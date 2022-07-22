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
exports.AlbumService = void 0;
const common_1 = require("@nestjs/common");
const uuid_1 = require("uuid");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const album_entity_1 = require("../../entitys/album.entity");
let AlbumService = class AlbumService {
    constructor(AlbumRepository) {
        this.AlbumRepository = AlbumRepository;
    }
    async getall() {
        return await this.AlbumRepository.find();
    }
    async getById(id) {
        const AlbumById = await this.AlbumRepository.findBy({ id: id });
        return AlbumById[0];
    }
    async create(CreateAlbumDto) {
        const newAlbum = Object.assign(Object.assign({}, CreateAlbumDto), { id: (0, uuid_1.v4)() });
        const newAlbumSave = await this.AlbumRepository.create(newAlbum);
        await this.AlbumRepository.save(newAlbumSave);
        return newAlbumSave;
    }
    async delete(id) {
        const deleteAlbum = await this.AlbumRepository.delete({ id: id });
        return deleteAlbum;
    }
    async update(id, UpdateAlbumDto) {
        const updateAlbum = this.AlbumRepository.update({ id: id }, UpdateAlbumDto);
        return updateAlbum;
    }
};
AlbumService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(album_entity_1.AlbumEntity)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], AlbumService);
exports.AlbumService = AlbumService;
//# sourceMappingURL=album.service.js.map