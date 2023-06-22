import { ConfigService } from "@nestjs/config";
interface GithubLoginSuccess {
    access_token: string;
    expires_in: number;
    refresh_token: string;
    refresh_token_expires_in: number;
    scope: string;
    token_type: string;
}
export declare class OauthController {
    private configService;
    constructor(configService: ConfigService);
    githubCallback(code: string): Promise<GithubLoginSuccess>;
}
export {};
