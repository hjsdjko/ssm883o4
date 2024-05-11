package com.entity.view;

import com.entity.DaisongrenwuEntity;

import com.baomidou.mybatisplus.annotations.TableName;
import org.apache.commons.beanutils.BeanUtils;
import java.lang.reflect.InvocationTargetException;

import java.io.Serializable;
 

/**
 * 代送任务
 * 后端返回视图实体辅助类   
 * （通常后端关联的表或者自定义的字段需要返回使用）
 * @author 
 * @email 
 * @date 2022-03-07 17:04:49
 */
@TableName("daisongrenwu")
public class DaisongrenwuView  extends DaisongrenwuEntity implements Serializable {
	private static final long serialVersionUID = 1L;

	public DaisongrenwuView(){
	}
 
 	public DaisongrenwuView(DaisongrenwuEntity daisongrenwuEntity){
 	try {
			BeanUtils.copyProperties(this, daisongrenwuEntity);
		} catch (IllegalAccessException | InvocationTargetException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
 		
	}
}
