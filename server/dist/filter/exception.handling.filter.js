"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExceptionHandlingFilter = void 0;
const common_1 = require("@nestjs/common");
let ExceptionHandlingFilter = class ExceptionHandlingFilter {
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const request = ctx.getRequest();
        const status = exception instanceof common_1.HttpException ? exception.getStatus() : common_1.HttpStatus.INTERNAL_SERVER_ERROR;
        const message = status === 401 ? '토큰이 만료되었습니다.' : exception.message;
        if (status !== 200)
            console.error(exception);
        response.status(status).json({
            result: false,
            message,
            statusCode: status,
            timestamp: new Date().toISOString(),
            path: request.url,
            detailMessage: exception.response ? exception.response.message : '',
        });
    }
};
ExceptionHandlingFilter = __decorate([
    (0, common_1.Catch)()
], ExceptionHandlingFilter);
exports.ExceptionHandlingFilter = ExceptionHandlingFilter;
//# sourceMappingURL=exception.handling.filter.js.map