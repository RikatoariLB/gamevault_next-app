
import Link from "next/link";
import WishlistButton from "./WishlistButton";

export default function GameCard({ game }) {
    return (
        <div className="border rounded-lg p-4 hover:shadow-lg transition-shadow">
            <h2 className="text-x1 font-semivbold">{game.title}</h2>
            <p className="text-gray-500">{game.year} | {game.genre}</p>
            <p className="mt-2 text-sm">{game.synopsis}</p>
            <div>
                <Link href={`/games/${game.id}`} className="mt-3 inline-block text-blue-500 hover:underline">
                    View details &rarr;
                </Link>
                <WishlistButton />
            </div>
        </div>
    );
}