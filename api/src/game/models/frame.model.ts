export class Frame {
    private pins: number = 10;
    private readonly _firstRoll: number;
    private readonly _secondRoll: number;
    private _isStrike: boolean;
    private _isSpare: boolean;

    constructor() {
        this._firstRoll = this.getRandomPins();
        this._secondRoll = this.getRandomPins();

        if (this._firstRoll === 10) {
            this._isStrike = true;
        } else if (this._firstRoll + this._secondRoll === 10) {
            this._isSpare = true;
        }
    };

    private getRandomPins(): number {
        const hitPins = Math.floor(Math.random() * (this.pins + 1));
        this.pins -= hitPins;
        return hitPins;
    }

    public get isStrike(): boolean { return  this._isStrike; };
    public get isSpare(): boolean { return this._isSpare; };
    public get firstRoll(): number { return this._firstRoll; };
    public get secondRoll(): number { return this._secondRoll; };
}
