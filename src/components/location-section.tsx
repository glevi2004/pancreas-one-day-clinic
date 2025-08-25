export function LocationSection() {
  return (
    <section id="location" className="relative z-10 py-20 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
          Local de atendimento
        </h2>
        <p className="text-xl text-white/80 mb-8">
          Conheça o consultório e facilite sua chegada. Estamos localizados no
          Hospital Nossa Senhora Das Graças, Curitiba/PR.
        </p>

        {/* Google Map */}
        <div className="mt-12">
          <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.965258!2d-49.2744!3d-25.4284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce0b1b4b4b4b4%3A0x1b4b4b4b4b4b4b4b!2sHospital+Nossa+Senhora+Das+Gra%C3%A7as!5e0!3m2!1spt-BR!2sbr!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização do Hospital Nossa Senhora Das Graças"
            />
          </div>
          <p className="text-white/70 mt-4 text-sm">
            Clique no mapa para abrir no Google Maps
          </p>
        </div>
      </div>
    </section>
  );
}
