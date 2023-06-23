import { utilities, WinstonModule } from 'nest-winston';
import * as winstonDaily from 'winston-daily-rotate-file';
import * as winston from 'winston'

const product = process.env.NODE_ENV === 'product';
const logDir = __dirname + '../../logs';

const dailyOptions = (level: string) => {
  return {
    level,
    datePattern: 'YYYY-MM-DD HH-mm-ss',
    dirname: logDir + `/${level}`,
    filename: `%DATE%.${level}.log`,
    maxFiles: 30,
    zippedArchive: true
  }
}

export const winstonConfig = WinstonModule.createLogger({
  transports: [
    new winston.transports.Console({
      level: product ? 'http' : 'silly',
      format: product ? winston.format.simple() : winston.format.combine(
        winston.format.timestamp(),
        utilities.format.nestLike('dev-logs', {
          colors: true,
          prettyPrint: true
        }),
      ),
    }),

    new winstonDaily(dailyOptions('info')),
    new winstonDaily(dailyOptions('warn')),
    new winstonDaily(dailyOptions('error')),
  ]
});