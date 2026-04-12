import { Link } from "react-router-dom";
import { Github, Twitter, Mail } from "lucide-react";

const Footer = () => {
    return (
        <footer className="border-t border-border/50 bg-card/50">
            <div className="container py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <Link to="/" className="bg-gradient-to-r from-indigo-600 to-cyan-500 dark:from-indigo-500 dark:to-cyan-400 bg-clip-text text-transparent text-xl font-extrabold">&lt;FM/&gt;</Link>
                        <p className="mt-3 text-sm text-muted-foreground max-w-xs">
                            Linux, tecnologia, economia e liberdade. Pensamentos sobre o mundo através do código e da razão.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-semibold text-sm mb-3">Navegação</h4>
                        <div className="flex flex-col gap-2">
                            {["Início", "Blog", "Portfólio", "Sobre", "Contato"].map((item) => (
                                <Link
                                    key={item}
                                    to={item === "Início" ? "/" : `/${item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`}
                                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    {item}
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h4 className="font-semibold text-sm mb-3">Conecte-se</h4>
                        <div className="flex gap-3">
                            <a href="https://github.com/Flaviohmm" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-colors">
                                <Github className="h-4 w-4" />
                            </a>
                            <a href="https://x.com/Flaviohm_2" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-colors">
                                <Twitter className="h-4 w-4" />
                            </a>
                            <a href="mailto:fhenrique609@gmail.com" className="p-2 rounded-lg bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-colors">
                                <Mail className="h-4 w-4" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="mt-8 pt-6 border-t border-border/50 text-center text-xs text-muted-foreground">
                    © {new Date().getFullYear()} Flavio Macedo. Todos os direitos reservados.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
