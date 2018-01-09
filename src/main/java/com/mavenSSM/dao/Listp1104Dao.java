package com.mavenSSM.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.mavenSSM.model.Listp1104;
 

public interface Listp1104Dao {
	public List<Listp1104> getAllLIstp1104();
	
	public int addNewItem(@Param("listp1104")Listp1104 list);
	
	public int editItem(@Param("list")Listp1104 list);
}
