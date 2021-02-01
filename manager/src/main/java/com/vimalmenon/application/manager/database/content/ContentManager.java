package com.vimalmenon.application.manager.database.content;

import java.util.List;
import java.util.Optional;

import com.vimalmenon.application.data.contents.Content;
import com.vimalmenon.application.data.contents.ContentData;
import com.vimalmenon.application.data.contents.ContentDataRepository;
import com.vimalmenon.application.data.contents.ContentRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ContentManager {

    @Autowired
    private ContentRepository contentRepository;

    @Autowired
    private ContentDataRepository contentDataRepository;

    public List<Content> geContent() {
        return contentRepository.findAll();
    }

    public Content getActiveContentByName(String name) {
        Optional<Content> contentOptional = contentRepository.findByName(name);
        if (contentOptional.isPresent()) {
            return contentOptional.get();
        }
        return null;
    }
    public ContentData getContentAndType(Content content, String type) {
        Optional<ContentData> contentData = contentDataRepository.findByContentAndTypeAndIsActive(content, type, 1);
        if (contentData.isPresent()) {
            return contentData.get();
        }
        return null;
    }


}
