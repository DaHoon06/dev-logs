import { ArgumentsHost, ExceptionFilter } from '@nestjs/common';
export declare class ExceptionHandlingFilter implements ExceptionFilter {
    catch(exception: any, host: ArgumentsHost): void;
}
