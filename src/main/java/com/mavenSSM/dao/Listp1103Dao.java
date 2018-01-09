package com.mavenSSM.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.mavenSSM.model.Listp1103;
 

public interface Listp1103Dao {
	public List<Listp1103> getAllLIstp1103();
	
	public int addNewItem(@Param("listp1103")Listp1103 list);
	
	public int editItem(@Param("list")Listp1103 list);
}
