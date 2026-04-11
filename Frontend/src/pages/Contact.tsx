import React, { useState } from "react";
import { Send, Github, Twitter, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Layout from "@/components/Layout";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const { toast } = useToast();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        toast({ title: "Mensagem enviada!", description: "Obrigado pelo contato. Responderei em breve." });
        setForm({ name: "", email: "", message: "" });
    };

    return (
        <Layout>
            <div className="container py-16 max-w-2xl">
                <div className="animate-fade-in">
                    <h1 className="text-4xl font-extrabold tracking-tight">Contato</h1>
                    <p className="mt-2 text-muted-foreground">Tem alguma pergunta ou sugestão? Entre em contato.</p>
                </div>

                <form onSubmit={handleSubmit} className="mt-8 space-y-4 animate-fade-in" style={{ animationDelay: "0.1s", opacity: 0 }}>
                    <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                            <label className="text-sm font-medium mb-1.5 block">Nome</label>
                            <Input placeholder="Seu nome" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
                        </div>
                        <div>
                            <label className="text-sm font-medium mb-1.5 block">Email</label>
                            <Input type="email" placeholder="seu@email.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
                        </div>
                    </div>
                    <div>
                        <label className="text-sm font-medium mb-1.5 block">Mensagem</label>
                        <Textarea placeholder="Escreva sua mensagem..." rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} required />
                    </div>
                    <Button type="submit" size="lg" className="bg-hero-gradient hover:opacity-90 transition-opacity">
                        <Send className="h-4 w-4 mr-2" /> Enviar mensagem
                    </Button>
                </form>

                <div className="mt-12 pt-8 border-t border-border/50 animate-fade-in" style={{ animationDelay: "0.2s", opacity: 0 }}>
                    <h2 className="text-lg font-bold mb-4">Outras formas de contato</h2>
                    <div className="flex flex-wrap gap-3">
                        <a href="https://x.com/Flaviohm_2" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-border/50 bg-card px-4 py-2.5 text-sm hover:shadow-card transition-all">
                            <Twitter className="h-4 w-4 text-primary" /> @Flaviohm_2
                        </a>
                        <a href="http://github.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-border/50 bg-card px-4 py-2.5 text-sm hover:shadow-card transition-all">
                            <Github className="h-4 w-4 text-primary" /> Github
                        </a>
                        <a href="malito:fhenrique609@gmail.com" className="inline-flex items-center gap-2 rounded-lg border border-border/50 bg-card px-4 py-2.5 text-sm hover:shadow-card transition-all">
                            <Mail className="h-4 w-4 text-primary" /> Email
                        </a>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Contact;
