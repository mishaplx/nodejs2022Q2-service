"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const typeorm_1 = require("@nestjs/typeorm");
const track_module_1 = require("./track/track/track.module");
const user_module_1 = require("./user/user/user.module");
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const config_1 = require("@nestjs/config");
const aldum_module_1 = require("./album/album/aldum.module");
const artist_module_1 = require("./artist/artists/artist.module");
const favs_module_1 = require("./favs/favs/favs.module");
const dotenv = require("dotenv");
const env_helper_1 = require("./env.helper");
const auth_module_1 = require("./auth/auth.module");
const database_module_1 = require("./db/database.module");
dotenv.config();
const envFilePath = (0, env_helper_1.getEnvPath)(`${__dirname}/common/envs`);
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({ envFilePath, isGlobal: true }),
            typeorm_1.TypeOrmModule.forRootAsync({ useClass: database_module_1.TypeOrmConfigService }),
            user_module_1.UserModule,
            track_module_1.TrackModule,
            aldum_module_1.AldumModule,
            artist_module_1.ArtistModule,
            favs_module_1.FavsModule,
            auth_module_1.AuthModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map