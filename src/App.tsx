/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  PawPrint, 
  ShoppingBag, 
  Truck, 
  Star, 
  MapPin, 
  Phone, 
  Instagram, 
  ChevronRight,
  ArrowRight,
  ShieldCheck,
  Heart,
  Store
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const heroRef = useRef<HTMLDivElement>(null);
  const bentoRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Hero Entrance
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.from('.hero-title', {
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: 'power4.out',
        stagger: 0.2
      })
      .from('.hero-sub', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
      }, '-=0.6')
      .from('.hero-cta', {
        scale: 0.8,
        opacity: 0,
        duration: 0.6,
        ease: 'back.out(1.7)'
      }, '-=0.4');

      // Scroll Reveals
      gsap.utils.toArray('.reveal').forEach((elem: any) => {
        gsap.from(elem, {
          scrollTrigger: {
            trigger: elem,
            start: 'top 85%',
            toggleActions: 'play none none none'
          },
          y: 60,
          opacity: 0,
          duration: 1,
          ease: 'power3.out'
        });
      });

      // Bento Grid Stagger
      gsap.from('.bento-item', {
        scrollTrigger: {
          trigger: bentoRef.current,
          start: 'top 75%'
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power2.out'
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full z-50 px-6 py-4">
        <nav className="max-w-7xl mx-auto glass rounded-full px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <PawPrint className="text-brand-amber w-8 h-8" />
            <span className="font-display font-bold text-xl tracking-tighter uppercase">Ruralista Assis</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-widest text-white/70">
            <a href="#inicio" className="hover:text-brand-amber transition-colors">Início</a>
            <a href="#diferenciais" className="hover:text-brand-amber transition-colors">Diferenciais</a>
            <a href="#sobre" className="hover:text-brand-amber transition-colors">Sobre</a>
            <a href="#contato" className="hover:text-brand-amber transition-colors">Contato</a>
          </div>

          <button className="bg-white text-black px-6 py-2 rounded-full font-bold text-sm uppercase tracking-tighter hover:bg-brand-amber transition-all duration-300">
            Fale Conosco
          </button>
        </nav>
      </header>

      {/* HERO SECTION */}
      <section id="inicio" ref={heroRef} className="relative h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Background Image with Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=1920" 
            alt="Ruralista Assis Background" 
            className="w-full h-full object-cover opacity-40 scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/60 to-transparent" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-8 reveal">
            <Star className="w-4 h-4 text-brand-amber fill-brand-amber" />
            <span className="text-xs font-bold tracking-widest uppercase">4.9 Estrelas em Cel. Fabriciano</span>
          </div>
          
          <h1 className="hero-title font-display text-6xl md:text-8xl font-extrabold tracking-tighter leading-[0.9] mb-8 text-balance">
            O CUIDADO QUE SEU <span className="text-brand-amber italic">PET</span> E SUA <span className="text-brand-amber italic">FAZENDA</span> MERECEM.
          </h1>
          
          <p className="hero-sub text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-10 font-light leading-relaxed text-balance">
            Tradição ruralista e excelência em pet shop em um só lugar. Produtos selecionados, atendimento comprometido e a confiança de quem entende do campo e da cidade.
          </p>
          
          <div className="hero-cta flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="group bg-brand-amber text-black px-10 py-5 rounded-full font-black text-lg uppercase tracking-tighter flex items-center gap-3 hover:scale-105 transition-all duration-300">
              Ver Produtos
              <ChevronRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="glass px-10 py-5 rounded-full font-bold text-lg uppercase tracking-tighter hover:bg-white/10 transition-all">
              Nossa Localização
            </button>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-30">
          <div className="w-px h-12 bg-gradient-to-b from-white to-transparent" />
        </div>
      </section>

      {/* AUTHORITY MARQUEE */}
      <section className="py-20 border-y border-white/5 bg-white/[0.02] overflow-hidden">
        <div className="marquee-content flex gap-20 whitespace-nowrap">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-20 items-center">
              <span className="text-4xl font-display font-black text-white/10 uppercase italic">Retirada na Loja</span>
              <PawPrint className="w-8 h-8 text-brand-amber/20" />
              <span className="text-4xl font-display font-black text-white/10 uppercase italic">Entrega Rápida</span>
              <PawPrint className="w-8 h-8 text-brand-amber/20" />
              <span className="text-4xl font-display font-black text-white/10 uppercase italic">Produtos Premium</span>
              <PawPrint className="w-8 h-8 text-brand-amber/20" />
              <span className="text-4xl font-display font-black text-white/10 uppercase italic">Tradição Ruralista</span>
              <PawPrint className="w-8 h-8 text-brand-amber/20" />
              <span className="text-4xl font-display font-black text-white/10 uppercase italic">Atendimento VIP</span>
              <PawPrint className="w-8 h-8 text-brand-amber/20" />
            </div>
          ))}
        </div>
      </section>

      {/* DIFERENCIAIS (BENTO GRID) */}
      <section id="diferenciais" ref={bentoRef} className="py-32 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-20 reveal">
          <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tighter mb-6 uppercase">
            POR QUE ESCOLHER A <span className="text-brand-amber">RURALISTA?</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">
            Combinamos a força do campo com o carinho do pet shop para oferecer uma experiência completa para você e seus animais.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Bento Item 1 - Large */}
          <div className="bento-item md:col-span-2 bento-card flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <div className="w-12 h-12 bg-brand-amber/20 rounded-2xl flex items-center justify-center mb-6">
                <ShoppingBag className="text-brand-amber" />
              </div>
              <h3 className="text-3xl font-display font-bold mb-4 uppercase">Variedade Incomparável</h3>
              <p className="text-white/50 leading-relaxed">
                Das melhores rações premium aos equipamentos rurais mais robustos. Temos tudo o que você precisa em um só lugar, com preços competitivos e qualidade garantida.
              </p>
            </div>
            <div className="flex-1 w-full h-64 rounded-2xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80&w=800" 
                alt="Pet Products" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Bento Item 2 */}
          <div className="bento-item bento-card">
            <div className="w-12 h-12 bg-brand-amber/20 rounded-2xl flex items-center justify-center mb-6">
              <Truck className="text-brand-amber" />
            </div>
            <h3 className="text-2xl font-display font-bold mb-4 uppercase">Entrega & Retirada</h3>
            <p className="text-white/50 text-sm leading-relaxed">
              Comodidade total para sua rotina. Peça pelo WhatsApp e receba em casa ou retire rapidamente em nossa loja física.
            </p>
          </div>

          {/* Bento Item 3 */}
          <div className="bento-item bento-card">
            <div className="w-12 h-12 bg-brand-amber/20 rounded-2xl flex items-center justify-center mb-6">
              <ShieldCheck className="text-brand-amber" />
            </div>
            <h3 className="text-2xl font-display font-bold mb-4 uppercase">Equipe Comprometida</h3>
            <p className="text-white/50 text-sm leading-relaxed">
              Nossa equipe é altamente treinada para oferecer o melhor suporte técnico e atendimento humanizado para você.
            </p>
          </div>

          {/* Bento Item 4 - Large */}
          <div className="bento-item md:col-span-2 bento-card flex flex-col md:flex-row-reverse gap-8 items-center">
            <div className="flex-1">
              <div className="w-12 h-12 bg-brand-amber/20 rounded-2xl flex items-center justify-center mb-6">
                <Heart className="text-brand-amber" />
              </div>
              <h3 className="text-3xl font-display font-bold mb-4 uppercase">Tradição & Delícias</h3>
              <p className="text-white/50 leading-relaxed">
                Não somos apenas uma loja rural. Oferecemos o melhor do sabor mineiro: doce de leite, mel, queijos e café moído na hora. O verdadeiro sabor da roça!
              </p>
            </div>
            <div className="flex-1 w-full h-64 rounded-2xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1550989460-0adf9ea622e2?auto=format&fit=crop&q=80&w=800" 
                alt="Rural Delights" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SOBRE / SERVIÇOS */}
      <section id="sobre" ref={aboutRef} className="py-32 bg-white/[0.01] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative reveal">
            <div className="aspect-[4/5] rounded-[40px] overflow-hidden">
              <img 
                src="https://lh3.googleusercontent.com/d/1hmh4-lfya5Ev6PDhZc65p7wcGJRSs5sI" 
                alt="Store Interior" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 glass p-8 rounded-3xl hidden md:block">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-widest">Aberto agora</span>
              </div>
              <p className="font-display text-2xl font-bold">FECHA ÀS 18:00</p>
            </div>
          </div>

          <div className="reveal">
            <span className="text-brand-amber font-bold tracking-widest uppercase mb-4 block">Nossa História</span>
            <h2 className="font-display text-5xl md:text-6xl font-bold tracking-tighter mb-8 uppercase leading-none">
              MAIS QUE UMA LOJA, UM <span className="italic">PONTO DE ENCONTRO</span>.
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-10">
              Localizada no coração de Cel. Fabriciano, a Ruralista Assis nasceu da paixão pelo campo e pelo cuidado animal. Hoje, somos referência em toda a região, oferecendo desde suprimentos para grandes criações até mimos especiais para seus pets.
            </p>
            
            <div className="grid grid-cols-2 gap-8 mb-12">
              <div>
                <p className="text-4xl font-display font-bold text-brand-amber mb-2">40+</p>
                <p className="text-sm text-white/40 uppercase tracking-widest">Avaliações 5 Estrelas</p>
              </div>
              <div>
                <p className="text-4xl font-display font-bold text-brand-amber mb-2">100%</p>
                <p className="text-sm text-white/40 uppercase tracking-widest">Comprometimento</p>
              </div>
            </div>

            <button className="flex items-center gap-4 group font-bold uppercase tracking-widest hover:text-brand-amber transition-colors">
              Conheça nossa equipe
              <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section ref={testimonialsRef} className="py-32 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-20 reveal">
          <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tighter mb-6 uppercase">
            O QUE DIZEM NOSSOS <span className="text-brand-amber">CLIENTES</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: "Nidelci Rissi",
              text: "Ótimo atendimento! Ótimas variedades! Preço bom!",
              tag: "Local Guide"
            },
            {
              name: "Vilma Paiva",
              text: "Doce de leite, mel, queijos, doce de mamão, café moído na hora... bão demais!",
              tag: "Cliente Fiel"
            },
            {
              name: "Luiz Henrique",
              text: "Loja de respeito e com uma equipe bastante comprometida. Muito bom!",
              tag: "Pet Lover"
            }
          ].map((item, idx) => (
            <div key={idx} className="reveal bento-card flex flex-col justify-between">
              <div>
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 text-brand-amber fill-brand-amber" />)}
                </div>
                <p className="text-xl font-medium italic mb-8 leading-relaxed">"{item.text}"</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-amber to-brand-gold flex items-center justify-center font-bold text-black">
                  {item.name[0]}
                </div>
                <div>
                  <p className="font-bold uppercase tracking-tighter">{item.name}</p>
                  <p className="text-xs text-white/40 uppercase tracking-widest">{item.tag}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto glass rounded-[50px] p-12 md:p-24 text-center relative overflow-hidden reveal">
          <div className="absolute top-0 left-0 w-full h-full bg-brand-amber/5 -z-10" />
          <h2 className="font-display text-5xl md:text-7xl font-bold tracking-tighter mb-8 uppercase leading-none">
            PRONTO PARA DAR O MELHOR AO SEU <span className="text-brand-amber italic">MELHOR AMIGO?</span>
          </h2>
          <p className="text-white/60 text-lg mb-12 max-w-2xl mx-auto">
            Visite-nos hoje mesmo ou peça pelo WhatsApp. Estamos prontos para te atender com a qualidade que você já conhece.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href="https://wa.me/5531986056675" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-brand-amber text-black px-12 py-6 rounded-full font-black text-xl uppercase tracking-tighter hover:scale-105 transition-all flex items-center gap-3"
            >
              Chamar no WhatsApp
              <Phone className="w-6 h-6" />
            </a>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="glass px-12 py-6 rounded-full font-bold text-xl uppercase tracking-tighter hover:bg-white/10 transition-all flex items-center gap-3"
            >
              Siga no Instagram
              <Instagram className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contato" className="py-20 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-8">
              <PawPrint className="text-brand-amber w-8 h-8" />
              <span className="font-display font-bold text-2xl tracking-tighter uppercase">Ruralista Assis</span>
            </div>
            <p className="text-white/40 max-w-sm leading-relaxed mb-8">
              Sua referência em Cel. Fabriciano para produtos pet, agropecuários e delícias da roça. Tradição e qualidade em cada detalhe.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-brand-amber hover:text-black transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-brand-amber hover:text-black transition-all">
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold uppercase tracking-widest mb-8">Navegação</h4>
            <ul className="space-y-4 text-white/40 font-medium">
              <li><a href="#inicio" className="hover:text-white transition-colors">Início</a></li>
              <li><a href="#diferenciais" className="hover:text-white transition-colors">Diferenciais</a></li>
              <li><a href="#sobre" className="hover:text-white transition-colors">Sobre Nós</a></li>
              <li><a href="#contato" className="hover:text-white transition-colors">Contato</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold uppercase tracking-widest mb-8">Contato</h4>
            <ul className="space-y-6 text-white/40 font-medium">
              <li className="flex gap-3">
                <MapPin className="text-brand-amber w-5 h-5 shrink-0" />
                <span>R. Antônio Mascarenhas, 333 - Santa Terezinha II, Cel. Fabriciano - MG</span>
              </li>
              <li className="flex gap-3">
                <Phone className="text-brand-amber w-5 h-5 shrink-0" />
                <span>(31) 98605-6675</span>
              </li>
              <li className="flex gap-3">
                <Store className="text-brand-amber w-5 h-5 shrink-0" />
                <span>Seg - Sex: 08:00 - 18:00</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-white/20 text-xs font-bold uppercase tracking-widest">
          <p>© 2026 RURALISTA ASSIS. TODOS OS DIREITOS RESERVADOS.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Termos</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
