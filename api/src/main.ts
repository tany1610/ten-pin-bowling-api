import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import { LoggingService } from './common/services/logging.service';
import { AllExceptionFilter } from './common/filters/all-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const loggingService = app.get(LoggingService);

  app.useGlobalFilters(new AllExceptionFilter(loggingService));

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
