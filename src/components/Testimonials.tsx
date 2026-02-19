import { motion } from "motion/react";
import { Card, CardContent } from "./ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Valeria Rodríguez",
    age: 23,
    text: "El mejor salón de Cochabamba sin duda. Me hicieron un balayage hermoso y el corte quedó tal cual les pedí. Super recomendado.",
    rating: 5,
    image: "https://i.pravatar.cc/150?img=1"
  },
  {
    name: "Andrés Morales",
    age: 27,
    text: "Hace meses que vengo y siempre salgo contento. Los chicos son profesionales y saben lo último en cortes para hombre. Vale cada centavo.",
    rating: 5,
    image: "https://i.pravatar.cc/150?img=12"
  },
  {
    name: "Sofía Gutiérrez",
    age: 21,
    text: "Me encanta venir acá. Usan productos buenísimos y se nota la diferencia en mi cabello. El ambiente es súper nice y los precios son justos.",
    rating: 5,
    image: "https://i.pravatar.cc/150?img=5"
  },
  {
    name: "Nicolás Vargas",
    age: 25,
    text: "La barbería más pro de Cbba. Mi corte fade quedó impecable y la atención es de primera. Ya traje a varios amigos y todos quedaron felices.",
    rating: 5,
    image: "https://i.pravatar.cc/150?img=13"
  }
];

export function Testimonials() {
  return (
    <section id="testimonios" className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-black mb-4">
            Lo Que Dicen Nuestros Clientes
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Testimonios reales de personas que confiaron en nosotros
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-gray-200">
                <CardContent className="p-6">
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#4ECDC4] text-[#4ECDC4]" />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-gray-700 mb-6 leading-relaxed text-sm italic">
                    "{testimonial.text}"
                  </p>

                  {/* Author Info */}
                  <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="text-black">{testimonial.name}</div>
                      <div className="text-sm text-gray-500">{testimonial.age} años</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Overall Rating */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex flex-col items-center gap-2 bg-white px-8 py-6 rounded-2xl shadow-md">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-[#4ECDC4] text-[#4ECDC4]" />
              ))}
            </div>
            <p className="text-2xl text-black">5.0 de 5.0</p>
            <p className="text-sm text-gray-600">Calificación promedio de nuestros clientes</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}