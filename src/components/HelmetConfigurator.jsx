import { useState } from 'react';

export default function HelmetConfigurator() {
  const [primary, setPrimary] = useState('#0b0f19');
  const [blue, setBlue] = useState('#1e90ff');
  const [orange, setOrange] = useState('#ff7a1a');
  const [sharkStyle, setSharkStyle] = useState('bite');

  return (
    <section className="relative py-12 sm:py-16 bg-gradient-to-b from-black via-slate-900 to-black">
      <div className="container mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Design your concept</h2>
            <p className="mt-2 text-blue-200/80 text-sm">Base: black with blue details and small orange highlights. Shark-biting graphic replaces the lion. “DOSG TRANSPORTES” on visor top line.</p>

            <div className="mt-6 space-y-5">
              <div className="flex items-center justify-between">
                <label className="text-blue-100 text-sm">Primary</label>
                <input type="color" value={primary} onChange={(e)=>setPrimary(e.target.value)} className="h-8 w-16 rounded border border-white/10 bg-transparent" />
              </div>
              <div className="flex items-center justify-between">
                <label className="text-blue-100 text-sm">Blue details</label>
                <input type="color" value={blue} onChange={(e)=>setBlue(e.target.value)} className="h-8 w-16 rounded border border-white/10 bg-transparent" />
              </div>
              <div className="flex items-center justify-between">
                <label className="text-blue-100 text-sm">Orange highlights</label>
                <input type="color" value={orange} onChange={(e)=>setOrange(e.target.value)} className="h-8 w-16 rounded border border-white/10 bg-transparent" />
              </div>
              <div className="flex items-center justify-between">
                <label className="text-blue-100 text-sm">Shark graphic</label>
                <select value={sharkStyle} onChange={(e)=>setSharkStyle(e.target.value)} className="bg-slate-800/60 border border-white/10 rounded px-3 py-2 text-blue-100 text-sm">
                  <option value="bite">Bite (default)</option>
                  <option value="fin">Fin streak</option>
                  <option value="full">Full shark head</option>
                </select>
              </div>
            </div>

            <div className="mt-8 p-4 rounded-xl bg-slate-800/40 border border-blue-500/20 text-blue-200 text-sm">
              Notes: This is a visual configurator that previews the palette and graphics layout. Final production will require vector artwork and helmet templates from your manufacturer.
            </div>
          </div>

          <div>
            <HelmetPreview primary={primary} blue={blue} orange={orange} sharkStyle={sharkStyle} />
          </div>
        </div>
      </div>
    </section>
  );
}

function HelmetPreview({ primary, blue, orange, sharkStyle }) {
  return (
    <div className="relative w-full aspect-[4/3] rounded-2xl bg-gradient-to-br from-slate-900 to-black p-6 border border-white/10 shadow-2xl">
      <div className="absolute inset-0 opacity-[0.07] pointer-events-none" style={{background:"radial-gradient(50%_50%_at_50%_50%,rgba(56,189,248,0.25),transparent 65%)"}} />

      {/* Helmet shell */}
      <div className="relative h-full w-full grid grid-cols-12 grid-rows-12">
        {/* Main shell silhouette */}
        <div className="col-start-2 col-end-12 row-start-3 row-end-11 rounded-[100px]" style={{background: `linear-gradient(145deg, ${primary}, #000)`}} />

        {/* Blue dynamic lines */}
        <div className="col-start-3 col-end-11 row-start-4 row-end-5 rounded-full" style={{background: blue, height: 6}} />
        <div className="col-start-4 col-end-10 row-start-6 row-end-7 rounded-full" style={{background: blue, height: 6, opacity: 0.85}} />
        <div className="col-start-5 col-end-9 row-start-8 row-end-9 rounded-full" style={{background: blue, height: 6, opacity: 0.7}} />

        {/* Orange accent ticks */}
        <div className="col-start-10 col-end-11 row-start-5 row-end-6 rounded-full" style={{background: orange, height: 6}} />
        <div className="col-start-8 col-end-9 row-start-7 row-end-8 rounded-full" style={{background: orange, height: 6}} />

        {/* Visor */}
        <div className="col-start-4 col-end-11 row-start-5 row-end-9 rounded-[20px] bg-gradient-to-b from-slate-700/80 to-black/80 border border-white/10 shadow-inner" />

        {/* Visor top thin line with logo */}
        <div className="col-start-4 col-end-11 row-start-5 row-end-5 flex items-center">
          <div className="h-[6px] w-full" style={{background: blue}} />
          <span className="absolute left-1/2 -translate-x-1/2 -translate-y-4 text-[10px] tracking-widest font-semibold text-white/90">DOSG TRANSPORTES</span>
        </div>

        {/* Shark graphic (simplified) */}
        {sharkStyle === 'bite' && (
          <div className="col-start-2 col-end-6 row-start-6 row-end-10 relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-40 h-24">
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-36 h-14 rounded-r-full" style={{background: '#111', border: `2px solid ${blue}`}} />
                {Array.from({length:7}).map((_,i)=> (
                  <div key={i} className="absolute" style={{left: 18 + i*14, top: 32 - (i%2?6:0), width: 0, height: 0, borderLeft: '8px solid transparent', borderRight: '8px solid transparent', borderTop: `14px solid ${blue}`}} />
                ))}
                <div className="absolute right-0 top-6 w-3 h-3 rounded-full" style={{background: orange}} />
              </div>
            </div>
          </div>
        )}
        {sharkStyle === 'fin' && (
          <div className="col-start-6 col-end-10 row-start-4 row-end-8">
            <div className="w-0 h-0" style={{borderLeft: '60px solid transparent', borderRight: '60px solid transparent', borderBottom: `110px solid ${blue}`}} />
          </div>
        )}
        {sharkStyle === 'full' && (
          <div className="col-start-3 col-end-9 row-start-5 row-end-10">
            <div className="relative w-full h-full">
              <div className="absolute left-0 top-6 w-4/5 h-3/5 rounded-r-full" style={{background: `linear-gradient(135deg, ${primary}, #0a0a0a)` , border: `2px solid ${blue}`}} />
              <div className="absolute right-6 top-8 w-2 h-2 rounded-full" style={{background: orange}} />
              {Array.from({length:8}).map((_,i)=> (
                <div key={i} className="absolute" style={{left: 40 + i*24, top: 82 - (i%2?8:0), width: 0, height: 0, borderLeft: '10px solid transparent', borderRight: '10px solid transparent', borderTop: `18px solid ${blue}`}} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
