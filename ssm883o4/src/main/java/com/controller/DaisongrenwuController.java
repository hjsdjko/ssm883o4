package com.controller;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Calendar;
import java.util.Map;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Date;
import java.util.List;
import javax.servlet.http.HttpServletRequest;
import java.io.IOException;

import com.utils.ValidatorUtils;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.baomidou.mybatisplus.mapper.EntityWrapper;
import com.baomidou.mybatisplus.mapper.Wrapper;
import com.annotation.IgnoreAuth;

import com.entity.DaisongrenwuEntity;
import com.entity.view.DaisongrenwuView;

import com.service.DaisongrenwuService;
import com.service.TokenService;
import com.utils.PageUtils;
import com.utils.R;
import com.utils.MD5Util;
import com.utils.MPUtil;
import com.utils.CommonUtil;
import com.service.StoreupService;
import com.entity.StoreupEntity;

/**
 * 代送任务
 * 后端接口
 * @author 
 * @email 
 * @date 2022-03-07 17:04:49
 */
@RestController
@RequestMapping("/daisongrenwu")
public class DaisongrenwuController {
    @Autowired
    private DaisongrenwuService daisongrenwuService;


    @Autowired
    private StoreupService storeupService;

    


    /**
     * 后端列表
     */
    @RequestMapping("/page")
    public R page(@RequestParam Map<String, Object> params,DaisongrenwuEntity daisongrenwu, 
		HttpServletRequest request){

		String tableName = request.getSession().getAttribute("tableName").toString();
		if(tableName.equals("fabuzhe")) {
			daisongrenwu.setFabuzhanghao((String)request.getSession().getAttribute("username"));
		}
        EntityWrapper<DaisongrenwuEntity> ew = new EntityWrapper<DaisongrenwuEntity>();
		PageUtils page = daisongrenwuService.queryPage(params, MPUtil.sort(MPUtil.between(MPUtil.likeOrEq(ew, daisongrenwu), params), params));
        return R.ok().put("data", page);
    }
    
    /**
     * 前端列表
     */
    @RequestMapping("/list")
    public R list(@RequestParam Map<String, Object> params,DaisongrenwuEntity daisongrenwu, 
		HttpServletRequest request){

		String tableName = request.getSession().getAttribute("tableName").toString();
		if(tableName.equals("fabuzhe")) {
			daisongrenwu.setFabuzhanghao((String)request.getSession().getAttribute("username"));
		}
        EntityWrapper<DaisongrenwuEntity> ew = new EntityWrapper<DaisongrenwuEntity>();
		PageUtils page = daisongrenwuService.queryPage(params, MPUtil.sort(MPUtil.between(MPUtil.likeOrEq(ew, daisongrenwu), params), params));
        return R.ok().put("data", page);
    }

	/**
     * 列表
     */
    @RequestMapping("/lists")
    public R list( DaisongrenwuEntity daisongrenwu){
       	EntityWrapper<DaisongrenwuEntity> ew = new EntityWrapper<DaisongrenwuEntity>();
      	ew.allEq(MPUtil.allEQMapPre( daisongrenwu, "daisongrenwu")); 
        return R.ok().put("data", daisongrenwuService.selectListView(ew));
    }

	 /**
     * 查询
     */
    @RequestMapping("/query")
    public R query(DaisongrenwuEntity daisongrenwu){
        EntityWrapper< DaisongrenwuEntity> ew = new EntityWrapper< DaisongrenwuEntity>();
 		ew.allEq(MPUtil.allEQMapPre( daisongrenwu, "daisongrenwu")); 
		DaisongrenwuView daisongrenwuView =  daisongrenwuService.selectView(ew);
		return R.ok("查询代送任务成功").put("data", daisongrenwuView);
    }
	
    /**
     * 后端详情
     */
    @RequestMapping("/info/{id}")
    public R info(@PathVariable("id") Long id){
        DaisongrenwuEntity daisongrenwu = daisongrenwuService.selectById(id);
        return R.ok().put("data", daisongrenwu);
    }

    /**
     * 前端详情
     */
    @RequestMapping("/detail/{id}")
    public R detail(@PathVariable("id") Long id){
        DaisongrenwuEntity daisongrenwu = daisongrenwuService.selectById(id);
        return R.ok().put("data", daisongrenwu);
    }
    



    /**
     * 后端保存
     */
    @RequestMapping("/save")
    public R save(@RequestBody DaisongrenwuEntity daisongrenwu, HttpServletRequest request){
    	daisongrenwu.setId(new Date().getTime()+new Double(Math.floor(Math.random()*1000)).longValue());
    	//ValidatorUtils.validateEntity(daisongrenwu);

        daisongrenwuService.insert(daisongrenwu);
        return R.ok();
    }
    
    /**
     * 前端保存
     */
    @RequestMapping("/add")
    public R add(@RequestBody DaisongrenwuEntity daisongrenwu, HttpServletRequest request){
    	daisongrenwu.setId(new Date().getTime()+new Double(Math.floor(Math.random()*1000)).longValue());
    	//ValidatorUtils.validateEntity(daisongrenwu);
    	daisongrenwu.setUserid((Long)request.getSession().getAttribute("userId"));

        daisongrenwuService.insert(daisongrenwu);
        return R.ok();
    }

    /**
     * 修改
     */
    @RequestMapping("/update")
    public R update(@RequestBody DaisongrenwuEntity daisongrenwu, HttpServletRequest request){
        //ValidatorUtils.validateEntity(daisongrenwu);
        daisongrenwuService.updateById(daisongrenwu);//全部更新
        return R.ok();
    }
    

    /**
     * 删除
     */
    @RequestMapping("/delete")
    public R delete(@RequestBody Long[] ids){
        daisongrenwuService.deleteBatchIds(Arrays.asList(ids));
        return R.ok();
    }
    
    /**
     * 提醒接口
     */
	@RequestMapping("/remind/{columnName}/{type}")
	public R remindCount(@PathVariable("columnName") String columnName, HttpServletRequest request, 
						 @PathVariable("type") String type,@RequestParam Map<String, Object> map) {
		map.put("column", columnName);
		map.put("type", type);
		
		if(type.equals("2")) {
			SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
			Calendar c = Calendar.getInstance();
			Date remindStartDate = null;
			Date remindEndDate = null;
			if(map.get("remindstart")!=null) {
				Integer remindStart = Integer.parseInt(map.get("remindstart").toString());
				c.setTime(new Date()); 
				c.add(Calendar.DAY_OF_MONTH,remindStart);
				remindStartDate = c.getTime();
				map.put("remindstart", sdf.format(remindStartDate));
			}
			if(map.get("remindend")!=null) {
				Integer remindEnd = Integer.parseInt(map.get("remindend").toString());
				c.setTime(new Date());
				c.add(Calendar.DAY_OF_MONTH,remindEnd);
				remindEndDate = c.getTime();
				map.put("remindend", sdf.format(remindEndDate));
			}
		}
		
		Wrapper<DaisongrenwuEntity> wrapper = new EntityWrapper<DaisongrenwuEntity>();
		if(map.get("remindstart")!=null) {
			wrapper.ge(columnName, map.get("remindstart"));
		}
		if(map.get("remindend")!=null) {
			wrapper.le(columnName, map.get("remindend"));
		}

		String tableName = request.getSession().getAttribute("tableName").toString();
		if(tableName.equals("fabuzhe")) {
			wrapper.eq("fabuzhanghao", (String)request.getSession().getAttribute("username"));
		}

		int count = daisongrenwuService.selectCount(wrapper);
		return R.ok().put("count", count);
	}
	







}
