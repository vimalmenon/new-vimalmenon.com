package com.vimalmenon.application.data.tutorials;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "tutorials")
public class Tutorial {
	
	@Id
    private int id;

    @Column(nullable = true, name = "name")
    private String name;

    @Column(nullable = true, name = "published_date")
    private String publishedDate;
    

    @Column(nullable = true, name = "tutorial_id")
    private String tutorialId;


    @OneToOne(cascade = CascadeType.PERSIST)
	@JoinColumn(name = "topic_id", referencedColumnName = "id")
    private Topic topic;


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


	public String getPublishedDate() {
		return publishedDate;
	}


	public void setPublishedDate(String publishedDate) {
		this.publishedDate = publishedDate;
	}


	public String getTutorialId() {
		return tutorialId;
	}


	public void setTutorialId(String tutorialId) {
		this.tutorialId = tutorialId;
	}


	public Topic getTopic() {
		return topic;
	}


	public void setTopic(Topic topic) {
		this.topic = topic;
	}
    
}
