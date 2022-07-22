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
exports.TrackService = void 0;
const track_entity_1 = require("./../../entitys/track.entity");
const common_1 = require("@nestjs/common");
const uuid_1 = require("uuid");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
let TrackService = class TrackService {
    constructor(TrackRepository) {
        this.TrackRepository = TrackRepository;
    }
    async getall() {
        return this.TrackRepository.find();
    }
    async findOne(id) {
        const TrackById = await this.TrackRepository.findBy({ id: id });
        return TrackById[0];
    }
    async create(CreateTrackrDto) {
        const newTrack = Object.assign(Object.assign({}, CreateTrackrDto), { id: (0, uuid_1.v4)() });
        const newTrackSave = await this.TrackRepository.create(newTrack);
        await this.TrackRepository.save(newTrackSave);
        return newTrackSave;
    }
    async delete(id) {
        await this.TrackRepository.delete({ id: id });
        const track = this.findOne(id);
        this.TrackRepository.delete({ id: id });
        return !!track ? `Track with id ${id} was deleted` : null;
    }
    async update(id, params) {
        const AllTrack = await this.TrackRepository.find();
        AllTrack.map((track) => {
            if (track.id === id) {
                return Object.assign(track, params);
            }
            return track;
        });
        return await this.findOne(id);
    }
};
TrackService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(track_entity_1.TrackEntity)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], TrackService);
exports.TrackService = TrackService;
//# sourceMappingURL=track.service.js.map