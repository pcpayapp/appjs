webpackJsonp([14],{hw0D:function(s,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={data:function(){return{spin:!1,user:JSON.parse(localStorage.getItem("user_info")).data,password:"",repass:"",safety_code:""}},methods:{getform:function(){this.password.length<6?this.$Message.warning("请输入正确的旧密码"):this.repass.length<6?this.$Message.warning("请输入6~20位新密码"):1==this.user.safety&&this.safety_code.length<5?this.$Message.warning("请输入正确的谷歌验证码"):this.ajaxform()},ajaxform:function(){var s=this;this.spin=!0,this.$http.post("api/user/change_password",{password:this.password,repass:this.repass,safety_code:this.safety_code},function(t){s.spin=!1,200==t.status&&(200==t.data.code?(s.$router.push({path:"/main"}),s.$Message.success(t.data.msg)):201==t.data.code&&s.$Message.warning(t.data.msg))})}}},i={render:function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{attrs:{id:"change_password"}},[e("div",{staticClass:"tit"},[s._v("修改密码")]),s._v(" "),e("div",{staticClass:"df"},[e("div",{staticClass:"set_left"},[s._v("输入旧密码")]),s._v(" "),e("div",{staticClass:"set_right"},[e("input",{directives:[{name:"model",rawName:"v-model",value:s.password,expression:"password"}],staticClass:"input_km",attrs:{type:"text",placeholder:"请输入旧密码"},domProps:{value:s.password},on:{input:function(t){t.target.composing||(s.password=t.target.value)}}})])]),s._v(" "),e("div",{staticClass:"df"},[e("div",{staticClass:"set_left"},[s._v("输入新密码")]),s._v(" "),e("div",{staticClass:"set_right"},[e("input",{directives:[{name:"model",rawName:"v-model",value:s.repass,expression:"repass"}],staticClass:"input_km",attrs:{type:"password",placeholder:"请输入新密码6~20位"},domProps:{value:s.repass},on:{input:function(t){t.target.composing||(s.repass=t.target.value)}}})])]),s._v(" "),1==s.user.safety?e("div",{staticClass:"df"},[e("div",{staticClass:"set_left"},[s._v("输入谷歌验证码")]),s._v(" "),e("div",{staticClass:"set_right"},[e("input",{directives:[{name:"model",rawName:"v-model",value:s.safety_code,expression:"safety_code"}],staticClass:"input_km",attrs:{type:"number",placeholder:"请输入谷歌验证码"},domProps:{value:s.safety_code},on:{input:function(t){t.target.composing||(s.safety_code=t.target.value)}}})])]):s._e(),s._v(" "),e("div",{staticClass:"set_btns"},[e("div",{staticClass:"set_btn",on:{click:s.getform}},[s._v("保存")])]),s._v(" "),s.spin?e("Spin",{attrs:{fix:""}}):s._e()],1)},staticRenderFns:[]},r=e("VU/8")(a,i,!1,null,null,null);t.default=r.exports}});
//# sourceMappingURL=14.eaa86630f231463b6e5b.js.map