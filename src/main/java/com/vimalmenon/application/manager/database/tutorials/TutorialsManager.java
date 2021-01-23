package com.vimalmenon.application.manager.database.tutorials;

import java.util.List;

import com.vimalmenon.application.data.tutorials.Topic;
import com.vimalmenon.application.data.tutorials.TopicRepository;
import com.vimalmenon.application.data.tutorials.Tutorial;
import com.vimalmenon.application.data.tutorials.TutorialRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TutorialsManager {

    @Autowired
    private TopicRepository topicRepository;

    @Autowired
    private TutorialRepository tutorialRepository;

    public List<Topic> getTopics() {
        return topicRepository.findAll();
    }

    public List<Tutorial> getTutorials() {
        return tutorialRepository.findAll();
    }
}
