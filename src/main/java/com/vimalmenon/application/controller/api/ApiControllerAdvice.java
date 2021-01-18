package com.vimalmenon.application.controller.api;

import javax.servlet.http.HttpServletResponse;

import com.vimalmenon.application.common.exceptions.OfflineException;
import com.vimalmenon.application.common.exceptions.UrlNotFoundException;
import com.vimalmenon.application.model.response.ApiResponseModel;

import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class ApiControllerAdvice {

  @ExceptionHandler(value = UrlNotFoundException.class)
  public ApiResponseModel<String> urlNotFound(final UrlNotFoundException exception, HttpServletResponse httpResponse) {
    httpResponse.setStatus(HttpServletResponse.SC_BAD_REQUEST);
    return new ApiResponseModel<String>().setCode(UrlNotFoundException.CODE).setMessage(UrlNotFoundException.MESSAGE);
  }

  @ExceptionHandler(value = OfflineException.class)
  public ApiResponseModel<String> offline(final OfflineException exception, HttpServletResponse httpResponse) {
    return new ApiResponseModel<String>().setCode(OfflineException.CODE).setMessage(OfflineException.MESSAGE);
  }
}
