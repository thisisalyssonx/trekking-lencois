import { useState, useEffect } from "react";
import { Menu, X, Mountain } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-sm shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("hero")}
            className="flex items-center gap-2 text-xl font-bold"
          >
            <span className={`${isScrolled ? "text-foreground" : "text-white"}`}>
              Trekking nos Lençóis Maranhenses 
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("sobre")}
              className={`font-medium hover:text-primary transition-colors ${
                isScrolled ? "text-foreground" : "text-white"
              }`}
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("roteiros")}
              className={`font-medium hover:text-primary transition-colors ${
                isScrolled ? "text-foreground" : "text-white"
              }`}
            >
              Roteiros
            </button>
            <button
              onClick={() => scrollToSection("passeios")}
              className={`font-medium hover:text-primary transition-colors ${
                isScrolled ? "text-foreground" : "text-white"
              }`}
            >
              Passeios
            </button>
            <button
              onClick={() => scrollToSection("contato")}
              className={`font-medium hover:text-primary transition-colors ${
                isScrolled ? "text-foreground" : "text-white"
              }`}
            >
              Contato
            </button>
            <Button
              onClick={() => window.open("https://wa.me/5598984659626", "_blank")}
              className="bg-primary hover:bg-primary/90"
            >
              Reservar Agora
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden"
          >
            {isMobileMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? "text-foreground" : "text-white"}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? "text-foreground" : "text-white"}`} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <nav className="container py-4 flex flex-col gap-4">
            <button
              onClick={() => scrollToSection("sobre")}
              className="text-left font-medium hover:text-primary transition-colors"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("roteiros")}
              className="text-left font-medium hover:text-primary transition-colors"
            >
              Roteiros
            </button>
            <button
              onClick={() => scrollToSection("passeios")}
              className="text-left font-medium hover:text-primary transition-colors"
            >
              Passeios
            </button>
            <button
              onClick={() => scrollToSection("contato")}
              className="text-left font-medium hover:text-primary transition-colors"
            >
              Contato
            </button>
            <Button
              onClick={() => window.open("https://wa.me/5598984659626", "_blank")}
              className="bg-primary hover:bg-primary/90 w-full"
            >
              Reservar Agora
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
