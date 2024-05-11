package com.dao;

import com.entity.XitongxiaoxiEntity;
import com.baomidou.mybatisplus.mapper.BaseMapper;
import java.util.List;
import java.util.Map;
import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.plugins.pagination.Pagination;

import org.apache.ibatis.annotations.Param;
import com.entity.vo.XitongxiaoxiVO;
import com.entity.view.XitongxiaoxiView;


/**
 * 系统消息
 * 
 * @author 
 * @email 
 * @date 2022-03-07 17:04:49
 */
public interface XitongxiaoxiDao extends BaseMapper<XitongxiaoxiEntity> {
	
	List<XitongxiaoxiVO> selectListVO(@Param("ew") Wrapper<XitongxiaoxiEntity> wrapper);
	
	XitongxiaoxiVO selectVO(@Param("ew") Wrapper<XitongxiaoxiEntity> wrapper);
	
	List<XitongxiaoxiView> selectListView(@Param("ew") Wrapper<XitongxiaoxiEntity> wrapper);

	List<XitongxiaoxiView> selectListView(Pagination page,@Param("ew") Wrapper<XitongxiaoxiEntity> wrapper);
	
	XitongxiaoxiView selectView(@Param("ew") Wrapper<XitongxiaoxiEntity> wrapper);
	

}
