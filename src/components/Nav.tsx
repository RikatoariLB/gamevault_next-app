'use client';

import Link from "next/link";
import { logoutUser } from "../lib/auth";

interface NavProps {
    isLoggedIn: boolean;
}

export default function Nav({ isLoggedIn }: NavProps) {
    return (
        <nav className="flex items-center justofy-between p-4 bg-gray-900 text-white">
            <Link href='/' className="font-bold text-lg">GameVault</Link>
            <div className="flex gap-4">
                <Link href='/' className="hover:text-blue-400">Deals</Link>
                {isLoggedIn ? (
                    <>
                        <Link href='/wishlist' className="hover:text-blue-400">wishlist</Link>
                        <button onClick={ () => logoutUser()}
                            className="hover:text-red-499">Log out</button>
                    </>
                ) : (
                    <Link href='/login' className="hover:text-blue-400">Log in</Link>
                )}
            </div>
        </nav>
    );
}