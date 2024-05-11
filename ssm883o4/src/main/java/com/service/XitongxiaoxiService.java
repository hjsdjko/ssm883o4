package com.service;

import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.service.IService;
import com.utils.PageUtils;
import com.entity.XitongxiaoxiEntity;
import java.util.List;
import java.util.Map;
import com.entity.vo.XitongxiaoxiVO;
import org.apache.ibatis.annotations.Param;
import com.entity.view.XitongxiaoxiView;


/**
 * 系统消息
 *
 * @author 
 * @email 
 * @date 2022-03-07 17:04:49
 */
public interface XitongxiaoxiService extends IService<XitongxiaoxiEntity> {

    PageUtils queryPage(Map<String, Object> params);
    
   	List<XitongxiaoxiVO> selectListVO(Wrapper<XitongxiaoxiEntity> wrapper);
   	
   	XitongxiaoxiVO selectVO(@Param("ew") Wrapper<XitongxiaoxiEntity> wrapper);
   	
   	List<XitongxiaoxiView> selectListView(Wrapper<XitongxiaoxiEntity> wrapper);
   	
   	XitongxiaoxiView selectView(@Param("ew") Wrapper<XitongxiaoxiEntity> wrapper);
   	
   	PageUtils queryPage(Map<String, Object> params,Wrapper<XitongxiaoxiEntity> wrapper);
   	

}

