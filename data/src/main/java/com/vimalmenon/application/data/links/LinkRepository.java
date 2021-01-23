package com.vimalmenon.application.data.links;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface LinkRepository extends JpaRepository<Link, Integer>{
	
	public List<Link> findByNameIn(String[] values);

}
