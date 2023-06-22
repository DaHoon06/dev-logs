"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.winstonConfig = void 0;
const nest_winston_1 = require("nest-winston");
const winstonDaily = require("winston-daily-rotate-file");
const winston = require("winston");
const product = process.env.NODE_ENV === 'product';
const logDir = __dirname + '../../logs';
const dailyOptions = (level) => {
    return {
        level,
        datePattern: 'YYYY-MM-DD HH-mm-ss',
        dirname: logDir + `/${level}`,
        filename: `%DATE%.${level}.log`,
        maxFiles: 30,
        zippedArchive: true
    };
};
exports.winstonConfig = nest_winston_1.WinstonModule.createLogger({
    transports: [
        new winston.transports.Console({
            level: product ? 'http' : 'silly',
            format: product ? winston.format.simple() : winston.format.combine(winston.format.timestamp(), nest_winston_1.utilities.format.nestLike('zizilog', {
                colors: true,
                prettyPrint: true
            })),
        }),
        new winstonDaily(dailyOptions('info')),
        new winstonDaily(dailyOptions('warn')),
        new winstonDaily(dailyOptions('error')),
    ]
});
//# sourceMappingURL=winston.config.js.map