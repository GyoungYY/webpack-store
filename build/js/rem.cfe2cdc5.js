!function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n=window.webpackJsonp;window.webpackJsonp=function(r,a,i){for(var c,s,u,l=0,d=[];l<r.length;l++)s=r[l],o[s]&&d.push(o[s][0]),o[s]=0;for(c in a)Object.prototype.hasOwnProperty.call(a,c)&&(e[c]=a[c]);for(n&&n(r,a,i);d.length;)d.shift()();if(i)for(l=0;l<i.length;l++)u=t(t.s=i[l]);return u};var r={},o={10:0};t.e=function(e){function n(){c.onerror=c.onload=null,clearTimeout(s);var t=o[e];0!==t&&(t&&t[1](new Error("Loading chunk "+e+" failed.")),o[e]=void 0)}var r=o[e];if(0===r)return new Promise(function(e){e()});if(r)return r[2];var a=new Promise(function(t,n){r=o[e]=[t,n]});r[2]=a;var i=document.getElementsByTagName("head")[0],c=document.createElement("script");c.type="text/javascript",c.charset="utf-8",c.async=!0,c.timeout=12e4,t.nc&&c.setAttribute("nonce",t.nc),c.src=t.p+"./js/"+e+"."+{0:"a87b9e60",1:"f8b7c2ea",2:"7f52fdc7",3:"204f0547",4:"a5d247ed",5:"b7594a2f",6:"96a4de16",7:"178cceb7",8:"52fee34a",9:"769cbb0a"}[e]+".js";var s=setTimeout(n,12e4);return c.onerror=c.onload=n,i.appendChild(c),a},t.m=e,t.c=r,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t.oe=function(e){throw console.error(e),e},t(t.s=36)}({36:function(e,t,n){"use strict";console.log("执行rem布局"),function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};t.m=e,t.c=n,t.p="",t(0)}([function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n=window;t.default=n.flex=function(e,t){var r=e||100,o=t||1,a=n.document,i=navigator.userAgent,c=i.match(/Android[\S\s]+AppleWebkit\/(\d{3})/i),s=i.match(/U3\/((\d+|\.){5,})/i),u=s&&parseInt(s[1].split(".").join(""),10)>=80,l=navigator.appVersion.match(/(iphone|ipad|ipod)/gi),d=n.devicePixelRatio||1;l||c&&c[1]>534||u||(d=1);var p=1/d,f=a.querySelector('meta[name="viewport"]');f||((f=a.createElement("meta")).setAttribute("name","viewport"),a.head.appendChild(f)),f.setAttribute("content","width=device-width,user-scalable=no,initial-scale="+p+",maximum-scale="+p+",minimum-scale="+p),a.documentElement.style.fontSize=r/2*d*o+"px"},e.exports=t.default}]),flex(100,1),"micromessenger"==navigator.userAgent.toLowerCase().match(/MicroMessenger/i)?(document.getElementById("topBar").style.display="none",document.getElementById("topBar").style.padding="0"):console.log("is no wechat")}});