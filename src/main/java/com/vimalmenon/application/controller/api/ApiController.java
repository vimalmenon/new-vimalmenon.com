package com.vimalmenon.application.controller.api;

import com.vimalmenon.application.common.exceptions.UrlNotFoundException;
import javax.servlet.http.HttpServletRequest;
import com.vimalmenon.application.model.response.ApiResponseModel;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class ApiController {

  @GetMapping("/api")
  public ApiResponseModel<String> api() {
    return new ApiResponseModel<String>().setData("Success");
  }

  @RequestMapping(value = "**")
  public void urlNotFound(HttpServletRequest request) {
    throw new UrlNotFoundException(request.getRequestURI());
  }
}
