package com.vimalmenon.application.manager.database.others;

import java.util.List;

public class ConfigModel {
    private List<String> socialMedias;
    private List<String> allowedUserContent;

    public List<String> getSocialMedias() {
        return socialMedias;
    }

    public void setSocialMedias(List<String> socialMedias) {
        this.socialMedias = socialMedias;
    }

    public List<String> getAllowedUserContent() {
        return allowedUserContent;
    }

    public void setAllowedUserContent(List<String> allowedUserContent) {
        this.allowedUserContent = allowedUserContent;
    }

    @Override
    public String toString() {
        return "ConfigModel [allowedUserContent=" + allowedUserContent + ", socialMedias=" + socialMedias + "]";
    }
    
}
