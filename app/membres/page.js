"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Crown, AlertTriangle, Bone } from 'lucide-react';

// Les survivants de l'OCC
const members = [
  {
    name: "Sa Majesté Patrick",
    role: "Mascotte non-homologuée",
    surnom: "Fétide",
    desc: "Il régnait sur l'OCC avec bienveillance et charisme. Aujourd'hui, il erre dans les couloirs du RCC en cherchant désespérément un dragon à caresser. Il considère le déménagement comme un crime de lèse-majesté.",
    img: "/patrick.png", // Image locale
    skill: "Au plus proche de Pairi Daiza, qu'on s'y croirait."
  },
  {
    name: "Monseigneur Julien",
    role: "Grand Chambellan du Déménagement",
    surnom: "Pika",
    desc: "Il régnait sur l'OCC avec bienveillance et charisme. Aujourd'hui, il erre dans les couloirs du RCC en cherchant désespérément un dragon à caresser. ",
    img: "/julien.png", // Image locale
    skill: "Sait sourire même quand il pleut (càd tout le temps)."
  },
  {
    name: "L'Inconnu du 3ème Type",
    role: "Mascotte homologuée",
    surnom: "Le Chien",
    desc: "Personne ne sait comment il est arrivé là. Il est le seul à apprécier Bruxelles car il y a plus de poteaux. C'est le seul membre du RCC qui est content d'être là (parce qu'on lui donne des croquettes).",
    img: "/chien.png", // Image locale
    skill: "Aboie pendant les Incidents."
  }
];

export default function Membres() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-red-500 selection:text-white">
      
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-slate-950/90 backdrop-blur-md border-b border-amber-900/30">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
           <a href="/" className="flex items-center gap-3">
            <img src="/logo.png" alt="Logo" className="h-10 w-auto" />
            <span className="text-lg font-serif tracking-widest text-amber-400 uppercase">RCC</span>
          </a>
          <a href="/" className="text-xs uppercase tracking-widest text-slate-400 hover:text-amber-500 transition-colors">Retour à la case départ</a>
        </div>
      </nav>

      {/* Header */}
      <section className="pt-40 pb-16 px-6 text-center bg-gradient-to-b from-slate-900 to-slate-950">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            <h1 className="text-5xl md:text-7xl font-serif text-amber-500 mb-6">La Cour en Exil</h1>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg italic">
                "Ils étaient heureux à Mons. Ils sont... présents à Bruxelles."
            </p>
        </motion.div>
      </section>

      {/* Grid Membres */}
      <section className="py-10 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {members.map((member, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-slate-900 border border-slate-800 rounded-lg overflow-hidden flex flex-col hover:border-amber-600 transition-colors duration-300"
            >
                {/* Image Carrée et centrée */}
                <div className="aspect-square w-full overflow-hidden relative bg-black">
                    <img 
                        src={member.img} 
                        alt={member.name} 
                        className="w-full h-full object-cover object-center opacity-90 hover:opacity-100 hover:scale-105 transition-all duration-500"
                    />
                    <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/90 to-transparent p-4 pt-12">
                         <p className="text-amber-500 text-xs font-bold uppercase tracking-widest mb-1">{member.surnom}</p>
                         <h2 className="text-xl font-serif text-white">{member.name}</h2>
                    </div>
                </div>

                {/* Contenu */}
                <div className="p-6 flex flex-col grow">
                    <div className="flex items-center gap-2 mb-4 text-slate-500 text-sm border-b border-slate-800 pb-2">
                        <Crown size={14} className="text-amber-600" />
                        <span>{member.role}</span>
                    </div>

                    <p className="text-slate-300 text-sm leading-relaxed mb-6 font-light grow">
                        {member.desc}
                    </p>

                    <div className="bg-amber-950/30 p-3 rounded border border-amber-900/30 mt-auto">
                        <div className="flex items-center gap-2 text-amber-500 text-[10px] uppercase tracking-widest mb-1">
                            {member.name.includes('Chien') ? <Bone size={12}/> : <AlertTriangle size={12} />}
                            Compétence Inutile
                        </div>
                        <p className="text-xs text-amber-200/80 italic">"{member.skill}"</p>
                    </div>
                </div>
            </motion.div>
          ))}
        </div>
      </section>

    </main>
  );
}