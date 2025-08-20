import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Heart,
  Clock,
  Shield,
  Users,
  Phone,
  MapPin,
  Calendar,
  CheckCircle,
} from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { Navbar } from "@/components/navbar";

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/image.png"
          alt="Pancreas medical illustration"
          fill
          className="object-cover opacity-20 dark:opacity-10"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-blue-800/60 to-purple-900/80 dark:from-blue-950/90 dark:via-blue-900/80 dark:to-purple-950/90" />
      </div>

      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative z-10 flex flex-col items-center justify-center min-h-screen pt-20 text-center px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Expert Pancreatic Care
            <span className="block text-blue-200">in One Day</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Comprehensive diagnosis, treatment, and follow-up care for all
            pancreatic conditions. Experience world-class medical care with
            minimal disruption to your life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-white text-blue-900 hover:bg-white/90 px-8 py-3 text-lg"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Schedule Consultation
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 px-8 py-3 text-lg"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">
              Why Choose Pancreas One Day Clinic?
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Experience world-class pancreatic care with our comprehensive
              approach to diagnosis and treatment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Same Day Care */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-8 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-6">
                <Clock className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">
                Same Day Care
              </h3>
              <p className="text-white/80 mb-4">
                Complete diagnosis and treatment in a single visit, minimizing
                disruption to your daily life and providing immediate results.
              </p>
              <ul className="space-y-2 text-sm text-white/70">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  One-day diagnosis
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Immediate treatment options
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Minimal time away from work
                </li>
              </ul>
            </div>

            {/* Expert Specialists */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-8 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">
                Expert Specialists
              </h3>
              <p className="text-white/80 mb-4">
                Board-certified pancreatic specialists with years of experience
                in treating complex conditions and rare diseases.
              </p>
              <ul className="space-y-2 text-sm text-white/70">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Board-certified physicians
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Specialized training
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Advanced treatment protocols
                </li>
              </ul>
            </div>

            {/* Patient-Centered */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-8 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">
                Patient-Centered Care
              </h3>
              <p className="text-white/80 mb-4">
                Personalized care plans tailored to your specific needs, medical
                history, and lifestyle considerations.
              </p>
              <ul className="space-y-2 text-sm text-white/70">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Individualized treatment plans
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Family involvement
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Ongoing support
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="relative z-10 py-20 px-6 lg:px-8 bg-white/10 dark:bg-gray-900/20 backdrop-blur-sm"
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
            {[
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
            ].map((service, index) => (
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

      {/* Contact Section */}
      <section id="contact" className="relative z-10 py-20 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Contact us today to schedule your consultation and take the first
            step towards better health.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-white text-blue-900 hover:bg-white/90 px-8 py-3 text-lg"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call (555) 123-4567
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 px-8 py-3 text-lg"
            >
              <MapPin className="w-5 h-5 mr-2" />
              Get Directions
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-12 px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-6 h-6 bg-white rounded flex items-center justify-center">
              <Heart className="w-4 h-4 text-blue-600" />
            </div>
            <span className="text-lg font-semibold text-white">
              Pancreas One Day Clinic
            </span>
          </div>
          <p className="text-white/60 mb-4">
            Providing exceptional pancreatic care with compassion and expertise.
          </p>
          <div className="text-white/40 text-sm">
            © 2024 Pancreas One Day Clinic. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
