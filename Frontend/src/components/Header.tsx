import { Link, useLocation } from "react-router-dom";
import { Sun, Moon, Menu, X, Github, Twitter } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { useState } from "react";
import { Button } from "./ui/button";

const navLinks = [
    { label: "Início", path: "/" },
    { label: "Blog", path: "/blog" },
    { label: "Portfólio", path: "/portfolio" },
    { label: "Sobre", path: "/sobre" },
    { label: "Contato", path: "/contato" },
];

const Header = () => {
    const { theme, toggleTheme } = useTheme();
    const location = useLocation();
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <header className="sticky py-4 top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
            <div className="container flex items-center justify-between">
                <Link to={"/"} className="flex items-center gap-2 font-bold text-lg tracking-tight">
                    <span className="text-gradient text-xl font-extrabold">&lt;FM/&gt;</span>
                    <span className="hidden sm:inline">Flavio Macedo</span>
                </Link>

                {/* Desktop nav */}
                <nav className="hidden md:flex items-center gap-1">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${location.pathname === link.path
                                ? "text-primary bg-primary/10"
                                : "text-muted-foreground hover:text-foreground hover:bg-muted"
                                }`}
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                <div className="flex items-center gap-2">
                    <a href="https://github.com/Flaviohmm" target="_blank" rel="noopener noreferrer" className="p-2 rounded-md text-muted-foreground hover:text-foreground transition-colors">
                        <Github className="h-4 w-4" />
                    </a>
                    <a href="https://x.com/Flaviohm_2" target="_blank" rel="noopener noreferrer" className="p-2 rounded-md text-muted-foreground hover:text-foreground transition-colors">
                        <Twitter className="h-4 w-4" />
                    </a>
                    <Button variant="ghost" size="icon" onClick={toggleTheme} className="text-muted-foreground hover:text-foreground">
                        {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                    </Button>
                    <Button variant="ghost" size="icon" className="md:hidden text-muted-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
                        {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </Button>
                </div>
            </div>

            {/* Mobile nav */}
            {mobileOpen && (
                <nav className="md:hidden border-t border-border/50 bg-background/95 backdrop-blur-xl animate-fade-in">
                    <div className="container py-4 flex flex-col gap-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                onClick={() => setMobileOpen(false)}
                                className={`px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${location.pathname === link.path
                                        ? "text-primary bg-primary/10"
                                        : "text-muted-foreground hover:text-foreground hover:bg-muted"
                                    }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </nav>
            )}
        </header>
    );
};

export default Header;