package com.vimalmenon.application.controller.api;

import java.util.Optional;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.vimalmenon.application.common.exceptions.OfflineException;
import com.vimalmenon.application.common.exceptions.UrlNotFoundException;
import com.vimalmenon.application.service.controllers.ApiControllerService;
import com.vimalmenon.application.service.entitlements.ComponentEntitlementService;
import com.vimalmenon.appliction.model.controller.ApiControllerModel;
import com.vimalmenon.appliction.model.others.ContentModel;
import com.vimalmenon.appliction.model.others.ReadWriteModel;
import com.vimalmenon.appliction.model.request.ContactRequestModel;
import com.vimalmenon.appliction.model.request.EntitlementRequestModel;
import com.vimalmenon.appliction.model.request.LoginModel;
import com.vimalmenon.appliction.model.response.ApiResponseModel;

@RestController
@RequestMapping("/api")
public class ApiController {

	@Autowired
	private ApiControllerService apiControllerService;

	@Autowired
	private ComponentEntitlementService componentEntitlementService;

	@GetMapping("")
	public ApiResponseModel<ApiControllerModel> api() {
		return new ApiResponseModel<ApiControllerModel>().setData(apiControllerService.getApi());
	}

	@GetMapping("/offline")
	public String offline() {
		throw new OfflineException();
	}

	@GetMapping({ "/content/{content}", "/content/{content}/{type}" })
	public ApiResponseModel<ContentModel> getContent(@PathVariable("content") String content,
			@PathVariable(value = "type", required = false) Optional<String> type) {
		if (type.isPresent()) {
			return new ApiResponseModel<ContentModel>().setData(apiControllerService.getContent(content, type.get()));
		}
		return new ApiResponseModel<ContentModel>().setData(apiControllerService.getContent(content));
	}

	@PostMapping("/entitlements")
	public ApiResponseModel<ReadWriteModel> getEntitlements(@RequestBody EntitlementRequestModel data) {
		componentEntitlementService.getEntitlements(data);
		return new ApiResponseModel<ReadWriteModel>().setData(new ReadWriteModel());
	}

	@PutMapping("/save_contact_us")
	public ApiResponseModel<String> saveContactUs(@RequestBody ContactRequestModel data) {
		return new ApiResponseModel<String>().setData(apiControllerService.saveContactUs(data));
	}

	@PutMapping("/login")
	public ApiResponseModel<String> login (@RequestBody LoginModel data) {
		return new ApiResponseModel<String>().setData("Success");
	}

	@RequestMapping(value = "**")
	public void urlNotFound(HttpServletRequest request) {
		throw new UrlNotFoundException(request.getRequestURI());
	}


}
