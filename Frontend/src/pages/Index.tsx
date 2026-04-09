import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Terminal, Globe, TrendingUp, Shield, Cpu } from "lucide-react";
import Layout from "@/components/Layout";
import heroImage from "@/assets/hero-illustration.jpg";

const topics = [
    { icon: Terminal, label: "Linux & Open Source", description: "Explorando o poder do software livre e sistemas Unix-like." },
    { icon: Cpu, label: "Tecnologia & Dev", description: "IA, desenvolvimento, DevOps e o futuro da computação." },
    { icon: TrendingUp, label: "Economia", description: "Análise macro, investimentos, Bitcoin e finanças pessoais." },
    { icon: Shield, label: "Privacidade", description: "Ferramentas e práticas para proteger sua liberdade digital." },
    { icon: Globe, label: "Política & Liberdade", description: "Pensamento liberal, liberdade individual e crítica ao estatismo." },
];

const featuredPosts = [
    { title: "Por que migrei 100% para Linux em 2026", category: "Linux", date: "20 Mar 2026", readTime: "5 min", slug: "/blog/por-que-migrei-para-linux-2026" },
    { title: "Bitcoin como reserva de valor: uma análise racional", category: "Economia", date: "15 Mar 2026", readTime: "8 min", slug: "/blog/bitcoin-reserva-de-valor" },
    { title: "Self-hosting: liberdade digital na prática", category: "Tecnologia", date: "10 Mar 2026", readTime: "6 min", slug: "/blog/self-hosting-liberdade-digital" },
];

const Index = () => {
    return (
        <Layout>
            {/* Hero */}
            <section className="relative overflow-hidden">
                <div className="absolute inset-0 bg-hero-gradient opacity-5" />
                <div className="container py-20 md:py-28">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6 animate-fade-in">
                            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-medium text-primary">
                                <Terminal className="h-3 w-3" /> Entusiasta de tecnologia & liberdade
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1]">
                                Pensamentos sobre o mundo através do{" "}
                                <span className="text-gradient">código e da razão</span>
                            </h1>
                            <p className="text-lg text-muted-foreground max-w-lg">
                                Linux, tecnologia, economia e liberdade. Um espaço para ideias que desafiam o convencional.
                            </p>
                            <div className="flex flex-wrap gap-3">
                                <Button asChild size="lg" className="bg-hero-gradient hover:opacity-90 transition-opacity">
                                    <Link to="/blog">Ler o Blog <ArrowRight className="ml-1 h-4 w-4" /></Link>
                                </Button>
                                <Button asChild variant="outline" size="lg">
                                    <Link to="/portfolio">Ver Projetos</Link>
                                </Button>
                            </div>
                        </div>
                        <div className="relative animate-scale-in" style={{ animationDelay: "0.2s", opacity: 0 }}>
                            <div className="rounded-2xl overflow-hidden shadow-card-hover border border-border/50">
                                <img src={heroImage} alt="Tecnologia e código" className="w-full h-auto object-cover" />
                            </div>
                            <div className="absolute -bottom-4 -left-4 w-24 h-24 rounded-2xl bg-hero-gradient opacity-20 blur-2xl" />
                            <div className="absolute -top-4 -right-4 w-32 h-32 rounded-full bg-accent/20 blur-3xl" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Topics */}
            <section className="container py-20">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tight">Tópicos que abordo</h2>
                    <p className="mt-2 text-muted-foreground">Tecnologia, economia e pensamento crítico</p>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {topics.map((topic, i) => (
                        <div
                            key={topic.label}
                            className="group rounded-xl border border-border/50 bg-card p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
                            style={{ animationDelay: `${i * 0.1}s`, opacity: 0 }}
                        >
                            <div className="mb-4 inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary">
                                <topic.icon className="h-5 w-5" />
                            </div>
                            <h3 className="font-semibold mb-1">{topic.label}</h3>
                            <p className="text-sm text-muted-foreground">{topic.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Featured Posts */}
            <section className="container pb-20">
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-2xl font-bold tracking-tight">Últimos posts</h2>
                    <Link to="/blog" className="text-sm text-primary hover:underline flex items-center gap-1">
                        Ver todos <ArrowRight className="h-3 w-3" />
                    </Link>
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                    {featuredPosts.map((post, i) => (
                        <Link
                            key={post.title}
                            to={post.slug}
                            className="group rounded-xl border border-border/50 bg-card p-5 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
                            style={{ animationDelay: `${i * 0.1}s`, opacity: 0 }}
                        >
                            <span className="text-xs font-medium text-primary">{post.category}</span>
                            <h3 className="mt-2 font-semibold group-hover:text-primary transition-colors">{post.title}</h3>
                            <div className="mt-3 flex items-center gap-3 text-xs text-muted-foreground">
                                <span>{post.date}</span>
                                <span>·</span>
                                <span>{post.readTime} de leitura</span>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </Layout>
    );
};

export default Index;
