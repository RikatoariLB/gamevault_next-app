
import Link from "next/link";
import { Game } from "../types/game";

type CompactGame = Omit<Game, 'thumb' | 'savings' | 'metacriticScore'>;

interface GameCardCompactProps {
    game: CompactGame;
}

export default function({ game } : GameCardCompactProps) {
    return (
        <Link href={`/games/${game.dealID}`} className="block border rounded-lg p-3 hover:shadow-md transition-shadow">
            <h3 className="font-semibold">{game.title}</h3>
            <p className="text-green-600 text-sm font-bold">${game.salePrice}</p>
        </Link>
    );
}