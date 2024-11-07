import { RegularFrame } from "./regular-frame.model";

export class LastFrame extends RegularFrame {
    pins: number = 10;
    readonly totalPins: number = 10;
    readonly _firstRoll: number;
    readonly _secondRoll: number;
    readonly _thirdRoll: number;

    constructor(firstRoll?: number, secondRoll?: number, thirdRoll?: number) {
        super(firstRoll, secondRoll);

        if(this.firstRoll === this.totalPins) {
            this.resetPins();
            this._secondRoll = secondRoll !== undefined ? secondRoll : this.getRandomPins();
        }

        if (this.secondRoll === this.totalPins) {
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
