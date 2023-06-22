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
exports.OauthController = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("axios");
const config_1 = require("@nestjs/config");
let OauthController = class OauthController {
    constructor(configService) {
        this.configService = configService;
    }
    async githubCallback(code) {
        const body = {
            client_id: await this.configService.get('GITHUB_CLIENT_ID'),
            client_secret: await this.configService.get('GITHUB_SECRET_KEY'),
            code
        };
        const { data } = await axios_1.default.post(`https://github.com/login/oauth/access_token`, body, {
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const dataSplit = data.split('&');
        const obj = {
            access_token: '',
            expires_in: 0,
            refresh_token: '',
            refresh_token_expires_in: 0,
            scope: '',
            token_type: '',
        };
        dataSplit.forEach(value => {
            const resData = value.split('=');
            obj[resData[0]] = resData[1];
        });
        const headers = {
            Authorization: `token ${obj.access_token}`,
            'Content-Type': 'application/json',
        };
        const { data: user } = await axios_1.default.get('https://api.github.com/user', { headers });
        console.log(user);
        return obj;
    }
};
__decorate([
    (0, common_1.Get)('/callback'),
    __param(0, (0, common_1.Query)('code')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], OauthController.prototype, "githubCallback", null);
OauthController = __decorate([
    (0, common_1.Controller)('/oauth'),
    __metadata("design:paramtypes", [config_1.ConfigService])
], OauthController);
exports.OauthController = OauthController;
//# sourceMappingURL=oauth.controller.js.map