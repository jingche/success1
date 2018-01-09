package com.mavenSSM.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mavenSSM.dao.Listp1104Dao;
import com.mavenSSM.model.Listp1104;

@Service
public class Listp1104Service {
	@Autowired
	private Listp1104Dao listDao;
	
	public List<Listp1104> getAllListp1104(){
		return listDao.getAllLIstp1104();
	}
	
	public int addNewItem(Listp1104 listp1104){
		listDao.addNewItem(listp1104);
		return  listp1104.getId();
	}
	
	public int editItem(Listp1104  listp1104){
		return listDao.editItem(listp1104);
	}
}
