package com.vimalmenon.application.controller.api;

import java.util.Optional;

import javax.servlet.http.HttpServletRequest;

import com.vimalmenon.application.common.exceptions.OfflineException;
import com.vimalmenon.application.common.exceptions.UrlNotFoundException;
import com.vimalmenon.application.model.controller.ApiModel;
import com.vimalmenon.application.model.others.ComponentEntitlementModel;
import com.vimalmenon.application.model.others.ReadWriteModel;
import com.vimalmenon.application.model.response.ApiResponseModel;
import com.vimalmenon.application.service.ControllerService;
import com.vimalmenon.application.service.entitlements.ComponentEntitlementService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class ApiController {

  @Autowired
  private ComponentEntitlementService componentEntitlementService;

  @Autowired
  private ControllerService controllerService;

  @GetMapping("")
  public ApiResponseModel<ApiModel> api() {
    return new ApiResponseModel<ApiModel>().setData(controllerService.getApi());
  }

  @GetMapping("/offline")
  public String offline() {
    throw new OfflineException();
  }

  @PutMapping("/component_entitlement")
  public ApiResponseModel<ReadWriteModel> componentEntitlement(
      @RequestBody ComponentEntitlementModel entitlementModel) {
    return new ApiResponseModel<ReadWriteModel>()
        .setData(componentEntitlementService.checkEntitlement(entitlementModel));
  }

  @GetMapping("/topics")
  public String getTopics () {
    return controllerService.getTopics();

  }
  @GetMapping("/tutorials")
  public String getTutorials () {
    return "reading";
  }

  @GetMapping({"/content/{subject}", "/content/{subject}/{type}"})
  public String getTopics (@PathVariable("subject") String subject, @PathVariable("type") Optional<String> type) {
    return "Vimal Menon " + subject + " " + type;
  }
  @RequestMapping(value = "**")
  public void urlNotFound(HttpServletRequest request) {
    throw new UrlNotFoundException(request.getRequestURI());
  }
  
}
