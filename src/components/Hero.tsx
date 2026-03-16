import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="home" className="relative w-full h-[85vh] md:h-screen overflow-hidden">
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.8, ease: [0.25, 0.1, 0.25, 1] }}
        className="absolute inset-0"
      >
        <img
          src="/imagens/sala-de-estar-hero.jpg"
          alt="Sala de estar luxuosa"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/10" />
      </motion.div>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="font-serif text-4xl md:text-6xl lg:text-7xl font-light text-primary-foreground tracking-tight leading-tight"
        >
          Criando Espaços
          <br />
          <span className="italic font-light">Que Inspiram</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="mt-6 text-xs md:text-sm tracking-[0.3em] uppercase text-primary-foreground/80"
        >
          Munique · Milão · Londres
        </motion.p>
      </div>
    </section>
  );
};

export default Hero;
