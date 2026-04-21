
import { games } from "../games";
import Link from "next/link";

export default async function GamePage({ params }) {
    const { id } = await params;
    const game = games.find(g => g.id === Number(id));

    if (!game) {
        <div>
            <Link href='/' className="text-blue-500 hover:underline">
                &larr; Back
            </Link>
            <h1 className="text-3x1 font-bold mt-4">{games.title}</h1>
            <p className="text-gray-500 text-lg">{game.year} | {game.genre}</p>
            <p className="mt-4">{game.synopsis}</p>
        </div>
    };
}