import { Module } from '@nestjs/common';

import { GameController } from './controllers/game.controller';

import { GameService } from './services/game.service';
import { ScoreService } from './services/score.service';
import { StorageService } from './services/storage.service';

@Module({
  controllers: [GameController],
  providers: [GameService, ScoreService, StorageService]
})
export class GameModule {}
