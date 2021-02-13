package com.vimalmenon.application.controller.api.admin;

import java.util.List;

import com.vimalmenon.application.service.content.AdminContentService;
import com.vimalmenon.application.service.superadmin.LinkService;
import com.vimalmenon.appliction.model.response.ApiResponseModel;
import com.vimalmenon.appliction.model.superadmin.ContentModel;
import com.vimalmenon.appliction.model.superadmin.LinkModel;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/admin/super")
public class SuperAdminController {

    @Autowired
    private LinkService linkService;

    @Autowired
    private AdminContentService adminContentService;
    
    @GetMapping("/links")
    public ApiResponseModel<List<LinkModel>> getSuperAdminLinks () {
        return new ApiResponseModel<List<LinkModel>>().setData(linkService.getLinks());
    }
    @PutMapping("/links")
    public ApiResponseModel<List<LinkModel>> saveSuperAdminLinks (@RequestBody List<LinkModel> data) {
        return new ApiResponseModel<List<LinkModel>>().setData(linkService.saveAdminLinks(data));
    }

    @DeleteMapping("/links")
    public ApiResponseModel<List<LinkModel>> deleteSuperAdminLinks (@RequestBody List<LinkModel> data) {
        return new ApiResponseModel<List<LinkModel>>().setData(linkService.deleteSuperAdminLinks(data));
    }

    @GetMapping("/content")
    public ApiResponseModel<List<ContentModel>> getContent() {
        return new ApiResponseModel<List<ContentModel>>().setData(adminContentService.getContent());
    }
    @GetMapping("/content/{content}")
    public ApiResponseModel<String> getContent (@PathVariable("content") String content) {
        return new ApiResponseModel<String>().setData(adminContentService.getContentByContent(content));
    } 

    @PutMapping("/content/{content}")
    public ApiResponseModel<String> saveContent (@PathVariable("content") String content) {
        return new ApiResponseModel<String>().setData(adminContentService.saveContentByContent(content));
    }

}
