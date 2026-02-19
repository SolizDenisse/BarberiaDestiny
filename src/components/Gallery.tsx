import { motion } from "motion/react";
import { useState } from "react";

const galleryImages = [
  {
    before: "https://images.unsplash.com/photo-1590503347339-ccd768ad83d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmVuZHklMjBoYWlyY3V0JTIwYmVmb3JlJTIwYWZ0ZXJ8ZW58MXx8fHwxNzcwODU4MzUzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    after: "https://images.unsplash.com/photo-1676554288166-8f6119951e06?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHlsaXNoJTIwaGFpcmN1dCUyMHdvbWFuJTIwYmxvbmRlfGVufDF8fHx8MTc3MDk0OTExOHww&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Corte con Estilo"
  },
  {
    before: "https://images.unsplash.com/photo-1590503347339-ccd768ad83d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmVuZHklMjBoYWlyY3V0JTIwYmVmb3JlJTIwYWZ0ZXJ8ZW58MXx8fHwxNzcwODU4MzUzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    after: "https://images.unsplash.com/photo-1706120475559-119ef9294109?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWxheWFnZSUyMGhhaXIlMjBjb2xvcnxlbnwxfHx8fDE3NzA5MDkwMDl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Balayage Premium"
  },
  {
    before: "https://images.unsplash.com/photo-1590503347339-ccd768ad83d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmVuZHklMjBoYWlyY3V0JTIwYmVmb3JlJTIwYWZ0ZXJ8ZW58MXx8fHwxNzcwODU4MzUzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    after: "https://images.unsplash.com/photo-1759675905700-a1b5efedc05c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW5zJTIwZmFkZSUyMGhhaXJjdXR8ZW58MXx8fHwxNzcwOTQ5MTIxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Fade Moderno"
  },
  {
    before: "https://images.unsplash.com/photo-1590503347339-ccd768ad83d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmVuZHklMjBoYWlyY3V0JTIwYmVmb3JlJTIwYWZ0ZXJ8ZW58MXx8fHwxNzcwODU4MzUzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    after: "https://images.unsplash.com/photo-1712641966810-611ff1503c6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXJseSUyMGhhaXIlMjBzdHlsaW5nfGVufDF8fHx8MTc3MDg4Njk4MXww&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Rizos Definidos"
  }
];

export function Gallery() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="galeria" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-black mb-4">
            Antes & Después
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Transformaciones increíbles que hablan por sí solas
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryImages.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="aspect-[3/4] relative">
                {/* Before Image */}
                <img
                  src={item.before}
                  alt={`${item.title} - Antes`}
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
                  style={{ opacity: hoveredIndex === index ? 0 : 1 }}
                />
                {/* After Image */}
                <img
                  src={item.after}
                  alt={`${item.title} - Después`}
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
                  style={{ opacity: hoveredIndex === index ? 1 : 0 }}
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white text-lg mb-2">{item.title}</h3>
                    <p className="text-white/80 text-sm">
                      {hoveredIndex === index ? "Después" : "Antes"}
                    </p>
                  </div>
                </div>

                {/* Before/After Label */}
                <div className="absolute top-4 right-4 bg-[#4ECDC4] text-black px-3 py-1 rounded-full text-sm font-medium">
                  {hoveredIndex === index ? "Después" : "Antes"}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}