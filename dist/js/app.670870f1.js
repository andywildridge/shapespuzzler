(function(e){function t(t){for(var o,i,s=t[0],c=t[1],h=t[2],p=0,d=[];p<s.length;p++)i=s[p],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&d.push(n[i][0]),n[i]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);u&&u(t);while(d.length)d.shift()();return r.push.apply(r,h||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],o=!0,s=1;s<a.length;s++){var c=a[s];0!==n[c]&&(o=!1)}o&&(r.splice(t--,1),e=i(i.s=a[0]))}return e}var o={},n={app:0},r=[];function i(t){if(o[t])return o[t].exports;var a=o[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=o,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(a,o,function(t){return e[t]}.bind(null,o));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/shapespuzzler/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var h=0;h<s.length;h++)t(s[h]);var u=c;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"00bc":function(e,t,a){"use strict";a("a37c")},"013e":function(e,t,a){},"041b":function(e,t,a){},"22b7":function(e,t,a){"use strict";a("b1d9")},"36a8":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var o=a("7a23");function n(e,t,a,n,r,i){var s=Object(o["i"])("Stage");return Object(o["e"])(),Object(o["c"])(s,{shapes:r.shapes,pegs:r.pegs},null,8,["shapes","pegs"])}a("d81d");var r=Object(o["j"])("data-v-aeb226a8");Object(o["g"])("data-v-aeb226a8");var i={class:"backstage"};Object(o["f"])();var s=r((function(e,t,a,n,r,s){var c=Object(o["i"])("Board3"),h=Object(o["i"])("Board2"),u=Object(o["i"])("Board"),p=Object(o["i"])("Shape");return Object(o["e"])(),Object(o["c"])(o["a"],null,[Object(o["d"])(c),Object(o["d"])("div",i,[Object(o["d"])(h)]),Object(o["d"])("div",{onMouseup:t[1]||(t[1]=function(){return s.mouseup&&s.mouseup.apply(s,arguments)}),onMousedown:t[2]||(t[2]=function(){return s.mousedown&&s.mousedown.apply(s,arguments)}),onMousemove:t[3]||(t[3]=function(){return s.mousemove&&s.mousemove.apply(s,arguments)}),class:"stage"},[Object(o["d"])(u,{pegs:a.pegs},null,8,["pegs"]),(Object(o["e"])(!0),Object(o["c"])(o["a"],null,Object(o["h"])(a.shapes,(function(e,t){return Object(o["e"])(),Object(o["c"])(p,{key:t,id:t,onMove:s.move,onRotate:s.rotate,onFlip:s.flip,shapeData:r.shapeData[t],position:{x:r.shapeData[t].x,y:r.shapeData[t].y,z:r.shapeData[t].z,size:r.shapeData[t].size,rotate:r.shapeData[t].rotate||0}},null,8,["id","onMove","onRotate","onFlip","shapeData","position"])})),128))],32)],64)})),c=a("2909"),h=(a("159b"),Object(o["j"])("data-v-4e5241e4"));Object(o["g"])("data-v-4e5241e4");var u={class:"board"};Object(o["f"])();var p=h((function(e,t,a,n,r,i){var s=Object(o["i"])("Peg");return Object(o["e"])(),Object(o["c"])("div",u,[(Object(o["e"])(!0),Object(o["c"])(o["a"],null,Object(o["h"])(a.pegs,(function(e,t){return Object(o["e"])(),Object(o["c"])(s,{key:t,position:e},null,8,["position"])})),128))])})),d=Object(o["j"])("data-v-77b6d95d"),l=d((function(e,t,a,n,r,i){return Object(o["e"])(),Object(o["c"])("div",{class:"peg",x:e.x,style:i.cssProps},null,12,["x"])})),f={name:"Peg",props:{position:Object},computed:{cssProps:function(){return{"--x":50*this.position.x+2+"px","--y":50*this.position.y+2+"px"}}}};a("d127");f.render=l,f.__scopeId="data-v-77b6d95d";var v=f,m={name:"Shape",components:{Peg:v},props:{pegs:Array},created:function(){console.log(this.pegs)}};a("a114");m.render=p,m.__scopeId="data-v-4e5241e4";var b=m,g=Object(o["j"])("data-v-e5bd3dac");Object(o["g"])("data-v-e5bd3dac");var y={class:"board"};Object(o["f"])();var x=g((function(e,t){return Object(o["e"])(),Object(o["c"])("div",y)}));a("00bc");const j={};j.render=x,j.__scopeId="data-v-e5bd3dac";var O=j,D=Object(o["j"])("data-v-65e86610");Object(o["g"])("data-v-65e86610");var I={class:"board"};Object(o["f"])();var w=D((function(e,t){return Object(o["e"])(),Object(o["c"])("div",I)}));a("5efb");const z={};z.render=w,z.__scopeId="data-v-65e86610";var M=z,S=Object(o["j"])("data-v-6bfe5d78"),k=S((function(e,t,a,n,r,i){return Object(o["e"])(),Object(o["c"])("div",{ref:"shape",onMousedown:t[1]||(t[1]=function(){return i.mousedown&&i.mousedown.apply(i,arguments)}),onMousemove:t[2]||(t[2]=function(){return i.mousemove&&i.mousemove.apply(i,arguments)}),onMouseout:t[3]||(t[3]=function(){return i.mouseout&&i.mouseout.apply(i,arguments)}),onDblclick:t[4]||(t[4]=function(){return i.dblclick&&i.dblclick.apply(i,arguments)}),class:"shape"},[(Object(o["e"])(),Object(o["c"])("svg",{width:"100%",viewBox:r.viewbox},[Object(o["d"])("g",null,[(Object(o["e"])(!0),Object(o["c"])(o["a"],null,Object(o["h"])(r.defnCoords,(function(e,t){return Object(o["e"])(),Object(o["c"])("rect",{key:t,x:e.x+.02,y:e.y+.02,width:"0.975",height:"0.975",stroke:"rgb(85 85 85 / 75%)","stroke-width":"0.025",rx:"0.1",fill:a.shapeData.color,"data-target":"true"},null,8,["x","y","fill"])})),128))])],8,["viewBox"]))],544)})),_=(a("a9e3"),a("99af"),10),P=1;function X(e){var t=e.reduce((function(e,t,a){return t.forEach((function(t,o){t&&e.push({x:o,y:a})})),e}),[]);return t}var Y={name:"Shape",props:{id:Number,shapeData:Object,position:Object},watch:{position:function(e){this.render(e.x,e.y,e.rotate,e.size,e.z)}},mounted:function(){this.render(this.shapeData.x,this.shapeData.y)},data:function(){return{moveStart:{x:null,y:null},moveNow:{x:null,y:null},defnCoords:X(this.shapeData.defn),width:this.shapeData.defn[0].length,height:this.shapeData.defn.length,viewbox:"0 0 ".concat(this.shapeData.defn[0].length," ").concat(this.shapeData.defn.length)}},methods:{mouseout:function(){this.render(this.shapeData.x,this.shapeData.y,this.shapeData.rotate,this.shapeData.size,this.shapeData.z),_=10,P*=-1},mousemove:function(e){if(e.target.dataset.target){var t=this.$refs.shape.getBoundingClientRect(),a=e.target.getBoundingClientRect();(t.bottom-e.pageY<_||t.top-e.pageY>-_||t.right-e.pageX<_||t.left-e.pageX>-_)&&(a.top-e.pageY>-_&&a.left-e.pageX>-_||a.top-e.pageY>-_&&a.right-e.pageX<_||a.bottom-e.pageY<_&&a.left-e.pageX>-_||a.bottom-e.pageY<_&&a.right-e.pageX<_)?(this.render(this.shapeData.x,this.shapeData.y,this.shapeData.rotate+P,this.shapeData.size,this.shapeData.z),_=15):(this.render(this.shapeData.x,this.shapeData.y,this.shapeData.rotate,this.shapeData.size,this.shapeData.z),_=10,P*=-1)}},mousedown:function(e){if(e.target.dataset.target){var t=this.$refs.shape.getBoundingClientRect();if(t.bottom-e.pageY<10||t.top-e.pageY>-10||t.right-e.pageX<10||t.left-e.pageX>-10){var a={x:t.left+t.width/2,y:t.top+t.height/2},o=180*Math.atan2(e.pageY-a.y,e.pageX-a.x)/Math.PI;this.$emit("rotate",{id:this.id,startAngle:o-this.position.rotate,centre:a})}else this.$emit("move",this.id)}},dblclick:function(){this.$emit("flip",this.id)},render:function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,r=this.$refs.shape,i={width:"".concat(50*this.width,"px"),height:"".concat(50*this.height,"px"),transform:"translate(".concat(e,"px, ").concat(t,"px) rotate(").concat(a,"deg) scale(").concat(o,")"),transformOrigin:"center",zIndex:n};r.animate([i,i],{duration:0,fill:"forwards"})}}};a("f8cc");Y.render=k,Y.__scopeId="data-v-6bfe5d78";var B=Y;a("b64b");function A(e,t,a){var o=Object.keys(e).reduce((function(t,o){return a===~~o&&"pegs"!==o||e[o].forEach((function(e){return t.push(e)})),t}),[]),n=t.some((function(e){return o.some((function(t){return t.x===e.x&&t.y===e.y}))}));return!n}var C=A;function E(e){var t=Object.keys(e).reduce((function(t,a){return e[a].forEach((function(e){e.x>=2&&e.x<=7&&e.y>=2&&e.y<=7&&t++})),t}),0);return t}var R=E;function $(e,t,a,o,n){return 180===n?{x:a-e,y:o-t}:90===n?{x:o-t,y:e}:270===n?{x:t,y:a-e}:{x:e,y:t}}var N=$,F=50,T=F;function J(e,t){var a=0,o=e[t].defn[0].length,n=e[t].defn.length,r=e[t].rotate?90*Math.round(e[t].rotate/90)%360:0;r<0&&(r=360+r),r%180===90&&o!==n&&(a=T/2*(o-n));var i=Math.round((e[t].x+a)/T)*T-a,s=Math.round((e[t].y-a)/T)*T+a,c=i/T+a/T,h=s/T-a/T,u=q(e[t].defn,r,c,h);return{x:i,y:s,rotate:r,gridCoords:u}}function q(e,t,a,o){var n=e[0].length-1,r=e.length-1,i=e.reduce((function(e,t,a){return t.forEach((function(o,n){t[n]&&e.push({x:n,y:a})})),e}),[]),s=i.map((function(e){return N(e.x,e.y,n,r,t)}));return s.map((function(e){return{x:e.x+a,y:e.y+o}}))}var G=J,L={},H={},K={name:"Stage",components:{Board:b,Board2:O,Board3:M,Shape:B},props:{shapes:Array,pegs:Array},created:function(){var e=this;L.pegs=Object(c["a"])(this.pegs),this.shapeData.forEach((function(t,a){L[a]=G(e.shapeData,a).gridCoords}))},data:function(){return{moveStart:{x:null,y:null},moveItem:null,shapeData:this.shapes.map((function(e){var t=e.x,a=e.y,o=e.color,n=e.defn;return{x:t*T,y:a*T,color:o,defn:n}}))}},methods:{move:function(e){this.moveItem={id:e,type:"move",startX:this.shapeData[e].x,startY:this.shapeData[e].y},this.shapeData[this.moveItem.id].z=1,this.shapeData[this.moveItem.id].size=1.025,H={x:this.shapeData[this.moveItem.id].x,y:this.shapeData[this.moveItem.id].y,rotate:this.shapeData[this.moveItem.id].rotate}},rotate:function(e){var t=e.centre,a=e.id,o=e.startAngle;this.moveItem={id:a,centre:t,startAngle:o,type:"rotate"},this.shapeData[this.moveItem.id].z=1,this.shapeData[this.moveItem.id].size=1.025,H={x:this.shapeData[this.moveItem.id].x,y:this.shapeData[this.moveItem.id].y,rotate:this.shapeData[this.moveItem.id].rotate}},flip:function(e){console.log("flip",e)},mousedown:function(e){this.moveStart.x=e.pageX,this.moveStart.y=e.pageY},mouseup:function(){if(null===this.moveItem)return!1;this.moveStart.x=null,this.moveStart.y=null;var e=G(this.shapeData,this.moveItem.id),t=e.x,a=e.y,o=e.rotate,n=e.gridCoords;if(C(L,n,this.moveItem.id))L[this.moveItem.id]=n;else{var r=H;t=r.x,a=r.y,o=r.rotate,this.shapeData[this.moveItem.id].x=t,this.shapeData[this.moveItem.id].y=a,this.shapeData[this.moveItem.id].rotate=o;var i=G(this.shapeData,this.moveItem.id);t=i.x,a=i.y,o=i.rotate}this.shapeData[this.moveItem.id].x=t,this.shapeData[this.moveItem.id].y=a,this.shapeData[this.moveItem.id].rotate=o,this.shapeData[this.moveItem.id].z=0,this.shapeData[this.moveItem.id].size=1,this.moveItem=null,36===R(L)&&console.log("GRID COMPLETE!")},mousemove:function(e){if(null===this.moveItem)return!1;var t=e.pageX-this.moveStart.x,a=e.pageY-this.moveStart.y;if("move"===this.moveItem.type)this.shapeData[this.moveItem.id].x=this.moveItem.startX+t,this.shapeData[this.moveItem.id].y=this.moveItem.startY+a;else if("rotate"===this.moveItem.type){var o=this.moveItem.centre,n=180*Math.atan2(e.pageY-o.y,e.pageX-o.x)/Math.PI;this.shapeData[this.moveItem.id].rotate=n-this.moveItem.startAngle}var r=G(this.shapeData,this.moveItem.id),i=r.gridCoords;C(L,i,this.moveItem.id)&&(L[this.moveItem.id]=i,H={x:this.shapeData[this.moveItem.id].x,y:this.shapeData[this.moveItem.id].y,rotate:this.shapeData[this.moveItem.id].rotate})}}};a("70f0");K.render=s,K.__scopeId="data-v-aeb226a8";var Q=K,U=[[[0,5],[5,0]],[[2,0],[2,1],[1,2],[1,1],[0,1],[1,0]],[[4,4],[4,5],[3,5],[4,3],[3,4],[5,4]],[[1,3],[1,4],[0,2],[2,5],[0,0],[0,3]],[[3,1],[2,4],[3,3],[3,2],[2,3],[2,2]],[[3,0],[5,5],[5,3],[4,2],[5,2],[4,1]],[[4,0],[5,1],[1,5],[0,4],[1,5]]];function V(){return U.reduce((function(e,t){var a=t[Math.floor(Math.random()*t.length)];return e.push({x:a[0],y:a[1]}),e}),[])}var W=V,Z=[{x:0,y:10,color:"purple",defn:[[0,1],[1,1]]},{x:2,y:10,color:"yellow",defn:[[0,1,0],[1,1,1]]},{x:6,y:10,color:"orange",defn:[[1,1,1]]},{x:0,y:8,color:"cadetblue",defn:[[1,0,0],[1,1,1]]},{x:4,y:10,color:"red",defn:[[1,1,0],[0,1,1]]},{x:7,y:9,color:"brown",defn:[[1,1]]},{x:3,y:9,color:"grey",defn:[[1,1,1,1]]},{x:9,y:10,color:"green",defn:[[1,1],[1,1]]},{x:9,y:9,color:"blue",defn:[[1]]}],ee=Z,te={name:"App",components:{Stage:Q},data:function(){return{pegs:W().map((function(e){return{x:e.x+2,y:e.y+2}})),shapes:ee}}};a("22b7");te.render=n;var ae=te,oe=a("9483");Object(oe["a"])("".concat("/shapespuzzler/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),Object(o["b"])(ae).mount("#app")},"5efb":function(e,t,a){"use strict";a("013e")},"70f0":function(e,t,a){"use strict";a("36a8")},a114:function(e,t,a){"use strict";a("c193")},a37c:function(e,t,a){},b1d9:function(e,t,a){},c193:function(e,t,a){},cc01:function(e,t,a){},d127:function(e,t,a){"use strict";a("041b")},f8cc:function(e,t,a){"use strict";a("cc01")}});
//# sourceMappingURL=app.670870f1.js.map