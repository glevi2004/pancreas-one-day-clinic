import { Button } from "@/components/ui/button";
import { Phone, MapPin } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="relative z-10 py-20 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
          Entre em contato
        </h2>
        <p className="text-xl text-white/80 mb-8">
          Entre em contato hoje para agendar sua consulta e dar o primeiro passo
          em direção à melhor saúde.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="bg-white text-blue-900 hover:bg-white/90 px-8 py-3 text-lg"
          >
            <Phone className="w-5 h-5 mr-2" />
            Ligar (41) 3020-0000
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-blue-900 text-blue-900 bg-white/90 hover:bg-white px-8 py-3 text-lg"
          >
            <MapPin className="w-5 h-5 mr-2" />
            Como Chegar
          </Button>
        </div>
      </div>
    </section>
  );
}
