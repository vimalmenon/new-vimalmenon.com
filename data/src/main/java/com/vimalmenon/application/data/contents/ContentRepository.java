package com.vimalmenon.application.data.contents;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ContentRepository extends JpaRepository<Content, Integer> {

    public Optional<Content> findByNameAndContentDataIsActive(String name, int isActive);

    public Optional<Content> findByNameAndContentDataIsActiveAndContentDataType(String name, int isActive, String type);

}
