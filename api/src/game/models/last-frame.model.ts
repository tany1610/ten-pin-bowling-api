import { RegularFrame } from "./regular-frame.model";

export class LastFrame extends RegularFrame {
    readonly _secondRoll: number;
    readonly _thirdRoll: number | null = null;

    constructor(firstRoll?: number, secondRoll?: number, thirdRoll?: number) {
        super(firstRoll, secondRoll);

        if(this.isStrike) {
            this.resetPins();
            this._secondRoll = secondRoll !== undefined ? secondRoll : this.getRandomPins();
        }

        if (this.isSpare) {
            this.resetPins();
        }

        if (this.isStrike || this.isSpare) {
            this._thirdRoll = thirdRoll !== undefined ? thirdRoll : this.getRandomPins();
        }
    };

    resetPins(): void {
        this.pins = 10;
    }

    public get thirdRoll(): number { return this._thirdRoll; };
}
