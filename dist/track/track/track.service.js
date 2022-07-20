"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrackService = void 0;
const common_1 = require("@nestjs/common");
const uuid_1 = require("uuid");
const db = require("../../db/db");
let TrackService = class TrackService {
    constructor() {
        this.track = db.track;
    }
    getall() {
        return this.track;
    }
    getById(id) {
        return this.track.find((item) => item.id === id);
    }
    async create(CreateTrackrDto) {
        const newTrack = Object.assign(Object.assign({}, CreateTrackrDto), { id: (0, uuid_1.v4)() });
        this.track.push(newTrack);
        return newTrack;
    }
    delete(id) {
        const newArrTrack = db.track.filter((item) => item.id !== id);
        this.track = newArrTrack;
        if (this.track.length == db.track.length) {
            return false;
        }
        return this.track;
    }
    async update(id, UpdateTrackDto) {
        const track = this.track.find((item) => item.id === id);
        track.name = UpdateTrackDto.name;
        track.artistId = UpdateTrackDto.artistId;
        track.albumId = UpdateTrackDto.artistId;
        track.duration = UpdateTrackDto.duration;
        return track;
    }
};
TrackService = __decorate([
    (0, common_1.Injectable)()
], TrackService);
exports.TrackService = TrackService;
//# sourceMappingURL=track.service.js.map