import { motion } from "framer-motion";
import project5 from "@/assets/project5.jpg";
import project6 from "@/assets/project6.jpg";
import project7 from "@/assets/project7.jpg";

const ImageShowcase = () => {
  return (
    <section className="px-6 md:px-12 pb-24">
      {/* Full width image */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="mb-8 overflow-hidden"
      >
        <img
          src={project5}
          alt="Luxury bedroom design"
          className="w-full h-[50vh] md:h-[70vh] object-cover"
        />
      </motion.div>

      {/* Two column */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="overflow-hidden"
        >
          <img
            src={project6}
            alt="Modern staircase"
            className="w-full h-[40vh] md:h-[55vh] object-cover"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="overflow-hidden"
        >
          <img
            src={project7}
            alt="Luxury bathroom"
            className="w-full h-[40vh] md:h-[55vh] object-cover"
          />
        </motion.div>
      </div>

      {/* Quote */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto text-center py-16"
      >
        <blockquote className="font-serif text-2xl md:text-4xl font-light italic leading-relaxed text-foreground">
          "Design não é apenas como parece e como se sente. Design é como funciona —
          na luz da manhã, na quietude da noite, em cada estação da vida."
        </blockquote>
        <p className="mt-8 text-xs tracking-[0.3em] uppercase text-muted-foreground">
          — Stephanie Thatenhorst
        </p>
      </motion.div>
    </section>
  );
};

export default ImageShowcase;
