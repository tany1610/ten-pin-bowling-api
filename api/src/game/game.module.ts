import { Module } from '@nestjs/common';

import { GameController } from './controllers/game.controller';

import { GameService } from './services/game.service';
import { ScoreService } from './services/score.service';
import { StorageService } from './services/storage.service';
import { BonusService } from './services/bonus.service';

@Module({
  controllers: [GameController],
  providers: [GameService, ScoreService, StorageService, BonusService]
})
export class GameModule {}
