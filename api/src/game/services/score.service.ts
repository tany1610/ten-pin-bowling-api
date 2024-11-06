import { Injectable } from '@nestjs/common';
import { Frame } from '../models/frame.model';

@Injectable()
export class ScoreService {
    public getCurrentGameScore(frames: Frame[], maxFrames: number): number {
        let score = 0;

        for (let i = 0; i < maxFrames; i++) {
            const frame = frames[i];

            score += frame.firstRoll + frame.secondRoll;
    
            if (frame.isSpare && frames[i + 1]) {
                score += frames[i + 1].firstRoll;
            }
    
            if (frame.isStrike) {
                score += this.getStrikeBonus(frames, i);
            }
        }

        return score;
    }

    private getStrikeBonus(frames: Frame[], index: number): number {
        let bonus = 0;

        if (frames[index + 1]) {
            bonus += frames[index + 1].firstRoll + frames[index + 1].secondRoll;
        }

        return bonus;
    }
}
