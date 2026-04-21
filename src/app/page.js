
import { games } from "@/data/games";
import GameCard from "@/components/GameCard";

export default function HomePage() {
  return (
    <main>
      <h1 className="text-4xl font-bold p-2"> Games </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {games.map(game => (
          <GameCard key={game.id} game={game}/>
        ))}
      </div>
    </main>
  );
}