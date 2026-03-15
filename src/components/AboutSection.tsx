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
            About the Studio
          </p>
          <h2 className="font-serif text-2xl md:text-4xl lg:text-5xl font-light leading-relaxed text-foreground">
            We believe that exceptional design is born from the dialogue between space, light, and the people who inhabit it. Every project is a unique narrative — crafted with intention, refined with care.
          </h2>
          <div className="mt-12 flex items-center justify-center gap-12 text-muted-foreground">
            <div>
              <span className="font-serif text-3xl md:text-4xl text-foreground">150+</span>
              <p className="text-xs tracking-[0.2em] uppercase mt-2">Projects</p>
            </div>
            <div className="w-px h-12 bg-border" />
            <div>
              <span className="font-serif text-3xl md:text-4xl text-foreground">18</span>
              <p className="text-xs tracking-[0.2em] uppercase mt-2">Years</p>
            </div>
            <div className="w-px h-12 bg-border" />
            <div>
              <span className="font-serif text-3xl md:text-4xl text-foreground">3</span>
              <p className="text-xs tracking-[0.2em] uppercase mt-2">Studios</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
