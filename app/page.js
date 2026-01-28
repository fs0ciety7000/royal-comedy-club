"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Crown, Gem, Briefcase, Award, Star, Quote } from 'lucide-react';

// Composant Logo "Chèvre" stylisé
const GoatLogo = () => (
  <div className="relative flex items-center justify-center w-16 h-16 border-2 border-amber-500 rounded-full bg-slate-900 shadow-[0_0_15px_rgba(212,175,55,0.3)]">
    {/* Représentation abstraite de la chèvre / Lion's club style */}
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
              <span className="text-xl font-serif tracking-widest text-amber-400 uppercase">Royal Comedy</span>
              <span className="text-xs tracking-[0.3em] text-slate-400 uppercase">Club</span>
            </div>
          </div>
          <div className="hidden md:flex gap-8 text-sm uppercase tracking-widest text-slate-300">
            <a href="#philosophie" className="hover:text-amber-400 transition-colors">L'Esprit</a>
            <a href="#membres" className="hover:text-amber-400 transition-colors">La Hiérarchie</a>
            <a href="#join" className="px-6 py-2 border border-amber-600 text-amber-500 hover:bg-amber-600 hover:text-black transition-all duration-300">
              Postuler
            </a>
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
            <h2 className="text-amber-500 tracking-[0.5em] text-sm md:text-base uppercase mb-6">
              Excellence & Nez Rouge
            </h2>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-gold mb-8 leading-tight">
              L'Art du <br/> Clown Corporate
            </h1>
            <p className="text-lg md:text-xl text-slate-300 font-light mb-12 max-w-2xl mx-auto leading-relaxed">
              La première confrérie mondiale dédiée à l'optimisation du rire en milieu hostile. 
              Parce que porter une cravate n'empêche pas de glisser sur une peau de banane fiscale.
            </p>
            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <button className="bg-gradient-to-r from-amber-600 to-amber-700 text-slate-950 px-8 py-4 font-serif text-lg hover:brightness-110 transition-all shadow-[0_0_20px_rgba(217,119,6,0.4)]">
                Découvrir le Prestige
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- Philosophie (Luxe & Absurde) --- */}
      <section id="philosophie" className="py-24 bg-slate-950 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <h3 className="text-4xl font-serif text-slate-100 mb-6">
              La Synergie du <span className="text-amber-500 italic">Pouet-Pouet</span>
            </h3>
            <div className="h-1 w-24 bg-amber-600 mb-8"></div>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Au Royal Comedy Club, nous croyons que la réunion du lundi matin est le plus grand sketch jamais écrit. Nos membres sont des cadres supérieurs le jour, et des artistes de la chute (au sens propre) la nuit.
            </p>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Nous cultivons l'élégance de la maladresse. Notre blason, la <strong>Chèvre Dorée</strong>, symbolise notre capacité à gravir les échelons tout en bêlant devant un tableau Excel.
            </p>
            <ul className="space-y-4 mt-8">
              {[
                "Networking avec chaussures taille 58",
                "Gestion de crise par tarte à la crème",
                "KPI : Key Prank Indicators"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-amber-100/80">
                  <Star className="w-4 h-4 text-amber-500" /> {item}
                </li>
              ))}
            </ul>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <div className="relative border border-amber-900/50 p-8 bg-slate-900/50 rotate-2 hover:rotate-0 transition-transform duration-500">
              <Quote className="absolute top-4 left-4 text-amber-800 w-12 h-12 opacity-50" />
              <p className="font-serif text-2xl text-center italic text-amber-100/90 py-10">
                "J'ai compris le sens de la vie d'entreprise le jour où j'ai remplacé WeBe par un animal en ballon."
              </p>
              <div className="text-center">
                <p className="text-amber-500 font-bold uppercase tracking-widest text-sm">Jean-Eudes de la Comptabilité</p>
                <p className="text-slate-500 text-xs mt-1">Grand Maître de la Chute Arrière</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* --- Services / Rituels --- */}
      <section className="py-24 bg-slate-900 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-amber-500 uppercase tracking-widest text-sm">Nos Rituels</span>
            <h2 className="text-4xl md:text-5xl font-serif text-white mt-4">Prestations Haut de Gamme</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: Gem, 
                title: "Le Gala Cravate & Confettis", 
                desc: "Un dîner mondain où le champagne est servi dans des fleurs arroseuses. Tenue de soirée exigée, nez rouge optionnel." 
              },
              { 
                icon: Briefcase, 
                title: "Séminaires de Désorganisation", 
                desc: "Nous intervenons dans vos bureaux pour désorganiser méthodiquement vos processus. Augmentation du stress négatif garantie." 
              },
              { 
                icon: Award, 
                title: "Certification Grand Guignol", 
                desc: "Une formation élitiste pour apprendre à trébucher avec dignité lors d'une présentation devant le conseil d'administration." 
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
             <p className="mt-4 text-slate-500 text-sm">© 2026 Royal Comedy Club. <br/>Tous droits réservés (et tordus).</p>
          </div>
          <div className="flex gap-8 text-slate-400 text-sm">
             <a href="#" className="hover:text-amber-500">Mentions Légales</a>
             <a href="#" className="hover:text-amber-500">Politique de Rire</a>
             <a href="#" className="hover:text-amber-500">Contact Privé</a>
          </div>
        </div>
      </footer>
    </main>
  );
}