package com.vimalmenon.application.service.content;

import java.util.ArrayList;
import java.util.List;

import com.vimalmenon.application.manager.database.content.ContentManager;
import com.vimalmenon.appliction.model.superadmin.ContentModel;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AdminContentService {

    @Autowired
    private ContentManager contentManager;
    
    public List<ContentModel> getContent() {
        List<ContentModel> contents = new ArrayList<>();
        contentManager.getAllContent().forEach(content -> {
            ContentModel contentModel = new ContentModel();
            contentModel.setId(content.getId());
            contentModel.setName(content.getName());
            contentModel.setTitle(content.getTitle());
            contentModel.setIsJson(content.getIsJson() == 1);
            
            contents.add(contentModel);
        });
        return contents;
    }

	public String getContentByContent(String content) {
        return "this is getcontent by content " + content;
	}

	public String saveContentByContent(String content) {
        return "this is getcontent by content " + content;
	}

}
