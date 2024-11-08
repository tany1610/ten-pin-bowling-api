import { StorageService } from "./storage.service";
import { RegularFrame } from "../models/regular-frame.model";

describe("StorageService", () => {
    let storageService: StorageService;

    beforeEach(() => {
        storageService = new StorageService();
    });

    describe('addGameToStorage', () => {
        it('should add a game frame to the storage', () => {
            const frame: RegularFrame[] = [new RegularFrame()];
            storageService.addGameToStorage(frame);

            expect(storageService.gameStorage).toEqual([frame]);
        });

        it('should add multiple game frames to the storage', () => {
            const frame1: RegularFrame[] = [new RegularFrame()];
            const frame2: RegularFrame[] = [new RegularFrame()];
            storageService.addGameToStorage(frame1);
            storageService.addGameToStorage(frame2);

            expect(storageService.gameStorage).toEqual([frame1, frame2]);
        });
    });

    describe('gameStorage', () => {
        it('should return an empty array initially', () => {
            expect(storageService.gameStorage).toEqual([]);
        });

        it('should return the stored game frames', () => {
            const frame: RegularFrame[] = [new RegularFrame()];
            storageService.addGameToStorage(frame);

            expect(storageService.gameStorage).toEqual([frame]);
        });
    });
});
