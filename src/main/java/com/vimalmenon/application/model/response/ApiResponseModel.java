package com.vimalmenon.application.model.response;

import com.vimalmenon.application.common.enums.ResponseCode;

public class ApiResponseModel<T> {

  private ResponseCode responseCode = ResponseCode.SUCCESS;
  public int code = responseCode.code;
  public String message = responseCode.msg;
  public boolean flush;
  public T data;

  public ApiResponseModel<T> setFlush(boolean flush) {
    this.flush = flush;
    return this;
  }

  public ApiResponseModel<T> setData(T data) {
    this.data = data;
    return this;
  }

  public ApiResponseModel<T> setMessage(String message) {
    this.message = message;
    return this;
  }
  
  public ApiResponseModel<T> setCode (int code) {
    this.code = code;
    return this;
  }
}
