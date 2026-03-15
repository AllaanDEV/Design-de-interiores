import { motion } from "framer-motion";
import project4 from "@/assets/project4.jpg";

const FeaturedProject = () => {
  return (
    <section className="py-16 md:py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6">
              Latest
            </p>
            <h2 className="font-serif text-3xl md:text-5xl font-light leading-tight text-foreground mb-6">
              Showing at<br />
              <span className="italic">Galerie Eisflut</span>
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground mb-8 max-w-md">
              A curated collection exploring the intersection of functional design and sculptural art. 
              Each piece reflects our philosophy of creating spaces that breathe — where every object 
              tells a story and every corner invites discovery.
            </p>
            <a
              href="#"
              className="inline-block text-xs tracking-[0.2em] uppercase text-foreground border-b border-foreground pb-1 hover:text-muted-foreground hover:border-muted-foreground transition-colors duration-300"
            >
              Discover More
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="overflow-hidden"
          >
            <img
              src={project4}
              alt="Gallery exhibition"
              className="w-full h-[50vh] md:h-[60vh] object-cover hover:scale-105 transition-transform duration-700"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProject;
