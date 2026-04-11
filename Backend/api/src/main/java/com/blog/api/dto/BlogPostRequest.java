package com.blog.api.dto;

import java.util.List;

public record BlogPostRequest(
        String slug,
        String title,
        String excerpt,
        String category,
        String date,
        String readTime,
        List<String> tags,
        String content
) { }
