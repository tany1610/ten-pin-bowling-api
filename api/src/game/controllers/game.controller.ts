import { Controller, Get, HttpCode, Post, UseFilters } from '@nestjs/common';

import { GameService } from '../services/game.service';

import { AllExceptionFilter } from 'src/common/filters/all-exception.filter';
import { IFrame } from 'src/game/interfaces/frame.interface';

@Controller('game')
@UseFilters(new AllExceptionFilter())
export class GameController {
    constructor(private readonly gameService: GameService) {}

    @Post('/bowl')
    @HttpCode(200)
    bowl(): IFrame[] {
        return this.gameService.roll();
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
