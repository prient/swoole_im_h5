(function(n){function e(e){for(var o,r,u=e[0],s=e[1],c=e[2],l=0,d=[];l<u.length;l++)r=u[l],i[r]&&d.push(i[r][0]),i[r]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(n[o]=s[o]);f&&f(e);while(d.length)d.shift()();return a.push.apply(a,c||[]),t()}function t(){for(var n,e=0;e<a.length;e++){for(var t=a[e],o=!0,r=1;r<t.length;r++){var s=t[r];0!==i[s]&&(o=!1)}o&&(a.splice(e--,1),n=u(u.s=t[0]))}return n}var o={},i={index:0},a=[];function r(n){return u.p+"static/js/"+({"pages-index-index":"pages-index-index","pages-login-login":"pages-login-login","pages-private-private":"pages-private-private"}[n]||n)+"."+{"pages-index-index":"f9c96c09","pages-login-login":"bd2e7166","pages-private-private":"dc378ea2"}[n]+".js"}function u(e){if(o[e])return o[e].exports;var t=o[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,u),t.l=!0,t.exports}u.e=function(n){var e=[],t=i[n];if(0!==t)if(t)e.push(t[2]);else{var o=new Promise(function(e,o){t=i[n]=[e,o]});e.push(t[2]=o);var a,s=document.createElement("script");s.charset="utf-8",s.timeout=120,u.nc&&s.setAttribute("nonce",u.nc),s.src=r(n),a=function(e){s.onerror=s.onload=null,clearTimeout(c);var t=i[n];if(0!==t){if(t){var o=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src,r=new Error("Loading chunk "+n+" failed.\n("+o+": "+a+")");r.type=o,r.request=a,t[1](r)}i[n]=void 0}};var c=setTimeout(function(){a({type:"timeout",target:s})},12e4);s.onerror=s.onload=a,document.head.appendChild(s)}return Promise.all(e)},u.m=n,u.c=o,u.d=function(n,e,t){u.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},u.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},u.t=function(n,e){if(1&e&&(n=u(n)),8&e)return n;if(4&e&&"object"===typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(u.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)u.d(t,o,function(e){return n[e]}.bind(null,o));return t},u.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return u.d(e,"a",e),e},u.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},u.p="/",u.oe=function(n){throw console.error(n),n};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var f=c;a.push([0,"chunk-vendors"]),t()})({0:function(n,e,t){n.exports=t("0f9e")},"0f9e":function(n,e,t){"use strict";var o=t("288e"),i=o(t("cebc"));t("cadf"),t("551c"),t("097d"),t("f06b"),t("1c31");var a=o(t("e143")),r=o(t("aaac"));a.default.config.productionTip=!1,r.default.mpType="app";var u=new a.default((0,i.default)({},r.default));u.$mount()},"3fa6":function(n,e,t){"use strict";var o=t("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,t("3b2b"),t("a481");var i=o(t("bf2a")),a=o(t("ed9a")),r={globalData:{ws:i.default},onLaunch:function(n){if(void 0!=n.query.data){var e=JSON.parse(n.query.data);a.default.wxauto(e,function(n){console.info(n),n.code&&uni.setStorage({key:"token",data:n.data.openid,success:function(){i.default.ws_start()}})})}else uni.getStorage({key:"token",success:function(n){i.default.ws_start()},fail:function(){console.info("shouquan "),window.location=a.default.auto_uri}})},onShow:function(){console.log("127.0.0.1:8080"==window.location.host)},onHide:function(){for(var n=[],e=0,t=i.default.msg_list.length;t--;t>0)if(n.push(i.default.msg_list[t]),1e3==e++)break;n=n.reverse(),uni.setStorage({key:"msg_list",data:n})}};e.default=r,Date.prototype.format=function(n){var e={"M+":this.getMonth()+1,"d+":this.getDate(),"h+":this.getHours(),"m+":this.getMinutes(),"s+":this.getSeconds(),"q+":Math.floor((this.getMonth()+3)/3),S:this.getMilliseconds()};for(var t in/(y+)/.test(n)&&(n=n.replace(RegExp.$1,(this.getFullYear()+"").substr(4-RegExp.$1.length))),e)new RegExp("("+t+")").test(n)&&(n=n.replace(RegExp.$1,1==RegExp.$1.length?e[t]:("00"+e[t]).substr((""+e[t]).length)));return n}},"7b0b":function(n,e,t){e=n.exports=t("2350")(!1),e.push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\t/*每个页面公共css */uni-page-body{width:95%;margin:auto;padding:0}",""])},"7b72":function(n,e,t){"use strict";var o=t("a3bd"),i=t.n(o);i.a},9972:function(n,e,t){"use strict";var o=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("App",{attrs:{keepAliveInclude:n.keepAliveInclude}})},i=[];t.d(e,"a",function(){return o}),t.d(e,"b",function(){return i})},a3bd:function(n,e,t){var o=t("7b0b");"string"===typeof o&&(o=[[n.i,o,""]]),o.locals&&(n.exports=o.locals);var i=t("4f06").default;i("648c4a75",o,!0,{sourceMap:!1,shadowMode:!1})},aaac:function(n,e,t){"use strict";t.r(e);var o=t("9972"),i=t("dbfe");for(var a in i)"default"!==a&&function(n){t.d(e,n,function(){return i[n]})}(a);t("7b72");var r=t("2877"),u=Object(r["a"])(i["default"],o["a"],o["b"],!1,null,null,null);e["default"]=u.exports},bf2a:function(n,e,t){"use strict";var o=t("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i,a=o(t("f499")),r="127.0.0.1:8080"==window.location.host?"ws://127.0.0.1:9443":"ws://ws.prient.wang",u=!1,s=[],c=!1,l=[];uni.getStorage({key:"msg_list",success:function(n){l=n.data}});var f=new Array,d={};function g(){clearInterval(i),console.info("开始ws："),p(),y(),m(),i=setInterval(function(){1==c?v("ping..."):(console.info("重新开始监听了"),g())},1e4)}function p(){0==c&&uni.getStorage({key:"token",success:function(n){uni.connectSocket({url:r+"?token="+n.data,header:{"content-type":"application/json"},method:"method",success:function(n){c=!0,_()}})}})}function _(){uni.onSocketOpen(function(n){u=!0;for(var e=0;e<s.length;e++)v(s[e]);s=[]})}function v(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0;u?uni.sendSocketMessage({data:(0,a.default)({msg:n,type:e,token:t,mgs_type:i,to_token:o})}):s.push(n)}function y(){uni.onSocketMessage(function(n){var e=JSON.parse(n.data);if(9==e.type&&20001==e.code)console.info("————————————————其他设备登录————————————————"),clearInterval(i),uni.showModal({title:"警告",content:"用户在别的设备上登录，是否重新登录",success:function(n){n.confirm?g():n.cancel&&console.log("用户点击取消")}});else for(var t in f.splice(0,f.length),e.userlist)f.push(e.userlist[t]);1!=e.type&&l.push(e.result)})}function m(){uni.onSocketClose(function(n){console.log("WebSocket 重新链接"),c=!1})}var h={ws_start:g,ws_reload:p,ws_open:_,ws_msg:y,msg_list:l,ws_send:v,user_list:f,ono_over_time:d};e.default=h},dbfe:function(n,e,t){"use strict";t.r(e);var o=t("3fa6"),i=t.n(o);for(var a in o)"default"!==a&&function(n){t.d(e,n,function(){return o[n]})}(a);e["default"]=i.a},ed9a:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o="127.0.0.1:8080"==window.location.host?"http://loca.swoolefw.com":"http://imapi.prient.wang",i="https://www.csyaxiong.top/wxauto/getwxcode?url=http://im.prient.wang";function a(n,e){uni.showLoading({}),uni.request({url:o+"/demo/login",data:n,dataType:"json",success:function(n){uni.hideLoading(),e(n.data)}})}function r(n,e){uni.showLoading({}),uni.request({url:o+"/demo/uinfo_auto",data:n,dataType:"json",success:function(n){uni.hideLoading(),e(n.data)}})}var u={login:a,wxauto:r,auto_uri:i};e.default=u},f06b:function(n,e,t){"use strict";(function(n){var e=t("288e"),o=e(t("5176")),i=e(t("e143"));n["________"]=!0,delete n["________"],n.__uniConfig={globalStyle:{navigationBarTextStyle:"black",navigationBarTitleText:"im",navigationBarBackgroundColor:"#F8F8F8",backgroundColor:"#F8F8F8"}},n.__uniConfig.router={mode:"hash",base:"/"},n.__uniConfig["async"]={loading:"AsyncLoading",error:"AsyncError",delay:200,timeout:3e3},n.__uniConfig.debug=!1,n.__uniConfig.networkTimeout={request:6e3,connectSocket:6e3,uploadFile:6e3,downloadFile:6e3},n.__uniConfig.sdkConfigs={},n.__uniConfig.qqMapKey="XVXBZ-NDMC4-JOGUS-XGIEE-QVHDZ-AMFV2",n.__uniConfig.nvue={"flex-direction":"column"},i.default.component("pages-index-index",function(n){var e={component:t.e("pages-index-index").then(function(){return n(t("5771"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(e.loading={name:"SystemAsyncLoading",render:function(n){return n(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(e.error={name:"SystemAsyncError",render:function(n){return n(__uniConfig["async"]["error"])}}),e}),i.default.component("pages-login-login",function(n){var e={component:t.e("pages-login-login").then(function(){return n(t("ffd9"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(e.loading={name:"SystemAsyncLoading",render:function(n){return n(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(e.error={name:"SystemAsyncError",render:function(n){return n(__uniConfig["async"]["error"])}}),e}),i.default.component("pages-private-private",function(n){var e={component:t.e("pages-private-private").then(function(){return n(t("568c"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(e.loading={name:"SystemAsyncLoading",render:function(n){return n(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(e.error={name:"SystemAsyncError",render:function(n){return n(__uniConfig["async"]["error"])}}),e}),n.__uniRoutes=[{path:"/",alias:"/pages/index/index",component:{render:function(n){return n("Page",{props:(0,o.default)({isQuit:!0,isEntry:!0},__uniConfig.globalStyle,{titleNView:!1})},[n("pages-index-index",{slot:"page"})])}},meta:{id:1,name:"pages-index-index",isNVue:!1,pagePath:"pages/index/index",isQuit:!0,isEntry:!0,windowTop:44}},{path:"/pages/login/login",component:{render:function(n){return n("Page",{props:(0,o.default)({},__uniConfig.globalStyle,{titleNView:!1})},[n("pages-login-login",{slot:"page"})])}},meta:{name:"pages-login-login",isNVue:!1,pagePath:"pages/login/login",windowTop:44}},{path:"/pages/private/private",component:{render:function(n){return n("Page",{props:(0,o.default)({},__uniConfig.globalStyle,{titleNView:{titleColor:"#fff",backgroundColor:"#2C405A",titleSize:"24upx"}})},[n("pages-private-private",{slot:"page"})])}},meta:{name:"pages-private-private",isNVue:!1,pagePath:"pages/private/private",windowTop:44}},{path:"/preview-image",component:{render:function(n){return n("Page",{props:{navigationStyle:"custom"}},[n("system-preview-image",{slot:"page"})])}},meta:{name:"preview-image",pagePath:"/preview-image"}},{path:"/choose-location",component:{render:function(n){return n("Page",{props:{navigationStyle:"custom"}},[n("system-choose-location",{slot:"page"})])}},meta:{name:"choose-location",pagePath:"/choose-location"}},{path:"/open-location",component:{render:function(n){return n("Page",{props:{navigationStyle:"custom"}},[n("system-open-location",{slot:"page"})])}},meta:{name:"open-location",pagePath:"/open-location"}}]}).call(this,t("c8ba"))}});