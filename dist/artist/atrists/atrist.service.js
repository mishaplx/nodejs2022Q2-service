"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AtristService = void 0;
const common_1 = require("@nestjs/common");
const uuid_1 = require("uuid");
const db = require("../../db/db");
let AtristService = class AtristService {
    constructor() {
        this.artist = db.artist;
    }
    getall() {
        console.log(this.artist);
        return this.artist;
    }
    getById(id) {
        return this.artist.find((item) => item.id === id);
    }
    async create(CreateArtist) {
        const newartist = Object.assign(Object.assign({}, CreateArtist), { id: (0, uuid_1.v4)() });
        this.artist.push(newartist);
        return newartist;
    }
    delete(id) {
        const newArrartist = db.artist.filter((item) => item.id !== id);
        this.artist = newArrartist;
        if (this.artist.length == db.artist.length) {
            return false;
        }
        return this.artist;
    }
    async update(id, UpdateArtistDto) {
        const artist = this.artist.find((item) => item.id === id);
        artist.name = UpdateArtistDto.name;
        artist.grammy = UpdateArtistDto.grammy;
        return artist;
    }
};
AtristService = __decorate([
    (0, common_1.Injectable)()
], AtristService);
exports.AtristService = AtristService;
//# sourceMappingURL=atrist.service.js.map