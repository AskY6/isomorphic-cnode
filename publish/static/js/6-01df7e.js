(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{359:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return m});var r=n(1),o=n.n(r),a=n(22),c=n(354),i=n(355);function u(e){return(u="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t,n,r,o,a,c){try{var i=e[a](c),u=i.value}catch(l){return void n(l)}i.done?t(u):Promise.resolve(u).then(r,o)}function s(e){return function(){var t=this,n=arguments;return new Promise(function(r,o){var a=e.apply(t,n);function c(e){l(a,r,o,c,i,"next",e)}function i(e){l(a,r,o,c,i,"throw",e)}c(void 0)})}}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var m=function(e){function t(){var e,n,r,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return r=this,o=(e=p(t)).call.apply(e,[this].concat(c)),n=!o||"object"!==u(o)&&"function"!==typeof o?h(r):o,y(h(h(n)),"View",d),y(h(h(n)),"initialState",{pageTitle:"\u767b\u5f55",token:""}),y(h(h(n)),"handleLogin",s(regeneratorRuntime.mark(function e(){var t,r,o;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=h(h(n)),t.context,r=n.store.getState(),o=r.token,r.location,o&&36===o.length){e.next=5;break}return n.showAlert("\u4ee4\u724c\u683c\u5f0f\u9519\u8bef, \u5e94\u4e3a36\u4f4dUUID\u5b57\u7b26\u4e32"),e.abrupt("return");case 5:return n.showLoading("\u767b\u5f55\u4e2d\u2026\u2026"),e.prev=6,e.next=9,n.fetchUserInfo(o);case 9:if(e.sent){e.next=12;break}throw new Error("\u767b\u9646\u5931\u8d25\uff0c\u8bf7\u91cd\u8bd5");case 12:n.cookie("accesstoken",o),window.location.reload(),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(6),n.showAlert(e.t0.message);case 19:n.hideLoading();case 20:case"end":return e.stop()}},e,this,[[6,16]])}))),n}var n,r,o;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(t,i["a"]),n=t,(r=[{key:"shouldComponentCreate",value:function(){var e=this.context,t=this.location;if(this.isLogin()){var n=e.userInfo,r=t.query.redirect;return r||(r="".concat(e.basename,"/user/").concat(n.loginname)),this.redirect(r),!1}}}])&&f(n.prototype,r),o&&f(n,o),t}();function d(e){var t=e.state,n=e.handlers,r=(t.alertText,t.loadingText,n.handleLogin);return o.a.createElement(c.a,null,o.a.createElement("section",{className:"page-body"},o.a.createElement("div",{className:"label"},o.a.createElement(a.Input,{name:"token",className:"txt",type:"text",placeholder:"Access Token",maxLength:"36"})),o.a.createElement("div",{className:"label"},o.a.createElement("button",{className:"button",onClick:r},"\u767b\u5f55"))))}}}]);