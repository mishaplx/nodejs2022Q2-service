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
let FavsService = class FavsService {
    async gelAll() {
    }
    async addTrack(id) {
    }
    async addAlbum(id) {
    }
    async addArtist(id) {
    }
    async deleteTrack(id) {
    }
    async deleteAlbum(id) {
    }
    async deleteArtist(id) {
    }
};
FavsService = __decorate([
    (0, common_1.Injectable)()
], FavsService);
exports.FavsService = FavsService;
//# sourceMappingURL=favs.service.js.map