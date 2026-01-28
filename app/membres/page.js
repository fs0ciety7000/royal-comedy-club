"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Crown, Trophy, Beer } from 'lucide-react';

const GoatLogo = () => (
  <div className="relative flex items-center justify-center w-12 h-12 border border-amber-500 rounded-full bg-slate-900 shadow-[0_0_10px_rgba(212,175,55,0.3)]">
    <Crown className="w-6 h-6 text-amber-400 absolute -top-1" />
    <span className="text-xl font-serif text-amber-200 pt-1">🐐</span>
  </div>
);

// --- Les Stars du RCC ---
const members = [
  {
    name: "Sa Majesté Patrick",
    role: "Grand Duc du Carton Perdu",
    surnom: "L'homme qui murmure à l'oreille des frites",
    desc: "Il a pris la délocalisation très au sérieux. Il s'est autoproclamé Roi des Belges du bureau. Il refuse désormais de travailler si on ne lui sert pas une gaufre à 10h.",
    img: "https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    secret: "A essayé de payer son loyer bruxellois avec des tickets resto périmés."
  },
  {
    name: "Monseigneur Julien",
    role: "Baron de la Navette Eurostar",
    surnom: "Le GPS Humain (mais cassé)",
    desc: "Julien est le responsable logistique non-officiel. C'est lui qui organise les sorties, et c'est aussi lui qui nous perd systématiquement dans le centre-ville.",
    img: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    secret: "Pense encore que le 'Manneken Pis' est un collègue de la compta."
  },
  {
    name: "L'Inconnu du 3ème étage",
    role: "Chevalier du 'C'était mieux avant'",
    surnom: "Le Râleur de l'Exil",
    desc: "Il passe ses journées à comparer la machine à café de Bruxelles avec l'ancienne. Spoiler : l'ancienne était toujours mieux.",
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    secret: "A gardé l'heure de l'ancien bureau sur sa montre par protestation."
  },
  {
    name: "La Stagiare Royale",
    role: "Duchesse des Photocopies",
    surnom: "Celle qui parle flamand (faux)",
    desc: "On compte sur elle pour traduire les menus au restaurant, mais elle invente tout. Grâce à elle, on a mangé du 'cheval' en pensant que c'était du tofu.",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    secret: "Cache des speculoos dans les dossiers urgents."
  }
];

export default function Membres() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-amber-500 selection:text-black">
      
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-slate-950/90 backdrop-blur-md border-b border-amber-900/30">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="/" className="flex items-center gap-3 group">
            <GoatLogo />
            <div className="flex flex-col">
              <span className="text-lg font-serif tracking-widest text-amber-400 uppercase group-hover:text-white transition-colors">RCC Bruxelles</span>
            </div>
          </a>
          <a href="/" className="text-xs uppercase tracking-widest text-slate-400 hover:text-amber-500 transition-colors">Retour au QG</a>
        </div>
      </nav>

      {/* Header */}
      <section className="pt-40 pb-20 px-6 text-center bg-gold-subtle">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            <h1 className="text-5xl md:text-7xl font-serif text-gold mb-6">La Haute Cour du RCC</h1>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                Ils ont survécu au déménagement. Ils ont affronté l'administration belge. <br/>
                Voici les héros (malgré eux) de cette aventure.
            </p>
        </motion.div>
      </section>

      {/* Grid Membres */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          {members.map((member, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative bg-slate-900 border border-slate-800 hover:border-amber-500/50 transition-all duration-500 overflow-hidden rounded-sm"
            >
                {/* Image */}
                <div className="relative h-80 overflow-hidden">
                    <div className="absolute inset-0 bg-amber-900/20 group-hover:bg-transparent transition-all duration-500 z-10 mix-blend-overlay"></div>
                    <img 
                        src={member.img} 
                        alt={member.name} 
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-4 right-4 z-20 bg-black/80 backdrop-blur border border-amber-500/30 px-3 py-1 text-xs uppercase tracking-wider text-amber-500">
                        {member.surnom}
                    </div>
                </div>

                {/* Contenu */}
                <div className="p-8 relative">
                    <div className="flex justify-between items-start mb-4">
                        <div>
                            <h2 className="text-2xl font-serif text-amber-100 group-hover:text-amber-400 transition-colors">{member.name}</h2>
                            <p className="text-sm text-slate-500 uppercase tracking-widest mt-1">{member.role}</p>
                        </div>
                        <Beer className="text-slate-600 hover:text-amber-500 cursor-pointer transition-colors" />
                    </div>
                    
                    <div className="h-px w-full bg-gradient-to-r from-amber-900/50 to-transparent mb-6"></div>

                    <p className="text-slate-300 leading-relaxed mb-6 font-light">
                        {member.desc}
                    </p>

                    <div className="bg-slate-950 p-4 border-l-2 border-amber-600/50">
                        <div className="flex items-center gap-2 text-amber-500 text-xs uppercase tracking-widest mb-2">
                            <Trophy size={14} /> Dossier Secret Défense
                        </div>
                        <p className="text-sm text-slate-400 italic">"{member.secret}"</p>
                    </div>
                </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center border-t border-slate-900">
         <h3 className="text-2xl font-serif text-slate-300 mb-6">Vous aussi vous êtes perdu à Bruxelles ?</h3>
         <button className="px-8 py-3 border border-amber-600 text-amber-500 hover:bg-amber-600 hover:text-black transition-all uppercase tracking-widest text-sm">
             Rejoindre la confrérie
         </button>
      </section>

    </main>
  );
}