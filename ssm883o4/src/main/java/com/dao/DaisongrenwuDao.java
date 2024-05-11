package com.dao;

import com.entity.DaisongrenwuEntity;
import com.baomidou.mybatisplus.mapper.BaseMapper;
import java.util.List;
import java.util.Map;
import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.plugins.pagination.Pagination;

import org.apache.ibatis.annotations.Param;
import com.entity.vo.DaisongrenwuVO;
import com.entity.view.DaisongrenwuView;


/**
 * 代送任务
 * 
 * @author 
 * @email 
 * @date 2022-03-07 17:04:49
 */
public interface DaisongrenwuDao extends BaseMapper<DaisongrenwuEntity> {
	
	List<DaisongrenwuVO> selectListVO(@Param("ew") Wrapper<DaisongrenwuEntity> wrapper);
	
	DaisongrenwuVO selectVO(@Param("ew") Wrapper<DaisongrenwuEntity> wrapper);
	
	List<DaisongrenwuView> selectListView(@Param("ew") Wrapper<DaisongrenwuEntity> wrapper);

	List<DaisongrenwuView> selectListView(Pagination page,@Param("ew") Wrapper<DaisongrenwuEntity> wrapper);
	
	DaisongrenwuView selectView(@Param("ew") Wrapper<DaisongrenwuEntity> wrapper);
	

}
