
package com.sydneymetro.infringements;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.annotation.RestResource;


@RepositoryRestResource
public interface InfringementRepository extends CrudRepository<Infringement, Long> {
	@RestResource(path="byYear")
	public List findByYear(@Param("year") int year);
	
	@RestResource(path="byCategory")
	public List findByCategory(@Param("category") String category);
	
}

