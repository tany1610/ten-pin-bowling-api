import { Injectable } from "@nestjs/common";

import { IFrame } from "src/game/interfaces/frame.interface";

@Injectable()
export class StorageService {
    private _gameStorage: IFrame[][] = [];

    public addGameToStorage(frames: IFrame[]): void {
        this._gameStorage.push(frames);
    }

    public get gameStorage(): IFrame[][] {
        return this._gameStorage;
    }
}
