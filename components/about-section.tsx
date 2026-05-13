"use client"

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" ref={ref} className="py-24 bg-[#0a0a0a] relative">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-3 mb-6">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <polygon points="12,2 22,8.5 22,15.5 12,22 2,15.5 2,8.5" stroke="#c9a227" strokeWidth="1.5" fill="none" />
              </svg>
              <h2 className="text-3xl md:text-4xl font-serif text-[#f5f0e6]">About Us</h2>
            </div>

            <div className="space-y-4 text-[#f5f0e6]/70 leading-relaxed">
              <p>
              L'APICOLTURA rettore si impegna da anni a far capire al consumatore la nostra filosofia di lavoro e cosa c'è dietro al barattolino di miele che si acquista: Rispetto, Amore, Etica, Impegno, Semplicità. Lavorando duramente, investendo tempo, denaro e frequentando corsi di aggiornamento, ha incrementato la parte produttiva portando gli iniziali 6 alveari agli attuali alveari sparsi nel territorio veneto: dalla laguna veneziana, passando per i colli Euganei fino alle montagne vicentine. L'azienda è in continua crescita investendo molto in macchinari produttivi pur mantenendo l'artigianalità del prodotto, inoltre investe molto nel territorio dove sono localizzati gli alveari rimanendo sempre alla ricerca di nuove località produttive per garantire solo il meglio dalle nostre terre.   I nostri prodotti sono totalmente artigianali e PPL: dalla produzione alla lavorazione dei prodotti, all'invasettamento ed etichettamento. Sebbene siamo in costante ricerca per migliorare la nostra produzione comunque i lavori vengono svolti manualmente conferendo al prodotto un valore aggiunto!!! PPL  significa PICCOLE PRODUZIONI LOCALI: La normativa regionale attua delle deroghe per i piccoli produttori ma stabilisce dei rigidi parametri da seguire garantendo al consumatore un prodotto 101% LOCALE, ARTIGLIANALE, SICURO E CONTROLLATO. Su di noi non aggiungiamo altro, Saranno portavoce i nostri prodotti



              </p>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="mt-8 px-8 py-3 border border-[#c9a227]/50 text-[#c9a227] text-sm tracking-wide hover:border-[#c9a227] hover:bg-[#c9a227]/10 transition-all duration-300"
            >
              More
            </motion.button>
          </motion.div>

          {/* Honey Jar with Honeycomb Background */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative h-[400px] flex justify-center lg:justify-end"
          >
            <div className="relative w-full h-full max-w-[350px]">
              {/* Honeycomb background */}
              <Image
                src="/Cover.png"
                alt="Honeycomb background"
                fill
                className="object-contain"
              />

              {/* Honey jar overlay */}
              <Image
                src="/honeyjar-about.png"
                alt="Golden honey jar with bee"
                fill
                className="object-contain"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
