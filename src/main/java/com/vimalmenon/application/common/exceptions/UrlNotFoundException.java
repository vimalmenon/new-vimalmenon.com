package com.vimalmenon.application.common.exceptions;

import com.vimalmenon.application.common.enums.ResponseCode;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class UrlNotFoundException extends RuntimeException {

  private static final long serialVersionUID = 1L;

  private static Logger log = LoggerFactory.getLogger(UrlNotFoundException.class);

  private static final ResponseCode responseCode = ResponseCode.URL_NOT_FOUND;
  public static final int CODE = responseCode.code;
  public static final String MESSAGE = responseCode.msg;


  public UrlNotFoundException(String string) {
    String msg = String.format(responseCode.serverMsg, string);
    log.error(msg);
  }
}
