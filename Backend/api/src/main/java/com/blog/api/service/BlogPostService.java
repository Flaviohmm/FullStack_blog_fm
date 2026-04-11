package com.blog.api.service;

import com.blog.api.dto.BlogPostRequest;
import com.blog.api.dto.BlogPostResponse;
import com.blog.api.entity.BlogPost;
import com.blog.api.mapper.BlogPostMapper;
import com.blog.api.repository.BlogPostRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BlogPostService {

    private final BlogPostRepository repository;

    public BlogPostService(BlogPostRepository repository) {
        this.repository = repository;
    }

    public List<BlogPostResponse> findAll() {
        return repository.findAll()
                .stream()
                .map(BlogPostMapper::toResponse)
                .toList();
    }

    public BlogPostResponse findBySlug(String slug) {
        BlogPost post = repository.findBySlug(slug)
                .orElseThrow(() -> new RuntimeException("Post não encontrado"));

        return BlogPostMapper.toResponse(post);
    }

    public BlogPostResponse create(BlogPostRequest request) {
        if (repository.existsBySlug(request.slug())) {
            throw new RuntimeException("Slug já existe");
        }

        BlogPost post = BlogPostMapper.toEntity(request);
        return BlogPostMapper.toResponse(repository.save(post));
    }

    public void delete(String slug) {
        BlogPost post = repository.findBySlug(slug)
                .orElseThrow(() -> new RuntimeException("Post não encontrado"));

        repository.delete(post);
    }
}
