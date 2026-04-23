
'use server'

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const API_BASE = "https://YOUR_API_URL"

export async function loginUser(email: string, password: string) {
    try {
        const res = await fetch(`${API_BASE}/auth/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
        });
        if (!res.ok) {
            return { error: 'Invalid email or password' };
        }
        const data = await res.json();
        const cookieStore = await cookies();
        cookieStore.set('token', data.accessToken, {
            httpOnly: true,
            secure: true,
            path: '/',
            maxAge: 60 * 60 * 24, // 1 day
        });
        } catch {
            return { error: 'Something went wrong. Try again.' };
        }
    redirect('/');
}

export async function logoutUser() {
    const cookieStore = await cookies();
    cookieStore.delete('token');
    redirect('/login');
}
