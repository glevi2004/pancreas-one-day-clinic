import Image from "next/image";

export function Footer() {
  return (
    <footer className="relative z-10 py-12 px-6 lg:px-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto text-center">
        <div className="flex items-center justify-center space-x-2 mb-4">
          <div className="w-12 h-12 flex items-center justify-center">
            <Image
              src="/logo.png"
              alt="Pâncreas One Day Clinic Logo"
              width={48}
              height={48}
              className="w-12 h-12"
            />
          </div>
          <span className="text-lg font-semibold text-white">
            PÂNCREAS ONE DAY CLINIC
          </span>
        </div>
        <p className="text-white/60 mb-4">
          Fornecendo atendimento excepcional em doenças pancreáticas com
          compaixão e expertise.
        </p>
        <div className="text-white/40 text-sm">
          © 2024 PÂNCREAS ONE DAY CLINIC. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
