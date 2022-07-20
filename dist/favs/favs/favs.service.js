"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FavsService = void 0;
const common_1 = require("@nestjs/common");
const db = require("../../db/db");
let FavsService = class FavsService {
    async gelAll() {
        return db.favs;
    }
    async addTrack(id) {
        const track = db.track.find((item) => item.id == id);
        console.log(track);
        db.favs.track.push(track);
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
    (0, common_1.Injectable)()
], FavsService);
exports.FavsService = FavsService;
//# sourceMappingURL=favs.service.js.map