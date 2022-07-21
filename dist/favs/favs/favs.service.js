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
exports.FavsService = void 0;
const favs_entity_1 = require("./../../entitys/favs.entity");
const common_1 = require("@nestjs/common");
const db = require("../../db/db");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
let FavsService = class FavsService {
    constructor(FavsRepository, TrackRepository) {
        this.FavsRepository = FavsRepository;
        this.TrackRepository = TrackRepository;
    }
    async gelAll() {
        return this.FavsRepository.find();
    }
    async addTrack(id) {
        const Track = await this.TrackRepository.findBy({ id: id });
        const addTrack = await this.FavsRepository.insert(newFavTrack);
        return TrackById;
    }
    async addAlbum(id) {
        const album = db.album.find((item) => item.id == id);
        db.favs.album.push(album);
    }
    async addArtist(id) {
        const artist = db.artist.find((item) => item.id == id);
        db.favs.artist.push(artist);
    }
    async deleteTrack(id) {
        const track = db.track.filter((item) => item.id !== id);
        db.favs.track = track;
    }
    async deleteAlbum(id) {
        const album = db.album.filter((item) => item.id !== id);
        db.favs.album = album;
    }
    async deleteArtist(id) {
        const artist = db.artist.filter((item) => item.id !== id);
        db.favs.artist = artist;
    }
};
FavsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(favs_entity_1.FavsEntity)),
    __param(1, (0, typeorm_2.InjectRepository)(TrackEntity)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        typeorm_1.Repository])
], FavsService);
exports.FavsService = FavsService;
//# sourceMappingURL=favs.service.js.map