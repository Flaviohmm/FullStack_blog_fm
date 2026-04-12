import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Clock, Share2, Twitter, Linkedin, Link as LinkIcon, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import Layout from "@/components/Layout";
import { getPostBySlug, BlogPost as BlogPostType } from "@/services/api";
import { useMemo, useEffect, useState } from "react";
import { parseMarkdown } from "@/utils/markdown";

interface TocItem {
    id: string;
    text: string;
    level: number;
}

function extractToc(markdown: string): TocItem[] {
    const lines = markdown.split("\n");
    const toc: TocItem[] = [];

    for (const line of lines) {
        const match = line.match(/^(#{2,3})\s+(.+)/);

        if (match) {
            const text = match[2];

            const id = text
                .toLowerCase()
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")
                .replace(/[^a-z0-9]+/g, "-")
                .replace(/(^-|-$)/g, "");

            toc.push({ id, text, level: match[1].length });
        }
    }
    return toc;
}

const BlogPost = () => {
    const { slug } = useParams<{ slug: string }>();
    const { toast } = useToast();
    const [post, setPost] = useState<BlogPostType | null>(null);
    const [loading, setLoading] = useState(true);
    const [activeId, setActiveId] = useState<string>("");

    const toc = useMemo(() => (
        post ? extractToc(post.content) : []
    ), [post]);

    const htmlContent = useMemo(() => (
        post ? parseMarkdown(post.content) : ""
    ), [post]);

    useEffect(() => {
        if (!toc.length) return;

        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries.find((e) => e.isIntersecting);
                if (visible) setActiveId(visible.target.id);
            },
            { 
                rootMargin: "-80px 0px -60% 0px" 
            }
        );

        toc.forEach(({ id }) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, [toc]);

    useEffect(() => {
        if (!slug) return;

        setLoading(true);

        getPostBySlug(slug)
            .then((data) => setPost(data))
            .catch(() => setPost(null))
            .finally(() => setLoading(false));
    }, [slug]);

    if (loading) {
        return (
            <Layout>
                <div className="container py-20 text-center">
                    <p>Carregando artigo...</p>
                </div>
            </Layout>
        );
    }

    if (!post) {
        return (
            <Layout>
                <div className="container py-20 text-center">
                    <h1 className="text-3xl font-bold">Post não encontrado</h1>
                    <p className="mt-2 text-muted-foreground">O artigo que você procura não existe.</p>
                    <Button asChild className="mt-6">
                        <Link to={"/blog"}>Voltar ao Blog</Link>
                    </Button>
                </div>
            </Layout>
        );
    }

    const shareUrl = typeof window !== "undefined" ? window.location.href : "";
    const shareText = `${post.title} - Flavio Tech`;

    const handleCopyLink = () => {
        navigator.clipboard.writeText(shareUrl);
        toast({ title: "Link copiado!", description: "O link do artigo foi copiado para a área de transferência." });
    };

    return (
        <Layout>
            <article className="container py-12 md:py-16">
                {/* Breadcrumb */}
                <nav className="flex items-center gap-1.5 text-sm text-muted-foreground mb-8 animate-fade-in">
                    <Link to={"/"} className="hover:text-primary transition-colors">Início</Link>
                    <ChevronRight className="h-3 w-3" />
                    <Link to={"/blog"} className="hover:text-primary transition-colors">Blog</Link>
                    <ChevronRight className="h-3 w-3" />
                    <span className="text-foreground font-medium truncate max-w-[200px]">{post.title}</span>
                </nav>

                <div className="flex gap-12">
                    {/* Main content */}
                    <div className="flex-1 min-w-0 max-w-3xl animate-fade-in">
                        {/* Header */}
                        <header className="mb-10">
                            <span className="inline-block text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full mb-4">
                                {post.category}
                            </span>
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
                                {post.title}
                            </h1>
                            <p className="mt-4 text-lg text-muted-foreground">{post.excerpt}</p>
                            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                                <span>{post.date}</span>
                                <span className="flex items-center gap-1">
                                    <Clock className="h-3.5 w-3.5" />
                                    {post.readTime} de leitura
                                </span>
                            </div>
                            <div className="mt-4 flex flex-wrap gap-2">
                                {post.tags.map((tag) => (
                                    <span key={tag} className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </header>

                        {/* Separator */}
                        <div className="h-px bg-border mb-10" />

                        {/* Article body */}
                        <div
                            className="
                                prose prose-invert max-w-none whitespace-pre-line
                            "
                            dangerouslySetInnerHTML={{ __html: htmlContent }}
                        />

                        {/* Share bottom */}
                        <div className="mt-12 pt-8 border-t border-border">
                            <h3 className="text-sm font-semibold mb-4 flex items-center gap-2">
                                <Share2 className="h-4 w-4" /> Compartilhar este artigo
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`, "_blank")}
                                >
                                    <Twitter className="h-4 w-4 mr-1.5" /> Twitter/X
                                </Button>
                                <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`, "_blank")}
                                >
                                    <Linkedin className="h-4 w-4 mr-1.5" /> LinkedIn
                                </Button>
                                <Button variant="outline" size="sm" onClick={handleCopyLink}>
                                    <LinkIcon className="h-4 w-4 mr-1.5" /> Copiar link
                                </Button>
                            </div>
                        </div>

                        {/* Back */}
                        <div className="mt-10">
                            <Button asChild variant="ghost" size="sm">
                                <Link to={"/blog"}>
                                    <ArrowLeft className="h-4 w-4 mr-1.5" /> Voltar ao Blog
                                </Link>
                            </Button>
                        </div>
                    </div>

                    {/* Sidebar - Table of Contents */}
                    {toc.length > 0 && (
                        <aside className="hidden lg:block w-64 shrink-0">
                            <div className="sticky top-24">
                                <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                                    Neste artigo
                                </h4>
                                <nav className="space-y-1">
                                    {toc.map((item) => (
                                        <a
                                            key={item.id}
                                            href={`#${item.id}`}
                                            className={`block text-sm py-1 transition-colors border-l-2 ${item.level === 3 ? "pl-6" : "pl-3"
                                                } ${activeId === item.id
                                                    ? "border-primary text-primary font-medium"
                                                    : "border-transparent text-muted-foreground hover:text-foreground hover:border-border"
                                                }`}
                                        >
                                            {item.text}
                                        </a>
                                    ))}
                                </nav>
                            </div>
                        </aside>
                    )}
                </div>
            </article>
        </Layout>
    );
};

export default BlogPost;
