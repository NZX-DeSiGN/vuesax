(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{435:function(n,t,i){},553:function(n,t,i){"use strict";var o=i(435);i.n(o).a},639:function(n,t,i){"use strict";i.r(t);i(4);var o={data:function(){return{types:["default","point","radius","corners","border","sound","material"],activeLoading:!1}},mounted:function(){var n=this;this.types.forEach(function(t){console.log(t),n.$vs.loading({container:"#loading-".concat(t),type:t,text:t})})},methods:{openLoading:function(n){var t=this;this.activeLoading=!0,this.$vs.loading({type:n}),setTimeout(function(){t.activeLoading=!1,t.$vs.loading.close()},3e3)}}},a=(i(553),i(1)),e=Object(a.a)(o,function(){var n=this,t=n.$createElement,i=n._self._c||t;return i("div",{staticClass:"centerx example-loading"},[i("div",{staticClass:"fill-row-loading"},n._l(n.types,function(t){return i("div",{staticClass:"vs-con-loading__container loading-example",class:{activeLoading:n.activeLoading},attrs:{id:["loading-"+t]},on:{click:function(i){n.openLoading(t)}}})}))])},[],!1,null,null,null);e.options.__file="Type.vue";t.default=e.exports}}]);