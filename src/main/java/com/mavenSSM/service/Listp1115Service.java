package com.mavenSSM.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mavenSSM.dao.Listp1115Dao;
import com.mavenSSM.model.Listp1115;

@Service
public class Listp1115Service {
	@Autowired
	private Listp1115Dao listDao;
	
	public List<Listp1115> getAllListp1115(){
		return listDao.getAllLIstp1115();
	}
	
	public int addNewItem(Listp1115 listp1115){
		listDao.addNewItem(listp1115);
		return listp1115.getId();
	}
	
	public int editItem(Listp1115 listp1115){
		return listDao.editItem(listp1115);
	}
}
