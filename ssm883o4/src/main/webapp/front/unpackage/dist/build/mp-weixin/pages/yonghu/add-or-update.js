(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/yonghu/add-or-update"],{"04eb":function(e,t,n){"use strict";n.r(t);var r=n("ab56"),a=n.n(r);for(var u in r)"default"!==u&&function(e){n.d(t,e,(function(){return r[e]}))}(u);t["default"]=a.a},"1a78":function(e,t,n){"use strict";var r=n("97c5"),a=n.n(r);a.a},"6b02":function(e,t,n){"use strict";var r;n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return u})),n.d(t,"a",(function(){return r}));var a=function(){var e=this,t=e.$createElement;e._self._c},u=[]},"97c5":function(e,t,n){},a77e:function(e,t,n){"use strict";n.r(t);var r=n("6b02"),a=n("04eb");for(var u in a)"default"!==u&&function(e){n.d(t,e,(function(){return a[e]}))}(u);n("1a78");var i,o=n("f0c5"),s=Object(o["a"])(a["default"],r["b"],r["c"],!1,null,"2bdd35e4",null,!1,r["a"],i);t["default"]=s.exports},ab56:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n("a34a"));function a(e){return e&&e.__esModule?e:{default:e}}function u(e,t,n,r,a,u,i){try{var o=e[u](i),s=o.value}catch(c){return void n(c)}o.done?t(s):Promise.resolve(s).then(r,a)}function i(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var i=e.apply(t,n);function o(e){u(i,r,a,o,s,"next",e)}function s(e){u(i,r,a,o,s,"throw",e)}o(void 0)}))}}var o=function(){Promise.all([n.e("common/vendor"),n.e("components/w-picker/w-picker")]).then(function(){return resolve(n("fbac"))}.bind(null,n)).catch(n.oe)},s={data:function(){return{cross:"",ruleForm:{zhanghao:"",mima:"",xingming:"",xingbie:"",shouji:"",sushehao:"",touxiang:""},xingbieOptions:[],xingbieIndex:0,user:{},ro:{zhanghao:!1,mima:!1,xingming:!1,xingbie:!1,shouji:!1,sushehao:!1,touxiang:!1}}},components:{wPicker:o},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(t){var n=this;return i(r.default.mark((function a(){var u,i,o,s;return r.default.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return u=e.getStorageSync("nowTable"),a.next=3,n.$api.session(u);case 3:if(i=a.sent,n.user=i.data,n.xingbieOptions="男,女".split(","),n.ruleForm.userid=e.getStorageSync("userid"),t.refid&&(n.ruleForm.refid=t.refid,n.ruleForm.nickname=e.getStorageSync("nickname")),!t.id){a.next=14;break}return n.ruleForm.id=t.id,a.next=12,n.$api.info("yonghu",n.ruleForm.id);case 12:i=a.sent,n.ruleForm=i.data;case 14:if(n.cross=t.cross,!t.cross){a.next=50;break}o=e.getStorageSync("crossObj"),a.t0=r.default.keys(o);case 18:if((a.t1=a.t0()).done){a.next=50;break}if(s=a.t1.value,"zhanghao"!=s){a.next=24;break}return n.ruleForm.zhanghao=o[s],n.ro.zhanghao=!0,a.abrupt("continue",18);case 24:if("mima"!=s){a.next=28;break}return n.ruleForm.mima=o[s],n.ro.mima=!0,a.abrupt("continue",18);case 28:if("xingming"!=s){a.next=32;break}return n.ruleForm.xingming=o[s],n.ro.xingming=!0,a.abrupt("continue",18);case 32:if("xingbie"!=s){a.next=36;break}return n.ruleForm.xingbie=o[s],n.ro.xingbie=!0,a.abrupt("continue",18);case 36:if("shouji"!=s){a.next=40;break}return n.ruleForm.shouji=o[s],n.ro.shouji=!0,a.abrupt("continue",18);case 40:if("sushehao"!=s){a.next=44;break}return n.ruleForm.sushehao=o[s],n.ro.sushehao=!0,a.abrupt("continue",18);case 44:if("touxiang"!=s){a.next=48;break}return n.ruleForm.touxiang=o[s],n.ro.touxiang=!0,a.abrupt("continue",18);case 48:a.next=18;break;case 50:n.styleChange();case 51:case"end":return a.stop()}}),a)})))()},methods:{styleChange:function(){this.$nextTick((function(){}))},xingbieChange:function(e){this.xingbieIndex=e.target.value,this.ruleForm.xingbie=this.xingbieOptions[this.xingbieIndex]},touxiangTap:function(){var e=this;this.$api.upload((function(t){e.ruleForm.touxiang="upload/"+t.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var t=this;return i(r.default.mark((function n(){var a,u,i,o,s,c,l,f,g,d;return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(t.ruleForm.zhanghao){n.next=3;break}return t.$utils.msg("账号不能为空"),n.abrupt("return");case 3:if(t.ruleForm.mima){n.next=6;break}return t.$utils.msg("密码不能为空"),n.abrupt("return");case 6:if(t.ruleForm.xingming){n.next=9;break}return t.$utils.msg("姓名不能为空"),n.abrupt("return");case 9:if(!t.ruleForm.shouji||t.$validate.isMobile(t.ruleForm.shouji)){n.next=12;break}return t.$utils.msg("手机应输入手机格式"),n.abrupt("return");case 12:if(!t.cross){n.next=28;break}if(o=e.getStorageSync("statusColumnName"),s=e.getStorageSync("statusColumnValue"),""==o){n.next=28;break}if(c=e.getStorageSync("crossObj"),o.startsWith("[")){n.next=24;break}for(l in c)l==o&&(c[l]=s);return f=e.getStorageSync("crossTable"),n.next=22,t.$api.update("".concat(f),c);case 22:n.next=28;break;case 24:a=Number(e.getStorageSync("userid")),u=c["id"],i=e.getStorageSync("statusColumnName"),i=i.replace(/\[/,"").replace(/\]/,"");case 28:if(!u||!a){n.next=50;break}return t.ruleForm.crossuserid=a,t.ruleForm.crossrefid=u,g={page:1,limit:10,crossuserid:a,crossrefid:u},n.next=34,t.$api.list("yonghu",g);case 34:if(d=n.sent,!(d.data.total>=i)){n.next=40;break}return t.$utils.msg(e.getStorageSync("tips")),n.abrupt("return",!1);case 40:if(!t.ruleForm.id){n.next=45;break}return n.next=43,t.$api.update("yonghu",t.ruleForm);case 43:n.next=47;break;case 45:return n.next=47,t.$api.add("yonghu",t.ruleForm);case 47:t.$utils.msgBack("提交成功");case 48:n.next=58;break;case 50:if(!t.ruleForm.id){n.next=55;break}return n.next=53,t.$api.update("yonghu",t.ruleForm);case 53:n.next=57;break;case 55:return n.next=57,t.$api.add("yonghu",t.ruleForm);case 57:t.$utils.msgBack("提交成功");case 58:case"end":return n.stop()}}),n)})))()},optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var t=new Date,n=t.getFullYear(),r=t.getMonth()+1,a=t.getDate();return"start"===e?n-=60:"end"===e&&(n+=2),r=r>9?r:"0"+r,a=a>9?a:"0"+a,"".concat(n,"-").concat(r,"-").concat(a)},toggleTab:function(e){this.$refs[e].show()}}};t.default=s}).call(this,n("543d")["default"])},b230:function(e,t,n){"use strict";(function(e){n("c65d");r(n("66fd"));var t=r(n("a77e"));function r(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])}},[["b230","common/runtime","common/vendor"]]]);