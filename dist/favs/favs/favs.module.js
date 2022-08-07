"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FavsModule = void 0;
const typeorm_1 = require("@nestjs/typeorm");
const common_1 = require("@nestjs/common");
const favs_entity_1 = require("../../entitys/favs.entity");
const favs_controller_1 = require("../favs.controller");
const favs_service_1 = require("./favs.service");
let FavsModule = class FavsModule {
};
FavsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([favs_entity_1.FavsEntity])],
        controllers: [favs_controller_1.FavsController],
        providers: [favs_service_1.FavsService],
    })
], FavsModule);
exports.FavsModule = FavsModule;
//# sourceMappingURL=favs.module.js.map