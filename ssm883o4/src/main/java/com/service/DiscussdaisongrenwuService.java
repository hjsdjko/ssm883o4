package com.service;

import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.service.IService;
import com.utils.PageUtils;
import com.entity.DiscussdaisongrenwuEntity;
import java.util.List;
import java.util.Map;
import com.entity.vo.DiscussdaisongrenwuVO;
import org.apache.ibatis.annotations.Param;
import com.entity.view.DiscussdaisongrenwuView;


/**
 * 代送任务评论表
 *
 * @author 
 * @email 
 * @date 2022-03-07 17:04:50
 */
public interface DiscussdaisongrenwuService extends IService<DiscussdaisongrenwuEntity> {

    PageUtils queryPage(Map<String, Object> params);
    
   	List<DiscussdaisongrenwuVO> selectListVO(Wrapper<DiscussdaisongrenwuEntity> wrapper);
   	
   	DiscussdaisongrenwuVO selectVO(@Param("ew") Wrapper<DiscussdaisongrenwuEntity> wrapper);
   	
   	List<DiscussdaisongrenwuView> selectListView(Wrapper<DiscussdaisongrenwuEntity> wrapper);
   	
   	DiscussdaisongrenwuView selectView(@Param("ew") Wrapper<DiscussdaisongrenwuEntity> wrapper);
   	
   	PageUtils queryPage(Map<String, Object> params,Wrapper<DiscussdaisongrenwuEntity> wrapper);
   	

}

