
import { Game } from "../types/game";

const API_URL = "https://www.cheapshark.com/api/1.0";

export async function getGames() : Promise<Game[]> {
    const res = await fetch(
        `${API_URL}/deals?pageSize=28&sortBy=Metacritic`
    );
    const data: Game[] = await res.json();
    return data;
}

interface DealDetails {
    gameInfo: {
        name: string;
        thumb: string;
        metacriticLink: string;
    };
    cheapestPrice: { price: string; date: number };
}

export async function getDealById(dealID: string) : Promise<DealDetails | null> {
    const res = await fetch (`${API_URL}/deals?id=${dealID}`)
    if (!res.ok) return null;
    const data: DealDetails = await res.json();
    return data;
}