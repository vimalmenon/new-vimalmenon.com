package com.vimalmenon.application.service.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.vimalmenon.application.data.contents.Content;
import com.vimalmenon.application.manager.database.content.ContentManager;
import com.vimalmenon.application.manager.database.links.LinkManager;
import com.vimalmenon.appliction.model.controller.ApiControllerModel;
import com.vimalmenon.appliction.model.others.ContentModel;
import com.vimalmenon.appliction.model.others.SocialMediaModel;

@Service
public class ApiControllerService {

	@Autowired
	private LinkManager linkManager;

	@Autowired
	private ContentManager contentManager;

	public ApiControllerModel getApi() {
		ApiControllerModel model = new ApiControllerModel();
		model.setSocialMedias(this.getSocialMedias());
		return model;
	}

	public ContentModel getContent(String name) {
		ContentModel content  = new ContentModel();
		Content contentModel = contentManager.getActiveContentByTitle(name);
		content.setName(contentModel.getName());
		content.setTitle(contentModel.getTitle());
		content.setData(contentModel.getContentData().get(0).getData());
		return content;
	}
	public ContentModel getContent(String name, String type) {
		ContentModel content  = new ContentModel();
		Content contentModel = contentManager.getActiveContentByTitleAndType(name, type);
		content.setName(contentModel.getName());
		content.setTitle(contentModel.getTitle());
		content.setData(contentModel.getContentData().get(0).getData());
		return content;
	}
	
	private List<SocialMediaModel> getSocialMedias () {
		List<SocialMediaModel> socialMedias = new ArrayList<>();
		linkManager.getSocialMedias().forEach(socialMedia -> {
			SocialMediaModel data = new SocialMediaModel();
			data.setName(socialMedia.getName());
			data.setTitle(socialMedia.getTitle());
			data.setUrl(socialMedia.getUrl());
			socialMedias.add(data);
		});
		return socialMedias;
	}

}
