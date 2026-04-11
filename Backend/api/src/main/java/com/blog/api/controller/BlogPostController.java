package com.blog.api.controller;

import com.blog.api.dto.BlogPostRequest;
import com.blog.api.dto.BlogPostResponse;
import com.blog.api.service.BlogPostService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/posts")
@CrossOrigin(origins = "http://localhost:5173")
public class BlogPostController {

    private final BlogPostService service;

    public BlogPostController(BlogPostService service) {
        this.service = service;
    }

    @GetMapping
    public List<BlogPostResponse> getAll() {
        return service.findAll();
    }

    @GetMapping("/{slug}")
    public BlogPostResponse getBySlug(@PathVariable String slug) {
        return service.findBySlug(slug);
    }

    @PostMapping
    public BlogPostResponse create(@RequestBody BlogPostRequest request) {
        return service.create(request);
    }

    @DeleteMapping("/{slug}")
    public void delete(@PathVariable String slug) {
        service.delete(slug);
    }
}
