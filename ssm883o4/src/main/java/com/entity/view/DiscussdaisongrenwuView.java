package com.entity.view;

import com.entity.DiscussdaisongrenwuEntity;

import com.baomidou.mybatisplus.annotations.TableName;
import org.apache.commons.beanutils.BeanUtils;
import java.lang.reflect.InvocationTargetException;

import java.io.Serializable;
 

/**
 * 代送任务评论表
 * 后端返回视图实体辅助类   
 * （通常后端关联的表或者自定义的字段需要返回使用）
 * @author 
 * @email 
 * @date 2022-03-07 17:04:50
 */
@TableName("discussdaisongrenwu")
public class DiscussdaisongrenwuView  extends DiscussdaisongrenwuEntity implements Serializable {
	private static final long serialVersionUID = 1L;

	public DiscussdaisongrenwuView(){
	}
 
 	public DiscussdaisongrenwuView(DiscussdaisongrenwuEntity discussdaisongrenwuEntity){
 	try {
			BeanUtils.copyProperties(this, discussdaisongrenwuEntity);
		} catch (IllegalAccessException | InvocationTargetException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
 		
	}
}
