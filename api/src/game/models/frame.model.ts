export class Frame {
    private readonly _firstRoll: number;
    private readonly _secondRoll: number;
    private _isStrike: boolean;
    private _isSpare: boolean;

    constructor(firstRoll: number, secondRoll: number) {
        this._firstRoll = firstRoll;
        this._secondRoll = secondRoll;

        if (this._firstRoll === 10) {
            this._isStrike = true;
        } else if (this._firstRoll + this._secondRoll === 10) {
            this._isSpare = true;
        }
    };

    public get isStrike(): boolean { return  this._isStrike; };
    public get isSpare(): boolean { return this._isSpare; };
    public get firstRoll(): number { return this._firstRoll; };
    public get secondRoll(): number { return this._secondRoll; };
}
