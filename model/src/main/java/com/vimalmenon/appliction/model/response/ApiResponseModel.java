package com.vimalmenon.appliction.model.response;


import com.vimalmenon.application.common.enums.ResponseCode;

public class ApiResponseModel<T> {

	private static final ResponseCode RESPONSE_CODE_SUCCESS = ResponseCode.SUCCESS;
	private int code = RESPONSE_CODE_SUCCESS.code;
	private String message = RESPONSE_CODE_SUCCESS.msg;
	private boolean flush;
	private T data;

	public int getCode() {
		return code;
	}

	public ApiResponseModel<T> setCode(int code) {
		this.code = code;
		return this;
	}

	public String getMessage() {
		return message;
	}

	public ApiResponseModel<T> setMessage(String message) {
		this.message = message;
		return this;
	}

	public boolean isFlush() {
		return flush;
	}

	public ApiResponseModel<T> setFlush(boolean flush) {
		this.flush = flush;
		return this;
	}

	public T getData() {
		return data;
	}

	public ApiResponseModel<T> setData(T list) {
		this.data = list;
		return this;
	}

}
