"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Crown, Star, Linkedin, ScrollText } from 'lucide-react';

// --- Composants réutilisés (Idéalement à mettre dans un fichier components/) ---
const GoatLogo = () => (
  <div className="relative flex items-center justify-center w-12 h-12 border border-amber-500 rounded-full bg-slate-900 shadow-[0_0_10px_rgba(212,175,55,0.3)]">
    <Crown className="w-6 h-6 text-amber-400 absolute -top-1" />
    <span className="text-xl font-serif text-amber-200 pt-1">🐐</span>
  </div>
);

const members = [
  {
    name: "Charles-Hubert de la Tartignole",
    role: "Grand Maître de la Chute",
    corpoTitle: "Senior Risk Manager",
    desc: "Expert en gestion des risques, il a transformé la glissade sur peau de banane en process ISO 9001.",
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    prank: "Cache des coussins péteurs dans les sièges du conseil d'administration."
  },
  {
    name: "Marie-Constance 'Pipo' Valmont",
    role: "VP of Balloon Animals",
    corpoTitle: "Head of HR",
    desc: "Elle gère les ressources humaines comme elle gère ses ballons : avec beaucoup de pression et risque d'explosion.",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    prank: "Remplace l'eau des carafes par du gin tonic lors des séminaires."
  },
  {
    name: "Edouard 'Le Magnifique' Dupont",
    role: "Trésorier & Jongleur",
    corpoTitle: "Chief Financial Officer",
    desc: "Il jongle avec les chiffres aussi bien qu'avec des quilles enflammées. Parfois, il confond les deux.",
    img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    prank: "A validé une note de frais de 4000€ pour 'Nez rouges ergonomiques'."
  },
  {
    name: "Jean-Eudes du Klaxon",
    role: "Directeur de la Farce",
    corpoTitle: "Legal Counsel",
    desc: "Avocat de formation, il défend le droit inaliénable de porter des chaussures taille 58 au bureau.",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    prank: "Rédige ses contrats à l'encre sympathique."
  }
];

export default function Membres() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-amber-500 selection:text-black">
      
      {/* Navigation Simplifiée */}
      <nav className="fixed w-full z-50 bg-slate-950/90 backdrop-blur-md border-b border-amber-900/30">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="/" className="flex items-center gap-3 group">
            <GoatLogo />
            <div className="flex flex-col">
              <span className="text-lg font-serif tracking-widest text-amber-400 uppercase group-hover:text-white transition-colors">Royal Comedy</span>
            </div>
          </a>
          <a href="/" className="text-xs uppercase tracking-widest text-slate-400 hover:text-amber-500 transition-colors">Retour au Lobby</a>
        </div>
      </nav>

      {/* Header */}
      <section className="pt-40 pb-20 px-6 text-center bg-gold-subtle">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            <h1 className="text-5xl md:text-7xl font-serif text-gold mb-6">Le Comité Exécutif</h1>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                Rencontrez l'élite. Ces hommes et femmes dirigent des empires le jour, et déclenchent l'hilarité la nuit.
                <br/><span className="italic text-amber-600/80">Tenue de ville et tarte à la crème exigées.</span>
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
                {/* Image avec effet Overlay */}
                <div className="relative h-80 overflow-hidden">
                    <div className="absolute inset-0 bg-amber-900/20 group-hover:bg-transparent transition-all duration-500 z-10 mix-blend-overlay"></div>
                    <img 
                        src={member.img} 
                        alt={member.name} 
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                    />
                    {/* Badge Corporate */}
                    <div className="absolute top-4 right-4 z-20 bg-black/80 backdrop-blur border border-amber-500/30 px-3 py-1 text-xs uppercase tracking-wider text-amber-500">
                        {member.corpoTitle}
                    </div>
                </div>

                {/* Contenu */}
                <div className="p-8 relative">
                    <div className="flex justify-between items-start mb-4">
                        <div>
                            <h2 className="text-2xl font-serif text-amber-100 group-hover:text-amber-400 transition-colors">{member.name}</h2>
                            <p className="text-sm text-slate-500 uppercase tracking-widest mt-1">{member.role}</p>
                        </div>
                        <Linkedin className="text-slate-600 hover:text-[#0077b5] cursor-pointer transition-colors" />
                    </div>
                    
                    <div className="h-px w-full bg-gradient-to-r from-amber-900/50 to-transparent mb-6"></div>

                    <p className="text-slate-300 leading-relaxed mb-6 font-light">
                        {member.desc}
                    </p>

                    {/* Section "Secret" qui apparaît au hover */}
                    <div className="bg-slate-950 p-4 border-l-2 border-amber-600/50">
                        <div className="flex items-center gap-2 text-amber-500 text-xs uppercase tracking-widest mb-2">
                            <ScrollText size={14} /> Fait d'arme (Confidentiel)
                        </div>
                        <p className="text-sm text-slate-400 italic">"{member.prank}"</p>
                    </div>
                </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 text-center border-t border-slate-900">
         <h3 className="text-2xl font-serif text-slate-300 mb-6">Votre profil correspond ?</h3>
         <button className="px-8 py-3 border border-amber-600 text-amber-500 hover:bg-amber-600 hover:text-black transition-all uppercase tracking-widest text-sm">
             Soumettre sa candidature
         </button>
      </section>

    </main>
  );
}