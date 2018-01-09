package com.mavenSSM.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.mavenSSM.model.Artifacts;
import com.mavenSSM.service.ArtifactsService;

@Controller
@RequestMapping("/Artifacts")
public class ArtifactsController {
	
	@Autowired
	private ArtifactsService  arService ;
	
	@RequestMapping(value="", method=RequestMethod.GET)
	public String toARtifacts(){
		return "Artifacts";
	}
	
	@RequestMapping(value="/getAllList", method=RequestMethod.POST)
	@ResponseBody
	public List<Artifacts> handlerGetAllListAjax(){
		return arService.getAllArtifacts();
	}
	
	@RequestMapping(value="/addItem", method=RequestMethod.POST)
	@ResponseBody
	public Map<String,Integer> handlerAddItemAjax(@RequestBody Artifacts list){
		int id = arService.addNewItem(list);
		Map<String, Integer>map = new HashMap<>();
		map.put("id", id);
		return map;
	}
	
	@RequestMapping(value="/editItem", method=RequestMethod.POST)
	@ResponseBody
	public Map<String,Boolean> handlerEditItemAjax(@RequestBody Artifacts list){
		Map<String,Boolean> map = new HashMap<>();
		map.put("success", true);
		arService.editItem(list);
		return map;
	}
}
