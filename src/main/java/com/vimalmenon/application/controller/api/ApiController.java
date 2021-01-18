package com.vimalmenon.application.controller.api;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ApiController {
    
  @GetMapping("/api")
  public String api() {
    return "This is api call";
  }
}
