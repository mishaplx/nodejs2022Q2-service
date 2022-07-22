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
exports.TrackController = void 0;
const error_handler_1 = require("./../errorhandler/error.handler");
const common_1 = require("@nestjs/common");
const track_service_1 = require("./track/track.service");
const create_track_dto_1 = require("./dto/create-track.dto");
const update_track_dto_1 = require("./dto/update-track.dto");
let TrackController = class TrackController {
    constructor(Trackservice) {
        this.Trackservice = Trackservice;
        this.error = new error_handler_1.ErrorHandler();
    }
    getall() {
        return this.Trackservice.getall();
    }
    async getById(id) {
        const track = await this.Trackservice.findOne(id);
        if (!track)
            return this.error.notFound('Track');
        return track;
    }
    create(createTrackDto) {
        return this.Trackservice.create(createTrackDto);
    }
    async delete(id) {
        const track = await this.Trackservice.delete(id);
        if (!track)
            return this.error.notFound('Track');
        return this.error.deleted('Track');
    }
    async update(id, updateTrackDto) {
        const track = await this.Trackservice.update(id, updateTrackDto);
        if (!track)
            return this.error.notFound('Track');
        return track;
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TrackController.prototype, "getall", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TrackController.prototype, "getById", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_track_dto_1.CreateTrackDto]),
    __metadata("design:returntype", Promise)
], TrackController.prototype, "create", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TrackController.prototype, "delete", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_track_dto_1.UpdateTrackDto]),
    __metadata("design:returntype", Promise)
], TrackController.prototype, "update", null);
TrackController = __decorate([
    (0, common_1.Controller)('track'),
    __metadata("design:paramtypes", [track_service_1.TrackService])
], TrackController);
exports.TrackController = TrackController;
//# sourceMappingURL=track.controller.js.map