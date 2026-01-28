"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Crown, Gem, MapPin, Beer, CloudRain, Quote } from 'lucide-react';

// Logo Chèvre "Royal"
const GoatLogo = () => (
  <div className="relative flex items-center justify-center w-16 h-16 border-2 border-amber-500 rounded-full bg-slate-900 shadow-[0_0_15px_rgba(212,175,55,0.3)]">
    <Crown className="w-8 h-8 text-amber-400 absolute -top-1" />
    <span className="text-3xl font-serif text-amber-200 pt-2">🐐</span>
  </div>
);

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
    <main className="min-h-screen flex flex-col font-sans">
      
      {/* --- Navigation --- */}
      <nav className="fixed w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-amber-900/30">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <GoatLogo />
            <div className="flex flex-col">
              <span className="text-xl font-serif tracking-widest text-amber-400 uppercase">RCC</span>
              <span className="text-xs tracking-[0.3em] text-slate-400 uppercase">Bruxelles Chapter</span>
            </div>
          </div>
          <div className="hidden md:flex gap-8 text-sm uppercase tracking-widest text-slate-300">
            <a href="#mission" className="hover:text-amber-400 transition-colors">Notre Exil</a>
            <a href="/membres" className="hover:text-amber-400 transition-colors">La Cour Royale</a>
          </div>
        </div>
      </nav>

      {/* --- Hero Section --- */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gold-subtle">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-amber-500 tracking-[0.3em] text-sm md:text-base uppercase mb-6">
              De la Machine à Café... au Manneken Pis
            </h2>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-gold mb-8 leading-tight">
              Royal Comedy <br/> Club
            </h1>
            <p className="text-lg md:text-xl text-slate-300 font-light mb-12 max-w-2xl mx-auto leading-relaxed">
              La confrérie officielle des exilés du transfert. <br/>
              Parce qu'il faut bien de l'humour pour supporter le climat belge et les cartons qui n'arrivent jamais.
            </p>
            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <a href="/membres" className="bg-gradient-to-r from-amber-600 to-amber-700 text-slate-950 px-8 py-4 font-serif text-lg hover:brightness-110 transition-all shadow-[0_0_20px_rgba(217,119,6,0.4)] rounded-sm">
                Voir les survivants
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- La Mission (Délocalisation) --- */}
      <section id="mission" className="py-24 bg-slate-950 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <h3 className="text-4xl font-serif text-slate-100 mb-6">
              Objectif : <span className="text-amber-500 italic">Survie en Terre Inconnue</span>
            </h3>
            <div className="h-1 w-24 bg-amber-600 mb-8"></div>
            <p className="text-slate-400 mb-6 leading-relaxed">
              On nous a promis le cœur de l'Europe. On a surtout récupéré des bouchons sur le ring et des claviers QWERTY/AZERTY qu'on ne comprend pas.
            </p>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Le RCC est là pour transformer ce traumatisme géographique en art de vivre. Notre devise ? 
              <em> "Si tu ne peux pas éviter la délocalisation, deviens le Roi de la frite."</em>
            </p>
            <ul className="space-y-4 mt-8">
              {[
                "Maîtrise du parapluie par vent de face",
                "Diplomatie du Cornet de Frites",
                "Recherche active du soleil (Mission Impossible)"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-amber-100/80">
                  <Gem className="w-4 h-4 text-amber-500" /> {item}
                </li>
              ))}
            </ul>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <div className="relative border border-amber-900/50 p-8 bg-slate-900/50 rotate-2 hover:rotate-0 transition-transform duration-500">
              <Quote className="absolute top-4 left-4 text-amber-800 w-12 h-12 opacity-50" />
              <p className="font-serif text-2xl text-center italic text-amber-100/90 py-10">
                "Avant je voyais la Tour Eiffel. Maintenant je vois l'Atomium. C'est pareil, mais avec des boules."
              </p>
              <div className="text-center">
                <p className="text-amber-500 font-bold uppercase tracking-widest text-sm">Une victime anonyme</p>
                <p className="text-slate-500 text-xs mt-1">Membre du RCC</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* --- Nos "Avantages" --- */}
      <section className="py-24 bg-slate-900 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-amber-500 uppercase tracking-widest text-sm">La vie de château (ou presque)</span>
            <h2 className="text-4xl md:text-5xl font-serif text-white mt-4">Les Joies du Transfert</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: MapPin, 
                title: "L'Orientation Hasardeuse", 
                desc: "Un atelier pour apprendre à se perdre dans les tunnels de Bruxelles tout en gardant un air digne et professionnel." 
              },
              { 
                icon: Beer, 
                title: "L'Hydratation Belge", 
                desc: "Parce que chaque problème de délocalisation se résout mieux autour d'une Triple fermentation." 
              },
              { 
                icon: CloudRain, 
                title: "Gestion de la Pluie", 
                desc: "Comment garder son brushing et son dignity quand il pleut à l'horizontale 300 jours par an." 
              }
            ].map((card, idx) => (
              <FadeIn key={idx} delay={idx * 0.2}>
                <div className="group bg-slate-950 p-8 border border-slate-800 hover:border-amber-600/50 transition-all duration-300 hover:-translate-y-2 h-full">
                  <div className="w-14 h-14 bg-slate-900 rounded-full flex items-center justify-center mb-6 group-hover:bg-amber-900/20 transition-colors">
                    <card.icon className="text-amber-500 w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-serif text-amber-100 mb-4">{card.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{card.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* --- Footer --- */}
      <footer className="bg-black py-12 border-t border-amber-900/30">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start">
             <GoatLogo />
             <p className="mt-4 text-slate-500 text-sm">© 2026 Royal Comedy Club Bruxelles. <br/>Désolé pour le dérangement.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}