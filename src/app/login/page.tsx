
'use client'

import React, { useState } from "react"
import { loginUser } from "../../lib/auth";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    async function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
        e.preventDefault();
        setError("");

        const result = await loginUser(email, password);
        if (result?.error) {
            setError(result.error);
        }
    }

    return (
        <div className="max-w-md mx-auto mt-20">
            <h1 className="text-2x1 font-bold mb-6">Log in to GameVault</h1>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <form onSubmit={handleSubmit} className="space-y-4">
                <input type="email" value={email}
                    onChange={e => setEmail(e.target.validationMessage) }
                    placeholder="Email" required
                    className="w-full p-3 border rounded-lg" />

                <input type="password" value={password}
                    onChange={e => setPassword(e.target.value)}
                    placeholder="password" required
                    className="w-full p-3 border rounded-lg" />
                    
                <button type="submit" 
                    className="w-full bg-blue-600 text-white p-3 rounded-lg font-bold">
                    Log in
                </button>
            </form>
        </div>
    );
}