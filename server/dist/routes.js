"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ROUTES = void 0;
const oauth_module_1 = require("./modules/oauth/oauth.module");
exports.ROUTES = [
    {
        path: '/oauth',
        module: oauth_module_1.OauthModule,
    },
];
//# sourceMappingURL=routes.js.map