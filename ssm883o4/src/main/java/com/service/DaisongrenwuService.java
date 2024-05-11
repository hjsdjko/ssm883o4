package com.service;

import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.service.IService;
import com.utils.PageUtils;
import com.entity.DaisongrenwuEntity;
import java.util.List;
import java.util.Map;
import com.entity.vo.DaisongrenwuVO;
import org.apache.ibatis.annotations.Param;
import com.entity.view.DaisongrenwuView;


/**
 * 代送任务
 *
 * @author 
 * @email 
 * @date 2022-03-07 17:04:49
 */
public interface DaisongrenwuService extends IService<DaisongrenwuEntity> {

    PageUtils queryPage(Map<String, Object> params);
    
   	List<DaisongrenwuVO> selectListVO(Wrapper<DaisongrenwuEntity> wrapper);
   	
   	DaisongrenwuVO selectVO(@Param("ew") Wrapper<DaisongrenwuEntity> wrapper);
   	
   	List<DaisongrenwuView> selectListView(Wrapper<DaisongrenwuEntity> wrapper);
   	
   	DaisongrenwuView selectView(@Param("ew") Wrapper<DaisongrenwuEntity> wrapper);
   	
   	PageUtils queryPage(Map<String, Object> params,Wrapper<DaisongrenwuEntity> wrapper);
   	

}

