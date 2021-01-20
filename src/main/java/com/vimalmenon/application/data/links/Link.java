package com.vimalmenon.application.data.links;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.OneToOne;
import javax.persistence.JoinColumn;
import javax.persistence.CascadeType;

@Entity
@Table(name = "links")
public class Link {
    
    @Id
    private int id;

    @Column(nullable = false, name = "name")
	private String name;
    
    @Column(nullable = false, name = "title")
	private String title;

	@Column(nullable = false, name = "url")
	private String url;

    @Column(nullable = false, name = "sequence")
    private int sequence;

    @Column(nullable = false, name = "is_active")
    private int isActive;
    
    @OneToOne(cascade = CascadeType.PERSIST)
	@JoinColumn(name = "type_id", referencedColumnName = "id")
	private LinkType linkType;

    
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

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public int getSequence() {
        return sequence;
    }

    public void setSequence(int sequence) {
        this.sequence = sequence;
    }

    public int getIsActive() {
        return isActive;
    }

    public void setIsActive(int isActive) {
        this.isActive = isActive;
    }

	public LinkType getLinkType() {
		return linkType;
	}

	public void setLinkType(LinkType linkType) {
		this.linkType = linkType;
	}

    
}
