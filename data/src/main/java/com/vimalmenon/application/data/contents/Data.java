package com.vimalmenon.application.data.contents;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "data")
public class Data {

    @Id
    public int id;

    @Column(nullable = false, name = "content")
    private String content;
    
    @Column(nullable = false, name = "text")
    private String text;

    @Column(nullable = false, name = "type")
    private String type;

    @Column(nullable = false, name = "last_updated")
    private String lastUpdated;

    @Column(nullable = false, name = "content_id")
    private int contentId;

    @Column(nullable = false, name = "is_active")
    private int isActive;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getLastUpdated() {
        return lastUpdated;
    }

    public void setLastUpdated(String lastUpdated) {
        this.lastUpdated = lastUpdated;
    }

    public int getContentId() {
        return contentId;
    }

    public void setContentId(int contentId) {
        this.contentId = contentId;
    }

    public int getIsActive() {
        return isActive;
    }

    public void setIsActive(int isActive) {
        this.isActive = isActive;
    }
    
}
