import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4Tf9WOIaWs6LOezG/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 h-full w-full">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80 pointer-events-none"></div>
        <div className="relative container mx-auto px-6 sm:px-8 py-16 sm:py-24 flex flex-col items-start justify-end h-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-300 border border-blue-400/20 px-3 py-1 rounded-full text-xs font-medium tracking-wide mb-4">
              automotive • sports • dynamic • high-energy
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white drop-shadow-lg">
              Custom Go‑Kart Helmet Concept
            </h1>
            <p className="mt-4 text-blue-200/90 text-base sm:text-lg max-w-2xl">
              A black primary shell with electric‑blue lines and subtle orange accents. Replacing the lion motif with a fierce shark bite graphic. Branded with “DOSG TRANSPORTES” on the visor trim.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
