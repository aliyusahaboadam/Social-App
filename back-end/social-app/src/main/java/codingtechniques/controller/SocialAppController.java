package codingtechniques.controller;

import org.hibernate.FetchNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import codingtechniques.model.Comment;
import codingtechniques.model.Post;
import codingtechniques.repository.PostRepository;

@RestController
@RequestMapping("/social/api")
@CrossOrigin(origins = "http://localhost:3000/")
public class SocialAppController {
         
	
	@Autowired
	private PostRepository postRepository;
	
	@GetMapping("/posts")
	public Iterable<Post> getAllPost() {
		return postRepository.findAll();
	}
	
	@PostMapping("/add-post")
	public Post savePost (@RequestBody Post post) {
		return postRepository.save(post);
	}
	
	@PutMapping("/likes/{id}/{like}")
	public ResponseEntity<Post> updateLike (@PathVariable Long id, @PathVariable int like){
		 Post post = postRepository.findById(id)
				 .orElseThrow(() -> new FetchNotFoundException("Post", id));
		 
		 post.setLike(like + 1);
		 
		 Post postUpdated = postRepository.save(post);
		 
		 return ResponseEntity.ok(postUpdated);
	}
	
	
	@PutMapping("/unlikes/{id}/{unlike}")
	public ResponseEntity<Post> updateUnlike (@PathVariable Long id, @PathVariable int unlike) {
		
		Post post = postRepository.findById(id)
				 .orElseThrow(() -> new FetchNotFoundException("Post", id));
		
		post.setUnlike(unlike + 1);
		
		
         Post postUpdated = postRepository.save(post);
		 
		 return ResponseEntity.ok(postUpdated);
		
	}
	
	@GetMapping("/post/{id}")
	public ResponseEntity<Post> getPostById(@PathVariable Long id){
		Post post = postRepository.findById(id)
				 .orElseThrow(() -> new FetchNotFoundException("Post", id));
		return ResponseEntity.ok(post);
	}
	

	@PutMapping("/comment/{id}")
	public ResponseEntity<Post> updateComment(@PathVariable Long id, @RequestBody Comment comment){
		
		Post post = postRepository.findById(id)
				 .orElseThrow(() -> new FetchNotFoundException("Post", id));
		
		post.getComments().add(comment);
		
		Post postUpdated = postRepository.save(post);
		
		return ResponseEntity.ok(postUpdated);
		
	}
}
