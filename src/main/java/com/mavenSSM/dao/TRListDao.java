package com.mavenSSM.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.mavenSSM.model.Trlist;

public interface TRListDao {
	public List<Trlist> getAllTRList();
	
	public int addNewItem(@Param("trlist")Trlist list);
	
	public int editItem(@Param("list")Trlist list);
}
