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
const common_1 = require("@nestjs/common");
const track_service_1 = require("./track/track.service");
const track_dto_1 = require("./dto/track.dto");
const update_dto_1 = require("./dto/update.dto");
const login_service_1 = require("../login/services/login.service");
login_service_1.LoginService;
let TrackController = class TrackController {
    constructor(Trackservice) {
        this.Trackservice = Trackservice;
    }
    getall() {
        return this.Trackservice.getall();
    }
    getById(id) {
        if (id.split('-').length !== 5) {
            throw new common_1.BadRequestException({
                status: common_1.HttpStatus.BAD_REQUEST,
                error: 'BAD_REQUEST',
            });
        }
        if (this.Trackservice.getById(id)) {
            return this.Trackservice.getById(id);
        }
        else {
            throw new common_1.NotFoundException({
                status: common_1.HttpStatus.NOT_FOUND,
                error: 'NOT_FOUND',
            });
        }
    }
    async create(createTrack) {
        if (createTrack.hasOwnProperty('name') == false) {
            throw new common_1.BadRequestException({
                status: common_1.HttpStatus.BAD_REQUEST,
                message: 'BAD_REQUEST',
            });
        }
        return this.Trackservice.create(createTrack);
    }
    delTrack(id) {
        if (id.split('-').length !== 5) {
            console.log(id.split('-').length);
            throw new common_1.BadRequestException({
                status: common_1.HttpStatus.BAD_REQUEST,
                error: 'BAD_REQUEST',
            });
        }
        if (this.Trackservice.delete(id)) {
            return this.Trackservice.delete(id);
        }
        else {
            throw new common_1.NotFoundException({
                status: common_1.HttpStatus.NOT_FOUND,
                error: 'NOT_FOUND',
            });
        }
    }
    updateTrack(id, UpdateTrackdto) {
        return this.Trackservice.update(id, UpdateTrackdto);
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, common_1.HttpCode)(200),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TrackController.prototype, "getall", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TrackController.prototype, "getById", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(201),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [track_dto_1.CreateTrackrDto]),
    __metadata("design:returntype", Promise)
], TrackController.prototype, "create", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.HttpCode)(204),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TrackController.prototype, "delTrack", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_dto_1.UpdateTrackDto]),
    __metadata("design:returntype", void 0)
], TrackController.prototype, "updateTrack", null);
TrackController = __decorate([
    (0, common_1.Controller)('track'),
    __metadata("design:paramtypes", [track_service_1.TrackService])
], TrackController);
exports.TrackController = TrackController;
//# sourceMappingURL=track.controller.js.map