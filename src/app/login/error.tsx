
'use client'

export default function LoginError({
    error, reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    return (
        <div className="max-w-md mx-auto mt-20 text-center">
            <h2 className="text-x1 font-bold text-red-500">Something went wrong</h2>
            <p className="text-gray-500 mt-2">{error.message}</p>
            <button onClick={ () => reset() }
                className="mt-4 bg-blue-600 text-white px-4 rounded-lg">
                Try again
            </button>
        </div>
    );
}