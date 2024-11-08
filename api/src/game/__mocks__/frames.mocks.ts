import { RegularFrame } from "../models/regular-frame.model";
import { LastFrame } from "../models/last-frame.model";

export const example1 = [
    new RegularFrame(7, 3),        // 1st frame
    new RegularFrame(5, 5),        // 2nd frame (spare)
    new RegularFrame(8, 2),        // 3rd frame
    new RegularFrame(6, 3),        // 4th frame
    new RegularFrame(10, 0),       // 5th frame (strike)
    new RegularFrame(7, 2),        // 6th frame
    new RegularFrame(9, 1),        // 7th frame (spare)
    new RegularFrame(4, 4),        // 8th frame
    new RegularFrame(10, 0),       // 9th frame (strike)
    new LastFrame(10, 10, 10)    // 10th frame (all strikes)
];

export const example2 = [
    new RegularFrame(6, 4),        // 1st frame (spare)
    new RegularFrame(5, 3),        // 2nd frame
    new RegularFrame(7, 1),        // 3rd frame
    new RegularFrame(8, 2),        // 4th frame
    new RegularFrame(6, 2),        // 5th frame
    new RegularFrame(10, 0),       // 6th frame (strike)
    new RegularFrame(9, 0),        // 7th frame
    new RegularFrame(4, 6),        // 8th frame (spare)
    new RegularFrame(5, 5),        // 9th frame (spare)
    new LastFrame(4, 6, 5)       // 10th frame (spare, third roll of 5)
];

export const example3 = [
    new RegularFrame(10, 0),       // 1st frame (strike)
    new RegularFrame(5, 3),        // 2nd frame
    new RegularFrame(7, 2),        // 3rd frame
    new RegularFrame(8, 1),        // 4th frame
    new RegularFrame(9, 0),        // 5th frame
    new RegularFrame(10, 0),       // 6th frame (strike)
    new RegularFrame(6, 4),        // 7th frame (spare)
    new RegularFrame(7, 2),        // 8th frame
    new RegularFrame(5, 5),        // 9th frame (spare)
    new LastFrame(10, 10, 10)    // 10th frame (all strikes)
];

export const example4 = [
    new RegularFrame(8, 2),        // 1st frame
    new RegularFrame(6, 2),        // 2nd frame
    new RegularFrame(5, 5),        // 3rd frame (spare)
    new RegularFrame(10, 0),       // 4th frame (strike)
    new RegularFrame(7, 3),        // 5th frame
    new RegularFrame(8, 1),        // 6th frame
    new RegularFrame(6, 4),        // 7th frame (spare)
    new RegularFrame(7, 2),        // 8th frame
    new RegularFrame(10, 0),       // 9th frame (strike)
    new LastFrame(7, 3, 5)       // 10th frame (spare, third roll of 5)
];

export const example5 = [
    new RegularFrame(6, 4),        // 1st frame
    new RegularFrame(7, 2),        // 2nd frame
    new RegularFrame(9, 0),        // 3rd frame
    new RegularFrame(10, 0),       // 4th frame (strike)
    new RegularFrame(8, 1),        // 5th frame
    new RegularFrame(6, 4),        // 6th frame (spare)
    new RegularFrame(10, 0),       // 7th frame (strike)
    new RegularFrame(4, 6),        // 8th frame (spare)
    new RegularFrame(5, 5),        // 9th frame (spare)
    new LastFrame(10, 10, 10)    // 10th frame (all strikes)
];

export const edgeCaseExamples = {
    emptyGame: [], // Empty game
    perfectGame: [
        new RegularFrame(10, 0),
        new RegularFrame(10, 0),
        new RegularFrame(10, 0),
        new RegularFrame(10, 0),
        new RegularFrame(10, 0),
        new RegularFrame(10, 0),
        new RegularFrame(10, 0),
        new RegularFrame(10, 0),
        new RegularFrame(10, 0),
        new LastFrame(10, 10, 10)
    ], // 10 strikes (Perfect game)
    spareGame: [
        new RegularFrame(5, 5),
        new RegularFrame(5, 5),
        new RegularFrame(5, 5),
        new RegularFrame(5, 5),
        new RegularFrame(5, 5),
        new RegularFrame(5, 5),
        new RegularFrame(5, 5),
        new RegularFrame(5, 5),
        new RegularFrame(5, 5),
        new LastFrame(5, 5, 5)
    ], // 10 spares (5 + 5 with spare bonuses)
    mixedGame: [
        new RegularFrame(10, 0), // Strike
        new RegularFrame(5, 5),  // Spare
        new RegularFrame(6, 3),  // Normal frame
        new RegularFrame(10, 0), // Strike
        new RegularFrame(7, 2),  // Normal frame
        new RegularFrame(9, 1),  // Spare
        new RegularFrame(10, 0), // Strike
        new RegularFrame(7, 3),  // Normal frame
        new RegularFrame(8, 2),  // Spare
        new LastFrame(10, 10, 10) // All strikes in the 10th frame
    ]
};