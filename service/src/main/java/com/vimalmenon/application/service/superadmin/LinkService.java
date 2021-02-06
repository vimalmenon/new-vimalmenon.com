package com.vimalmenon.application.service.superadmin;

import java.util.ArrayList;
import java.util.List;
import com.vimalmenon.application.manager.database.links.LinkManager;
import com.vimalmenon.appliction.model.superadmin.LinkModel;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LinkService {

	@Autowired
	private LinkManager linkManager;

	public List<LinkModel> getLinks() {
		List<LinkModel> links = new ArrayList<>();
		linkManager.getAllLinks().forEach((data) -> {
			LinkModel linkModel = new LinkModel();
			linkModel.setId(data.getId());
			linkModel.setName(data.getName());
			linkModel.setTitle(data.getTitle());
			linkModel.setUrl(data.getUrl());
			links.add(linkModel);
		});
        return links;
	}
    
}
