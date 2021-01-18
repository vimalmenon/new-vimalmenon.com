package com.vimalmenon.application.model.response;

import com.vimalmenon.application.common.enums.ResponseCode;

public class ApiResponseModel<T> {

  private ResponseCode responseCode = ResponseCode.SUCCESS;
  private int code = responseCode.code;
  private String message = responseCode.msg;
  private boolean flush;
  private T data;

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
  
  public ApiResponseModel<T> setCode(int code) {
    this.code = code;
    return this;
  }

  public int getCode() {
    return this.code;
  }

  public String getMessage() {
    return this.message;
  }

  public T getData() {
    return this.data;
  }
  
  public boolean getFlush() {
    return this.flush;
  }
}
