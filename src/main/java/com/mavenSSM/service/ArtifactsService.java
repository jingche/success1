package com.mavenSSM.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mavenSSM.dao.ArtifactsDao;
import com.mavenSSM.model.Artifacts;
 

@Service
public class ArtifactsService {
	@Autowired
	private ArtifactsDao listDao;
	
	public List<Artifacts> getAllArtifacts(){
		return listDao.getAllARtifacts();
	}
	
	public int addNewItem(Artifacts artifacts){
		listDao.addNewItem(artifacts);
		return artifacts.getId();
	}
	
	public int editItem(Artifacts artifacts){
		return listDao.editItem(artifacts);
	}
}
