import Head from "next/head";

function Layout({ title, children }) {
  return (
    <div className="bg-black text-gray-50">
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto max-w-xl pt-8 min-h-screen">
        {children}
      </main>
    </div>
  );
}

export default Layout;
