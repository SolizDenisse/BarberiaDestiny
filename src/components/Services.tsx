import { Scissors, Sparkles, Palette, User } from "lucide-react";
import { motion } from "motion/react";
import { Card, CardContent } from "./ui/card";

const services = [
  {
    icon: Scissors,
    title: "Cortes Modernos",
    description: "Desde 80 Bs - Cortes personalizados con técnicas actuales y estilos únicos",
    image: "https://images.unsplash.com/photo-1761931403671-d020a14928d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoYWlyZHJlc3NlciUyMGN1dHRpbmclMjBoYWlyfGVufDF8fHx8MTc3MDk0OTExN3ww&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    icon: Palette,
    title: "Coloración",
    description: "Desde 200 Bs - Tintes, mechas, balayage y técnicas de color profesionales",
    image: "https://images.unsplash.com/photo-1620717841004-b2129070b674?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGdldHRpbmclMjBoYWlyJTIwY29sb3JlZHxlbnwxfHx8fDE3NzA5NDkxMTd8MA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    icon: Sparkles,
    title: "Tratamientos",
    description: "Desde 150 Bs - Keratina, botox capilar y tratamientos reparadores premium",
    image: "https://images.unsplash.com/photo-1754272465517-40a81b4b9f13?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWlyJTIwdHJlYXRtZW50JTIwa2VyYXRpbnxlbnwxfHx8fDE3NzA5NDkxMTh8MA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    icon: User,
    title: "Barbería",
    description: "Desde 60 Bs - Corte, barba, cejas y servicios completos de barbería moderna",
    image: "https://images.unsplash.com/photo-1654097800183-574ba7368f74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXJiZXIlMjBjdXR0aW5nJTIwbWVucyUyMGhhaXJ8ZW58MXx8fHwxNzcwOTQ5MTE3fDA&ixlib=rb-4.1.0&q=80&w=1080"
  }
];

export function Services() {
  return (
    <section id="servicios" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-black mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ofrecemos una amplia gama de servicios para que luzcas increíble
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-gray-200 h-full">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <service.icon className="w-8 h-8 text-[#4ECDC4]" />
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl text-black mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}