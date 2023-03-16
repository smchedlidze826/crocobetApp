import { Games } from "./games";

export interface ProvidersList {
    enabled: boolean,
    gamesCount: number,
    iframeH: number,
    iframeW: number,
    logo: string,
    name: string,
    order: number,
    provider: string,
    tags: string[],
    type: string,
    vendor: string,
    _id: string
}

export interface SlotsByProvider {
    games: Games[],
    iframeH: number,
    iframeW: number,
    name: string,
    order: number,
    provider: string,
    tags: string[],
    totalGames: number,
    type: string,
    vendor: string
}

export interface Slots {
    category: string,
    games: Games[],
    name: string,
    order: number,
    platform: string,
    totalGames: number,
    type: string
}