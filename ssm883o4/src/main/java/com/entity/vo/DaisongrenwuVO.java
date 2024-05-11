package com.entity.vo;

import com.entity.DaisongrenwuEntity;

import com.baomidou.mybatisplus.annotations.TableName;
import com.fasterxml.jackson.annotation.JsonFormat;
import java.util.Date;
import org.springframework.format.annotation.DateTimeFormat;

import java.io.Serializable;
 

/**
 * 代送任务
 * 手机端接口返回实体辅助类 
 * （主要作用去除一些不必要的字段）
 * @author 
 * @email 
 * @date 2022-03-07 17:04:49
 */
public class DaisongrenwuVO  implements Serializable {
	private static final long serialVersionUID = 1L;

	 			
	/**
	 * 任务名称
	 */
	
	private String renwumingcheng;
		
	/**
	 * 任务类型
	 */
	
	private String renwuleixing;
		
	/**
	 * 任务内容
	 */
	
	private String renwuneirong;
		
	/**
	 * 任务佣金
	 */
	
	private Float renwuyongjin;
		
	/**
	 * 发布时间
	 */
		
	@JsonFormat(locale="zh", timezone="GMT+8", pattern="yyyy-MM-dd HH:mm:ss")
	@DateTimeFormat 
	private Date fabushijian;
		
	/**
	 * 送达时效
	 */
	
	private String songdashixiao;
		
	/**
	 * 订单状态
	 */
	
	private String dingdanzhuangtai;
		
	/**
	 * 任务图片
	 */
	
	private String renwutupian;
		
	/**
	 * 发布账号
	 */
	
	private String fabuzhanghao;
		
	/**
	 * 联系电话
	 */
	
	private String lianxidianhua;
		
	/**
	 * 用户id
	 */
	
	private Long userid;
				
	
	/**
	 * 设置：任务名称
	 */
	 
	public void setRenwumingcheng(String renwumingcheng) {
		this.renwumingcheng = renwumingcheng;
	}
	
	/**
	 * 获取：任务名称
	 */
	public String getRenwumingcheng() {
		return renwumingcheng;
	}
				
	
	/**
	 * 设置：任务类型
	 */
	 
	public void setRenwuleixing(String renwuleixing) {
		this.renwuleixing = renwuleixing;
	}
	
	/**
	 * 获取：任务类型
	 */
	public String getRenwuleixing() {
		return renwuleixing;
	}
				
	
	/**
	 * 设置：任务内容
	 */
	 
	public void setRenwuneirong(String renwuneirong) {
		this.renwuneirong = renwuneirong;
	}
	
	/**
	 * 获取：任务内容
	 */
	public String getRenwuneirong() {
		return renwuneirong;
	}
				
	
	/**
	 * 设置：任务佣金
	 */
	 
	public void setRenwuyongjin(Float renwuyongjin) {
		this.renwuyongjin = renwuyongjin;
	}
	
	/**
	 * 获取：任务佣金
	 */
	public Float getRenwuyongjin() {
		return renwuyongjin;
	}
				
	
	/**
	 * 设置：发布时间
	 */
	 
	public void setFabushijian(Date fabushijian) {
		this.fabushijian = fabushijian;
	}
	
	/**
	 * 获取：发布时间
	 */
	public Date getFabushijian() {
		return fabushijian;
	}
				
	
	/**
	 * 设置：送达时效
	 */
	 
	public void setSongdashixiao(String songdashixiao) {
		this.songdashixiao = songdashixiao;
	}
	
	/**
	 * 获取：送达时效
	 */
	public String getSongdashixiao() {
		return songdashixiao;
	}
				
	
	/**
	 * 设置：订单状态
	 */
	 
	public void setDingdanzhuangtai(String dingdanzhuangtai) {
		this.dingdanzhuangtai = dingdanzhuangtai;
	}
	
	/**
	 * 获取：订单状态
	 */
	public String getDingdanzhuangtai() {
		return dingdanzhuangtai;
	}
				
	
	/**
	 * 设置：任务图片
	 */
	 
	public void setRenwutupian(String renwutupian) {
		this.renwutupian = renwutupian;
	}
	
	/**
	 * 获取：任务图片
	 */
	public String getRenwutupian() {
		return renwutupian;
	}
				
	
	/**
	 * 设置：发布账号
	 */
	 
	public void setFabuzhanghao(String fabuzhanghao) {
		this.fabuzhanghao = fabuzhanghao;
	}
	
	/**
	 * 获取：发布账号
	 */
	public String getFabuzhanghao() {
		return fabuzhanghao;
	}
				
	
	/**
	 * 设置：联系电话
	 */
	 
	public void setLianxidianhua(String lianxidianhua) {
		this.lianxidianhua = lianxidianhua;
	}
	
	/**
	 * 获取：联系电话
	 */
	public String getLianxidianhua() {
		return lianxidianhua;
	}
				
	
	/**
	 * 设置：用户id
	 */
	 
	public void setUserid(Long userid) {
		this.userid = userid;
	}
	
	/**
	 * 获取：用户id
	 */
	public Long getUserid() {
		return userid;
	}
			
}
