import Head from "next/head";

export default function HomePage() {
    return (
        <>
            <Head>
                <title>Parrot</title>
                <link rel="icon" href="/favicon.png" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <main>
                Hello, world!
            </main>
        </>
    );
};