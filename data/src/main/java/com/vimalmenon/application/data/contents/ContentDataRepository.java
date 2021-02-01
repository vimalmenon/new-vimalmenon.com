package com.vimalmenon.application.data.contents;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ContentDataRepository extends JpaRepository<ContentData, Integer> {

    public Optional<ContentData> findByContentAndTypeAndIsActive(Content content, String type, int isActive);

}