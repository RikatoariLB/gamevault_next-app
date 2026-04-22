
import Link from "next/link";
import { Game } from "../types/game";
import WishlistButton from "./WishlistButton";

interface GameCardProps {
    game: Game;
    index: number;
}

export default function GameCard({ game } : GameCardProps) {
    const discount = Math.round(parseFloat(game.savings));

    return (
        <div className="game-card border rounded-lg p-4 hover:shadow-lg transition-shadow bg-gray-200 flex flex-col">
            <img src={game.thumb} alt={game.title} className="w-full rounded mb-3"/>
            <h2 className="text-x3 font-semibold">{game.title}</h2>
            <div className="flex items-center gap-2 mt-1">
                <span className="text-green-600 font-bold">{game.salePrice}</span>
                <span className="text-gray-400 line-through text-sm">{game.normalPrice}</span>
                {discount > 0 && (
                    <span className="bg-green-100 text-green-800 text-xs px-2 py-0.5 rounded">
                        -{discount}%
                    </span>
                )}
            </div>
            <div className="flex items-center justify-between mt-3">
                <Link href={`/games/${game.dealID}`}
                className="text-blue-500 hover:unerline text-sm">View deal &rarr;</Link>
                <WishlistButton dealID={game.dealID}/>
            </div>
        </div>
    );
}