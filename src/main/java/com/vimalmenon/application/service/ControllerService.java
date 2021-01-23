package com.vimalmenon.application.service;

import java.util.List;

import com.vimalmenon.application.data.tutorials.Topic;
import com.vimalmenon.application.data.tutorials.Tutorial;
import com.vimalmenon.application.database.manager.links.LinkManager;
import com.vimalmenon.application.manager.database.tutorials.TutorialsManager;
import com.vimalmenon.application.model.controller.ApiModel;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ControllerService {

    @Autowired
    private LinkManager linkManager;

    @Autowired
    private TutorialsManager tutorialsManager;

    public ApiModel getApi() {
        return new ApiModel(linkManager.getLinks());
    }

    public List<Topic> getTopics() {
        return tutorialsManager.getTopics();
    }

    public List<Tutorial> getTutorials() {
        return tutorialsManager.getTutorials();
    }

}
