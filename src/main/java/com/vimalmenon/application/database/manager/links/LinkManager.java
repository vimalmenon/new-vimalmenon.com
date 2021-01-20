package com.vimalmenon.application.database.manager.links;

import java.util.List;

import com.vimalmenon.application.data.links.Link;
import com.vimalmenon.application.data.links.LinkRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LinkManager {

    @Autowired
    private LinkRepository linkRepository;

    public List<Link> getLinks() {
        return linkRepository.findByLinkTypeName("SOCIAL_MEDIA");
	}

}
