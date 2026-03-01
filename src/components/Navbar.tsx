import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <Link to="/" className="font-mono font-bold text-lg tracking-wider text-primary">
          AUTONIXLAB
        </Link>

        {/* Desktop nav */}
        <div className="hidden sm:flex items-center gap-6">
          <a href="#case-studies" className="text-sm text-muted-foreground hover:text-foreground transition-colors font-sans">
            Systems
          </a>
          <a href="#testimonials" className="text-sm text-muted-foreground hover:text-foreground transition-colors font-sans">
            Signals
          </a>
          <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors font-sans">
            Contact
          </a>
          <a
            href="https://calendly.com/unaiza-autonixlab/discovery-call"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-mono border border-primary text-primary px-4 py-2 rounded-md hover:bg-primary hover:text-primary-foreground transition-all"
          >
            Book a Call
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="sm:hidden text-foreground"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`sm:hidden border-t border-border bg-background/95 backdrop-blur-md px-4 overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-60 py-4 opacity-100" : "max-h-0 py-0 opacity-0"}`}
      >
        <div className="space-y-3">
          <a href="#case-studies" onClick={() => setMenuOpen(false)} className="block text-sm text-muted-foreground hover:text-foreground font-sans">
            Systems
          </a>
          <a href="#testimonials" onClick={() => setMenuOpen(false)} className="block text-sm text-muted-foreground hover:text-foreground font-sans">
            Signals
          </a>
          <a href="#contact" onClick={() => setMenuOpen(false)} className="block text-sm text-muted-foreground hover:text-foreground font-sans">
            Contact
          </a>
          <a
            href="https://calendly.com/unaiza-autonixlab/discovery-call"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-sm font-mono border border-primary text-primary px-4 py-2 rounded-md text-center hover:bg-primary hover:text-primary-foreground transition-all"
          >
            Book a Call
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
