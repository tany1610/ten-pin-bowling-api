import { ScoreService } from './score.service';
import { example1, example2, example3, example4, example5, edgeCaseExamples } from '../__mocks__/frames.mocks';

const MAX_FRAMES = 10;

describe('ScoreService', () => {
    let scoreService: ScoreService;

    beforeEach(() => {
        scoreService = new ScoreService();
    });

    const testCases = [
        { frames: example1, expectedScore: 168 },
        { frames: example2, expectedScore: 127 },
        { frames: example3, expectedScore: 149 },
        { frames: example4, expectedScore: 152 },
        { frames: example5, expectedScore: 168 }
    ];

    const edgeCases = [
        { frames: edgeCaseExamples.emptyGame, expectedScore: 0 },
        { frames: edgeCaseExamples.perfectGame, expectedScore: 300 },
        { frames: edgeCaseExamples.spareGame, expectedScore: 150 },
        { frames: edgeCaseExamples.mixedGame, expectedScore: 181 },
    ];

    describe('Sample Games', () => {
        testCases.forEach(({ frames, expectedScore }, index) => {
            it(`should calculate the correct score for example ${index + 1}`, () => {
                const score = scoreService.getCurrentGameScore(frames, MAX_FRAMES);
                expect(score).toBe(expectedScore);
            });
        });
    })

    describe('Edge Cases', () => {
        edgeCases.forEach(({ frames, expectedScore }, index) => {
            it(`should calculate the correct score for edge case example ${index + 1}`, () => {
                const score = scoreService.getCurrentGameScore(frames, MAX_FRAMES);
                expect(score).toBe(expectedScore);
            });
        });
    });
});
