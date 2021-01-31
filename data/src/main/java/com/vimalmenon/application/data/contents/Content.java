package com.vimalmenon.application.data.contents;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "contents")
public class Content {

	@Id
	private int id;

	@Column(nullable = false, name = "name")
	private String name;

	@Column(nullable = false, name = "title")
	private String title;

	
	@Column(nullable = false, name = "is_json")
	private int isJson;

	@OneToMany(mappedBy = "content")
	private List<ContentData> contentData;


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

	public List<ContentData> getContentData() {
		return contentData;
	}

	public void setContentData(List<ContentData> contentData) {
		this.contentData = contentData;
	}

	public int getIsJson() {
		return isJson;
	}

	public void setIsJson(int isJson) {
		this.isJson = isJson;
	}
	
}
