import { Injectable } from '@nestjs/common';
import { Frame } from '../models/frame.model';

@Injectable()
export class BonusService {
    private _bonusRolls: number = 0;

    public resetBonuses(): void {
        this._bonusRolls = 0;
    }

    public checkForBonuses(frames: Frame[], maxFrames: number, currentFrame: Frame): void {
        const totalFrames = frames.length + 1; // Adding the current frame to the count

        if (totalFrames === maxFrames) {
            if (currentFrame.isStrike) {
                this._bonusRolls = 2;
            } else if (currentFrame.isSpare) {
                this._bonusRolls = 1;
            }
        }
    }

    public get bonusRolls(): number {
        return this._bonusRolls;
    }
}
