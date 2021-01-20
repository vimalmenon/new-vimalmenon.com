package com.vimalmenon.application.data.links;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LinkTypeRepository extends JpaRepository<LinkType, Integer> {
    
}
