package com.vimalmenon.application.service.content;

import org.springframework.stereotype.Service;

@Service
public class AdminContentService {
    
    public String getContent () {
        return "this is admin content service";
    }

	public String getContentByContent(String content) {
        return "this is getcontent by content " + content;
	}

	public String saveContentByContent(String content) {
        return "this is getcontent by content " + content;
	}

}
