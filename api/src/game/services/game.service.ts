import { Injectable } from '@nestjs/common';

import { RegularFrame } from '../models/regular-frame.model';

import { ScoreService } from './score.service';
import { StorageService } from './storage.service';
import { LastFrame } from '../models/last-frame.model';
import { IFrame } from 'src/game/interfaces/frame.interface';

@Injectable()
export class GameService {
    private readonly maxFrames: number = 10;
    private frames: IFrame[] = [];

    constructor(private readonly scoreService: ScoreService, private readonly storageService: StorageService) {}

    private restartGame(): void {
        this.storageService.addGameToStorage([...this.frames]);
        this.frames = [];
    }

    public bowl() : IFrame[] {
        const isLastFrame = this.frames.length + 1 === this.maxFrames;

        const frame = isLastFrame ? new LastFrame() : new RegularFrame();

        if (this.frames.length + 1 > this.maxFrames) {
            this.restartGame();
        }

        this.frames.push(frame);

        return this.frames;
    }

    public getGameStorage(): IFrame[][]  {
        return this.storageService.gameStorage;
    }

    public getCurrentGameScore(): number {
        return this.scoreService.getCurrentGameScore(this.frames, this.maxFrames);
    }
}
