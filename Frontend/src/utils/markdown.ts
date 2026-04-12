import { marked } from "marked";
import DOMPurify from "dompurify";
import Prism from "prismjs";

// Importe apenas as linguagens que você usa (mantém leve)
import 'prismjs/components/prism-yaml';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-docker';
import 'prismjs/components/prism-json';

// Tema (escolha um)
import 'prismjs/themes/prism-tomorrow.css';

const renderer = new marked.Renderer();

// CODE BLOCK - Versão final otimizada para Prism + indentação
renderer.code = ({ text, lang }) => {
    const language = (lang || 'plaintext').toLowerCase().trim();
    
    const langMap: Record<string, string> = {
        'yml': 'yaml',
        'docker': 'docker',
        'dockerfile': 'docker',
        'shell': 'bash',
        'sh': 'bash'
    };

    const prismLanguage = langMap[language] || language;

    let highlighted = text;

    try {
        const grammar = Prism.languages[prismLanguage] || Prism.languages.plaintext;
        highlighted = Prism.highlight(text, grammar, prismLanguage);
    } catch (err) {
        console.error('Prism error:', err);
        highlighted = text
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');
    }

    // HTML sem indentação extra no template (isso é o que resolve o problema)
    return `<pre class="prism-pre rounded-lg bg-[#1e1e1e] p-4 overflow-x-auto text-sm border border-border/50"><code class="language-${prismLanguage}">${highlighted}</code></pre>`;
};

// HEADINGS COM ID (ESSENCIAL pro TOC)
renderer.heading = ({ tokens, depth }) => {
    const text = tokens.map(t => t.raw).join("");

    const id = text
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");

    if (depth === 2) {
        return `<h2 id="${id}" class="text-2xl font-bold mt-10 mb-4 scroll-m-24">${text}</h2>`;
    }

    if (depth === 3) {
        return `<h3 id="${id}" class="text-xl font-bold mt-10 mb-4 scroll-m-24">${text}</h3>`;
    }

    return `<h${depth}>${text}</h${depth}>`;
};

renderer.codespan = ({ text }) => {
    return `
        <code class="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-primary">
            ${text}
        </code>
    `;
};

renderer.table = ({ header, rows }) => {
    const headerHtml = `
        <tr>
            ${header.map(cell => `
                <th class="border border-border/50 bg-muted px-4 py-2 text-center font-semibold">
                    ${cell.text}
                </th>
            `).join("")}
        </tr>
    `;

    const bodyHtml = rows.map(row => `
        <tr>
            ${row.map(cell => `
                <td class="border border-border/50 px-4 py-2">
                    ${cell.text}
                </td>
            `).join("")}
        </tr>
    `).join("");

    return `
        <div class="overflow-x-auto my-6">
            <table class="w-full text-sm border-collapse">
                <thead>${headerHtml}</thead>
                <tbody>${bodyHtml}</tbody>
            </table>
        </div>
    `;
};

renderer.tablerow = ({ text }) => {
    return `<tr class="text-center">${text}</tr>`
};

renderer.tablecell = (token) => {
    const { text, header, align } = token;

    const alignClass =
        align === "center"
            ? "text-center"
            : align === "right"
                ? "text-right"
                : "text-left";

    if (header) {
        return `
            <th class="border border-border/50 bg-muted px-4 py-2 font-semibold ${alignClass}">
                ${text}
            </th>
        `;
    }

    return `
        <td class="border border-border/50 px-4 py-2 ${alignClass}">
            ${text}
        </td>
    `;
};

renderer.strong = ({ tokens }) => {
    const text = tokens.map(t => t.raw).join("");
    return `<strong class="font-semibold text-foreground">${text}</strong>`;
};

renderer.em = ({ tokens }) => {
    const text = tokens.map(t => t.raw).join("");
    return `<em class="italic text-muted-foreground">${text}</em>`;
};

renderer.list = (token) => {
    const tag = token.ordered ? "ol" : "ul"

    const classes = token.ordered
        ? "list-decimal list-inside space-y-1 my-4 text-muted-foreground"
        : "list-disc list-inside space-y-1 my-4 text-muted-foreground";

    const itemsHtml = token.items
        .map(item => renderer.listitem(item))
        .join("");

    return `<${tag} class="${classes}">${itemsHtml}</${tag}>`;
};

renderer.listitem = (token) => {
    return `<li class="leading-relaxed">${marked.parser(token.tokens)}</li>`;
};


marked.setOptions({
    breaks: true,
    gfm: true,
    renderer,
});

export function parseMarkdown(markdown: string): string {
    const rawHtml = marked.parse(markdown, { async: false }) as string;
    return DOMPurify.sanitize(rawHtml);
}
