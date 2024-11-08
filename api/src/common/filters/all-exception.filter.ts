import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { LoggingService } from '../services/logging.service';

@Catch()
export class AllExceptionFilter implements ExceptionFilter {
  constructor(private readonly loggingService: LoggingService) {}

  catch(exception: Error, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    const status =
      exception instanceof HttpException ? exception.getStatus() : 500;

    const errorDetails = {
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: request.url,
      message: exception.message,
      stack: exception.stack,
    };

    this.loggingService.logError(errorDetails);

    response.status(status).json({
      statusCode: status,
      timestamp: errorDetails.timestamp,
      path: errorDetails.path,
      message: errorDetails.message,
    });
  }
}
