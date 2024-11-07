import { RegularFrame } from "../models/regular-frame.model";
import { GameService } from "../services/game.service";
import { ScoreService } from "../services/score.service";
import { StorageService } from "../services/storage.service";
import { GameController } from "./game.controller"

describe("GameController", () => {
    let gameController: GameController;
    let gameService: GameService;
    let scoreService: ScoreService;
    let storageService: StorageService;

    beforeEach(() => {
        scoreService = new ScoreService();
        storageService = new StorageService();
        gameService = new GameService(scoreService, storageService);
        gameController = new GameController(gameService);
    });


    describe("bowl", () => {
        it("should return array of IFrames", () => {
            const mockedResult = [new RegularFrame(5, 4)];

            jest.spyOn(gameService, "roll").mockReturnValue(mockedResult);

            expect(gameController.bowl()).toEqual(mockedResult);
        });
    });
});
