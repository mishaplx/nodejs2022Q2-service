"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const dotenv = require("dotenv");
dotenv.config();
const port = process.env.PORT || 5000;
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    await app.listen(Number(port), () => {
        console.log(`App Start in port - ${port} - link - http://localhost:${port}`);
    });
}
bootstrap();
//# sourceMappingURL=main.js.map