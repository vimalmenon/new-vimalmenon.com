package com.vimalmenon.application.common.enums;

public enum ResponseCode {
  SUCCESS(0, "SUCCESS", null), URL_NOT_FOUND(1, "The requested URL is not found", "The requested URL(%s) is not found");

  public int code;
  public String msg;
  public String serverMsg;

  private ResponseCode(int code, String msg, String serverMsg) {
    this.code = code;
    this.msg = msg;
    this.serverMsg = serverMsg;
  }

}
