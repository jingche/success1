package com.mavenSSM.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.mavenSSM.model.Listp1114;

public interface Listp1114Dao {
	public List<Listp1114> getAllLIstp1114();
	
	public int addNewItem(@Param("listp1114")Listp1114 list);
	
	public int editItem(@Param("list")Listp1114 list);
}
