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


import com.dao.DiscussdaisongrenwuDao;
import com.entity.DiscussdaisongrenwuEntity;
import com.service.DiscussdaisongrenwuService;
import com.entity.vo.DiscussdaisongrenwuVO;
import com.entity.view.DiscussdaisongrenwuView;

@Service("discussdaisongrenwuService")
public class DiscussdaisongrenwuServiceImpl extends ServiceImpl<DiscussdaisongrenwuDao, DiscussdaisongrenwuEntity> implements DiscussdaisongrenwuService {
	

    @Override
    public PageUtils queryPage(Map<String, Object> params) {
        Page<DiscussdaisongrenwuEntity> page = this.selectPage(
                new Query<DiscussdaisongrenwuEntity>(params).getPage(),
                new EntityWrapper<DiscussdaisongrenwuEntity>()
        );
        return new PageUtils(page);
    }
    
    @Override
	public PageUtils queryPage(Map<String, Object> params, Wrapper<DiscussdaisongrenwuEntity> wrapper) {
		  Page<DiscussdaisongrenwuView> page =new Query<DiscussdaisongrenwuView>(params).getPage();
	        page.setRecords(baseMapper.selectListView(page,wrapper));
	    	PageUtils pageUtil = new PageUtils(page);
	    	return pageUtil;
 	}
    
    @Override
	public List<DiscussdaisongrenwuVO> selectListVO(Wrapper<DiscussdaisongrenwuEntity> wrapper) {
 		return baseMapper.selectListVO(wrapper);
	}
	
	@Override
	public DiscussdaisongrenwuVO selectVO(Wrapper<DiscussdaisongrenwuEntity> wrapper) {
 		return baseMapper.selectVO(wrapper);
	}
	
	@Override
	public List<DiscussdaisongrenwuView> selectListView(Wrapper<DiscussdaisongrenwuEntity> wrapper) {
		return baseMapper.selectListView(wrapper);
	}

	@Override
	public DiscussdaisongrenwuView selectView(Wrapper<DiscussdaisongrenwuEntity> wrapper) {
		return baseMapper.selectView(wrapper);
	}


}
