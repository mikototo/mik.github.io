import Head from "next/head";
import CanvasBackground from "../components/CanvasBackground";
import Portfolio from "../components/Portfolio";

export default function Home() {
  return (
      <>
        <Head>
          <title>Mikato</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>

        {/* Render the canvas background */}
        <CanvasBackground />

        {/* Fixed Title (styles defined in your global CSS) */}
        <h1 className="title">Mikato</h1>

        {/* Portfolio container wrapping your portfolio grid */}
        <div className="portfolio-container">
          <Portfolio />
        </div>
      </>
  );
}
