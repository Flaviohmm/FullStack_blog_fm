package com.blog.api.mapper;

import com.blog.api.dto.BlogPostRequest;
import com.blog.api.dto.BlogPostResponse;
import com.blog.api.entity.BlogPost;

public class BlogPostMapper {

    public static BlogPost toEntity(BlogPostRequest dto) {
        BlogPost post = new BlogPost();
        post.setSlug(dto.slug());
        post.setTitle(dto.title());
        post.setExcerpt(dto.excerpt());
        post.setCategory(dto.category());
        post.setDate(dto.date());
        post.setReadTime(dto.readTime());
        post.setTags(dto.tags());
        post.setContent(dto.content());
        return post;
    }

    public static BlogPostResponse toResponse(BlogPost post) {
        return new BlogPostResponse(
                post.getSlug(),
                post.getTitle(),
                post.getExcerpt(),
                post.getCategory(),
                post.getDate(),
                post.getReadTime(),
                post.getTags(),
                post.getContent()
        );
    }
}
