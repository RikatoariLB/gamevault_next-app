
import { getGames } from "../lib/api";
import GameCard from "../components/GameCard";

export default async function HomePage() {
  const { loading, error } = ("");
  const games = await getGames();

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
    </main>
  );
}