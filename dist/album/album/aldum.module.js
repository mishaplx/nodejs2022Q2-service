"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AldumModule = void 0;
const album_entity_1 = require("./../../entitys/album.entity");
const typeorm_1 = require("@nestjs/typeorm");
const common_1 = require("@nestjs/common");
const album_controller_1 = require("../album.controller");
const album_service_1 = require("./album.service");
let AldumModule = class AldumModule {
};
AldumModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([album_entity_1.AlbumEntity])],
        controllers: [album_controller_1.AlbumController],
        providers: [album_service_1.AlbumService],
    })
], AldumModule);
exports.AldumModule = AldumModule;
//# sourceMappingURL=aldum.module.js.map