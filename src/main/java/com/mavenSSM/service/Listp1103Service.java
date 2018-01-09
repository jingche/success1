package com.mavenSSM.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mavenSSM.dao.Listp1103Dao;
import com.mavenSSM.model.Listp1103;

@Service
public class Listp1103Service {
	@Autowired
	private Listp1103Dao listDao;
	
	public List<Listp1103> getAllListp1103(){
		return listDao.getAllLIstp1103();
	}
	
	public int addNewItem(Listp1103 listp1103){
		listDao.addNewItem(listp1103);
		return listp1103.getId();
	}
	
	public int editItem(Listp1103 listp1103){
		return listDao.editItem(listp1103);
	}
}
