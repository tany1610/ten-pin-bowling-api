import { Controller, Get, HttpCode, Post } from '@nestjs/common';

import { GameService } from '../services/game.service';
import { Frame } from '../models/frame.model';

@Controller('game')
export class GameController {
    constructor(private readonly gameService: GameService) {}

    @Post('/bowl')
    @HttpCode(200)
    bowl(): Frame[] {
        return this.gameService.roll();
    }

    @Get('/score')
    @HttpCode(200)
    currentGameScore(): number {
        return this.gameService.getCurrentGameScore();
    }

    @Get('/storage')
    @HttpCode(200)
    gameStorage(): Frame[][] {
        return this.gameService.getGameStorage();
    }
}
