package com.service.impl;

import org.springframework.stereotype.Service;
import java.util.Map;
import java.util.List;

import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.mapper.EntityWrapper;
import com.baomidou.mybatisplus.plugins.Page;
import com.baomidou.mybatisplus.service.impl.ServiceImpl;
import com.utils.PageUtils;
import com.utils.Query;


import com.dao.XitongxiaoxiDao;
import com.entity.XitongxiaoxiEntity;
import com.service.XitongxiaoxiService;
import com.entity.vo.XitongxiaoxiVO;
import com.entity.view.XitongxiaoxiView;

@Service("xitongxiaoxiService")
public class XitongxiaoxiServiceImpl extends ServiceImpl<XitongxiaoxiDao, XitongxiaoxiEntity> implements XitongxiaoxiService {
	

    @Override
    public PageUtils queryPage(Map<String, Object> params) {
        Page<XitongxiaoxiEntity> page = this.selectPage(
                new Query<XitongxiaoxiEntity>(params).getPage(),
                new EntityWrapper<XitongxiaoxiEntity>()
        );
        return new PageUtils(page);
    }
    
    @Override
	public PageUtils queryPage(Map<String, Object> params, Wrapper<XitongxiaoxiEntity> wrapper) {
		  Page<XitongxiaoxiView> page =new Query<XitongxiaoxiView>(params).getPage();
	        page.setRecords(baseMapper.selectListView(page,wrapper));
	    	PageUtils pageUtil = new PageUtils(page);
	    	return pageUtil;
 	}
    
    @Override
	public List<XitongxiaoxiVO> selectListVO(Wrapper<XitongxiaoxiEntity> wrapper) {
 		return baseMapper.selectListVO(wrapper);
	}
	
	@Override
	public XitongxiaoxiVO selectVO(Wrapper<XitongxiaoxiEntity> wrapper) {
 		return baseMapper.selectVO(wrapper);
	}
	
	@Override
	public List<XitongxiaoxiView> selectListView(Wrapper<XitongxiaoxiEntity> wrapper) {
		return baseMapper.selectListView(wrapper);
	}

	@Override
	public XitongxiaoxiView selectView(Wrapper<XitongxiaoxiEntity> wrapper) {
		return baseMapper.selectView(wrapper);
	}


}
