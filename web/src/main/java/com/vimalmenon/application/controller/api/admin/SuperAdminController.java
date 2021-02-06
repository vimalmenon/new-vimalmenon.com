package com.vimalmenon.application.controller.api.admin;

import java.util.List;

import com.vimalmenon.application.service.superadmin.LinkService;
import com.vimalmenon.appliction.model.response.ApiResponseModel;
import com.vimalmenon.appliction.model.superadmin.LinkModel;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/admin/super")
public class SuperAdminController {

    @Autowired
    private LinkService linkService;
    
    @GetMapping("/links")
    public ApiResponseModel<List<LinkModel>> getSuperAdminLinks () {
        return new ApiResponseModel<List<LinkModel>>().setData(linkService.getLinks());
    }

}
