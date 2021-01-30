package com.vimalmenon.application.manager.database.content;

import java.util.List;
import java.util.Optional;

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

    public Content getActiveContentByTitle(String title) {
        Optional<Content> contentOptional = contentRepository.findByNameAndContentDataIsActive(title,1);
        if (contentOptional.isPresent()) {
            return contentOptional.get();
        }
        return null;
    }
    public Content getActiveContentByTitleAndType(String name, String type) {
        Optional<Content> contentOptional = contentRepository.findByNameAndContentDataIsActiveAndContentDataType(name, 1, type);
        if (contentOptional.isPresent()) {
            return contentOptional.get();
        }
        return null;
    }


}
