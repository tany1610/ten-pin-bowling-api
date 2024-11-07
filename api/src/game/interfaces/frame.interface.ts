export interface IFrame {
    getRandomPins(): number;
    resetPins(): void;

    get isStrike(): boolean;
    get isSpare(): boolean;
    get firstRoll(): number;
    get secondRoll(): number;
}