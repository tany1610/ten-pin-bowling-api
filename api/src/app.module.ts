import { Module } from '@nestjs/common';
import { GameModule } from './game/game.module';

import { LoggingService } from './common/services/logging.service';

@Module({
  imports: [GameModule],
  providers: [LoggingService]
})
export class AppModule {}