
import { getDealById } from "../../lib/api";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function DealPage({ params }: { params: { id: string } }) {
    const { id } = params;
    const deal = await getDealById(id);

    if (!deal) return notFound();

    return (
        <div>
            <Link href='/' className="text-blue-400 hover:underline">&larr; Back</Link>
            <img src={deal.gameInfo.thumb} alt={deal.gameInfo.name} className="w-64 rounded mt-4"/>
            <h1 className="text-3x1 font-bold mt-4">{deal.gameInfo.name}</h1>
            <p className="text-gray-500 text-lg mt-2">
                Cheapest ever: ${deal.cheapestPrice.price}
            </p>
        </div>
    );
}