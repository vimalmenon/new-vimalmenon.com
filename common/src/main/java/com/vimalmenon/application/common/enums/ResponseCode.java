package com.vimalmenon.application.common.enums;

public enum ResponseCode {
	SUCCESS(0,"SUCCESS", null), 
	OFFLINE(1,"Page offline", null),
	URL_NOT_FOUND(2,"The requested URL is not found", "The requested URL(%s) is not found"),
	APPLICATION(3, "An error occurred while processing the request.",null);

	public final int code;
	public final String msg;
	public final String serverMsg;

	private ResponseCode(int code, String msg, String serverMsg) {
		this.code = code;
		this.msg = msg;
		this.serverMsg = serverMsg;
	}
}
