(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-daisongrenwu-add-or-update"],{"242f":function(r,e,i){"use strict";var a=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("a481"),i("c5f6"),i("f559"),i("ac6a"),i("28a5"),i("96cf");var t=a(i("3b8d")),n=a(i("e2b1")),o={data:function(){return{cross:"",ruleForm:{dingdanbianhao:this.getUUID(),renwumingcheng:"",renwuleixing:"",renwuneirong:"",renwuyongjin:"",fabushijian:"",songdashixiao:"",dingdanzhuangtai:"",renwutupian:"",fabuzhanghao:"",lianxidianhua:"",userid:""},renwuleixingOptions:[],renwuleixingIndex:0,dingdanzhuangtaiOptions:[],dingdanzhuangtaiIndex:0,user:{},ro:{dingdanbianhao:!1,renwumingcheng:!1,renwuleixing:!1,renwuneirong:!1,renwuyongjin:!1,fabushijian:!1,songdashixiao:!1,dingdanzhuangtai:!1,renwutupian:!1,fabuzhanghao:!1,lianxidianhua:!1,userid:!1}}},components:{wPicker:n.default},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(){var r=(0,t.default)(regeneratorRuntime.mark((function r(e){var i,a,t,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return this.ruleForm.fabushijian=this.$utils.getCurDateTime(),i=uni.getStorageSync("nowTable"),r.next=4,this.$api.session(i);case 4:return a=r.sent,this.user=a.data,this.ruleForm.fabuzhanghao=this.user.fabuzhanghao,this.ro.fabuzhanghao=!0,this.ruleForm.lianxidianhua=this.user.lianxidianhua,this.ro.lianxidianhua=!0,r.next=12,this.$api.option("renwuleixing","leixing",{});case 12:if(a=r.sent,this.renwuleixingOptions=a.data,this.dingdanzhuangtaiOptions="已接取,待接取".split(","),this.ruleForm.userid=uni.getStorageSync("userid"),e.refid&&(this.ruleForm.refid=e.refid,this.ruleForm.nickname=uni.getStorageSync("nickname")),!e.id){r.next=23;break}return this.ruleForm.id=e.id,r.next=21,this.$api.info("daisongrenwu",this.ruleForm.id);case 21:a=r.sent,this.ruleForm=a.data;case 23:if(this.cross=e.cross,!e.cross){r.next=79;break}t=uni.getStorageSync("crossObj"),r.t0=regeneratorRuntime.keys(t);case 27:if((r.t1=r.t0()).done){r.next=79;break}if(n=r.t1.value,"dingdanbianhao"!=n){r.next=33;break}return this.ruleForm.dingdanbianhao=t[n],this.ro.dingdanbianhao=!0,r.abrupt("continue",27);case 33:if("renwumingcheng"!=n){r.next=37;break}return this.ruleForm.renwumingcheng=t[n],this.ro.renwumingcheng=!0,r.abrupt("continue",27);case 37:if("renwuleixing"!=n){r.next=41;break}return this.ruleForm.renwuleixing=t[n],this.ro.renwuleixing=!0,r.abrupt("continue",27);case 41:if("renwuneirong"!=n){r.next=45;break}return this.ruleForm.renwuneirong=t[n],this.ro.renwuneirong=!0,r.abrupt("continue",27);case 45:if("renwuyongjin"!=n){r.next=49;break}return this.ruleForm.renwuyongjin=t[n],this.ro.renwuyongjin=!0,r.abrupt("continue",27);case 49:if("fabushijian"!=n){r.next=53;break}return this.ruleForm.fabushijian=t[n],this.ro.fabushijian=!0,r.abrupt("continue",27);case 53:if("songdashixiao"!=n){r.next=57;break}return this.ruleForm.songdashixiao=t[n],this.ro.songdashixiao=!0,r.abrupt("continue",27);case 57:if("dingdanzhuangtai"!=n){r.next=61;break}return this.ruleForm.dingdanzhuangtai=t[n],this.ro.dingdanzhuangtai=!0,r.abrupt("continue",27);case 61:if("renwutupian"!=n){r.next=65;break}return this.ruleForm.renwutupian=t[n],this.ro.renwutupian=!0,r.abrupt("continue",27);case 65:if("fabuzhanghao"!=n){r.next=69;break}return this.ruleForm.fabuzhanghao=t[n],this.ro.fabuzhanghao=!0,r.abrupt("continue",27);case 69:if("lianxidianhua"!=n){r.next=73;break}return this.ruleForm.lianxidianhua=t[n],this.ro.lianxidianhua=!0,r.abrupt("continue",27);case 73:if("userid"!=n){r.next=77;break}return this.ruleForm.userid=t[n],this.ro.userid=!0,r.abrupt("continue",27);case 77:r.next=27;break;case 79:this.styleChange();case 80:case"end":return r.stop()}}),r,this)})));function e(e){return r.apply(this,arguments)}return e}(),methods:{styleChange:function(){this.$nextTick((function(){}))},fabushijianConfirm:function(r){console.log(r),this.ruleForm.fabushijian=r.result,this.$forceUpdate()},renwuleixingChange:function(r){this.renwuleixingIndex=r.target.value,this.ruleForm.renwuleixing=this.renwuleixingOptions[this.renwuleixingIndex]},dingdanzhuangtaiChange:function(r){this.dingdanzhuangtaiIndex=r.target.value,this.ruleForm.dingdanzhuangtai=this.dingdanzhuangtaiOptions[this.dingdanzhuangtaiIndex]},renwutupianTap:function(){var r=this;this.$api.upload((function(e){r.ruleForm.renwutupian="upload/"+e.file,r.$forceUpdate(),r.$nextTick((function(){r.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var r=(0,t.default)(regeneratorRuntime.mark((function r(){var e,i,a,t,n,o,d,u,s,l;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(!this.ruleForm.renwuyongjin||this.$validate.isNumber(this.ruleForm.renwuyongjin)){r.next=3;break}return this.$utils.msg("任务佣金应输入数字"),r.abrupt("return");case 3:if(!this.ruleForm.lianxidianhua||this.$validate.isMobile(this.ruleForm.lianxidianhua)){r.next=6;break}return this.$utils.msg("联系电话应输入手机格式"),r.abrupt("return");case 6:if(!this.cross){r.next=22;break}if(t=uni.getStorageSync("statusColumnName"),n=uni.getStorageSync("statusColumnValue"),""==t){r.next=22;break}if(o=uni.getStorageSync("crossObj"),t.startsWith("[")){r.next=18;break}for(d in o)d==t&&(o[d]=n);return u=uni.getStorageSync("crossTable"),r.next=16,this.$api.update("".concat(u),o);case 16:r.next=22;break;case 18:e=Number(uni.getStorageSync("userid")),i=o["id"],a=uni.getStorageSync("statusColumnName"),a=a.replace(/\[/,"").replace(/\]/,"");case 22:if(!i||!e){r.next=44;break}return this.ruleForm.crossuserid=e,this.ruleForm.crossrefid=i,s={page:1,limit:10,crossuserid:e,crossrefid:i},r.next=28,this.$api.list("daisongrenwu",s);case 28:if(l=r.sent,!(l.data.total>=a)){r.next=34;break}return this.$utils.msg(uni.getStorageSync("tips")),r.abrupt("return",!1);case 34:if(!this.ruleForm.id){r.next=39;break}return r.next=37,this.$api.update("daisongrenwu",this.ruleForm);case 37:r.next=41;break;case 39:return r.next=41,this.$api.add("daisongrenwu",this.ruleForm);case 41:this.$utils.msgBack("提交成功");case 42:r.next=52;break;case 44:if(!this.ruleForm.id){r.next=49;break}return r.next=47,this.$api.update("daisongrenwu",this.ruleForm);case 47:r.next=51;break;case 49:return r.next=51,this.$api.add("daisongrenwu",this.ruleForm);case 51:this.$utils.msgBack("提交成功");case 52:case"end":return r.stop()}}),r,this)})));function e(){return r.apply(this,arguments)}return e}(),optionsChange:function(r){this.index=r.target.value},bindDateChange:function(r){this.date=r.target.value},getDate:function(r){var e=new Date,i=e.getFullYear(),a=e.getMonth()+1,t=e.getDate();return"start"===r?i-=60:"end"===r&&(i+=2),a=a>9?a:"0"+a,t=t>9?t:"0"+t,"".concat(i,"-").concat(a,"-").concat(t)},toggleTab:function(r){this.$refs[r].show()}}};e.default=o},"5f33":function(r,e,i){"use strict";var a={"w-picker":i("e2b1").default},t=function(){var r=this,e=r.$createElement,i=r._self._c||e;return i("v-uni-view",{staticClass:"content"},[i("v-uni-form",{staticClass:"app-update-pv"},[i("v-uni-view",{staticClass:"cu-form-group",style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 0 20rpx 0",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 1)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"108rpx"}},[i("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(130, 163, 157, 1)",backgroundColor:"rgba(0,0,0,0)",color:"rgba(161, 161, 161, 1)",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("订单编号")]),i("v-uni-view",{staticClass:"right-input",style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.6) inset",margin:"0",borderColor:"rgba(0,0,0,.6)",backgroundColor:"rgba(255, 255, 255, 0)",color:"rgba(161, 161, 161, 1)",textAlign:"left",borderRadius:"16rpx",borderWidth:"2rpx",width:"calc(100% - 160rpx)",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"}},[r._v(r._s(r.ruleForm.dingdanbianhao))])],1),i("v-uni-view",{staticClass:"cu-form-group",style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 0 20rpx 0",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 1)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"108rpx"}},[i("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(130, 163, 157, 1)",backgroundColor:"rgba(0,0,0,0)",color:"rgba(161, 161, 161, 1)",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("任务名称")]),i("v-uni-input",{style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.6) inset",margin:"0",borderColor:"rgba(0,0,0,.6)",backgroundColor:"rgba(255, 255, 255, 0)",color:"rgba(161, 161, 161, 1)",textAlign:"left",borderRadius:"16rpx",borderWidth:"2rpx",width:"calc(100% - 160rpx)",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{disabled:r.ro.renwumingcheng,placeholder:"任务名称"},model:{value:r.ruleForm.renwumingcheng,callback:function(e){r.$set(r.ruleForm,"renwumingcheng",e)},expression:"ruleForm.renwumingcheng"}})],1),i("v-uni-view",{staticClass:"cu-form-group select",style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 1)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"108rpx"}},[i("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",color:"rgba(161, 161, 161, 1)",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("任务类型")]),i("v-uni-picker",{attrs:{value:r.renwuleixingIndex,range:r.renwuleixingOptions},on:{change:function(e){arguments[0]=e=r.$handleEvent(e),r.renwuleixingChange.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"uni-input",style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.6) inset",margin:"0",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(0,0,0,.6)",color:"rgba(161, 161, 161, 1)",textAlign:"left",borderRadius:"16rpx",borderWidth:"2rpx",width:"calc(100% - 160rpx)",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v(r._s(r.ruleForm.renwuleixing?r.ruleForm.renwuleixing:"请选择任务类型"))])],1)],1),i("v-uni-view",{staticClass:"cu-form-group",style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 0 20rpx 0",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 1)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"108rpx"}},[i("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(130, 163, 157, 1)",backgroundColor:"rgba(0,0,0,0)",color:"rgba(161, 161, 161, 1)",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("任务佣金")]),i("v-uni-input",{style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.6) inset",margin:"0",borderColor:"rgba(0,0,0,.6)",backgroundColor:"rgba(255, 255, 255, 0)",color:"rgba(161, 161, 161, 1)",textAlign:"left",borderRadius:"16rpx",borderWidth:"2rpx",width:"calc(100% - 160rpx)",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{disabled:r.ro.renwuyongjin,placeholder:"任务佣金"},model:{value:r.ruleForm.renwuyongjin,callback:function(e){r.$set(r.ruleForm,"renwuyongjin",e)},expression:"ruleForm.renwuyongjin"}})],1),i("v-uni-view",{staticClass:"cu-form-group",style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 0 20rpx 0",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 1)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"108rpx"}},[i("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(130, 163, 157, 1)",backgroundColor:"rgba(0,0,0,0)",color:"rgba(161, 161, 161, 1)",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("发布时间")]),i("v-uni-input",{style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.6) inset",margin:"0",borderColor:"rgba(0,0,0,.6)",backgroundColor:"rgba(255, 255, 255, 0)",color:"rgba(161, 161, 161, 1)",textAlign:"left",borderRadius:"16rpx",borderWidth:"2rpx",width:"calc(100% - 160rpx)",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{placeholder:"发布时间"},on:{click:function(e){arguments[0]=e=r.$handleEvent(e),r.toggleTab("fabushijian")}},model:{value:r.ruleForm.fabushijian,callback:function(e){r.$set(r.ruleForm,"fabushijian",e)},expression:"ruleForm.fabushijian"}})],1),i("v-uni-view",{staticClass:"cu-form-group",style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 0 20rpx 0",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 1)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"108rpx"}},[i("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(130, 163, 157, 1)",backgroundColor:"rgba(0,0,0,0)",color:"rgba(161, 161, 161, 1)",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("送达时效")]),i("v-uni-input",{style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.6) inset",margin:"0",borderColor:"rgba(0,0,0,.6)",backgroundColor:"rgba(255, 255, 255, 0)",color:"rgba(161, 161, 161, 1)",textAlign:"left",borderRadius:"16rpx",borderWidth:"2rpx",width:"calc(100% - 160rpx)",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{disabled:r.ro.songdashixiao,placeholder:"送达时效"},model:{value:r.ruleForm.songdashixiao,callback:function(e){r.$set(r.ruleForm,"songdashixiao",e)},expression:"ruleForm.songdashixiao"}})],1),i("v-uni-view",{staticClass:"cu-form-group select",style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 1)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"108rpx"}},[i("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",color:"rgba(161, 161, 161, 1)",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("订单状态")]),i("v-uni-picker",{attrs:{value:r.dingdanzhuangtaiIndex,range:r.dingdanzhuangtaiOptions},on:{change:function(e){arguments[0]=e=r.$handleEvent(e),r.dingdanzhuangtaiChange.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"uni-input",style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.6) inset",margin:"0",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(0,0,0,.6)",color:"rgba(161, 161, 161, 1)",textAlign:"left",borderRadius:"16rpx",borderWidth:"2rpx",width:"calc(100% - 160rpx)",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v(r._s(r.ruleForm.dingdanzhuangtai?r.ruleForm.dingdanzhuangtai:"请选择订单状态"))])],1)],1),i("v-uni-view",{staticClass:"cu-form-group",style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 1)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"108rpx"},on:{click:function(e){arguments[0]=e=r.$handleEvent(e),r.renwutupianTap.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",color:"rgba(161, 161, 161, 1)",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("任务图片")]),i("v-uni-view",{staticClass:"right-input",staticStyle:{padding:"0"}},[r.ruleForm.renwutupian?i("v-uni-image",{staticClass:"avator",style:{padding:"0",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 auto",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",borderRadius:"100%",borderWidth:"0",width:"88rpx",borderStyle:"solid",height:"88rpx"},attrs:{src:r.baseUrl+r.ruleForm.renwutupian,mode:"aspectFill"}}):i("v-uni-image",{staticClass:"avator",style:{padding:"0",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 auto",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",borderRadius:"100%",borderWidth:"0",width:"88rpx",borderStyle:"solid",height:"88rpx"},attrs:{src:"../../static/gen/upload.png",mode:"aspectFill"}})],1)],1),i("v-uni-view",{staticClass:"cu-form-group",style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 0 20rpx 0",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 1)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"108rpx"}},[i("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(130, 163, 157, 1)",backgroundColor:"rgba(0,0,0,0)",color:"rgba(161, 161, 161, 1)",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("发布账号")]),i("v-uni-input",{style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.6) inset",margin:"0",borderColor:"rgba(0,0,0,.6)",backgroundColor:"rgba(255, 255, 255, 0)",color:"rgba(161, 161, 161, 1)",textAlign:"left",borderRadius:"16rpx",borderWidth:"2rpx",width:"calc(100% - 160rpx)",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{disabled:r.ro.fabuzhanghao,placeholder:"发布账号"},model:{value:r.ruleForm.fabuzhanghao,callback:function(e){r.$set(r.ruleForm,"fabuzhanghao",e)},expression:"ruleForm.fabuzhanghao"}})],1),i("v-uni-view",{staticClass:"cu-form-group",style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 0 20rpx 0",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 1)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"108rpx"}},[i("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(130, 163, 157, 1)",backgroundColor:"rgba(0,0,0,0)",color:"rgba(161, 161, 161, 1)",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("联系电话")]),i("v-uni-input",{style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.6) inset",margin:"0",borderColor:"rgba(0,0,0,.6)",backgroundColor:"rgba(255, 255, 255, 0)",color:"rgba(161, 161, 161, 1)",textAlign:"left",borderRadius:"16rpx",borderWidth:"2rpx",width:"calc(100% - 160rpx)",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{disabled:r.ro.lianxidianhua,placeholder:"联系电话"},model:{value:r.ruleForm.lianxidianhua,callback:function(e){r.$set(r.ruleForm,"lianxidianhua",e)},expression:"ruleForm.lianxidianhua"}})],1),i("v-uni-view",{staticClass:"cu-form-group",style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 1)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"308rpx"}},[i("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",color:"rgba(161, 161, 161, 1)",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("任务内容")]),i("v-uni-textarea",{style:{padding:"20rpx",boxShadow:"0 0 0px rgba(0,0,0,.6) inset",margin:"0",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(161, 161, 161, 1)",borderWidth:"2rpx",width:"calc(100% - 160rpx)",fontSize:"28rpx",borderStyle:"solid",height:"280rpx"},attrs:{placeholder:"任务内容"},model:{value:r.ruleForm.renwuneirong,callback:function(e){r.$set(r.ruleForm,"renwuneirong",e)},expression:"ruleForm.renwuneirong"}})],1),i("v-uni-view",{staticClass:"btn"},[i("v-uni-button",{staticClass:"bg-red",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0) inset",margin:"0",backgroundColor:"rgba(130, 163, 157, 1)",borderColor:"rgba(130, 163, 157, 1)",borderRadius:"80rpx",color:"#fff",borderWidth:"1",width:"80%",fontSize:"28rpx",borderStyle:"solid",height:"80rpx"},on:{click:function(e){arguments[0]=e=r.$handleEvent(e),r.onSubmitTap.apply(void 0,arguments)}}},[r._v("提交")])],1)],1),i("w-picker",{ref:"fabushijian",attrs:{mode:"dateTime",step:"1",current:!1,hasSecond:!1,themeColor:"#333333"},on:{confirm:function(e){arguments[0]=e=r.$handleEvent(e),r.fabushijianConfirm.apply(void 0,arguments)}}})],1)},n=[];i.d(e,"b",(function(){return t})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){return a}))},6957:function(r,e,i){"use strict";i.r(e);var a=i("5f33"),t=i("d7cd");for(var n in t)"default"!==n&&function(r){i.d(e,r,(function(){return t[r]}))}(n);i("6c7e");var o,d=i("f0c5"),u=Object(d["a"])(t["default"],a["b"],a["c"],!1,null,"58b245dc",null,!1,a["a"],o);e["default"]=u.exports},"6c7e":function(r,e,i){"use strict";var a=i("8d6f"),t=i.n(a);t.a},"8d6f":function(r,e,i){var a=i("ddda");"string"===typeof a&&(a=[[r.i,a,""]]),a.locals&&(r.exports=a.locals);var t=i("4f06").default;t("ab02e8d2",a,!0,{sourceMap:!1,shadowMode:!1})},d7cd:function(r,e,i){"use strict";i.r(e);var a=i("242f"),t=i.n(a);for(var n in a)"default"!==n&&function(r){i.d(e,r,(function(){return a[r]}))}(n);e["default"]=t.a},ddda:function(r,e,i){var a=i("24fb");e=a(!1),e.push([r.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.container[data-v-58b245dc]{padding:%?20?%}.content[data-v-58b245dc]:after{position:fixed;top:0;right:0;left:0;bottom:0;content:"";background-image:url(http://codegen.caihongy.cn/20220210/87bd12d356ac4a8e90125da208a7597e.png);background-attachment:fixed;background-size:cover;background-position:50%}uni-textarea[data-v-58b245dc]{border:%?1?% solid #eee;border-radius:%?20?%;padding:%?20?%}.title[data-v-58b245dc]{width:%?180?%}.avator[data-v-58b245dc]{width:%?150?%;height:%?60?%}.right-input[data-v-58b245dc]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:left;padding:0 %?24?%}.cu-form-group.active[data-v-58b245dc]{-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.btn[data-v-58b245dc]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-flex-wrap:wrap;flex-wrap:wrap;padding:%?20?% 0}.cu-form-group[data-v-58b245dc]{padding:0 %?24?%;background-color:initial;min-height:inherit}.cu-form-group + .cu-form-group[data-v-58b245dc]{border:0}.cu-form-group uni-input[data-v-58b245dc]{padding:0 %?30?%}.uni-input[data-v-58b245dc]{padding:0 %?30?%}.cu-form-group uni-textarea[data-v-58b245dc]{padding:%?30?%;margin:0}.cu-form-group uni-picker[data-v-58b245dc]::after{line-height:%?80?%}.select .uni-input[data-v-58b245dc]{line-height:%?80?%}.input .right-input[data-v-58b245dc]{line-height:%?88?%}',""]),r.exports=e}}]);