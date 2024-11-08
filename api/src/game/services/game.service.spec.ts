import { LastFrame } from "../models/last-frame.model";
import { RegularFrame } from "../models/regular-frame.model";
import { GameService } from "./game.service";
import { ScoreService } from "./score.service";
import { StorageService } from "./storage.service";

jest.mock('./score.service');
jest.mock('./storage.service');

describe("GameService", () => {
    let gameService: GameService;
    let scoreService: jest.Mocked<ScoreService>;
    let storageService: jest.Mocked<StorageService>;

    beforeEach(() => {
        scoreService = new ScoreService() as jest.Mocked<ScoreService>;
        storageService = new StorageService() as jest.Mocked<StorageService>;
        gameService = new GameService(scoreService, storageService);

        // Mock the getter for gameStorage
        Object.defineProperty(storageService, 'gameStorage', {
            get: jest.fn().mockReturnValue([[new RegularFrame() as any]])
        });
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    describe('roll', () => {
        it('should add a RegularFrame if not the last frame', () => {
            const frames = gameService.roll();
            expect(frames[0]).toBeInstanceOf(RegularFrame);
        });

        it('should add a LastFrame on the final frame', () => {
            for (let i = 0; i < 9; i++) {
                gameService.roll();
            }
            const frames = gameService.roll();
            expect(frames[9]).toBeInstanceOf(LastFrame);
        });

        it('should restart the game after maxFrames are reached', () => {
            const maxFrames = 10;

            const addGameToStorageMock = jest.fn();
            storageService.addGameToStorage = addGameToStorageMock;

            for (let i = 0; i <= maxFrames; i++) {
                gameService.roll();
            }

            expect(addGameToStorageMock).toHaveBeenCalledWith(expect.any(Array));
        });
    });

    describe('getGameStorage', () => {
        it('should return the game storage', () => {
            const gameStorage = gameService.getGameStorage();
            expect(gameStorage).toEqual([[expect.any(RegularFrame)]]);
        });
    });

    describe('getCurrentGameScore', () => {
        it('should call ScoreService.getCurrentGameScore with frames and maxFrames', () => {
            const maxFrames = 10;
            gameService.roll();
            gameService.getCurrentGameScore();

            expect(scoreService.getCurrentGameScore).toHaveBeenCalledWith(expect.any(Array), maxFrames);
        });

        it('should return the current score from ScoreService', () => {
            const mockedValue = 100;
            (scoreService.getCurrentGameScore as jest.Mock).mockReturnValue(mockedValue);

            const score = gameService.getCurrentGameScore();
            expect(score).toBe(mockedValue);
        });
    });
});
