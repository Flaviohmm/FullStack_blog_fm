import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Layout from "@/components/Layout";
import { posts } from "@/data/posts";

const categories = ["Todos", "Linux", "Tecnologia", "Economia", "Política", "Privacidade"];

const Blog = () => {
    const [activeCategory, setActiveCategory] = useState("Todos");
    const [search, setSearch] = useState("");

    const filtered = posts.filter((p) => {
        const matchCat = activeCategory === "Todos" || p.category === activeCategory;
        const matchSearch = p.title.toLowerCase().includes(search.toLowerCase()) || p.excerpt.toLowerCase().includes(search.toLowerCase());
        return matchCat && matchSearch;
    });

    return (
        <Layout>
            <div className="container py-16">
                <div className="max-w-2xl mb-10 animate-fade-in">
                    <h1 className="text-4xl font-extrabold tracking-tight">Blog</h1>
                    <p className="mt-2 text-muted-foreground">Artigos sobre tecnologia, economia e liberdade.</p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mb-8 animate-fade-in" style={{ animationDelay: "0.1s", opacity: 0 }}>
                    <div className="relative flex-1 max-w-sm">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input placeholder="Buscar posts..." value={search} onChange={(e) => setSearch(e.target.value)} className="pl-9" />
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {categories.map((cat) => (
                            <Button
                                key={cat}
                                variant={activeCategory === cat ? "default" : "outline"}
                                size="sm"
                                onClick={() => setActiveCategory(cat)}
                                className={activeCategory === cat ? "bg-hero-gradient" : ""}
                            >
                                {cat}
                            </Button>
                        ))}
                    </div>
                </div>

                <div className="grid gap-4">
                    {filtered.map((post, i) => (
                        <Link
                            to={`/blog/${post.slug}`}
                            key={post.slug}
                            className="group rounded-xl border border-border/50 bg-card p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-0.5 animate-fade-in-up block"
                            style={{ animationDelay: `${i * 0.05}s`, opacity: 0 }}
                        >
                            <div className="flex flex-col md:flex-row md:items-start gap-4">
                                <div className="flex-1">
                                    <span className="text-xs font-medium text-primary">{post.category}</span>
                                    <h2 className="mt-1 text-xl font-bold group-hover:text-primary transition-colors">{post.title}</h2>
                                    <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{post.excerpt}</p>
                                    <div className="mt-3 flex flex-wrap items-center gap-2">
                                        {post.tags.map((tag) => (
                                            <span key={tag} className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                                <div className="flex md:flex-col items-center md:items-end gap-2 text-xs text-muted-foreground whitespace-nowrap">
                                    <span>{post.date}</span>
                                    <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{post.readTime}</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                    {filtered.length === 0 && (
                        <p className="text-center text-muted-foreground py-12">Nenhum post encontrado.</p>
                    )}
                </div>
            </div>
        </Layout>
    );
};

export default Blog;
