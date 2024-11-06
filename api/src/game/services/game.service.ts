import { Injectable } from '@nestjs/common';

import { Frame } from '../models/frame.model';

import { ScoreService } from './score.service';
import { StorageService } from './storage.service';
import { BonusService } from './bonus.service';

@Injectable()
export class GameService {
    private readonly maxFrames: number = 10;
    private frames: Frame[] = [];

    constructor(private readonly scoreService: ScoreService, private readonly storageService: StorageService, private readonly bonusService: BonusService) {}

    private restartGame(): void {
        this.storageService.addGameToStorage([...this.frames]);
        this.frames = [];
        this.bonusService.resetBonuses();
    }

    public roll() : Frame[] {
        const frame = new Frame();
        
        this.bonusService.checkForBonuses(this.frames, this.maxFrames, frame);

        if (this.frames.length + 1 > this.maxFrames + this.bonusService.bonusRolls) {
            this.restartGame();
        }

        this.frames.push(frame);

        return this.frames;
    }

    public getGameStorage(): Frame[][]  {
        return this.storageService.gameStorage;
    }

    public getCurrentGameScore(): number {
        return this.scoreService.getCurrentGameScore(this.frames, this.maxFrames);
    }
}
