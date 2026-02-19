import { Instagram, Facebook, Twitter, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl mb-4 text-[#4ECDC4]">StyleHub</h3>
            <p className="text-gray-400 text-sm mb-4">
              El salón de peluquería más moderno de Cochabamba. Expertos en transformar tu estilo.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-[#4ECDC4] flex items-center justify-center transition-colors duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-[#4ECDC4] flex items-center justify-center transition-colors duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-[#4ECDC4] flex items-center justify-center transition-colors duration-300"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#servicios" className="text-gray-400 hover:text-[#4ECDC4] transition-colors">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#nosotros" className="text-gray-400 hover:text-[#4ECDC4] transition-colors">
                  Sobre Nosotros
                </a>
              </li>
              <li>
                <a href="#galeria" className="text-gray-400 hover:text-[#4ECDC4] transition-colors">
                  Galería
                </a>
              </li>
              <li>
                <a href="#ofertas" className="text-gray-400 hover:text-[#4ECDC4] transition-colors">
                  Ofertas
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-gray-400 hover:text-[#4ECDC4] transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg mb-4">Servicios</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Cortes de Cabello</li>
              <li>Coloración y Mechas</li>
              <li>Tratamientos Capilares</li>
              <li>Barbería Profesional</li>
              <li>Peinados para Eventos</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg mb-4">Contacto</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 text-[#4ECDC4] flex-shrink-0 mt-0.5" />
                <span>Av. Heroínas 0542, Cochabamba</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Phone className="w-5 h-5 text-[#4ECDC4] flex-shrink-0" />
                <span>+591 78945612</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Mail className="w-5 h-5 text-[#4ECDC4] flex-shrink-0" />
                <span>info@stylehub.com.bo</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
          <p>
            © {currentYear} StyleHub. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}