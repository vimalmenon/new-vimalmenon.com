package com.vimalmenon.application.service;

import com.vimalmenon.application.database.manager.links.LinkManager;
import com.vimalmenon.application.model.controller.ApiModel;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ControllerService {

    @Autowired
    private LinkManager linkManager;

    public ApiModel getApi() {
        return new ApiModel(linkManager.getLinks());
	}

	public String getTopics() {
        return "Vimal Menon";
	}

}
