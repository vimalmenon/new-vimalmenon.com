package com.vimalmenon.application.controller.api;

import javax.servlet.http.HttpServletRequest;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.vimalmenon.application.common.exceptions.OfflineException;
import com.vimalmenon.application.common.exceptions.UrlNotFoundException;
import com.vimalmenon.appliction.model.response.ApiResponseModel;

@RestController
@RequestMapping("/api")
public class ApiController {

	@GetMapping("")
	public ApiResponseModel<String> api() {
		return new ApiResponseModel<String>().setData("test");
	}

	@GetMapping("/offline")
	public String offline() {
		throw new OfflineException();
	}

	@RequestMapping(value = "**")
	public void urlNotFound(HttpServletRequest request) {
		throw new UrlNotFoundException(request.getRequestURI());
	}

}
