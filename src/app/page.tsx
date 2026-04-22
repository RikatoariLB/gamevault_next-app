
import { getGames } from "../lib/api";
import GameCard from "../components/GameCard";
import Link from "next/link";

export default async function HomePage({searchParams} : { searchParams: Promise<{page?: string}>}) {
  const { loading, error } = ("");
  const limit = 10;
  const params = await searchParams;
  const page = Number(params?.page) || 1;
  const games = await getGames({ limit, offset: (page - 1) * limit });
  

  if (loading) return <div>Loading...</div>;
  if (error) {
    console.error(error);
    return <div>Loading Error.</div>
  };
  return (
    <main>
      <h1 className="text-4xl font-bold p-2"> Games Deals </h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {games.map((game, index) => (
          <GameCard key={game.dealID} game={game} index={index}/>
        ))}
      </div>
      <div>
        <Link href={`/?page=${page - 1}`} disabled={page === 1}>Previous</Link>
        <Link href={`/?page=${page + 1}`}>Next</Link>
      </div>
    </main>
  );
}