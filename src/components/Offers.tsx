import { motion } from "motion/react";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
import { Percent, Sparkles, Calendar, Gift } from "lucide-react";

const offers = [
  {
    icon: Percent,
    title: "20% OFF Primera Visita",
    description: "Clientes nuevos obtienen 20% de descuento en cualquier servicio",
    code: "NUEVO20",
    color: "bg-[#4ECDC4]"
  },
  {
    icon: Sparkles,
    title: "Pack Completo",
    description: "Corte + Color + Tratamiento por solo 450 Bs (ahorra 150 Bs)",
    code: "PACK450",
    color: "bg-purple-500"
  },
  {
    icon: Calendar,
    title: "Martes Universitario",
    description: "15% de descuento para estudiantes con carnet vigente",
    code: "UNI15",
    color: "bg-pink-500"
  },
  {
    icon: Gift,
    title: "Trae un Amigo",
    description: "Ambos reciben 10% OFF en su servicio. ¡Válido todo el mes!",
    code: "AMIGO10",
    color: "bg-orange-500"
  }
];

export function Offers() {
  return (
    <section id="ofertas" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-[#4ECDC4] text-black hover:bg-[#3db5ad] text-base px-4 py-1">
            Promociones Exclusivas
          </Badge>
          <h2 className="text-4xl md:text-5xl text-black mb-4">
            Ofertas Especiales
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Aprovecha nuestras promociones y luce increíble ahorrando
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {offers.map((offer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group relative overflow-hidden hover:shadow-xl transition-all duration-300 border-gray-200 h-full">
                {/* Decorative Element */}
                <div className={`absolute top-0 right-0 w-20 h-20 ${offer.color} opacity-10 rounded-bl-full`}></div>
                
                <CardContent className="p-6 relative">
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl ${offer.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <offer.icon className="w-7 h-7 text-white" />
                  </div>
                  
                  <h3 className="text-xl text-black mb-3">
                    {offer.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {offer.description}
                  </p>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-sm text-gray-500">Código:</span>
                    <Badge variant="outline" className="font-mono text-[#4ECDC4] border-[#4ECDC4]">
                      {offer.code}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-md">
            <Sparkles className="w-5 h-5 text-[#4ECDC4]" />
            <p className="text-sm text-gray-700">
              Ofertas válidas hasta fin de mes • Reserva con anticipación
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}