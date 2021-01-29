package com.vimalmenon.application.service.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.vimalmenon.application.manager.database.content.ContentManager;
import com.vimalmenon.application.manager.database.links.LinkManager;
import com.vimalmenon.appliction.model.controller.ApiControllerModel;
import com.vimalmenon.appliction.model.others.ContentModel;
import com.vimalmenon.appliction.model.others.DataModel;
import com.vimalmenon.appliction.model.others.SocialMediaModel;

@Service
public class ApiControllerService {
	
	
	@Autowired
	private LinkManager linkManager;

	@Autowired
	private ContentManager contentManager;
	
	public ApiControllerModel getApi () {
		ApiControllerModel model = new ApiControllerModel();
		model.setSocialMedias(this.getSocialMedias());
		return model;
	}
	
	public String getContent (String content) {
		return "Api Controller Service : " + content;
	}
	public String getContent(String content, String type) {
		return "Api Controller Service : " + content + " : " + type;
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

	public List<ContentModel> getContent() {
		List<ContentModel> contentModels = new ArrayList<>();
		
		contentManager.geContent().forEach(content -> {
			ContentModel contentModel = new ContentModel();
			contentModel.setName(content.getName());
			contentModel.setTitle(content.getTitle());
			List<DataModel> contentDatas = new ArrayList<>();
			content.getContentData().forEach(data -> {
				DataModel dataModel = new DataModel();
				dataModel.setData(data.getData());
				dataModel.setLastUpdated(data.getLastUpdated());
				contentDatas.add(dataModel);
			});
			contentModel.setData(contentDatas);
			contentModels.add(contentModel);
		});
		return contentModels;
	}

}
