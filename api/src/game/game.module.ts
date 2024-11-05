import { Module } from '@nestjs/common';
import { GameController } from './controllers/game.controller';
import { GameService } from './services/game.service';

@Module({
  controllers: [GameController],
  providers: [GameService]
})
export class GameModule {}
