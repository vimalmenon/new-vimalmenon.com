package com.vimalmenon.application.service.content;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import com.vimalmenon.application.data.contents.Content;
import com.vimalmenon.application.data.contents.ContentData;
import com.vimalmenon.application.manager.database.content.ContentManager;
import com.vimalmenon.appliction.model.superadmin.ContentDataModel;
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
            Optional<List<ContentData>> contentDataOptional = contentManager.getContentDataByContent(content);
            if (contentDataOptional.isPresent()) {
                List<ContentDataModel> contentDataModels = new ArrayList<>();
                contentDataOptional.get().forEach(contentData -> {
                    ContentDataModel contentDataModel = new ContentDataModel();
                    contentDataModel.setId(contentData.getId());
                    contentDataModel.setData(contentData.getData());
                    contentDataModel.setActive(contentData.getIsActive() ==1);
                    contentDataModel.setLastUpdated(contentData.getLastUpdated());
                    contentDataModel.setType(contentData.getType());
                    contentDataModels.add(contentDataModel);
                });
                contentModel.setContentData(contentDataModels);
            }
            contents.add(contentModel);
        });
        return contents;
    }
    public List<ContentModel> saveContent(List<ContentModel> data) {
        List<Content> contents = new ArrayList<>();
        List<ContentData> contentDatas = new ArrayList<>();
        data.forEach(value -> {
            Content content = new Content();
            content.setName(value.getName());
            content.setTitle(value.getTitle());
            content.setIsJson(value.getIsJson()?1:0);
            content.setId(value.getId());

            value.getContentData().forEach(contentDataModel -> {
                ContentData contentData = new ContentData();
                contentData.setContent(content);
                contentData.setId(contentDataModel.getId());
                contentData.setData(contentDataModel.getData());
                contentData.setType(contentDataModel.getType());
                contentData.setLastUpdated(contentDataModel.getLastUpdated());
                contentDatas.add(contentData);
            });
            contents.add(content);
        });
        contentManager.saveContent(contents);
        contentManager.saveContentData(contentDatas);
        return this.getContent();
	}

	public String getContentByContent(String content) {
        return "this is getcontent by content " + content;
	}

	public String saveContentByContent(String content) {
        return "this is getcontent by content " + content;
	}

	

}
