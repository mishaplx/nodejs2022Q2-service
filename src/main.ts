import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
dotenv.config();

const port = process.env.PORT || 5000;
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(Number(port), ()=>{
    console.log(`App Start in port - ${port} - link - http://localhost:${port}`);
});
}
bootstrap();
