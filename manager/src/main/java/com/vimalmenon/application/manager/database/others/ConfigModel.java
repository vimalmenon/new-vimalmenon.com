package com.vimalmenon.application.manager.database.others;

import java.util.List;

public class ConfigModel {
    private List<String> socialMedias;

    public List<String> getSocialMedias() {
        return socialMedias;
    }

    public void setSocialMedias(List<String> socialMedias) {
        this.socialMedias = socialMedias;
    }

    @Override
    public String toString() {
        return "ConfigModel [socialMedias=" + socialMedias + "]";
    }

    
    
}
