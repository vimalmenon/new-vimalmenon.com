package com.vimalmenon.application.data.contents;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ContentDataMappingRepository extends JpaRepository<ContentData, Integer> {
    
}