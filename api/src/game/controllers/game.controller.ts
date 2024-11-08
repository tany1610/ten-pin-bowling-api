import { Controller, Get, HttpCode, Post } from '@nestjs/common';

import { GameService } from '../services/game.service';

import { IFrame } from '../../game/interfaces/frame.interface';

@Controller('game')
export class GameController {
    constructor(private readonly gameService: GameService) {}

    @Post('/bowl')
    @HttpCode(200)
    bowl(): IFrame[] {
        return this.gameService.bowl();
    }

    @Get('/score')
    @HttpCode(200)
    currentGameScore(): number {
        return this.gameService.getCurrentGameScore();
    }

    @Get('/storage')
    @HttpCode(200)
    gameStorage(): IFrame[][] {
        return this.gameService.getGameStorage();
    }
}
