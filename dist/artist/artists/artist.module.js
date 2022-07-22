"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArtistModule = void 0;
const track_entity_1 = require("./../../entitys/track.entity");
const album_entity_1 = require("./../../entitys/album.entity");
const artist_controller_1 = require("./../artist.controller");
const artist_entity_1 = require("./../../entitys/artist.entity");
const typeorm_1 = require("@nestjs/typeorm");
const common_1 = require("@nestjs/common");
const atrist_service_1 = require("./atrist.service");
let ArtistModule = class ArtistModule {
};
ArtistModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([artist_entity_1.ArtistEntity, album_entity_1.AlbumEntity, track_entity_1.TrackEntity])],
        controllers: [artist_controller_1.ArtistController],
        providers: [atrist_service_1.AtristService],
    })
], ArtistModule);
exports.ArtistModule = ArtistModule;
//# sourceMappingURL=artist.module.js.map