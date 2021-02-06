package com.vimalmenon.application.manager.database.links;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.vimalmenon.application.data.links.Link;
import com.vimalmenon.application.data.links.LinkRepository;



@Service
public class LinkManager {

	@Autowired
	private LinkRepository linkRepository;

	private static final String[] SOCIAL_MEDIA_LINKS = { "YouTube", "Twitter", "Instagram" };

	public List<Link> getSocialMedias() {
		return linkRepository.findByNameIn(SOCIAL_MEDIA_LINKS);
	}

	public List<Link> getAllLinks () {
		return linkRepository.findAll();
	}

}
