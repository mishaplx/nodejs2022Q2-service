import { AppService } from './app.service';
import { LoginService } from './login/login.service';
export declare class AppController {
    private readonly appService;
    private Loginservice;
    constructor(appService: AppService, Loginservice: LoginService);
    hello(): string;
    create(headers: any): Promise<any>;
}
