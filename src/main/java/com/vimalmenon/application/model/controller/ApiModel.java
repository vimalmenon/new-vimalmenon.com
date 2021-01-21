package com.vimalmenon.application.model.controller;

import java.util.List;

import com.vimalmenon.application.data.links.Link;

public class ApiModel {
    private List<Link> socialMedias;

    public ApiModel (List<Link> socialMedias) {
        this.socialMedias = socialMedias;
    }

    public List<Link> getSocialMedias() {
        return socialMedias;
    }

    public void setSocialMedias(List<Link> socialMedias) {
        this.socialMedias = socialMedias;
    }
    
}
