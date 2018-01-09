package com.mavenSSM.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.mavenSSM.model.Artifacts;
 

public interface ArtifactsDao {
	public List<Artifacts> getAllARtifacts();
	
	public int addNewItem(@Param("artifacts")Artifacts list);
	
	public int editItem(@Param("list")Artifacts list);
}
