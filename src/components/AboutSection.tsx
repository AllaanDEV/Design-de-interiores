import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-8">
            Sobre o Estúdio
          </p>
          <h2 className="font-serif text-2xl md:text-4xl lg:text-5xl font-light leading-relaxed text-foreground">
            Acreditamos que o design excepcional nasce do diálogo entre o espaço, a luz e as pessoas que o habitam. Cada projeto é uma narrativa única — criada com intenção, refinada com cuidado.
          </h2>
          <div className="mt-12 flex items-center justify-center gap-12 text-muted-foreground">
            <div>
              <span className="font-serif text-3xl md:text-4xl text-foreground">150+</span>
              <p className="text-xs tracking-[0.2em] uppercase mt-2">Projetos</p>
            </div>
            <div className="w-px h-12 bg-border" />
            <div>
              <span className="font-serif text-3xl md:text-4xl text-foreground">18</span>
              <p className="text-xs tracking-[0.2em] uppercase mt-2">Anos</p>
            </div>
            <div className="w-px h-12 bg-border" />
            <div>
              <span className="font-serif text-3xl md:text-4xl text-foreground">3</span>
              <p className="text-xs tracking-[0.2em] uppercase mt-2">Estúdios</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
