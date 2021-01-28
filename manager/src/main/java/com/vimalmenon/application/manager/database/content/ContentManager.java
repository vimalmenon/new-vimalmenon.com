package com.vimalmenon.application.manager.database.content;

import java.util.List;

import com.vimalmenon.application.data.contents.Content;
import com.vimalmenon.application.data.contents.ContentRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ContentManager {

    @Autowired
    private ContentRepository contentRepository;

    public List<Content> geContent() {
        return contentRepository.findAll();
    }


}
