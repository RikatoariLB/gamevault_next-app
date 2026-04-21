
import Link from "next/link";
import WishlistButton from "./WishlistButton";

export default function GameCard({ game }) {
    return (
        <div className="border rounded-lg p-4 hover:shadow-lg transition-shadow bg-gray-200">
            <h2 className="text-x3 font-semibold">{game.title}</h2>
            <p className="text-gray-500">{game.year} | {game.genre}</p>
            <p className="mt-2 text-sm">{game.synopsis}</p>
            <div>
                <Link href={`/games/${game.id}`} className="mt-3 inline-block text-blue-500 hover:underline">
                    View details &rarr;
                </Link>
                <div className="flex justify-end">
                    <WishlistButton />
                </div>
            </div>
        </div>
    );
}