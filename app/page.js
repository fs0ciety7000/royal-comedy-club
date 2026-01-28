"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Castle, CloudRain, Star, TrendingDown, ArrowRight, Quote, Skull } from 'lucide-react';

// Animation d'apparition douce
const FadeIn = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col font-sans bg-slate-950 text-slate-200">
      
      {/* --- Navigation (Alignement corrigé & Style Luxe) --- */}
      <nav className="fixed w-full z-50 bg-slate-950/90 backdrop-blur-xl border-b border-amber-900/30 shadow-2xl">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            {/* Logo */}
            <img src="/logo.png" alt="Logo RCC" className="h-12 w-auto object-contain drop-shadow-[0_0_8px_rgba(217,119,6,0.5)]" />
            <div className="flex flex-col">
              <span className="text-xl font-serif tracking-widest text-amber-500 uppercase font-bold">RCC</span>
              <span className="text-[10px] tracking-[0.25em] text-slate-500 uppercase">Royal Comedy Club</span>
            </div>
          </div>
          
          {/* Menu aligné */}
          <div className="hidden md:flex items-center gap-10 text-xs font-bold uppercase tracking-[0.15em] text-amber-100/60">
            <a href="#patrimoine" className="hover:text-amber-400 transition-colors duration-300">
              Le Paradis Perdu
            </a>
            <a href="/membres" className="px-8 py-3 border border-amber-600/50 text-amber-500 hover:bg-amber-600 hover:text-black transition-all duration-500 shadow-[0_0_15px_rgba(217,119,6,0.1)]">
              Rencontrer les Exilés
            </a>
          </div>
        </div>
      </nav>

     {/* --- Hero Section (Modifiée avec Logo Central) --- */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950 pt-20 pb-10">
        {/* Fond texturé Or très subtil */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/50 to-slate-950"></div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-amber-900/40 bg-amber-950/10 text-amber-500/80 text-[10px] tracking-[0.3em] uppercase mb-8">
              <Skull size={12} /> Requiem pour l'OCC
            </div>

            {/* Titre Principal */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-500 to-amber-700 mb-6 leading-tight drop-shadow-sm">
              La Grande <br/> Déportation
            </h1>

            {/* --- NOUVEAU : Logo Central & Nom du Club --- */}
            <div className="flex flex-col items-center justify-center mb-8">
                <img 
                    src="/logo.png" 
                    alt="Logo Royal" 
                    className="h-24 md:h-32 w-auto object-contain drop-shadow-[0_0_25px_rgba(217,119,6,0.3)] mb-4 hover:scale-105 transition-transform duration-500"
                />
                <h2 className="text-2xl md:text-3xl font-serif text-amber-100 tracking-[0.2em] uppercase border-b border-amber-900/30 pb-2">
                    Royal Comedy Club
                </h2>
            </div>
            
            {/* Citation */}
            <p className="text-xl md:text-2xl text-slate-400 font-light mb-12 max-w-3xl mx-auto leading-relaxed font-serif italic">
              "Nous avons quitté la Cité du Doudou pour la Cité des Bouchons. <br/>
              Le prestige est intact, mais le moral est en option."
            </p>

            {/* Bouton */}
            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <a href="/membres" className="group relative px-8 py-4 bg-transparent overflow-hidden rounded-sm border border-amber-600 text-amber-500 font-serif text-lg tracking-wider hover:text-slate-950 transition-colors duration-300">
                <div className="absolute inset-0 w-0 bg-amber-600 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                <span className="relative z-10 flex items-center gap-2">Consulter l'État des Troupes <ArrowRight size={16}/></span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- Le Comparatif (Style "Audit Patrimonial") --- */}
      <section id="patrimoine" className="py-28 bg-slate-950 px-6 relative">
        {/* Ligne décorative or */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-amber-600/0 via-amber-600/50 to-amber-600/0"></div>

        <div className="max-w-6xl mx-auto">
          
          <div className="text-center mb-20">
            <h3 className="text-3xl md:text-4xl font-serif text-amber-100 mb-3">Audit de Qualité de Vie</h3>
            <p className="text-slate-500 font-light tracking-wide text-sm uppercase">Comparatif Avant / Après Sinistre</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 md:gap-0">
            
            {/* OCC - L'Âge d'Or */}
            <FadeIn>
              <div className="h-full border border-amber-900/30 bg-gradient-to-b from-slate-900 to-slate-950 p-10 relative md:mr-4 hover:border-amber-600/40 transition-colors duration-500 group">
                {/* Entête */}
                <div className="flex items-center gap-4 mb-8 pb-8 border-b border-amber-900/20">
                    <div className="p-4 bg-amber-950/30 rounded-full border border-amber-900/50 group-hover:bg-amber-500 group-hover:text-black transition-all duration-500 text-amber-500">
                        <Castle size={32} />
                    </div>
                    <div>
                        <h4 className="text-2xl font-serif text-amber-100">L'OCC Mons</h4>
                        <p className="text-amber-500/60 text-xs uppercase tracking-widest">Le Paradis Perdu</p>
                    </div>
                </div>

                {/* Contenu */}
                <ul className="space-y-6">
                    <li className="flex items-start gap-4">
                        <Star className="text-amber-500 w-5 h-5 mt-1 shrink-0" fill="currentColor" />
                        <div>
                            <span className="block text-slate-200 font-serif text-lg">Ambiance Pairi Daiza</span>
                            <span className="text-slate-500 text-sm">Des pandas, des rires, et du bonheur en barre.</span>
                        </div>
                    </li>
                    <li className="flex items-start gap-4">
                        <Star className="text-amber-500 w-5 h-5 mt-1 shrink-0" fill="currentColor" />
                        <div>
                            <span className="block text-slate-200 font-serif text-lg">Le Dragon</span>
                            <span className="text-slate-500 text-sm">Un symbole noble pour des gens nobles.</span>
                        </div>
                    </li>
                    <li className="flex items-start gap-4">
                        <Star className="text-amber-500 w-5 h-5 mt-1 shrink-0" fill="currentColor" />
                        <div>
                            <span className="block text-slate-200 font-serif text-lg">Trajet : 15 minutes</span>
                            <span className="text-slate-500 text-sm">Juste le temps d'écouter deux chansons.</span>
                        </div>
                    </li>
                </ul>
              </div>
            </FadeIn>

            {/* RCC - Le Moyen-Âge */}
            <FadeIn delay={0.2}>
              <div className="h-full border border-slate-800 bg-slate-950 p-10 relative md:ml-4 opacity-80 hover:opacity-100 transition-opacity duration-500 grayscale-[0.5] hover:grayscale-0">
                
                <div className="absolute top-0 right-0 p-6 text-slate-800 rotate-12">
                   <CloudRain size={120} strokeWidth={0.5} />
                </div>

                {/* Entête */}
                <div className="flex items-center gap-4 mb-8 pb-8 border-b border-slate-800 relative z-10">
                    <div className="p-4 bg-slate-900 rounded-full border border-slate-700 text-slate-400">
                        <TrendingDown size={32} />
                    </div>
                    <div>
                        <h4 className="text-2xl font-serif text-slate-300">RCC Bruxelles</h4>
                        <p className="text-slate-600 text-xs uppercase tracking-widest">Terre hostile</p>
                    </div>
                </div>

                {/* Contenu */}
                <ul className="space-y-6 relative z-10">
                    <li className="flex items-start gap-4">
                        <CloudRain className="text-slate-600 w-5 h-5 mt-1 shrink-0" />
                        <div>
                            <span className="block text-slate-400 font-serif text-lg">Ambiance "Open Space"</span>
                            <span className="text-slate-600 text-sm">Les pets d'Alain ne s'entendent plus.</span>
                        </div>
                    </li>
                    <li className="flex items-start gap-4">
                        <CloudRain className="text-slate-600 w-5 h-5 mt-1 shrink-0" />
                        <div>
                            <span className="block text-slate-400 font-serif text-lg">Le Manneken Pis</span>
                            <span className="text-slate-600 text-sm">Notre nouveau chef spirituel urine en public.</span>
                        </div>
                    </li>
                    <li className="flex items-start gap-4">
                        <CloudRain className="text-slate-600 w-5 h-5 mt-1 shrink-0" />
                        <div>
                            <span className="block text-slate-400 font-serif text-lg">Trajet : L'Infini</span>
                            <span className="text-slate-600 text-sm">On a le temps d'écouter 4 podcasts et de vieillir.</span>
                        </div>
                    </li>
                </ul>
              </div>
            </FadeIn>

          </div>

          {/* Citation de fin */}
          <FadeIn delay={0.4}>
            <div className="mt-20 text-center max-w-2xl mx-auto relative">
                <Quote className="absolute -top-6 -left-6 text-amber-900/40 w-16 h-16" />
                <p className="font-serif text-xl md:text-2xl italic text-amber-100/80">
                    "Au RCC, nous n'avons pas perdu notre sourire. <br/>
                    Nous l'avons simplement oublié dans un carton à Mons."
                </p>
                <div className="mt-6 h-px w-20 bg-amber-600 mx-auto"></div>
            </div>
          </FadeIn>

        </div>
      </section>

      {/* --- Footer (Minimaliste Luxe) --- */}
      <footer className="bg-black py-12 border-t border-amber-900/20 flex flex-col items-center justify-center gap-6">
          <div className="flex flex-col items-center gap-2">
            <span className="text-amber-600 text-2xl font-serif">RCC</span>
            <p className="text-slate-600 text-xs uppercase tracking-[0.2em]">Royal Comedy Club • Since The Relocation</p>
          </div>
          <a href="/membres" className="text-xs text-amber-500/50 hover:text-amber-500 flex items-center gap-2 transition-colors duration-300">
            Rejoindre Patrick et Julien au bar <ArrowRight size={10} />
          </a>
      </footer>
    </main>
  );
}