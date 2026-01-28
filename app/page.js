"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { TrendingDown, AlertOctagon, XCircle, CheckCircle2, ArrowRight } from 'lucide-react';

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
    <main className="min-h-screen flex flex-col font-sans bg-slate-950 text-slate-200">
      
      {/* --- Navigation (Corrigée : items-center pour l'alignement) --- */}
      <nav className="fixed w-full z-50 bg-slate-950/90 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <img src="/logo.png" alt="Logo RCC" className="h-12 w-auto object-contain hover:grayscale transition-all" />
            <div className="flex flex-col">
              <span className="text-xl font-serif tracking-widest text-white uppercase">RCC</span>
              <span className="text-[10px] tracking-[0.2em] text-slate-500 uppercase">Département des Plaintes</span>
            </div>
          </div>
          {/* AJOUT DE 'items-center' ICI pour aligner le lien et le bouton */}
          <div className="hidden md:flex items-center gap-8 text-xs font-bold uppercase tracking-widest text-slate-400">
            <a href="#downgrade" className="hover:text-white transition-colors border-b border-transparent hover:border-white pb-1">
              Le Paradis Perdu
            </a>
            <a href="/membres" className="px-6 py-3 border border-white/20 text-white hover:bg-white hover:text-black transition-all">
              Les Exilés
            </a>
          </div>
        </div>
      </nav>

      {/* --- Hero Section --- */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-800 via-slate-950 to-black opacity-40"></div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-red-900/50 bg-red-950/20 text-red-400 text-xs tracking-widest uppercase mb-8">
              <AlertOctagon size={14} /> Incident Critique en cours
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-6 leading-tight">
              RCC <span className="text-slate-600">Bruxelles</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-400 font-light mb-10 max-w-3xl mx-auto leading-relaxed">
              De la Cité du Doudou au Mordor administratif. <br/>
              <span className="italic text-slate-500 text-base">"On avait des dragons, maintenant on a des tableurs."</span>
            </p>

            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <a href="/membres" className="bg-white text-black px-8 py-4 font-serif text-lg font-bold hover:bg-slate-200 transition-all">
                Voir l'équipe de crise
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- Le Comparatif (Nouvelle Version : "Downgrade Report") --- */}
      <section id="downgrade" className="py-24 bg-black px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center mb-20">
            <h3 className="text-3xl font-serif text-white mb-2">Rapport de Migration</h3>
            <p className="text-slate-500 font-mono text-sm">Status: ÉCHEC CRITIQUE</p>
          </div>

          {/* Tableau de comparaison façon "Specs techniques" */}
          <div className="grid md:grid-cols-2 gap-0 border border-white/10 rounded-lg overflow-hidden">
            
            {/* OCC - The Good Old Days */}
            <div className="bg-slate-900/50 p-10 relative group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                 <CheckCircle2 size={100} />
              </div>
              <h4 className="text-xl font-bold text-green-500 mb-2 flex items-center gap-3">
                <span className="text-xs bg-green-900/30 border border-green-800 px-2 py-1 rounded text-green-400">V1.0 (Stable)</span>
                L'OCC Mons
              </h4>
              <p className="text-slate-500 text-sm mb-8 font-serif italic">"Le Pairi Daiza du Tertiaire"</p>
              
              <div className="space-y-6">
                 <div>
                    <span className="block text-xs uppercase tracking-widest text-slate-500 mb-1">Ambiance</span>
                    <div className="text-slate-200">Chatoyante & Familiale</div>
                 </div>
                 <div>
                    <span className="block text-xs uppercase tracking-widest text-slate-500 mb-1">Symbole</span>
                    <div className="text-slate-200">Le Dragon (Badass)</div>
                 </div>
                 <div>
                    <span className="block text-xs uppercase tracking-widest text-slate-500 mb-1">Temps de trajet</span>
                    <div className="text-slate-200">15 min (En chantant)</div>
                 </div>
                 <div>
                    <span className="block text-xs uppercase tracking-widest text-slate-500 mb-1">Qualité de vie</span>
                    <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                        <div className="bg-green-500 h-full w-[98%]"></div>
                    </div>
                 </div>
              </div>
            </div>

            {/* RCC - The Disaster */}
            <div className="bg-red-950/10 p-10 relative border-t md:border-t-0 md:border-l border-white/10 group">
               <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity text-red-600">
                 <XCircle size={100} />
              </div>
              <h4 className="text-xl font-bold text-red-500 mb-2 flex items-center gap-3">
                <span className="text-xs bg-red-900/30 border border-red-800 px-2 py-1 rounded text-red-400">V2.0 (Bugged)</span>
                RCC Bruxelles
              </h4>
              <p className="text-slate-500 text-sm mb-8 font-serif italic">"Erreur 404: Joie not found"</p>
              
              <div className="space-y-6">
                 <div>
                    <span className="block text-xs uppercase tracking-widest text-slate-500 mb-1">Ambiance</span>
                    <div className="text-slate-200">Béton brut & Lumière néon</div>
                 </div>
                 <div>
                    <span className="block text-xs uppercase tracking-widest text-slate-500 mb-1">Symbole</span>
                    <div className="text-slate-200">Le Manneken Pis (Un gars qui pisse)</div>
                 </div>
                 <div>
                    <span className="block text-xs uppercase tracking-widest text-slate-500 mb-1">Temps de trajet</span>
                    <div className="text-slate-200">2h (En pleurant)</div>
                 </div>
                 <div>
                    <span className="block text-xs uppercase tracking-widest text-slate-500 mb-1">Qualité de vie</span>
                    <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                        <div className="bg-red-600 h-full w-[12%]"></div>
                    </div>
                 </div>
              </div>
            </div>

          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-3 text-slate-400 text-sm border border-slate-800 px-6 py-4 rounded bg-slate-900/50">
               <TrendingDown className="text-red-500" />
               <span>Analyse : La perte de productivité est directement proportionnelle à la distance avec la Grand-Place de Mons.</span>
            </div>
          </div>

        </div>
      </section>

      {/* --- Footer --- */}
      <footer className="bg-black py-12 border-t border-white/10 flex flex-col items-center justify-center gap-4">
          <p className="text-slate-600 text-sm uppercase tracking-widest">© 2024 RCC - Royal Complaint Club</p>
          <a href="/membres" className="text-xs text-slate-700 hover:text-white flex items-center gap-2 transition-colors">
            Rejoindre Patrick et Julien <ArrowRight size={12} />
          </a>
      </footer>
    </main>
  );
}