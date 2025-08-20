import { CheckCircle } from "lucide-react";

export function ServicesSection() {
  const services = [
    {
      title: "Diagnostic Imaging",
      description:
        "Advanced CT, MRI, and ultrasound imaging for accurate diagnosis",
      icon: "🔍",
      features: [
        "High-resolution scans",
        "3D imaging",
        "Real-time results",
      ],
    },
    {
      title: "Endoscopic Procedures",
      description:
        "Minimally invasive procedures for diagnosis and treatment",
      icon: "🏥",
      features: [
        "Minimal scarring",
        "Quick recovery",
        "Outpatient care",
      ],
    },
    {
      title: "Surgical Consultation",
      description:
        "Expert surgical evaluation and treatment planning",
      icon: "⚕️",
      features: [
        "Expert evaluation",
        "Treatment planning",
        "Risk assessment",
      ],
    },
    {
      title: "Follow-up Care",
      description:
        "Comprehensive post-treatment monitoring and support",
      icon: "📋",
      features: [
        "Regular monitoring",
        "Support groups",
        "Lifestyle guidance",
      ],
    },
  ];

  return (
    <section
      id="services"
      className="relative z-10 py-20 px-6 lg:px-8 bg-white/10 backdrop-blur-sm"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Services
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Comprehensive pancreatic care services designed to provide you
            with the best possible outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="text-center">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-lg font-semibold mb-3 text-white">
                  {service.title}
                </h3>
                <p className="text-sm text-white/80 mb-4">
                  {service.description}
                </p>
                <ul className="space-y-1 text-xs text-white/70">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center justify-center"
                    >
                      <CheckCircle className="w-3 h-3 text-green-500 mr-1" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
