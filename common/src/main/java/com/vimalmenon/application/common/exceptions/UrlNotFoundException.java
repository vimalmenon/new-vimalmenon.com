package com.vimalmenon.application.common.exceptions;

import com.vimalmenon.application.common.enums.ResponseCode;

public class UrlNotFoundException extends RuntimeException {

	private static final long serialVersionUID = 1L;

	private static final ResponseCode RESPONSE_CODE = ResponseCode.URL_NOT_FOUND;
	public static final int CODE = RESPONSE_CODE.code;
	public static final String MESSAGE = RESPONSE_CODE.msg;

	public UrlNotFoundException(String string) {
		String msg = String.format(RESPONSE_CODE.serverMsg, string);
	}
}