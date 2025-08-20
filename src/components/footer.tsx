import { Heart } from "lucide-react";

export function Footer() {
  return (
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
  );
}
