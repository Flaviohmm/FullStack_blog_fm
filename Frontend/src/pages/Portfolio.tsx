import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

const filters = ["Todos", "Open Source", "Web", "DevOps", "CLI"];

const projects = [
    {
        title: "dotfiles",
        description: "Minha configuração pessoal para Arch Linux, i3wm, Neovim e terminal. Totalmente automatizada.",
        tags: ["Linux", "Bash", "Neovim"],
        category: "Open Source",
        github: "https://github.com",
    },
    {
        title: "budget-tracker",
        description: "App web para controle financeiro pessoal com categorias, gráficos e exportação CSV.",
        tags: ["React", "TypeScript", "Tailwind"],
        category: "Web",
        github: "https://github.com",
        demo: "#",
    },
    {
        title: "docker-homelab",
        description: "Stack completa de self-hosting com Docker Compose: Nextcloud, Vaultwarden, Gitea e mais.",
        tags: ["Docker", "Linux", "Nginx"],
        category: "DevOps",
        github: "https://github.com",
    },
    {
        title: "rss-aggregator",
        description: "Agregador de feeds RSS minimalista escrito em Rust com interface TUI.",
        tags: ["Rust", "CLI", "RSS"],
        category: "CLI",
        github: "https://github.com",
    },
    {
        title: "crypto-monitor",
        description: "Dashboard de monitoramento de preços de criptomoedas com alertas por Telegram.",
        tags: ["Python", "API", "Telegram"],
        category: "Web",
        github: "https://github.com",
        demo: "#",
    },
    {
        title: "privacy-toolkit",
        description: "Scripts e configurações para maximizar privacidade no Linux: DNS, firewall, hardening.",
        tags: ["Linux", "Security", "Bash"],
        category: "Open Source",
        github: "https://github.com",
    },
];

const Portfolio = () => {
    const [activeFilter, setActiveFilter] = useState("Todos");

    const filtered = activeFilter === "Todos" ? projects : projects.filter((p) => p.category === activeFilter);

    return (
        <Layout>
            <div className="container py-16">
                <div className="max-w-2xl mb-10 animate-fade-in">
                    <h1 className="text-4xl font-extrabold tracking-tight">Portfólio</h1>
                    <p className="mt-2 text-muted-foreground">Projetos open source, ferramentas e experimentos.</p>
                </div>

                <div className="flex flex-wrap gap-2 mb-8 animate-fade-in" style={{ animationDelay: "0.1s", opacity: 0 }}>
                    {filters.map((f) => (
                        <Button
                            key={f}
                            variant={activeFilter === f ? "default" : "outline"}
                            size="sm"
                            onClick={() => setActiveFilter(f)}
                            className={activeFilter === f ? "bg-hero-gradient" : ""}
                        >
                            {f}
                        </Button>
                    ))}
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {filtered.map((project, i) => (
                        <div
                            key={project.title}
                            className="group rounded-xl border border-border/50 bg-card p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 flex flex-col animate-fade-in-up"
                            style={{ animationDelay: `${i * 0.08}s`, opacity: 0 }}
                        >
                            <span className="text-xs font-medium text-primary mb-2">{project.category}</span>
                            <h3 className="text-lg font-bold font-mono group-hover:text-primary transition-colors">{project.title}</h3>
                            <p className="mt-2 text-sm text-muted-foreground flex-1">{project.description}</p>
                            <div className="mt-4 flex flex-wrap gap-1.5">
                                {project.tags.map((tag) => (
                                    <span key={tag} className="rounded-full bg-primary/10 text-primary px-2.5 py-0.5 text-xs font-medium">{tag}</span>
                                ))}
                            </div>
                            <div className="mt-4 flex gap-2">
                                <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors">
                                    <Github className="h-3.5 w-3.5" /> Código
                                </a>
                                {project.demo && (
                                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs font-medium text-primary hover:underline">
                                        <ExternalLink className="h-3.5 w-3.5" /> Demo
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    );
};

export default Portfolio;
