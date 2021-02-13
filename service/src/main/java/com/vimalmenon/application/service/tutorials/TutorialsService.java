package com.vimalmenon.application.service.tutorials;

import java.util.ArrayList;
import java.util.List;

import com.vimalmenon.application.manager.database.tutorial.TutorialManager;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.vimalmenon.appliction.model.superadmin.TutorialModel;
@Service
public class TutorialsService {


    @Autowired
    private TutorialManager tutorialManager;

    
	public List<TutorialModel> getAllTutorials() {
        List<TutorialModel> tutorialModels = new ArrayList<>();
        tutorialManager.getAllTutorials().forEach(tutorial -> {
            TutorialModel  tutorialModel = new TutorialModel();
            tutorialModel.setId(tutorial.getId());
            tutorialModel.setName(tutorial.getName());
            tutorialModel.setTutorialId(tutorial.getTutorialId());
            tutorialModel.setPublishedDate(tutorial.getPublishedDate());
            tutorialModels.add(tutorialModel);
        });
        return tutorialModels;
	}
    

}
