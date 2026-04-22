
'use client';

import { useState } from "react";

interface WishlistButtonProps {
    dealID: string;
}

export default function WishlistButton({ dealID }: WishlistButtonProps) {
    const [added, setAdded] = useState(false);

    return (
        <button onClick={ () => setAdded(!added)}
        className="wishlist-button px-3 py-1 rounded border text-sm ">
            {added ? '❤ In Wishlist' : '🖤 Add to Wishlist'}
        </button>
    );
}