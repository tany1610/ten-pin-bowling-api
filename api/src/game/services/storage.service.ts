import { Injectable } from "@nestjs/common";

import { Frame } from "../models/frame.model";

@Injectable()
export class StorageService {
    private _gameStorage: Frame[][] = [];

    public addGameToStorage(frames: Frame[]): void {
        this._gameStorage.push(frames);
    }

    public get gameStorage(): Frame[][] {
        return this._gameStorage;
    }
}
