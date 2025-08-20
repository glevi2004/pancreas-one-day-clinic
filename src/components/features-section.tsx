import { Clock, Shield, Users, CheckCircle } from "lucide-react";

export function FeaturesSection() {
  return (
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
            <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center mb-6">
              <Clock className="w-6 h-6 text-blue-400" />
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
            <div className="w-12 h-12 bg-green-900 rounded-lg flex items-center justify-center mb-6">
              <Shield className="w-6 h-6 text-green-400" />
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
            <div className="w-12 h-12 bg-purple-900 rounded-lg flex items-center justify-center mb-6">
              <Users className="w-6 h-6 text-purple-400" />
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
  );
}
