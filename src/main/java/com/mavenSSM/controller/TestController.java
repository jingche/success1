  package com.mavenSSM.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

 
import com.mavenSSM.service.Listp1103Service;
import com.mavenSSM.service.Listp1104Service;
import com.mavenSSM.service.Listp1114Service;
import com.mavenSSM.service.Listp1115Service;
 
 

@Controller
@RequestMapping("/")
public class TestController {
	 
	@Autowired
	private Listp1103Service listp1103Service;
	@Autowired
	private Listp1104Service listp1104Service;
	@Autowired
	private Listp1114Service listp1114Service;
	@Autowired
	private Listp1115Service listp1115Service;
	
	/*@RequestMapping(value="", method=RequestMethod.GET)
	public String toTest(){
		return "test";
	}*/
	@RequestMapping(value="")
	public String toIndex() {
		return "index";
	}
	 
	 
	 
	@RequestMapping(value="about-us")
	public String toAbout() {
		return "about-us";
	}

	
	@RequestMapping(value="getChart", method=RequestMethod.POST)
	@ResponseBody
	public List handlerGetChatAjax(@RequestParam("table") String table){
		switch(table){
		case "1103":
			return listp1103Service.getAllListp1103();
		case "1104":
			return listp1104Service.getAllListp1104();
		case "1114":
			return listp1114Service.getAllListp1114();
		case "1115":
			return listp1115Service.getAllListp1115();
		}
		return listp1103Service.getAllListp1103();
	}
}
