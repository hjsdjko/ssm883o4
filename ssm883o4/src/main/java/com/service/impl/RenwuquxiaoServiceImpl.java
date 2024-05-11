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


import com.dao.RenwuquxiaoDao;
import com.entity.RenwuquxiaoEntity;
import com.service.RenwuquxiaoService;
import com.entity.vo.RenwuquxiaoVO;
import com.entity.view.RenwuquxiaoView;

@Service("renwuquxiaoService")
public class RenwuquxiaoServiceImpl extends ServiceImpl<RenwuquxiaoDao, RenwuquxiaoEntity> implements RenwuquxiaoService {
	

    @Override
    public PageUtils queryPage(Map<String, Object> params) {
        Page<RenwuquxiaoEntity> page = this.selectPage(
                new Query<RenwuquxiaoEntity>(params).getPage(),
                new EntityWrapper<RenwuquxiaoEntity>()
        );
        return new PageUtils(page);
    }
    
    @Override
	public PageUtils queryPage(Map<String, Object> params, Wrapper<RenwuquxiaoEntity> wrapper) {
		  Page<RenwuquxiaoView> page =new Query<RenwuquxiaoView>(params).getPage();
	        page.setRecords(baseMapper.selectListView(page,wrapper));
	    	PageUtils pageUtil = new PageUtils(page);
	    	return pageUtil;
 	}
    
    @Override
	public List<RenwuquxiaoVO> selectListVO(Wrapper<RenwuquxiaoEntity> wrapper) {
 		return baseMapper.selectListVO(wrapper);
	}
	
	@Override
	public RenwuquxiaoVO selectVO(Wrapper<RenwuquxiaoEntity> wrapper) {
 		return baseMapper.selectVO(wrapper);
	}
	
	@Override
	public List<RenwuquxiaoView> selectListView(Wrapper<RenwuquxiaoEntity> wrapper) {
		return baseMapper.selectListView(wrapper);
	}

	@Override
	public RenwuquxiaoView selectView(Wrapper<RenwuquxiaoEntity> wrapper) {
		return baseMapper.selectView(wrapper);
	}


}
