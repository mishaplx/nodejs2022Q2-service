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
exports.AtristService = void 0;
const track_entity_1 = require("./../../entitys/track.entity");
const error_handler_1 = require("./../../errorhandler/error.handler");
const album_entity_1 = require("./../../entitys/album.entity");
const artist_entity_1 = require("./../../entitys/artist.entity");
const common_1 = require("@nestjs/common");
const uuid_1 = require("uuid");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
let AtristService = class AtristService {
    constructor(ArtistRepository, AlbumRepository, TrackRepository) {
        this.ArtistRepository = ArtistRepository;
        this.AlbumRepository = AlbumRepository;
        this.TrackRepository = TrackRepository;
        this.error = new error_handler_1.ErrorHandler();
    }
    getall() {
        return this.ArtistRepository.find();
    }
    async findOne(id) {
        const TrackById = await this.ArtistRepository.findBy({ id: id });
        return TrackById[0];
    }
    async create(CreateArtist) {
        const newartist = Object.assign(Object.assign({}, CreateArtist), { id: (0, uuid_1.v4)() });
        const newArtistSave = await this.ArtistRepository.create(newartist);
        await this.ArtistRepository.save(newArtistSave);
        return newArtistSave[0];
    }
    async delete(id) {
        const artist = await this.ArtistRepository.findBy({ id: id });
        if (!!artist) {
            const allAlbum = await this.AlbumRepository.find();
            allAlbum.forEach((album) => {
                if (album.artistId === id)
                    album.artistId = null;
            });
            const allTrack = await this.TrackRepository.find();
            allTrack.forEach((track) => {
                if (track.artistId === id)
                    track.artistId = null;
            });
        }
        const resArtist = artist.filter((artist) => artist.id !== id);
        return !!resArtist ? this.error.deleted('artist') : null;
    }
    async update(params, id) {
        const allArtist = await this.ArtistRepository.find();
        if (!allArtist) {
            return this.error.notFound('artist');
        }
        else {
            allArtist.map((artist) => {
                if (artist.id === id) {
                    return Object.assign(artist, params);
                }
                return artist;
            });
        }
    }
};
AtristService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(artist_entity_1.ArtistEntity)),
    __param(1, (0, typeorm_2.InjectRepository)(album_entity_1.AlbumEntity)),
    __param(2, (0, typeorm_2.InjectRepository)(track_entity_1.TrackEntity)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository])
], AtristService);
exports.AtristService = AtristService;
//# sourceMappingURL=atrist.service.js.map