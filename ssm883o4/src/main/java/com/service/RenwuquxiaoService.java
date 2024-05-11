package com.service;

import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.service.IService;
import com.utils.PageUtils;
import com.entity.RenwuquxiaoEntity;
import java.util.List;
import java.util.Map;
import com.entity.vo.RenwuquxiaoVO;
import org.apache.ibatis.annotations.Param;
import com.entity.view.RenwuquxiaoView;


/**
 * 任务取消
 *
 * @author 
 * @email 
 * @date 2022-03-07 17:04:49
 */
public interface RenwuquxiaoService extends IService<RenwuquxiaoEntity> {

    PageUtils queryPage(Map<String, Object> params);
    
   	List<RenwuquxiaoVO> selectListVO(Wrapper<RenwuquxiaoEntity> wrapper);
   	
   	RenwuquxiaoVO selectVO(@Param("ew") Wrapper<RenwuquxiaoEntity> wrapper);
   	
   	List<RenwuquxiaoView> selectListView(Wrapper<RenwuquxiaoEntity> wrapper);
   	
   	RenwuquxiaoView selectView(@Param("ew") Wrapper<RenwuquxiaoEntity> wrapper);
   	
   	PageUtils queryPage(Map<String, Object> params,Wrapper<RenwuquxiaoEntity> wrapper);
   	

}

