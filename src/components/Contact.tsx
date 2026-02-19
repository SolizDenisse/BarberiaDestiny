import { motion } from "motion/react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Card, CardContent } from "./ui/card";
import { MapPin, Phone, Clock, Send } from "lucide-react";
import { MessageCircle } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send the data to a backend
    console.log("Form submitted:", formData);
    alert("¡Mensaje enviado! Nos pondremos en contacto contigo pronto.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hola, me gustaría reservar una cita en StyleHub");
    window.open(`https://wa.me/59178945612?text=${message}`, '_blank');
  };

  return (
    <section id="contacto" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-black mb-4">
            Contáctanos
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Estamos aquí para transformar tu look. Reserva tu cita hoy
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Location */}
            <Card className="border-gray-200">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#4ECDC4]/10 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-[#4ECDC4]" />
                  </div>
                  <div>
                    <h3 className="text-lg text-black mb-2">Ubicación</h3>
                    <p className="text-gray-600 text-sm">
                      Av. Heroínas 0542<br />
                      Entre Ecuador y Colombia<br />
                      Cochabamba, Bolivia
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Phone */}
            <Card className="border-gray-200">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#4ECDC4]/10 flex items-center justify-center">
                    <Phone className="w-6 h-6 text-[#4ECDC4]" />
                  </div>
                  <div>
                    <h3 className="text-lg text-black mb-2">Teléfono</h3>
                    <p className="text-gray-600 text-sm">
                      +591 78945612<br />
                      +591 71234567
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Hours */}
            <Card className="border-gray-200">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#4ECDC4]/10 flex items-center justify-center">
                    <Clock className="w-6 h-6 text-[#4ECDC4]" />
                  </div>
                  <div>
                    <h3 className="text-lg text-black mb-2">Horario</h3>
                    <p className="text-gray-600 text-sm">
                      Lun - Vie: 9:00 - 20:00<br />
                      Sábado: 9:00 - 19:00<br />
                      Domingo: 10:00 - 14:00
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* WhatsApp Button */}
            <Button
              onClick={handleWhatsApp}
              className="w-full bg-green-500 hover:bg-green-600 text-white py-6 rounded-xl"
              size="lg"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Reservar por WhatsApp
            </Button>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <Card className="border-gray-200">
              <CardContent className="p-8">
                <h3 className="text-2xl text-black mb-6">
                  Envíanos un mensaje
                </h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm text-gray-700 mb-2">
                        Nombre completo
                      </label>
                      <Input
                        type="text"
                        placeholder="Tu nombre"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="bg-gray-50 border-gray-200"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-700 mb-2">
                        Email
                      </label>
                      <Input
                        type="email"
                        placeholder="tu@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="bg-gray-50 border-gray-200"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm text-gray-700 mb-2">
                      Teléfono
                    </label>
                    <Input
                      type="tel"
                      placeholder="+591 7894 5612"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      className="bg-gray-50 border-gray-200"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-gray-700 mb-2">
                      Mensaje
                    </label>
                    <Textarea
                      placeholder="Cuéntanos qué servicio te interesa o cualquier pregunta que tengas..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      rows={5}
                      className="bg-gray-50 border-gray-200 resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-[#4ECDC4] hover:bg-[#3db5ad] text-black py-6 rounded-xl"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Enviar mensaje
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}