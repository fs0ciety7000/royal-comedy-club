"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Castle, Gem, CloudRain, HeartCrack, Flame } from 'lucide-react';

const FadeIn = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay }}
  >
    {children}
  </motion.div>
);

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col font-sans bg-slate-950">
      
      {/* --- Navigation --- */}
      <nav className="fixed w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-amber-900/30">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            {/* LOGO PNG ICI */}
            <img src="/logo.png" alt="Logo RCC" className="h-12 w-auto object-contain" />
            <div className="flex flex-col">
              <span className="text-xl font-serif tracking-widest text-amber-400 uppercase">RCC</span>
              <span className="text-xs tracking-widest text-slate-500 uppercase">Royal (Pain in the Ass) Club</span>
            </div>
          </div>
          <div className="hidden md:flex gap-8 text-sm uppercase tracking-widest text-slate-300">
            <a href="#constat" className="hover:text-amber-400 transition-colors">Le Paradis Perdu</a>
            <a href="/membres" className="px-6 py-2 border border-amber-600 text-amber-500 hover:bg-amber-600 hover:text-black transition-all">
              Les Exilés
            </a>
          </div>
        </div>
      </nav>

      {/* --- Hero Section --- */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-slate-900">
        {/* Fond subtil "Pluie belge" */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] opacity-5"></div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="flex justify-center items-center gap-4 mb-6">
                <Castle className="text-amber-600 w-8 h-8" />
                <span className="h-px w-20 bg-amber-600/50"></span>
                <Flame className="text-amber-600 w-8 h-8" /> 
            </div>

            <h2 className="text-amber-500 tracking-[0.2em] text-sm md:text-lg uppercase mb-4 font-bold">
              De la Cité du Doudou... au Manneken Pis
            </h2>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-600 mb-8 leading-tight drop-shadow-lg">
              La Grande <br/> Déportation
            </h1>
            
            <p className="text-lg md:text-2xl text-slate-300 font-light mb-12 max-w-3xl mx-auto leading-relaxed">
              Adieu <span className="text-amber-400 font-semibold">l'OCC</span>, notre Pairi Daiza du travail. <br/>
              Bonjour Bruxelles, ses tunnels, sa grisaille et son "Royal" Comedy Club.
            </p>

            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <a href="/membres" className="bg-amber-600 text-slate-950 px-8 py-4 font-serif text-lg font-bold hover:bg-amber-500 transition-all shadow-[0_0_20px_rgba(217,119,6,0.3)]">
                Voir les sinistrés
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- Le Comparatif (OCC vs RCC) --- */}
      <section id="constat" className="py-24 bg-slate-950 px-6 border-t border-amber-900/20">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-serif text-slate-100 mb-4">Le Choc des Cultures</h3>
            <p className="text-slate-500">Analyse objective (et un peu amère) de la situation.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            
            {/* Colonne GAUCHE : OCC (Le Paradis) */}
            <FadeIn>
              <div className="bg-slate-900/50 p-8 border-l-4 border-green-500 h-full">
                <div className="flex items-center gap-3 mb-6">
                   <div className="p-3 bg-green-900/20 rounded-full"><Castle className="text-green-500" /></div>
                   <h4 className="text-2xl font-serif text-green-400">L'OCC (Mons)</h4>
                </div>
                <ul className="space-y-4 text-slate-300">
                  <li className="flex gap-3"><Gem className="text-green-500 w-5 h-5 shrink-0" /> Ambiance chatoyante & Panda Friendly.</li>
                  <li className="flex gap-3"><Gem className="text-green-500 w-5 h-5 shrink-0" /> Travail exemplaire (entre deux rires).</li>
                  <li className="flex gap-3"><Gem className="text-green-500 w-5 h-5 shrink-0" /> Entente cordiale, presque familiale.</li>
                  <li className="flex gap-3"><Gem className="text-green-500 w-5 h-5 shrink-0" /> C'était le Pairi Daiza de l'Open Space.</li>
                </ul>
              </div>
            </FadeIn>

            {/* Colonne DROITE : RCC (L'Enfer) */}
            <FadeIn delay={0.2}>
              <div className="bg-slate-900/50 p-8 border-l-4 border-red-500 h-full relative overflow-hidden">
                <div className="absolute -right-10 -top-10 text-red-900/10 rotate-12">
                    <CloudRain size={200} />
                </div>
                <div className="flex items-center gap-3 mb-6 relative z-10">
                   <div className="p-3 bg-red-900/20 rounded-full"><HeartCrack className="text-red-500" /></div>
                   <h4 className="text-2xl font-serif text-red-400">Le RCC (Bruxelles)</h4>
                </div>
                <ul className="space-y-4 text-slate-400 relative z-10">
                  <li className="flex gap-3"><CloudRain className="text-red-500 w-5 h-5 shrink-0" /> Grisaille certifiée ISO 9001.</li>
                  <li className="flex gap-3"><CloudRain className="text-red-500 w-5 h-5 shrink-0" /> On cherche encore l'humour (et le parking).</li>
                  <li className="flex gap-3"><CloudRain className="text-red-500 w-5 h-5 shrink-0" /> "Royal" c'est pour faire passer la pilule.</li>
                  <li className="flex gap-3"><CloudRain className="text-red-500 w-5 h-5 shrink-0" /> 2h de trajet pour manger un sandwich mou.</li>
                </ul>
              </div>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* --- Footer --- */}
      <footer className="bg-black py-8 border-t border-amber-900/30 text-center">
          <p className="text-slate-600 text-sm">© 2024 RCC. Rendez-nous notre Beffroi.</p>
      </footer>
    </main>
  );
}