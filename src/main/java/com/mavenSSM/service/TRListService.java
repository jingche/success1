package com.mavenSSM.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mavenSSM.dao.TRListDao;
import com.mavenSSM.model.Trlist;

@Service
public class TRListService {
	@Autowired
	private TRListDao listDao;
	
	public List<Trlist> getAllTrlist(){
		return listDao.getAllTRList();
	}
	
	public int addNewItem(Trlist trlist){
		listDao.addNewItem(trlist);
		return trlist.getId();
	}
	
	public int editItem(Trlist trlist){
		return listDao.editItem(trlist);
	}
}
