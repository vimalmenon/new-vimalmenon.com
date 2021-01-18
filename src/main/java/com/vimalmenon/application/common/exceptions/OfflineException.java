package com.vimalmenon.application.common.exceptions;

import com.vimalmenon.application.common.enums.ResponseCode;

public class OfflineException extends RuntimeException {
  private static final long serialVersionUID = 1L;
  private static final ResponseCode responseCode = ResponseCode.OFFLINE;
  public static final int CODE = responseCode.code;
  public static final String MESSAGE = responseCode.msg;
}
