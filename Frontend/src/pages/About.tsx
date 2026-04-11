import { Terminal, Heart, BookOpen, Shield } from "lucide-react";
import Layout from "@/components/Layout";

const values = [
    { icon: Terminal, label: "Open Source", text: "Acredito que software deve ser livre e acessível. Contribuo e uso Linux diariamente." },
    { icon: BookOpen, label: "Pensamento Crítico", text: "Questionar é fundamental. Busco entender os 'porquês' antes de aceitar qualquer narrativa." },
    { icon: Shield, label: "Privacidade Digital", text: "Seus dados são seus. Defendo e pratico hábitos de privacidade digital no dia a dia." },
    { icon: Heart, label: "Liberdade Individual", text: "Menos estado, mais liberdade. Acredito no poder da ação individual e do livre mercado." },
];

const About = () => {
    return (
        <Layout>
            <div className="container py-16 max-w-4xl">
                <div className="grid md:grid-cols-3 gap-10 animate-fade-in">
                    <div className="md:col-span-1">
                        <div className="sticky top-24">
                            <div className="w-32 h-32 rounded-2xl bg-hero-gradient flex items-center justify-center text-4xl font-extrabold text-primary-foreground shadow-card-hover">
                                FM
                            </div>
                            <h1 className="mt-4 text-2xl font-extrabold">Flavio Macedo</h1>
                            <p className="text-muted-foreground text-sm mt-1">Entusiasta de tecnologia</p>
                            <p className="text-muted-foreground text-sm">Brasil 🇧🇷</p>
                        </div>
                    </div>

                    <div className="md:col-span-2 space-y-8">
                        <section>
                            <h2 className="text-xl font-bold mb-3">Sobre mim</h2>
                            <div className="space-y-3 text-muted-foreground leading-relaxed">
                                <p>
                                    Sou um entusiasta brasileiro de tecnologia com paixão por Linux, software livre e sistemas.
                                    Passo meus dias explorando novas ferramentas, automatizando fluxos de trabalho e aprendendo
                                    sobre o que move o mundo da economia à política.
                                </p>
                                <p>
                                    Este blog é meu espaço para compartilhar pensamentos, tutoriais e análises sobre os temas
                                    que me fascinam: a configuração perfeita do Terminal até a teoria econômica austríaca.
                                </p>
                                <p>
                                    Acredito que tecnologia e pensamento crítico são as melhores ferramentas para construir
                                    um futuro mais livre e próspero.
                                </p>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold mb-4">Valores & Interesses</h2>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {values.map((v, i) => (
                                    <div
                                        key={v.label}
                                        className="rounded-xl border border-border/50 bg-card p-5 shadow-card animate-fade-in-up"
                                        style={{ animationDelay: `${i * 0.1}s`, opacity: 0 }}
                                    >
                                        <div className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-primary/10 text-primary mb-3">
                                            <v.icon className="h-4 w-4" />
                                        </div>
                                        <h3 className="font-semibold text-sm">{v.label}</h3>
                                        <p className="mt-1 text-xs text-muted-foreground">{v.text}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold mb-3">Stack & Ferramentas</h2>
                            <div className="flex flex-wrap gap-2">
                                {["Arch Linux", "Docker", "Rust", "Python", "TypeScript", "React", "Next.js", "Tailwind CSS", "Git", "Nginx", "PostgreSQL"].map((tool) => (
                                    <span key={tool} className="rounded-full bg-primary/10 text-primary px-3 py-1 text-xs font-medium">{tool}</span>
                                ))}
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default About;