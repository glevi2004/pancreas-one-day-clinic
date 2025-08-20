import { Clock, Shield, Users, CheckCircle } from "lucide-react";

export function FeaturesSection() {
  return (
    <section className="relative z-10 py-20 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">
            Por que escolher o Pâncreas One Day Clinic?
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Diagnóstico e tratamento multidisciplinar com equipe de excelência e
            tecnologia de ponta
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Same Day Care */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-8 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
            <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center mb-6">
              <Clock className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-white">
              Diagnóstico em até 72h
            </h3>
            <p className="text-white/80 mb-4">
              Diagnóstico completo e plano de tratamento personalizado em até 72
              horas, oferecendo agilidade sem comprometer a qualidade do
              atendimento.
            </p>
            <ul className="space-y-2 text-sm text-white/70">
              <li className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                Diagnóstico rápido
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                Plano de tratamento personalizado
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                Atendimento ágil
              </li>
            </ul>
          </div>

          {/* Expert Specialists */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-8 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
            <div className="w-12 h-12 bg-green-900 rounded-lg flex items-center justify-center mb-6">
              <Shield className="w-6 h-6 text-green-400" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-white">
              Equipe Multidisciplinar
            </h3>
            <p className="text-white/80 mb-4">
              Profissionais de renome local, nacional e internacional com maior
              volume do Paraná em cirurgias pancreáticas e hepáticas.
            </p>
            <ul className="space-y-2 text-sm text-white/70">
              <li className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                Cirurgia Hepatobiliopancreática
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                Gastroenterologia especializada
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                Radiologia e Oncologia integradas
              </li>
            </ul>
          </div>

          {/* Patient-Centered */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-8 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
            <div className="w-12 h-12 bg-purple-900 rounded-lg flex items-center justify-center mb-6">
              <Users className="w-6 h-6 text-purple-400" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-white">
              Atendimento Humanizado
            </h3>
            <p className="text-white/80 mb-4">
              Atendimento completo e humanizado, com foco na conveniência e
              cuidado integral do paciente.
            </p>
            <ul className="space-y-2 text-sm text-white/70">
              <li className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                Atendimento sem burocracia
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                Protocolos padronizados
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                Tecnologia de ponta
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
