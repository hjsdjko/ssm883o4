package com.dao;

import com.entity.DiscussdaisongrenwuEntity;
import com.baomidou.mybatisplus.mapper.BaseMapper;
import java.util.List;
import java.util.Map;
import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.plugins.pagination.Pagination;

import org.apache.ibatis.annotations.Param;
import com.entity.vo.DiscussdaisongrenwuVO;
import com.entity.view.DiscussdaisongrenwuView;


/**
 * 代送任务评论表
 * 
 * @author 
 * @email 
 * @date 2022-03-07 17:04:50
 */
public interface DiscussdaisongrenwuDao extends BaseMapper<DiscussdaisongrenwuEntity> {
	
	List<DiscussdaisongrenwuVO> selectListVO(@Param("ew") Wrapper<DiscussdaisongrenwuEntity> wrapper);
	
	DiscussdaisongrenwuVO selectVO(@Param("ew") Wrapper<DiscussdaisongrenwuEntity> wrapper);
	
	List<DiscussdaisongrenwuView> selectListView(@Param("ew") Wrapper<DiscussdaisongrenwuEntity> wrapper);

	List<DiscussdaisongrenwuView> selectListView(Pagination page,@Param("ew") Wrapper<DiscussdaisongrenwuEntity> wrapper);
	
	DiscussdaisongrenwuView selectView(@Param("ew") Wrapper<DiscussdaisongrenwuEntity> wrapper);
	

}
