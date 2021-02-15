package com.vimalmenon.application.data.contents;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "content_data")
public class ContentData {
    @Id
    private int id;
    
    @Column(nullable = false, name = "data")
    private String data;

    @Column(nullable = false, name = "type")
    private String type;

    @Column(nullable = false, name = "last_updated")
    private String lastUpdated;

    @ManyToOne
    @JoinColumn(name="content_id", nullable=false)
    private Content content;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getData() {
        return data;
    }

    public void setData(String data) {
        this.data = data;
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

    public Content getContent() {
        return content;
    }

    public void setContent(Content content) {
        this.content = content;
    }

}
