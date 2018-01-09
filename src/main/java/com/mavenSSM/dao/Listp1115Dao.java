package com.mavenSSM.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.mavenSSM.model.Listp1115;

public interface Listp1115Dao {
	public List<Listp1115> getAllLIstp1115();
	
	public int addNewItem(@Param("listp1115")Listp1115 list);
	
	public int editItem(@Param("list")Listp1115 list);
}
