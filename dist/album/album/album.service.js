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
const track_entity_1 = require("./../../entitys/track.entity");
const error_handler_1 = require("./../../errorhandler/error.handler");
const common_1 = require("@nestjs/common");
const uuid_1 = require("uuid");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const album_entity_1 = require("../../entitys/album.entity");
let AlbumService = class AlbumService {
    constructor(AlbumRepository, TrackRepository) {
        this.AlbumRepository = AlbumRepository;
        this.TrackRepository = TrackRepository;
        this.error = new error_handler_1.ErrorHandler();
    }
    async getall() {
        return await this.AlbumRepository.find();
    }
    async getById(id) {
        const Album = await this.AlbumRepository.findBy({ id: id });
        return Album[0];
    }
    async create(CreateAlbumDto) {
        const newAlbum = Object.assign(Object.assign({}, CreateAlbumDto), { id: (0, uuid_1.v4)() });
        const newAlbumSave = await this.AlbumRepository.create(newAlbum);
        await this.AlbumRepository.save(newAlbumSave);
        return newAlbumSave;
    }
    async delete(id) {
        const album = await this.getall();
        if (!!album) {
            const allTrack = await this.TrackRepository.find();
            allTrack.forEach((track) => {
                if (track.albumId === id)
                    track.albumId = null;
            });
            this.AlbumRepository.delete({ id: id });
            return this.error.deleted('albums');
        }
        else {
            return this.error.notFound('albums');
        }
    }
    async update(UpdateAlbumDto, id) {
        if (!this.AlbumRepository.findBy({ id: id })) {
            return this.error.notFound('album');
        }
        else {
            const AllAbbum = await this.AlbumRepository.find();
            AllAbbum.map((Album) => {
                if (Album.id === id) {
                    return Object.assign(Album, UpdateAlbumDto);
                }
                return Album;
            });
            return await this.getById(id);
        }
    }
};
AlbumService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(album_entity_1.AlbumEntity)),
    __param(1, (0, typeorm_2.InjectRepository)(track_entity_1.TrackEntity)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        typeorm_1.Repository])
], AlbumService);
exports.AlbumService = AlbumService;
//# sourceMappingURL=album.service.js.map