package com.cognizant.greet_service.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
@RequestMapping("/greet")

public class GreetController {
	 @GetMapping
	    public String greet() {
	        return "Hello World";
	    }
}
