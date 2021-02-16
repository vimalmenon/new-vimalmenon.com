package com.vimalmenon.application.manager.database.others;

import java.util.ArrayList;
import java.util.List;

import com.vimalmenon.application.data.contents.ContentData;
import com.vimalmenon.application.manager.database.content.ContentManager;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.vimalmenon.application.common.converter.Converter;

@Service
public class ConfigManager {

    private static final String CONFIG_COLUMN = "others";

    @Autowired
    private ContentManager contentManager;

    public ConfigModel getConfig() {
        Converter<ConfigModel> converter = new Converter<>(ConfigModel.class);
        ConfigModel value = null;
        ContentData contentData = this.getContentData();
        if (contentData != null) {
            value = converter.convertToJson(contentData.getData());
        }
        
        return value;
    }

    public List<String> getSocialMedias() {
        ConfigModel config = this.getConfig();
        if (config != null) {
            return config.getSocialMedias();
        }
        return new ArrayList<>();
    }
    
    private ContentData getContentData() {
        List<ContentData> contentData = contentManager.getActiveContentByName(CONFIG_COLUMN).getContentData();
        if (contentData.size() ==1) {
            return contentManager.getActiveContentByName(CONFIG_COLUMN).getContentData().get(0);
        }
        return null;
    }

  
}
