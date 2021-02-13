package com.vimalmenon.appliction.model.superadmin;

import java.util.List;

public class ContentModel {
    
	private int id;

	private String name;	
	
    private String title;
	
	private boolean isJson;

	private List<LinkModel> contentData;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public boolean getIsJson() {
        return isJson;
    }

    public void setIsJson(boolean isJson) {
        this.isJson = isJson;
    }

    public List<LinkModel> getContentData() {
        return contentData;
    }

    public void setContentData(List<LinkModel> contentData) {
        this.contentData = contentData;
    }

}
