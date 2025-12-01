import { useState, useEffect } from "react";
import { Menu, X, ChevronRight } from "lucide-react"; 
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
      <div className="container px-4"> {/* Adicionei px-4 para segurança lateral */}
        <div className="flex items-center justify-between h-20">
          
          {/* LOGO AJUSTADA PARA MOBILE PEQUENO */}
          <button
            onClick={() => scrollToSection("hero")}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity max-w-[75%]"
          >
            <img 
              src="/images/logo.png" 
              alt="Logo Trekking Lençóis" 
              // Ajuste: h-8 no mobile, mas h-10 no desktop. 
              className="h-8 md:h-12 w-auto object-contain transition-all duration-300"
              style={{ 
                filter: isScrolled ? "invert(1)" : "none" 
              }}
            />
            
            {/* Ajuste: text-xs em telas muito pequenas, text-sm em mobile normal */}
            <span className={`text-xs sm:text-sm md:text-xl font-bold text-left leading-tight ${isScrolled ? "text-foreground" : "text-white"}`}>
              Trekking Lençóis Brasil
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection("sobre")} className={`font-medium hover:text-primary transition-colors ${isScrolled ? "text-foreground" : "text-white"}`}>Sobre</button>
            <button onClick={() => scrollToSection("roteiros")} className={`font-medium hover:text-primary transition-colors ${isScrolled ? "text-foreground" : "text-white"}`}>Roteiros</button>
            <button onClick={() => scrollToSection("passeios")} className={`font-medium hover:text-primary transition-colors ${isScrolled ? "text-foreground" : "text-white"}`}>Passeios</button>
            <button onClick={() => scrollToSection("contato")} className={`font-medium hover:text-primary transition-colors ${isScrolled ? "text-foreground" : "text-white"}`}>Contato</button>
            <Button onClick={() => window.open("https://wa.me/5598984659626", "_blank")} className="bg-primary hover:bg-primary/90">Reservar Agora</Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2" // Adicionei padding para facilitar o toque
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
      {/* Mobile Menu - Clean & Premium */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white shadow-2xl border-t border-gray-100 animate-in slide-in-from-top-5 duration-300">
          <nav className="container px-6 py-8 flex flex-col gap-1">
            
            {/* Lista de Links - Estilo "Lista de App" */}
            {["Sobre", "Roteiros", "Passeios", "Contato"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="group flex items-center justify-between w-full py-4 border-b border-gray-50 hover:bg-gray-50/50 transition-colors"
              >
                <span className="text-lg font-medium text-gray-600 group-hover:text-primary transition-colors">
                  {item}
                </span>
                {/* Seta discreta que aparece/ilumina ao interagir */}
                <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-primary transition-colors" />
              </button>
            ))}

            {/* Botão Principal - Separado e em destaque */}
            <div className="pt-6 mt-2">
              <Button
                onClick={() => window.open("https://wa.me/5598984659626", "_blank")}
                className="w-full h-12 text-base font-semibold bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20 rounded-lg transition-all active:scale-[0.98]"
              >
                Reservar Agora
              </Button>
            </div>
            
          </nav>
        </div>
      )}
    </header>
  );
}