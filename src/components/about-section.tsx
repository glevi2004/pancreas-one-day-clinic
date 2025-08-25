import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Award, Clock } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="relative z-10 py-20 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">
            Sobre o Pâncreas One Day Clinic
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Um programa inovador focado no diagnóstico rápido e preciso do
            câncer de pâncreas e outras doenças pancreáticas, oferecendo
            atendimento completo em até 72 horas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Team Image */}
          <div className="relative">
            <Card className="bg-white/10 border border-white/20 overflow-hidden">
              <CardContent className="p-0">
                <Image
                  src="/team.jpeg"
                  alt="Equipe multidisciplinar do Pâncreas One Day Clinic"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </CardContent>
            </Card>
            <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white px-4 py-2 rounded-lg">
              <span className="text-sm font-medium">Equipe CIGHEP</span>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">O Projeto</h3>
              <p className="text-white/80 mb-4">
                O CIGHEP – Centro Integrado de Gastroenterologia e Hepatologia,
                em parceria com o Hospital Nossa Senhora das Graças (HNSG),
                lança o PÂNCREAS ONE DAY CLINIC, um programa inovador focado no
                diagnóstico rápido e preciso do câncer de pâncreas e outras
                doenças pancreáticas.
              </p>
              <p className="text-white/80">
                Nosso objetivo é oferecer ao paciente uma avaliação completa e
                internação ágil, com diagnóstico definido e plano de tratamento
                personalizado em até 72 horas.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white/10 border border-white/20 rounded-lg p-4">
                <div className="flex items-center mb-2">
                  <Target className="w-5 h-5 text-blue-400 mr-2" />
                  <h4 className="font-semibold text-white">Nossa Missão</h4>
                </div>
                <p className="text-sm text-white/80">
                  Fornecer atendimento completo e humanizado, com equipe
                  multidisciplinar de excelência.
                </p>
              </div>

              <div className="bg-white/10 border border-white/20 rounded-lg p-4">
                <div className="flex items-center mb-2">
                  <Award className="w-5 h-5 text-green-400 mr-2" />
                  <h4 className="font-semibold text-white">
                    Referência Nacional
                  </h4>
                </div>
                <p className="text-sm text-white/80">
                  Tornar-se referência nacional em doenças pancreáticas, com
                  foco em pesquisa e inovação.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="bg-white/10 border border-white/20 rounded-lg p-6">
              <div className="text-3xl font-bold text-blue-400 mb-2">100+</div>
              <div className="text-white font-medium mb-2">Ressecções</div>
              <div className="text-sm text-white/60">
                Fígado e pâncreas em 2024
              </div>
            </div>
          </div>

          <div className="text-center">
            <div className="bg-white/10 border border-white/20 rounded-lg p-6">
              <div className="text-3xl font-bold text-green-400 mb-2">
                1000+
              </div>
              <div className="text-white font-medium mb-2">Cirurgias</div>
              <div className="text-sm text-white/60">Fígado e pâncreas</div>
            </div>
          </div>

          <div className="text-center">
            <div className="bg-white/10 border border-white/20 rounded-lg p-6">
              <div className="text-3xl font-bold text-purple-400 mb-2">
                100+
              </div>
              <div className="text-white font-medium mb-2">
                Cirurgias Robóticas
              </div>
              <div className="text-sm text-white/60">Fígado e pâncreas</div>
            </div>
          </div>
        </div>

        {/* Team Highlights */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-white mb-8">
            Nossa Equipe Multidisciplinar
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/10 border border-white/20 rounded-lg p-6">
              <Users className="w-8 h-8 text-blue-400 mx-auto mb-4" />
              <h4 className="font-semibold text-white mb-2">
                Cirurgia Hepatobiliopancreática
              </h4>
              <p className="text-sm text-white/80">
                Maior volume do Paraná em cirurgias pancreáticas e hepáticas,
                incluindo robóticas.
              </p>
            </div>

            <div className="bg-white/10 border border-white/20 rounded-lg p-6">
              <Users className="w-8 h-8 text-green-400 mx-auto mb-4" />
              <h4 className="font-semibold text-white mb-2">
                Gastroenterologia
              </h4>
              <p className="text-sm text-white/80">
                Especialistas de referência nacional, com experiência em
                ecoendoscopia e terapias avançadas.
              </p>
            </div>

            <div className="bg-white/10 border border-white/20 rounded-lg p-6">
              <Users className="w-8 h-8 text-purple-400 mx-auto mb-4" />
              <h4 className="font-semibold text-white mb-2">
                Radiologia Intervencionista
              </h4>
              <p className="text-sm text-white/80">
                Exames e procedimentos minimamente invasivos, como biópsias
                guiadas e drenagens biliares.
              </p>
            </div>

            <div className="bg-white/10 border border-white/20 rounded-lg p-6">
              <Users className="w-8 h-8 text-orange-400 mx-auto mb-4" />
              <h4 className="font-semibold text-white mb-2">
                Oncologia Integrada
              </h4>
              <p className="text-sm text-white/80">
                Integração para quimioterapia, cateteres e suporte completo ao
                paciente.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-white/10 border border-white/20 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Pronto para agendar sua consulta?
            </h3>
            <p className="text-white/80 mb-6 max-w-2xl mx-auto">
              Entre em contato conosco e descubra como podemos ajudar você com
              diagnóstico e tratamento especializado em até 72 horas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-blue-900 hover:bg-white/90 px-8 py-3 text-lg">
                <Clock className="w-5 h-5 mr-2" />
                Agendar Consulta
              </Button>
              <Button
                variant="outline"
                className="bg-white text-blue-900 hover:bg-white/90 px-8 py-3 text-lg"
              >
                Conhecer Equipe
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
