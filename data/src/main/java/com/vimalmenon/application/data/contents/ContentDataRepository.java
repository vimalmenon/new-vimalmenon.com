package com.vimalmenon.application.data.contents;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ContentDataRepository extends JpaRepository<ContentData, Integer> {
    
}