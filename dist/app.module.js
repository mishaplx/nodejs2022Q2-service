"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const user_service_1 = require("./user/user/user.service");
const singup_service_1 = require("./singup/singup.service");
const login_service_1 = require("./login/login.service");
const track_service_1 = require("./track/track/track.service");
const atrist_service_1 = require("./artist/atrists/atrist.service");
const album_service_1 = require("./album/album/album.service");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const user_controller_1 = require("./user/user.controller");
const singup_controller_1 = require("./singup/singup.controller");
const login_controller_1 = require("./login/login.controller");
const track_controller_1 = require("./track/track.controller");
const artist_controller_1 = require("./artist/artist.controller");
const album_controller_1 = require("./album/album.controller");
const favs_controller_1 = require("./favs/favs.controller");
const favs_service_1 = require("./favs/favs/favs.service");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [],
        controllers: [
            app_controller_1.AppController,
            user_controller_1.UserController,
            singup_controller_1.SingupController,
            login_controller_1.LoginController,
            track_controller_1.TrackController,
            artist_controller_1.ArtistController,
            album_controller_1.AlbumController,
            favs_controller_1.FavsController,
        ],
        providers: [
            app_service_1.AppService,
            user_service_1.UserService,
            singup_service_1.SingupService,
            login_service_1.LoginService,
            jwt_1.JwtService,
            track_service_1.TrackService,
            atrist_service_1.AtristService,
            album_service_1.AlbumService,
            favs_service_1.FavsService,
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map