webpackJsonp([11],{"6+aJ":function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=s("mvHQ"),i=s.n(e),o={data:function(){return this.chartSettings={axisSite:{right:["提交金额"]},xAxisType:"category",yAxisType:["normal","normal"]},{chartData:{columns:["日期","提交订单","提交金额","成功订单","成功金额"],rows:""},charts:{backgroundColor:"rgb(255, 255, 255)",textStyle:{color:"rgb(104, 114, 140)",fontFamily:"Microsoft YaHei",fontSize:10,lineHeight:25},xAxis:{splitLine:{show:!0,lineStyle:{color:["rgba(223, 224, 232, 0.9)"],type:"dashed"}}},yAxis:{splitLine:{show:!0,lineStyle:{color:["rgba(223, 224, 232, 0.9)"],type:"dashed"}}},tooltip:{padding:10,backgroundColor:"rgb(255, 255, 255)",borderColor:"rgb(51, 51, 51)",textStyle:{color:"rgb(104, 114, 140)",fontFamily:"Microsoft YaHei",fontSize:12},extraCssText:"box-shadow: rgba(80, 125, 250, 0.06) 0px 4px 8px 0px;border-radius: 5px;line-height:25px;"},legend:{data:[{name:"提交订单",icon:"roundRect",textStyle:{color:"#a2a9ba"}},{name:"提交金额",icon:"roundRect",textStyle:{color:"#a2a9ba"}},{name:"成功订单",icon:"roundRect",textStyle:{color:"#a2a9ba"}},{name:"成功金额",icon:"roundRect",textStyle:{color:"#a2a9ba"}}],backgroundColor:"rgb(255, 255, 255)",borderColor:"rgb(51, 51, 51)"}},user:{phone:"",balance_data:{balance:"0.00"}},chartsloading:!0,statistics_today:"",statistics_yesterday:"",today:!0,spin:!1}},mounted:function(){this.getstatistics(7),this.getinfo()},methods:{getinfo:function(){if(localStorage.getItem("user_info")){var t=JSON.parse(localStorage.getItem("user_info"));t.time<(new Date).getTime()?this.ajaxuserinfo():this.user=t.data}else this.ajaxuserinfo()},ajaxuserinfo:function(){var t=this;this.$http.get("api/user/userinfo",{},function(a){if(200==a.status)if(200==a.data.code){var s={};s.time=(new Date).getTime()+1e4,s.data=a.data.data,localStorage.setItem("user_info",i()(s)),t.user=s.data}else 201==a.data.code&&t.$Message.warning(a.data.msg);else console.log(a.message)})},getstatistics:function(t){if(localStorage.getItem("user_statistics_"+t)){var a=JSON.parse(localStorage.getItem("user_statistics_"+t));a.time<(new Date).getTime()?this.ajaxstatistics(t):(this.chartData.rows=a.data.chart,this.chartsloading=!1,this.statistics_today=a.data.Today,this.statistics_yesterday=a.data.Yesterday)}else this.ajaxstatistics(t)},ajaxstatistics:function(t){var a=this;this.$http.post("api/user/statistics",{time:t},function(s){if(200==s.status)if(200==s.data.code){var e={};e.time=(new Date).getTime()+5e4,e.data=s.data.data,localStorage.setItem("user_statistics_"+t,i()(e)),a.chartData.rows=e.data.chart,a.chartsloading=!1,a.statistics_today=e.data.Today,a.statistics_yesterday=e.data.Yesterday}else 201==s.data.code&&a.$Message.warning(s.data.msg);else console.log(s.message)})}}},n={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{attrs:{id:"backstage_index"}},[s("div",{staticClass:"hdie"},[s("div",{staticClass:"ure_toux"},[s("div",{staticClass:"toux"},[s("span",[t._v("K")]),t._v(" "),s("span",[t._v(t._s(t.user.phone))])])]),t._v(" "),s("div",{staticClass:"data_box"},[s("div",{staticClass:"tix_data_box"},[s("img",{staticClass:"yue_qianb",attrs:{src:"/static/icon/2.png"}}),t._v(" "),s("div",[s("span",[t._v(t._s(t.user.balance_data.balance))]),t._v(" "),s("span",[t._v("账户余额")])]),t._v(" "),s("div",{staticClass:"tx"},[t._v("提现")]),t._v(" "),s("img",{staticClass:"toubm",attrs:{src:"/static/img/toubm.png"}})])]),t._v(" "),s("div",{staticClass:"duox_box"},[s("div",[t.today?s("span",[t._v(t._s(t.statistics_today.total_money))]):s("span",[t._v(t._s(t.statistics_yesterday.total_money))]),t._v(" "),t.today?s("span",[t._v("今日订单金额")]):s("span",[t._v("昨日订单金额")]),t._v(" "),s("img",{attrs:{src:"/static/icon/3.png"},on:{click:function(a){t.today=!t.today}}})]),t._v(" "),s("div",[t.today?s("span",[t._v(t._s(t.statistics_today.total_count))]):s("span",[t._v(t._s(t.statistics_yesterday.total_money))]),t._v(" "),t.today?s("span",[t._v("今日订单量")]):s("span",[t._v("昨日订单量")])]),t._v(" "),s("div",[t.today?s("span",[t._v(t._s(t.statistics_today.total_success_count))]):s("span",[t._v(t._s(t.statistics_yesterday.total_success_count))]),t._v(" "),t.today?s("span",[t._v("今日成功订单")]):s("span",[t._v("昨日成功订单")])]),t._v(" "),s("div",[t.today?s("span",[t._v(t._s(t.statistics_today.total_success_money))]):s("span",[t._v(t._s(t.statistics_yesterday.total_success_money))]),t._v(" "),t.today?s("span",[t._v("今日成功金额")]):s("span",[t._v("昨日成功金额")])])])]),t._v(" "),s("div",{staticClass:"echarts_box"},[s("div",{attrs:{"data-v-16175d64":"",id:"echarts"}},[s("ve-line",{staticStyle:{width:"784px",height:"370px","-webkit-tap-highlight-color":"transparent","user-select":"none",position:"relative"},attrs:{data:t.chartData,settings:t.chartSettings,extend:t.charts,loading:t.chartsloading,id:"myChart"}}),t._v(" "),s("span",{staticClass:"xy_name",attrs:{"data-v-16175d64":""}},[t._v("日期")]),t._v(" "),s("span",{staticClass:"xy_name",attrs:{"data-v-16175d64":""}},[t._v("订单数")]),t._v(" "),s("span",{staticClass:"xy_name",attrs:{"data-v-16175d64":""}},[t._v("金额")]),t._v(" "),t._m(0)],1)])])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"tiet_box",attrs:{"data-v-16175d64":""}},[a("span",{staticClass:"tite",attrs:{"data-v-50c5b756":""}},[this._v("订单统计")])])}]},r=s("VU/8")(o,n,!1,null,null,null);a.default=r.exports}});
//# sourceMappingURL=11.4a35da5389f6be4734fa.js.map