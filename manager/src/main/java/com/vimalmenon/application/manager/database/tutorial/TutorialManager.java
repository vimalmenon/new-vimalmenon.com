package com.vimalmenon.application.manager.database.tutorial;

import java.util.List;

import com.vimalmenon.application.data.tutorials.Tutorial;
import com.vimalmenon.application.data.tutorials.TutorialRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TutorialManager {

    @Autowired
    private TutorialRepository tutorialRepository;

    public List<Tutorial> getAllTutorials() {
        return tutorialRepository.findAll();
	}

    
}
