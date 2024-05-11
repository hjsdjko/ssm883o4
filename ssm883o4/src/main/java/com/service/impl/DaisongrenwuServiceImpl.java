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


import com.dao.DaisongrenwuDao;
import com.entity.DaisongrenwuEntity;
import com.service.DaisongrenwuService;
import com.entity.vo.DaisongrenwuVO;
import com.entity.view.DaisongrenwuView;

@Service("daisongrenwuService")
public class DaisongrenwuServiceImpl extends ServiceImpl<DaisongrenwuDao, DaisongrenwuEntity> implements DaisongrenwuService {
	

    @Override
    public PageUtils queryPage(Map<String, Object> params) {
        Page<DaisongrenwuEntity> page = this.selectPage(
                new Query<DaisongrenwuEntity>(params).getPage(),
                new EntityWrapper<DaisongrenwuEntity>()
        );
        return new PageUtils(page);
    }
    
    @Override
	public PageUtils queryPage(Map<String, Object> params, Wrapper<DaisongrenwuEntity> wrapper) {
		  Page<DaisongrenwuView> page =new Query<DaisongrenwuView>(params).getPage();
	        page.setRecords(baseMapper.selectListView(page,wrapper));
	    	PageUtils pageUtil = new PageUtils(page);
	    	return pageUtil;
 	}
    
    @Override
	public List<DaisongrenwuVO> selectListVO(Wrapper<DaisongrenwuEntity> wrapper) {
 		return baseMapper.selectListVO(wrapper);
	}
	
	@Override
	public DaisongrenwuVO selectVO(Wrapper<DaisongrenwuEntity> wrapper) {
 		return baseMapper.selectVO(wrapper);
	}
	
	@Override
	public List<DaisongrenwuView> selectListView(Wrapper<DaisongrenwuEntity> wrapper) {
		return baseMapper.selectListView(wrapper);
	}

	@Override
	public DaisongrenwuView selectView(Wrapper<DaisongrenwuEntity> wrapper) {
		return baseMapper.selectView(wrapper);
	}


}
