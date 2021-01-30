package com.vimalmenon.application.data.contents;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ContentRepository extends JpaRepository<Content, Integer> {

    public List<Content> findByNameAndContentDataIsActive(int isActive, String name);

    public List<Content> findByNameAndContentDataIsActiveAndContentDataType(String name, int isActive, String type);

}
