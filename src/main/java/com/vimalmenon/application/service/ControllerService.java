package com.vimalmenon.application.service;

import java.util.List;

import com.vimalmenon.application.data.links.Link;
import com.vimalmenon.application.database.manager.links.LinkManager;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ControllerService {

    @Autowired
    private LinkManager linkManager;

    public List<Link> getApi() {
        return linkManager.getLinks();
	}
    

}
