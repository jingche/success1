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

import com.mavenSSM.model.Trlist;
import com.mavenSSM.service.TRListService;

@Controller
@RequestMapping("/TR_list")
public class TRListController {
	
	@Autowired
	private TRListService trService;
	
	@RequestMapping(value="", method=RequestMethod.GET)
	public String toTRList(){
		return "TR_list";
	}
	
	@RequestMapping(value="/getAllList", method=RequestMethod.POST)
	@ResponseBody
	public List<Trlist> handlerGetAllListAjax(){
		return trService.getAllTrlist();
	}
	
	@RequestMapping(value="/addItem", method=RequestMethod.POST)
	@ResponseBody
	public Map<String,Integer> handlerAddItemAjax(@RequestBody Trlist list){
		int id = trService.addNewItem(list);
		Map<String, Integer>map = new HashMap<>();
		map.put("id", id);
		return map;
	}
	
	@RequestMapping(value="/editItem", method=RequestMethod.POST)
	@ResponseBody
	public Map<String,Boolean> handlerEditItemAjax(@RequestBody Trlist list){
		Map<String,Boolean> map = new HashMap<>();
		map.put("success", true);
		trService.editItem(list);
		return map;
	}
}
