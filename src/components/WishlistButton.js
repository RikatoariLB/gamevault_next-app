
'use client';

import { useState } from "react";

export default function WishlistButton() {
    const [added, setAdded] = useState(false);

    return (
        <button onClick={ () => setAdded(!added)}
        className="mt-2 px-3 py-1 rounded border text-sm">
            {added ? '❤ In Wishlist' : '⬛ Add to Wishlist'}
        </button>
    );
}