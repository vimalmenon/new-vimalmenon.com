package com.vimalmenon.appliction.model.others;

import java.util.List;

public class ContentModel {

    private String name;

    private String title;
    
    private List<DataModel> data;

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

    public List<DataModel> getData() {
        return data;
    }

    public void setData(List<DataModel> data) {
        this.data = data;
    }
    
}
