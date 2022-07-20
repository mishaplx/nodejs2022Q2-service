"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlbumService = void 0;
const common_1 = require("@nestjs/common");
const db = require("../../db/db");
const uuid_1 = require("uuid");
let AlbumService = class AlbumService {
    constructor() {
        this.album = db.album;
    }
    getall() {
        console.log(this.album);
        return this.album;
    }
    getById(id) {
        return this.album.find((item) => item.id === id);
    }
    async create(CreateAlbumDto) {
        const newAlbum = Object.assign(Object.assign({}, CreateAlbumDto), { id: (0, uuid_1.v4)() });
        this.album.push(newAlbum);
        return newAlbum;
    }
    delete(id) {
        const newArrAlbum = db.album.filter((item) => item.id !== id);
        this.album = newArrAlbum;
        if (this.album.length == db.album.length) {
            return false;
        }
        return this.album;
    }
    async update(id, UpdateAlbumDto) {
        const album = this.album.find((item) => item.id === id);
        album.name = UpdateAlbumDto.name;
        album.artistId = UpdateAlbumDto.artistId;
        album.year = UpdateAlbumDto.year;
        return album;
    }
};
AlbumService = __decorate([
    (0, common_1.Injectable)()
], AlbumService);
exports.AlbumService = AlbumService;
//# sourceMappingURL=album.service.js.map