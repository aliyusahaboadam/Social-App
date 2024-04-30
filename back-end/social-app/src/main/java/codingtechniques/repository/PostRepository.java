package codingtechniques.repository;

import org.springframework.data.repository.CrudRepository;

import codingtechniques.model.Post;

public interface PostRepository extends CrudRepository<Post, Long> {

}
