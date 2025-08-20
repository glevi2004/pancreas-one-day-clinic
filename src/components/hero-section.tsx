import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Calendar, Phone } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center h-screen pt-20 text-center px-6 lg:px-8 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/landing.png"
          alt="Medical illustration background"
          fill
          className="object-cover opacity-35"
          // style={{
          //   transform: "scale(1.5) translateX(5%) translateY(-8%)",
          // }}
          priority
        />
        <div className="absolute inset-0  from-blue-900/50 via-blue-800/30 to-purple-900/50" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-6xl font-bold text-white mb-3 leading-tight">
          Pâncreas One Day Clinic
          {/* <span className="block" >
            Diagnóstico e Tratamento em até 72h
          </span> */}
        </h1>
        <h2 className="text-2xl md:text-4xl lg:text-4xl font-bold mb-6 leading-tight text-blue-200">
          Diagnóstico e Tratamento em até 72h
        </h2>
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
          Diagnóstico rápido e preciso do câncer de pâncreas e outras doenças
          pancreáticas. Equipe multidisciplinar de excelência com atendimento
          humanizado e ágil.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="bg-white text-blue-900 hover:bg-white/90 px-8 py-3 text-lg"
          >
            <Calendar className="w-5 h-5 mr-2" />
            Agendar Consulta
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-blue-900 text-blue-900 bg-white/90 hover:bg-white px-8 py-3 text-lg"
          >
            <Phone className="w-5 h-5 mr-2" />
            Ligar Agora
          </Button>
        </div>
      </div>
    </section>
  );
}
