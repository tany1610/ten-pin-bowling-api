import { Injectable } from '@nestjs/common';

import { Frame } from './models/frame.model';

@Injectable()
export class GameService {
    private readonly maxPins: number = 10;
    private readonly maxFrames: number = 10;
    private frames: Frame[] = [];
    private gameStorage: Frame[][] = [];
    private bonusRolls: number = 0;
    private bonusRollsLeft: number = 0;

    constructor() {}

    private getRandomPins(maxPins: number): number {
        return Math.floor(Math.random() * (maxPins + 1));
    }

    private restartGame(): void {
        this.gameStorage.push([...this.frames]);
        this.frames = [];
        this.bonusRolls = 0;
        this.bonusRollsLeft = 0;
    }

    private checkForBonusRolls(currentFrame: Frame): void {
        const totalFrames = this.frames.length;

        if (totalFrames === this.maxFrames) {
            if (currentFrame.isStrike) {
                this.bonusRolls = 2;
                this.bonusRollsLeft = 2;
            } else if (currentFrame.isSpare) {
                this.bonusRolls = 1;
                this.bonusRollsLeft = 1;
            }
        }
    }

    private reduceBonusRollsLeft () : void {
        this.bonusRollsLeft -= 1;
    }

    private addFrame(frame: Frame): void {
        if (this.frames.length + 1 > this.maxFrames + this.bonusRolls) {
            this.restartGame();
        }

        this.frames.push(frame);
    }

    private getStrikeBonus(index: number): number {
        let bonus = 0;

        if (this.frames[index + 1]) {
            bonus += this.frames[index + 1].firstRoll + this.frames[index + 1].secondRoll;

            if (this.frames[index + 1].isStrike && this.frames[index + 2]) {
                bonus += this.frames[index + 2].firstRoll;
            }
        }

        return bonus;
    }


    public roll() : Frame[] {
        const firstRollPins = this.getRandomPins(this.maxPins);
        const secondRollPins = this.bonusRollsLeft ? 0 : this.getRandomPins(this.maxPins - firstRollPins);
        const frame = new Frame(firstRollPins, secondRollPins);

        if (this.bonusRollsLeft) {
            this.reduceBonusRollsLeft();
        } else {
            this.checkForBonusRolls(frame);
        }

        this.addFrame(frame);
        return this.frames;
    }

    public getCurrentGameScore(): number {
        return this.frames.reduce((score, frame, index) => {
            score += frame.firstRoll + frame.secondRoll;

            if (frame.isSpare && this.frames[index + 1]) {
                score += this.frames[index + 1].firstRoll;
            }

            if (frame.isStrike) {
                score += this.getStrikeBonus(index);
            }

            return score;
        }, 0);
    }

    public getGameStorage(): Frame[][]  {
        return this.gameStorage;
    }
}
