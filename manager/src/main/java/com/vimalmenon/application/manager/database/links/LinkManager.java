package com.vimalmenon.application.manager.database.links;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.vimalmenon.application.data.links.Link;
import com.vimalmenon.application.data.links.LinkRepository;
import com.vimalmenon.application.manager.database.others.ConfigManager;




@Service
public class LinkManager {

	@Autowired
	private LinkRepository linkRepository;

	@Autowired
	private ConfigManager configManager;

	public List<Link> getSocialMedias() {
		return linkRepository.findByNameIn(configManager.getSocialMedias());
	}

	public List<Link> getAllLinks () {
		return linkRepository.findAll();
	}

	public void saveAllLinks(List<Link> links) {
		linkRepository.saveAll(links);
	}

	public void deleteLinks(List<Link> links) {
		linkRepository.deleteAll(links);
	}


}
