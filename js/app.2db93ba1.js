(function(t){function e(e){for(var o,i,s=e[0],c=e[1],h=e[2],p=0,d=[];p<s.length;p++)i=s[p],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&d.push(n[i][0]),n[i]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);u&&u(e);while(d.length)d.shift()();return r.push.apply(r,h||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],o=!0,s=1;s<a.length;s++){var c=a[s];0!==n[c]&&(o=!1)}o&&(r.splice(e--,1),t=i(i.s=a[0]))}return t}var o={},n={app:0},r=[];function i(e){if(o[e])return o[e].exports;var a=o[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=o,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(a,o,function(e){return t[e]}.bind(null,o));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/dist/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var h=0;h<s.length;h++)e(s[h]);var u=c;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"00bc":function(t,e,a){"use strict";a("a37c")},"013e":function(t,e,a){},"041b":function(t,e,a){},"22b7":function(t,e,a){"use strict";a("b1d9")},"36a8":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var o=a("7a23");function n(t,e,a,n,r,i){var s=Object(o["i"])("Stage");return Object(o["e"])(),Object(o["c"])(s,{shapes:r.shapes,pegs:r.pegs},null,8,["shapes","pegs"])}a("d81d");var r=Object(o["j"])("data-v-aeb226a8");Object(o["g"])("data-v-aeb226a8");var i={class:"backstage"};Object(o["f"])();var s=r((function(t,e,a,n,r,s){var c=Object(o["i"])("Board3"),h=Object(o["i"])("Board2"),u=Object(o["i"])("Board"),p=Object(o["i"])("Shape");return Object(o["e"])(),Object(o["c"])(o["a"],null,[Object(o["d"])(c),Object(o["d"])("div",i,[Object(o["d"])(h)]),Object(o["d"])("div",{onMouseup:e[1]||(e[1]=function(){return s.mouseup&&s.mouseup.apply(s,arguments)}),onMousedown:e[2]||(e[2]=function(){return s.mousedown&&s.mousedown.apply(s,arguments)}),onMousemove:e[3]||(e[3]=function(){return s.mousemove&&s.mousemove.apply(s,arguments)}),class:"stage"},[Object(o["d"])(u,{pegs:a.pegs},null,8,["pegs"]),(Object(o["e"])(!0),Object(o["c"])(o["a"],null,Object(o["h"])(a.shapes,(function(t,e){return Object(o["e"])(),Object(o["c"])(p,{key:e,id:e,onMove:s.move,onRotate:s.rotate,onFlip:s.flip,shapeData:r.shapeData[e],position:{x:r.shapeData[e].x,y:r.shapeData[e].y,z:r.shapeData[e].z,size:r.shapeData[e].size,rotate:r.shapeData[e].rotate||0}},null,8,["id","onMove","onRotate","onFlip","shapeData","position"])})),128))],32)],64)})),c=a("2909"),h=(a("159b"),Object(o["j"])("data-v-4e5241e4"));Object(o["g"])("data-v-4e5241e4");var u={class:"board"};Object(o["f"])();var p=h((function(t,e,a,n,r,i){var s=Object(o["i"])("Peg");return Object(o["e"])(),Object(o["c"])("div",u,[(Object(o["e"])(!0),Object(o["c"])(o["a"],null,Object(o["h"])(a.pegs,(function(t,e){return Object(o["e"])(),Object(o["c"])(s,{key:e,position:t},null,8,["position"])})),128))])})),d=Object(o["j"])("data-v-77b6d95d"),f=d((function(t,e,a,n,r,i){return Object(o["e"])(),Object(o["c"])("div",{class:"peg",x:t.x,style:i.cssProps},null,12,["x"])})),l={name:"Peg",props:{position:Object},computed:{cssProps:function(){return{"--x":50*this.position.x+2+"px","--y":50*this.position.y+2+"px"}}}};a("d127");l.render=f,l.__scopeId="data-v-77b6d95d";var v=l,m={name:"Shape",components:{Peg:v},props:{pegs:Array},created:function(){console.log(this.pegs)}};a("a114");m.render=p,m.__scopeId="data-v-4e5241e4";var b=m,g=Object(o["j"])("data-v-e5bd3dac");Object(o["g"])("data-v-e5bd3dac");var y={class:"board"};Object(o["f"])();var x=g((function(t,e){return Object(o["e"])(),Object(o["c"])("div",y)}));a("00bc");const j={};j.render=x,j.__scopeId="data-v-e5bd3dac";var O=j,D=Object(o["j"])("data-v-65e86610");Object(o["g"])("data-v-65e86610");var I={class:"board"};Object(o["f"])();var w=D((function(t,e){return Object(o["e"])(),Object(o["c"])("div",I)}));a("5efb");const M={};M.render=w,M.__scopeId="data-v-65e86610";var S=M,k=Object(o["j"])("data-v-6bfe5d78"),z=k((function(t,e,a,n,r,i){return Object(o["e"])(),Object(o["c"])("div",{ref:"shape",onMousedown:e[1]||(e[1]=function(){return i.mousedown&&i.mousedown.apply(i,arguments)}),onMousemove:e[2]||(e[2]=function(){return i.mousemove&&i.mousemove.apply(i,arguments)}),onMouseout:e[3]||(e[3]=function(){return i.mouseout&&i.mouseout.apply(i,arguments)}),onDblclick:e[4]||(e[4]=function(){return i.dblclick&&i.dblclick.apply(i,arguments)}),class:"shape"},[(Object(o["e"])(),Object(o["c"])("svg",{width:"100%",viewBox:r.viewbox},[Object(o["d"])("g",null,[(Object(o["e"])(!0),Object(o["c"])(o["a"],null,Object(o["h"])(r.defnCoords,(function(t,e){return Object(o["e"])(),Object(o["c"])("rect",{key:e,x:t.x+.02,y:t.y+.02,width:"0.975",height:"0.975",stroke:"rgb(85 85 85 / 75%)","stroke-width":"0.025",rx:"0.1",fill:a.shapeData.color,"data-target":"true"},null,8,["x","y","fill"])})),128))])],8,["viewBox"]))],544)})),_=(a("a9e3"),a("99af"),10),P=1;function X(t){var e=t.reduce((function(t,e,a){return e.forEach((function(e,o){e&&t.push({x:o,y:a})})),t}),[]);return e}var Y={name:"Shape",props:{id:Number,shapeData:Object,position:Object},watch:{position:function(t){this.render(t.x,t.y,t.rotate,t.size,t.z)}},mounted:function(){this.render(this.shapeData.x,this.shapeData.y)},data:function(){return{moveStart:{x:null,y:null},moveNow:{x:null,y:null},defnCoords:X(this.shapeData.defn),width:this.shapeData.defn[0].length,height:this.shapeData.defn.length,viewbox:"0 0 ".concat(this.shapeData.defn[0].length," ").concat(this.shapeData.defn.length)}},methods:{mouseout:function(){this.render(this.shapeData.x,this.shapeData.y,this.shapeData.rotate,this.shapeData.size,this.shapeData.z),_=10,P*=-1},mousemove:function(t){if(t.target.dataset.target){var e=this.$refs.shape.getBoundingClientRect(),a=t.target.getBoundingClientRect();(e.bottom-t.pageY<_||e.top-t.pageY>-_||e.right-t.pageX<_||e.left-t.pageX>-_)&&(a.top-t.pageY>-_&&a.left-t.pageX>-_||a.top-t.pageY>-_&&a.right-t.pageX<_||a.bottom-t.pageY<_&&a.left-t.pageX>-_||a.bottom-t.pageY<_&&a.right-t.pageX<_)?(this.render(this.shapeData.x,this.shapeData.y,this.shapeData.rotate+P,this.shapeData.size,this.shapeData.z),_=15):(this.render(this.shapeData.x,this.shapeData.y,this.shapeData.rotate,this.shapeData.size,this.shapeData.z),_=10,P*=-1)}},mousedown:function(t){if(t.target.dataset.target){var e=this.$refs.shape.getBoundingClientRect();if(e.bottom-t.pageY<10||e.top-t.pageY>-10||e.right-t.pageX<10||e.left-t.pageX>-10){var a={x:e.left+e.width/2,y:e.top+e.height/2},o=180*Math.atan2(t.pageY-a.y,t.pageX-a.x)/Math.PI;this.$emit("rotate",{id:this.id,startAngle:o-this.position.rotate,centre:a})}else this.$emit("move",this.id)}},dblclick:function(){this.$emit("flip",this.id)},render:function(t,e){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,r=this.$refs.shape,i={width:"".concat(50*this.width,"px"),height:"".concat(50*this.height,"px"),transform:"translate(".concat(t,"px, ").concat(e,"px) rotate(").concat(a,"deg) scale(").concat(o,")"),transformOrigin:"center",zIndex:n};r.animate([i,i],{duration:0,fill:"forwards"})}}};a("f8cc");Y.render=z,Y.__scopeId="data-v-6bfe5d78";var B=Y;a("b64b");function A(t,e,a){var o=Object.keys(t).reduce((function(e,o){return a===~~o&&"pegs"!==o||t[o].forEach((function(t){return e.push(t)})),e}),[]),n=e.some((function(t){return o.some((function(e){return e.x===t.x&&e.y===t.y}))}));return!n}var C=A;function E(t){var e=Object.keys(t).reduce((function(e,a){return t[a].forEach((function(t){t.x>=2&&t.x<=7&&t.y>=2&&t.y<=7&&e++})),e}),0);return e}var R=E;function $(t,e,a,o,n){return 180===n?{x:a-t,y:o-e}:90===n?{x:o-e,y:t}:270===n?{x:e,y:a-t}:{x:t,y:e}}var N=$,F=50,T=F;function J(t,e){var a=0,o=t[e].defn[0].length,n=t[e].defn.length,r=t[e].rotate?90*Math.round(t[e].rotate/90)%360:0;r<0&&(r=360+r),r%180===90&&o!==n&&(a=T/2*(o-n));var i=Math.round((t[e].x+a)/T)*T-a,s=Math.round((t[e].y-a)/T)*T+a,c=i/T+a/T,h=s/T-a/T,u=q(t[e].defn,r,c,h);return{x:i,y:s,rotate:r,gridCoords:u}}function q(t,e,a,o){var n=t[0].length-1,r=t.length-1,i=t.reduce((function(t,e,a){return e.forEach((function(o,n){e[n]&&t.push({x:n,y:a})})),t}),[]),s=i.map((function(t){return N(t.x,t.y,n,r,e)}));return s.map((function(t){return{x:t.x+a,y:t.y+o}}))}var G=J,L={},H={},K={name:"Stage",components:{Board:b,Board2:O,Board3:S,Shape:B},props:{shapes:Array,pegs:Array},created:function(){var t=this;L.pegs=Object(c["a"])(this.pegs),this.shapeData.forEach((function(e,a){L[a]=G(t.shapeData,a).gridCoords}))},data:function(){return{moveStart:{x:null,y:null},moveItem:null,shapeData:this.shapes.map((function(t){var e=t.x,a=t.y,o=t.color,n=t.defn;return{x:e*T,y:a*T,color:o,defn:n}}))}},methods:{move:function(t){this.moveItem={id:t,type:"move",startX:this.shapeData[t].x,startY:this.shapeData[t].y},this.shapeData[this.moveItem.id].z=1,this.shapeData[this.moveItem.id].size=1.025,H={x:this.shapeData[this.moveItem.id].x,y:this.shapeData[this.moveItem.id].y,rotate:this.shapeData[this.moveItem.id].rotate}},rotate:function(t){var e=t.centre,a=t.id,o=t.startAngle;this.moveItem={id:a,centre:e,startAngle:o,type:"rotate"},this.shapeData[this.moveItem.id].z=1,this.shapeData[this.moveItem.id].size=1.025,H={x:this.shapeData[this.moveItem.id].x,y:this.shapeData[this.moveItem.id].y,rotate:this.shapeData[this.moveItem.id].rotate}},flip:function(t){console.log("flip",t)},mousedown:function(t){this.moveStart.x=t.pageX,this.moveStart.y=t.pageY},mouseup:function(){if(null===this.moveItem)return!1;this.moveStart.x=null,this.moveStart.y=null;var t=G(this.shapeData,this.moveItem.id),e=t.x,a=t.y,o=t.rotate,n=t.gridCoords;if(C(L,n,this.moveItem.id))L[this.moveItem.id]=n;else{var r=H;e=r.x,a=r.y,o=r.rotate,this.shapeData[this.moveItem.id].x=e,this.shapeData[this.moveItem.id].y=a,this.shapeData[this.moveItem.id].rotate=o;var i=G(this.shapeData,this.moveItem.id);e=i.x,a=i.y,o=i.rotate}this.shapeData[this.moveItem.id].x=e,this.shapeData[this.moveItem.id].y=a,this.shapeData[this.moveItem.id].rotate=o,this.shapeData[this.moveItem.id].z=0,this.shapeData[this.moveItem.id].size=1,this.moveItem=null,36===R(L)&&console.log("GRID COMPLETE!")},mousemove:function(t){if(null===this.moveItem)return!1;var e=t.pageX-this.moveStart.x,a=t.pageY-this.moveStart.y;if("move"===this.moveItem.type)this.shapeData[this.moveItem.id].x=this.moveItem.startX+e,this.shapeData[this.moveItem.id].y=this.moveItem.startY+a;else if("rotate"===this.moveItem.type){var o=this.moveItem.centre,n=180*Math.atan2(t.pageY-o.y,t.pageX-o.x)/Math.PI;this.shapeData[this.moveItem.id].rotate=n-this.moveItem.startAngle}var r=G(this.shapeData,this.moveItem.id),i=r.gridCoords;C(L,i,this.moveItem.id)&&(L[this.moveItem.id]=i,H={x:this.shapeData[this.moveItem.id].x,y:this.shapeData[this.moveItem.id].y,rotate:this.shapeData[this.moveItem.id].rotate})}}};a("70f0");K.render=s,K.__scopeId="data-v-aeb226a8";var Q=K,U=[[[0,5],[5,0]],[[2,0],[2,1],[1,2],[1,1],[0,1],[1,0]],[[4,4],[4,5],[3,5],[4,3],[3,4],[5,4]],[[1,3],[1,4],[0,2],[2,5],[0,0],[0,3]],[[3,1],[2,4],[3,3],[3,2],[2,3],[2,2]],[[3,0],[5,5],[5,3],[4,2],[5,2],[4,1]],[[4,0],[5,1],[1,5],[0,4],[1,5]]];function V(){return U.reduce((function(t,e){var a=e[Math.floor(Math.random()*e.length)];return t.push({x:a[0],y:a[1]}),t}),[])}var W=V,Z=[{x:0,y:10,color:"purple",defn:[[0,1],[1,1]]},{x:2,y:10,color:"yellow",defn:[[0,1,0],[1,1,1]]},{x:6,y:10,color:"orange",defn:[[1,1,1]]},{x:0,y:8,color:"cadetblue",defn:[[1,0,0],[1,1,1]]},{x:4,y:10,color:"red",defn:[[1,1,0],[0,1,1]]},{x:7,y:9,color:"brown",defn:[[1,1]]},{x:3,y:9,color:"grey",defn:[[1,1,1,1]]},{x:9,y:10,color:"green",defn:[[1,1],[1,1]]},{x:9,y:9,color:"blue",defn:[[1]]}],tt=Z,et={name:"App",components:{Stage:Q},data:function(){return{pegs:W().map((function(t){return{x:t.x+2,y:t.y+2}})),shapes:tt}}};a("22b7");et.render=n;var at=et,ot=a("9483");Object(ot["a"])("".concat("/dist/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}}),Object(o["b"])(at).mount("#app")},"5efb":function(t,e,a){"use strict";a("013e")},"70f0":function(t,e,a){"use strict";a("36a8")},a114:function(t,e,a){"use strict";a("c193")},a37c:function(t,e,a){},b1d9:function(t,e,a){},c193:function(t,e,a){},cc01:function(t,e,a){},d127:function(t,e,a){"use strict";a("041b")},f8cc:function(t,e,a){"use strict";a("cc01")}});
//# sourceMappingURL=app.2db93ba1.js.map