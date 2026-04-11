const API_URL = "http://localhost:8080/api/posts";

export interface BlogPost {
    slug: string;
    title: string;
    excerpt: string;
    category: string;
    date: string;
    readTime: string;
    content: string;
    tags: string[];
}

export async function getPostBySlug(slug: string): Promise<BlogPost> {
    const res = await fetch(`${API_URL}/${slug}`);

    if (!res.ok) {
        throw new Error("Erro ao buscar post");
    }

    return res.json();
}

export async function getAllPosts(): Promise<BlogPost[]> {
    const res = await fetch(API_URL);

    if (!res.ok) {
        throw new Error("Erro ao buscar posts");
    }

    return res.json();
}

export async function createPost(data: BlogPost): Promise<BlogPost> {
    const res = await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    if (!res.ok) {
        throw new Error("Erro ao criar post");
    }

    return res.json();
}

export async function deletePost(slug: string): Promise<void> {
    const res = await fetch(`${API_URL}/${slug}`, {
        method: "DELETE",
    });

    if (!res.ok) {
        throw new Error("Erro ao deletar post");
    }
}
