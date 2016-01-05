/*
 AngularJS v1.2.0-rc.3
 (c) 2010-2012 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(m,f,n){'use strict';f.module("ngAnimate",["ng"]).config(["$provide","$animateProvider",function(A,s){var v=f.noop,w=f.forEach,B=s.$$selectors,k="$$ngAnimateState",x="ng-animate",u={running:!0};A.decorator("$animate",["$delegate","$injector","$sniffer","$rootElement","$timeout","$rootScope",function(q,m,y,n,p,g){function G(a){if(a){var c=[],b={};a=a.substr(1).split(".");(y.transitions||y.animations)&&a.push("");for(var e=0;e<a.length;e++){var d=a[e],l=B[d];l&&!b[d]&&(c.push(m.get(l)),b[d]=
!0)}return c}}function d(a,c,b,e,d,f){function g(){if(!g.hasBeenRun){g.hasBeenRun=!0;var a=b.data(k);a&&(r?l(b):(a.flagTimer=p(function(){l(b)},0,!1),b.data(k,a)));(f||v)()}}var q=(" "+((b.attr("class")||"")+" "+c)).replace(/\s+/g,"."),h=[];w(G(q),function(c,b){h.push({start:c[a]})});e||(e=d?d.parent():b.parent());d={running:!0};if((e.inheritedData(k)||d).running||0==h.length)g();else{e=b.data(k)||{};var r="addClass"==a||"removeClass"==a;if(e.running){if(r&&e.structural){f&&f();return}p.cancel(e.flagTimer);
t(e.animations);(e.done||v)()}b.data(k,{running:!0,structural:!r,animations:h,done:g});b.addClass(x);w(h,function(a,e){var d=function(){a:{h[e].done=!0;(h[e].endFn||v)();for(var a=0;a<h.length;a++)if(!h[a].done)break a;g()}};a.start?a.endFn=r?a.start(b,c,d):a.start(b,d):d()})}}function z(a){f.forEach(a[0].querySelectorAll("."+x),function(a){a=f.element(a);var b=a.data(k);b&&(t(b.animations),l(a))})}function t(a){w(a,function(a){(a.endFn||v)(!0)})}function l(a){a.removeClass(x);a.removeData(k)}n.data(k,
u);return{enter:function(a,c,b,e){this.enabled(!1,a);q.enter(a,c,b);g.$$postDigest(function(){d("enter","ng-enter",a,c,b,function(){e&&p(e,0,!1)})})},leave:function(a,c){z(a);this.enabled(!1,a);g.$$postDigest(function(){d("leave","ng-leave",a,null,null,function(){q.leave(a,c)})})},move:function(a,c,b,e){z(a);this.enabled(!1,a);q.move(a,c,b);g.$$postDigest(function(){d("move","ng-move",a,null,null,function(){e&&p(e,0,!1)})})},addClass:function(a,c,b){d("addClass",c,a,null,null,function(){q.addClass(a,
c,b)})},removeClass:function(a,c,b){d("removeClass",c,a,null,null,function(){q.removeClass(a,c,b)})},enabled:function(a,c){switch(arguments.length){case 2:if(a)l(c);else{var b=c.data(k)||{};b.structural=!0;b.running=!0;c.data(k,b)}break;case 1:u.running=!a;break;default:a=!u.running}return!!a}}}]);s.register("",["$window","$sniffer","$timeout",function(k,v,y){function w(a){C.push(a);y.cancel(D);D=y(function(){f.forEach(C,function(a){a()});C=[];D=null;r={}},10,!1)}function p(a,b,d){var f=r[b];if(!f){var h=
0,E=0,p=0,m=0;t(a,function(a){if(a.nodeType==B&&(a=k.getComputedStyle(a)||{},h=Math.max(g(a[l+e]),h),!d)){E=Math.max(g(a[l+s]),E);m=Math.max(g(a[c+s]),m);var b=g(a[c+e]);0<b&&(b*=parseInt(a[c+A])||1);p=Math.max(b,p)}});f={transitionDelay:E,animationDelay:m,transitionDuration:h,animationDuration:p};r[b]=f}return f}function g(a){var b=0;a=f.isString(a)?a.split(/\s*,\s*/):[];t(a,function(a){b=Math.max(parseFloat(a)||0,b)});return b}function x(a){var b=a.parent(),c=b.data(h);c||(b.data(h,++F),c=F);return c+
"-"+a[0].className}function d(c,d,e){function f(a){a.stopPropagation();a=a.originalEvent||a;var b=a.$manualTimeStamp||a.timeStamp||Date.now();Math.max(b-r,0)>=m&&a.elapsedTime>=k&&e()}var h=x(c);if(!(0<p(c,h,!0).transitionDuration)){c.addClass(d);var g=p(c,h+" "+d),k=Math.max(g.transitionDuration,g.animationDuration);if(0<k){var m=1E3*Math.max(g.transitionDelay,g.animationDelay),r=Date.now(),q=c[0];0<g.transitionDuration&&(q.style[l+u]="none");var n="";t(d.split(" "),function(a,b){n+=(0<b?" ":"")+
a+"-active"});var s=b+" "+a;w(function(){0<g.transitionDuration&&(q.style[l+u]="");c.addClass(n)});c.on(s,f);return function(a){c.off(s,f);c.removeClass(d);c.removeClass(n);a&&e()}}c.removeClass(d)}e()}function z(a,b){var c="";a=f.isArray(a)?a:a.split(/\s+/);t(a,function(a,d){a&&0<a.length&&(c+=(0<d?" ":"")+a+b)});return c}var t=f.forEach,l,a,c,b;m.ontransitionend===n&&m.onwebkittransitionend!==n?(l="WebkitTransition",a="webkitTransitionEnd transitionend"):(l="transition",a="transitionend");m.onanimationend===
n&&m.onwebkitanimationend!==n?(c="WebkitAnimation",b="webkitAnimationEnd animationend"):(c="animation",b="animationend");var e="Duration",u="Property",s="Delay",A="IterationCount",B=1,h="$ngAnimateKey",r={},F=0,C=[],D;return{enter:function(a,b){return d(a,"ng-enter",b)},leave:function(a,b){return d(a,"ng-leave",b)},move:function(a,b){return d(a,"ng-move",b)},addClass:function(a,b,c){return d(a,z(b,"-add"),c)},removeClass:function(a,b,c){return d(a,z(b,"-remove"),c)}}}])}])})(window,window.angular);
//# sourceMappingURL=angular-animate.min.js.map
