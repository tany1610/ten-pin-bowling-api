export interface IFrame {
    pins: number;
    readonly totalPins: number;
    readonly _firstRoll: number;
    readonly _secondRoll: number;
    
    getRandomPins(): number;

    get isStrike(): boolean;
    get isSpare(): boolean;
    get firstRoll(): number;
    get secondRoll(): number;
}