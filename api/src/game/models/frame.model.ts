export class Frame {
    private pins: number = 10;
    private readonly totalPins: number = 10;
    private readonly _firstRoll: number;
    private readonly _secondRoll: number;

    constructor(firstRoll?: number, secondRoll?: number) {
        this._firstRoll = firstRoll !== undefined ? firstRoll : this.getRandomPins();
        this._secondRoll = secondRoll !== undefined ? secondRoll : this.getRandomPins();
    };

    private getRandomPins(): number {
        const hitPins = Math.floor(Math.random() * (this.pins + 1));
        this.pins -= hitPins;
        return hitPins;
    }

    public get isStrike(): boolean { return  this._firstRoll === this.totalPins; };
    public get isSpare(): boolean { return !this.isStrike && this._firstRoll + this._secondRoll === this.totalPins; };
    public get firstRoll(): number { return this._firstRoll; };
    public get secondRoll(): number { return this._secondRoll; };
}
