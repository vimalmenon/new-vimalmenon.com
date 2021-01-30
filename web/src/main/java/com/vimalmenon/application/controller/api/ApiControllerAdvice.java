package com.vimalmenon.application.controller.api;

import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.vimalmenon.application.common.exceptions.ApplicationException;
import com.vimalmenon.application.common.exceptions.OfflineException;
import com.vimalmenon.application.common.exceptions.UrlNotFoundException;
import com.vimalmenon.appliction.model.response.ApiResponseModel;

@RestControllerAdvice
public class ApiControllerAdvice {

	Logger log = LoggerFactory.getLogger(ApiControllerAdvice.class);

	@ExceptionHandler(value = UrlNotFoundException.class)
	public ApiResponseModel<String> urlNotFound(final UrlNotFoundException exception, HttpServletResponse httpResponse) {
	    httpResponse.setStatus(HttpServletResponse.SC_BAD_REQUEST);
	    return new ApiResponseModel<String>().setCode(UrlNotFoundException.CODE).setMessage(UrlNotFoundException.MESSAGE);
	}

	@ExceptionHandler(value = OfflineException.class)
	public ApiResponseModel<String> offline(final OfflineException exception, HttpServletResponse httpResponse) {
	    return new ApiResponseModel<String>().setCode(OfflineException.CODE).setMessage(OfflineException.MESSAGE);
	}
	  
	@ExceptionHandler(value = ApplicationException.class)
	public ApiResponseModel<String> application(final ApplicationException exception,
			HttpServletResponse httpResponse)
	{
		log.error("ApplicationException : ", exception);
		httpResponse.setStatus(HttpServletResponse.SC_BAD_REQUEST);
		return new ApiResponseModel<String>().setCode(ApplicationException.CODE).setMessage(ApplicationException.MESSAGE);
	}

	@ExceptionHandler(value = Exception.class)
	public ApiResponseModel<String> exception(final Exception exception, HttpServletResponse httpResponse)
	{
		return this.application(new ApplicationException(), httpResponse);
	}

}
