import { Button } from "@/components/ui/button";
import { Phone, MapPin } from "lucide-react";

export function ContactSection() {
  return (
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
  );
}
