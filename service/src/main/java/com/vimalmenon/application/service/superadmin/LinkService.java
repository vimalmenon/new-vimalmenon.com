package com.vimalmenon.application.service.superadmin;

import java.util.LinkedList;
import java.util.List;

import com.vimalmenon.application.data.links.Link;
import com.vimalmenon.application.manager.database.links.LinkManager;
import com.vimalmenon.appliction.model.superadmin.LinkModel;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LinkService {

	@Autowired
	private LinkManager linkManager;

	public List<LinkModel> getLinks() {
		List<LinkModel> links = new LinkedList<>();
		linkManager.getAllLinks().forEach(data -> {
			LinkModel linkModel = new LinkModel();
			linkModel.setId(data.getId());
			linkModel.setName(data.getName());
			linkModel.setTitle(data.getTitle());
			linkModel.setUrl(data.getUrl());
			links.add(linkModel);
		});
        return links;
	}

	public List<LinkModel> saveAdminLinks (List<LinkModel> data) {
		List<Link> links = new LinkedList<>();
		data.forEach(value -> {
			Link link = new Link();
			link.setId(value.getId());
			link.setName(value.getName());
			link.setTitle(value.getTitle());
			link.setUrl(value.getUrl());
			links.add(link);
		});
		linkManager.saveAllLinks(links);
		return this.getLinks();
	}

	public List<LinkModel> deleteSuperAdminLinks(List<LinkModel> data) {
		List<Link> links = new LinkedList<>();
		data.forEach(value -> {
			Link link = new Link();
			link.setId(value.getId());
			link.setName(value.getName());
			link.setTitle(value.getTitle());
			link.setUrl(value.getUrl());
			links.add(link);
		});
		linkManager.deleteLinks(links);
		return this.getLinks();
	}
    
}
