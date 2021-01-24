package com.vimalmenon.application.controller.api;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.vimalmenon.application.common.exceptions.OfflineException;
import com.vimalmenon.application.common.exceptions.UrlNotFoundException;
import com.vimalmenon.application.service.controllers.ApiControllerService;
import com.vimalmenon.appliction.model.controller.ApiControllerModel;
import com.vimalmenon.appliction.model.response.ApiResponseModel;

@RestController
@RequestMapping("/api")
public class ApiController {

	@Autowired
	private ApiControllerService apiControllerService;

	@GetMapping("")
	public ApiResponseModel<ApiControllerModel> api() {
		return new ApiResponseModel<ApiControllerModel>().setData(apiControllerService.getApi());
	}

	@GetMapping("/offline")
	public String offline() {
		throw new OfflineException();
	}

	@GetMapping("/api")
	public void getApi() {

	}

	@RequestMapping(value = "**")
	public void urlNotFound(HttpServletRequest request) {
		throw new UrlNotFoundException(request.getRequestURI());
	}

}
