"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Calendar } from "lucide-react";
import Image from "next/image";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full">
      <div className="bg-white/10 backdrop-blur-md border-b border-white/20 px-6 py-3 flex items-center justify-between w-full">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 flex items-center justify-center">
            <Image
              src="/logo.png"
              alt="Pancreas Clinic Logo"
              width={48}
              height={48}
              className="w-12 h-12"
            />
          </div>
          <span className="text-xl font-bold text-white">
            Pâncreas One Day Clinic
          </span>
        </div>

        {/* Desktop Navigation - Centered */}
        <div className="hidden lg:flex items-center justify-center flex-1 ml-12">
          <nav className="flex space-x-6">
            <a
              href="#services"
              className="text-white hover:text-white/80 transition-colors text-sm"
            >
              Serviços
            </a>
            <a
              href="/blog"
              className="text-white hover:text-white/80 transition-colors text-sm"
            >
              Blog
            </a>
            <a
              href="#about"
              className="text-white hover:text-white/80 transition-colors text-sm"
            >
              Sobre
            </a>
            <a
              href="#contact"
              className="text-white hover:text-white/80 transition-colors text-sm"
            >
              Contato
            </a>
          </nav>
        </div>

        {/* Desktop Action Buttons */}
        <div className="hidden lg:flex items-center space-x-4">
          <Button
            variant="ghost"
            className="text-white hover:!bg-white/10 hover:!text-white/90 px-4 py-2 transition-all duration-200"
          >
            <Phone className="w-4 h-4 mr-2" />
            Ligar Agora
          </Button>
          <Button className="bg-white/20 hover:bg-white/30 text-white border border-white/30 rounded-full px-6 py-2 transition-all">
            <Calendar className="w-4 h-4 mr-2" />
            Agendar Consulta
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center space-x-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white hover:!bg-white/10"
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white/10 backdrop-blur-lg border-b border-white/20 px-6 py-4 space-y-3">
          <nav className="space-y-3">
            <a
              href="#services"
              className="block text-white hover:!bg-white/10 hover:!text-white/90 rounded-md px-4 transition-colors font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Serviços
            </a>
            <a
              href="/blog"
              className="block text-white hover:!bg-white/10 hover:!text-white/90 rounded-md px-4 transition-colors font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </a>
            <a
              href="#about"
              className="block text-white hover:!bg-white/10 hover:!text-white/90 rounded-md px-4 transition-colors font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Sobre
            </a>
            <a
              href="#contact"
              className="text-white hover:!bg-white/10 hover:!text-white/90 rounded-md px-4 transition-colors font-medium py-2 block"
              onClick={() => setIsMenuOpen(false)}
            >
              Contato
            </a>
          </nav>
          <div className="pt-3 border-t border-white/20 space-y-2">
            <Button
              variant="ghost"
              className="mb-2 w-full text-white hover:!bg-white/10 hover:!text-white/90 justify-start"
            >
              <Phone className="w-4 h-4 mr-2" />
              Ligar Agora
            </Button>
            <Button className="w-full bg-white/20 hover:bg-white/30 text-white border border-white/30 justify-start">
              <Calendar className="w-4 h-4 mr-2" />
              Agendar Consulta
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
