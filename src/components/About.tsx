import { motion } from "motion/react";
import { Award, Heart, Users } from "lucide-react";

export function About() {
  return (
    <section id="nosotros" className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl text-black mb-6">
              Sobre Nosotros
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Somos un equipo de estilistas certificados con más de 8 años transformando 
              la imagen de la gente de Cochabamba. Nos especializamos en seguir las últimas 
              tendencias internacionales adaptándolas al estilo boliviano.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Trabajamos con productos profesionales de primera calidad y estamos en constante 
              capacitación para ofrecerte los mejores resultados. Tu satisfacción es nuestra 
              mejor carta de presentación.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#4ECDC4]/10 mb-3">
                  <Users className="w-6 h-6 text-[#4ECDC4]" />
                </div>
                <div className="text-2xl text-black mb-1">3500+</div>
                <div className="text-sm text-gray-600">Clientes</div>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#4ECDC4]/10 mb-3">
                  <Award className="w-6 h-6 text-[#4ECDC4]" />
                </div>
                <div className="text-2xl text-black mb-1">8+</div>
                <div className="text-sm text-gray-600">Años</div>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#4ECDC4]/10 mb-3">
                  <Heart className="w-6 h-6 text-[#4ECDC4]" />
                </div>
                <div className="text-2xl text-black mb-1">100%</div>
                <div className="text-sm text-gray-600">Calidad</div>
              </div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1759134155377-4207d89b39ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBoYWlyJTIwc2Fsb24lMjBpbnRlcmlvcnxlbnwxfHx8fDE3NzA5NDkxMTd8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Salon interior"
                className="w-full h-[500px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-[#4ECDC4] rounded-2xl -z-10"></div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-black rounded-2xl -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}