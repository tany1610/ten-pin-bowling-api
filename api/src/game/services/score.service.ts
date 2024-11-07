import { Injectable } from '@nestjs/common';

import { IFrame } from 'src/game/interfaces/frame.interface';
import { LastFrame } from '../models/last-frame.model';

@Injectable()
export class ScoreService {
    public getCurrentGameScore(frames: IFrame[], maxFrames: number): number {
        let score = 0;

        // Calculate scores for frames 1-9
        score += this.calculateFirstNineFramesScore(frames, maxFrames - 1);

        // Calculate last frame
        const tenthFrame = frames[frames.length - 1];

        // If game is not finished, the last frame wont be instance of LastFrame
        if (tenthFrame instanceof LastFrame) {
            score += this.calculateLastFrameScore(tenthFrame);
        }

        return score;
    }

    private calculateFirstNineFramesScore(frames: IFrame[], maxFrames: number): number {
        let score = 0;

        for (let i = 0; i < Math.min(frames.length, maxFrames); i++) {
            const frame = frames[i];

            score += frame.firstRoll + frame.secondRoll;

            if (frame.isSpare && frames[i + 1]) {
                score += this.calculateSpareBonus(frames, i);
            }

            if (frame.isStrike) {
                score += this.calculateStrikeBonus(frames, i);
            }
        }

        return score;
    }

    private calculateLastFrameScore(tenthFrame: LastFrame): number {
        let score = tenthFrame.firstRoll + tenthFrame.secondRoll;

        if (tenthFrame.isStrike || tenthFrame.isSpare) {
            score += tenthFrame.thirdRoll;
        }

        return score;
    }

    private calculateSpareBonus(frames: IFrame[], index: number): number {
        return frames[index + 1].firstRoll;
    }

    private calculateStrikeBonus(frames: IFrame[], index: number): number {
        let bonus = 0;

        if (frames[index + 1]) {
            if (frames[index + 1].isStrike && frames[index + 2]) {
                bonus += frames[index + 1].firstRoll + frames[index + 2].firstRoll;
            } else {
                bonus += frames[index + 1].firstRoll + frames[index + 1].secondRoll;
            }
        }

        return bonus;
    }
}
