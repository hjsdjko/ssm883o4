package com.entity.view;

import com.entity.XitongxiaoxiEntity;

import com.baomidou.mybatisplus.annotations.TableName;
import org.apache.commons.beanutils.BeanUtils;
import java.lang.reflect.InvocationTargetException;

import java.io.Serializable;
 

/**
 * 系统消息
 * 后端返回视图实体辅助类   
 * （通常后端关联的表或者自定义的字段需要返回使用）
 * @author 
 * @email 
 * @date 2022-03-07 17:04:49
 */
@TableName("xitongxiaoxi")
public class XitongxiaoxiView  extends XitongxiaoxiEntity implements Serializable {
	private static final long serialVersionUID = 1L;

	public XitongxiaoxiView(){
	}
 
 	public XitongxiaoxiView(XitongxiaoxiEntity xitongxiaoxiEntity){
 	try {
			BeanUtils.copyProperties(this, xitongxiaoxiEntity);
		} catch (IllegalAccessException | InvocationTargetException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
 		
	}
}
