import { Injectable } from '@nestjs/common';
import { Frame } from '../models/frame.model';

@Injectable()
export class BonusService {
    private _bonusFrames: number = 0;

    public resetBonuses(): void {
        this._bonusFrames = 0;
    }

    public checkForBonuses(frames: Frame[], maxFrames: number, currentFrame: Frame): void {
        const totalFrames = frames.length + 1; // Adding the current frame to the count

        if (totalFrames === maxFrames) {
            if (currentFrame.isStrike || currentFrame.isSpare) {
                this._bonusFrames = 1;
            }
        }
    }

    public get bonusFrames(): number {
        return this._bonusFrames;
    }
}
