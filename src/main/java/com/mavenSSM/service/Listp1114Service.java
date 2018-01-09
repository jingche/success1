package com.mavenSSM.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mavenSSM.dao.Listp1114Dao;
import com.mavenSSM.model.Listp1114;

@Service
public class Listp1114Service {
	@Autowired
	private Listp1114Dao listDao;
	
	public List<Listp1114> getAllListp1114(){
		return listDao.getAllLIstp1114();
	}
	
	public int addNewItem(Listp1114 listp1114){
		listDao.addNewItem(listp1114);
		return listp1114.getId();
	}
	
	public int editItem(Listp1114 listp1114){
		return listDao.editItem(listp1114);
	}
}
