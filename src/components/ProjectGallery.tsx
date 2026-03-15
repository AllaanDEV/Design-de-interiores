import { motion } from "framer-motion";
import project1 from "@/assets/project1.jpg";
import project2 from "@/assets/project2.jpg";
import project3 from "@/assets/project3.jpg";

const projects = [
  { image: project1, title: "Residenz am Englischen Garten", location: "Munich", category: "Private Residence" },
  { image: project2, title: "Casa Nostra Kitchen", location: "Milan", category: "Culinary Space" },
  { image: project3, title: "The Velvet Room", location: "London", category: "Boutique Hotel" },
];

const ProjectGallery = () => {
  return (
    <section id="projects" className="px-6 md:px-12 pb-24">
      {/* Full width featured image */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="mb-6"
      >
        <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-8 text-center">
          Selected Works
        </p>
      </motion.div>

      {/* Large featured project */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="relative group cursor-pointer overflow-hidden mb-8"
      >
        <div className="overflow-hidden">
          <img
            src={projects[0].image}
            alt={projects[0].title}
            className="w-full h-[50vh] md:h-[70vh] object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 bg-gradient-to-t from-foreground/50 to-transparent">
          <p className="text-xs tracking-[0.2em] uppercase text-primary-foreground/70 mb-2">
            {projects[0].category} · {projects[0].location}
          </p>
          <h3 className="font-serif text-2xl md:text-3xl text-primary-foreground font-light">
            {projects[0].title}
          </h3>
        </div>
      </motion.div>

      {/* Two column grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {projects.slice(1).map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: index * 0.15 }}
            className="relative group cursor-pointer overflow-hidden"
          >
            <div className="overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-[40vh] md:h-[50vh] object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="mt-4">
              <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-1">
                {project.category} · {project.location}
              </p>
              <h3 className="font-serif text-xl md:text-2xl text-foreground font-light">
                {project.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectGallery;
