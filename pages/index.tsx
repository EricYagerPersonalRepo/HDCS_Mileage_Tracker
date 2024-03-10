import Head from 'next/head';
import React, { useRef } from 'react';

export default function Home() {
    const fileInputRef = useRef(null);

    const handleOpenCamera = () => {
        const inputRef:any = fileInputRef.current
        inputRef.click();
    };

    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 dark:bg-gray-900">
        <Head>
            <title>Handwritten Document Scanner</title>
            <meta name="description" content="Scan and parse handwritten documents with ease." />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-6xl">
            Welcome to the Handwritten Document Scanner
            </h1>

            <p className="mt-3 text-2xl text-gray-600 dark:text-gray-400">
            Scan your documents by clicking below.
            </p>

            <div className="mt-6">
            <button
                className="rounded-md bg-blue-500 py-2 px-4 text-lg font-semibold text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
                onClick={handleOpenCamera}
            >
                Open Camera
            </button>
            <input
                type="file"
                accept="image/*"
                capture="environment"
                onChange={(event) => {
                    // Handle the file input change event here
                    // For example, you could set the file to state or immediately upload it
                    console.log(event.target.files);
                }}
                ref={fileInputRef}
                className="hidden"
            />
            </div>
        </main>

        <footer className="flex h-24 w-full items-center justify-center border-t border-gray-200 dark:border-gray-700">
            <a
            className="flex items-center justify-center gap-2"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            >
            Powered by{' '}
            <img src="/vercel.svg" alt="Vercel Logo" className="h-4 dark:invert" />
            </a>
        </footer>
        </div>
    );
}
