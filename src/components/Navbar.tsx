import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="font-mono font-bold text-lg tracking-wider text-primary">
          AUTONIXLAB
        </Link>
        <div className="flex items-center gap-6">
          <a href="#case-studies" className="text-sm text-muted-foreground hover:text-foreground transition-colors font-sans hidden sm:inline">
            Systems
          </a>
          <a
            href="https://calendly.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-mono border border-primary text-primary px-4 py-2 rounded-md hover:bg-primary hover:text-primary-foreground transition-all"
          >
            Book a Call
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
