(function(e){function t(t){for(var r,s,i=t[0],c=t[1],u=t[2],p=0,d=[];p<i.length;p++)s=i[p],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&d.push(a[s][0]),a[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);l&&l(t);while(d.length)d.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,i=1;i<n.length;i++){var c=n[i];0!==a[c]&&(r=!1)}r&&(o.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},a={app:0},o=[];function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var l=c;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("85ec"),a=n.n(r);a.a},4242:function(e,t,n){"use strict";var r=n("83a3"),a=n.n(r);a.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("img",{attrs:{alt:"Vue logo",src:n("cf05")}}),r("PostComponent")],1)},o=[],s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[!1===e.loggedin?n("div",{attrs:{id:"login"}},[n("label",{attrs:{for:"create-data"}},[e._v("Kérem jelentkezzen be!")]),n("p",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],attrs:{type:"text",id:"username",placeholder:"Felhasználónév"},domProps:{value:e.username},on:{input:function(t){t.target.composing||(e.username=t.target.value)}}})]),n("p",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.pw,expression:"pw"}],attrs:{type:"password",placeholder:"Jelszó"},domProps:{value:e.pw},on:{input:function(t){t.target.composing||(e.pw=t.target.value)}}})]),n("p",[n("button",{on:{click:function(t){return e.login()}}},[e._v("Bejelentkezés")])])]):e._e(),!0===e.loggedin?n("div",[n("h1",[e._v("Utolsó bejegyzések")]),n("div",{staticClass:"create-post"},[n("label",{attrs:{for:"create-post"}},[e._v("Adja meg kisállatának adatait:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{type:"text",id:"create-post",placeholder:"Kisállat neve"},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}}),n("p",[e._v("Születési dátum:")]),n("date-pick",{model:{value:e.birth,callback:function(t){e.birth=t},expression:"birth"}}),n("input",{directives:[{name:"model",rawName:"v-model",value:e.owner,expression:"owner"}],attrs:{type:"text",placeholder:"Tulajdonos neve"},domProps:{value:e.owner},on:{input:function(t){t.target.composing||(e.owner=t.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:e.species,expression:"species"}],attrs:{type:"text",placeholder:"Állat fajtája"},domProps:{value:e.species},on:{input:function(t){t.target.composing||(e.species=t.target.value)}}}),n("button",{on:{click:function(t){return e.createPost()}}},[e._v("Hozzáadás")])],1),n("hr"),e.error?n("p",{staticClass:"error"},[e._v(e._s(e.error))]):e._e(),n("div",{staticClass:"posts-container"},e._l(e.posts,(function(t,r){return n("div",{key:t._id,staticClass:"post",attrs:{item:t,index:r}},[e._v(" Adat rögzítve: "+e._s(t.createdAt.getDate()+"/"+t.createdAt.getMonth()+"/"+t.createdAt.getFullYear())+" "),n("p",{staticClass:"text"},[e._v("Kisállat neve: "+e._s(t.name))]),n("p",{staticClass:"date"},[e._v("Születési dátuma: "+e._s(t.birth))]),n("p",{staticClass:"text"},[e._v("Fajtája: "+e._s(t.species))]),n("p",{staticClass:"text"},[e._v("Tulajdonos neve: "+e._s(t.owner))]),n("button",{on:{click:function(n){return e.deletePost(t._id)}}},[e._v("Törlés")])])})),0),n("div",[n("button",{on:{click:function(t){e.loggedin=!1}}},[e._v("Kijelentkezés")])])]):e._e()])},i=[],c=(n("b0c0"),n("96cf"),n("1da1")),u=(n("d81d"),n("d3b7"),n("5530")),l=n("d4ec"),p=n("bee2"),d=n("bc3a"),m=n.n(d),f="api/posts/",v=function(){function e(){Object(l["a"])(this,e)}return Object(p["a"])(e,null,[{key:"getPosts",value:function(){return new Promise((function(e,t){m.a.get(f).then((function(t){var n=t.data;e(n.map((function(e){return Object(u["a"])(Object(u["a"])({},e),{},{createdAt:new Date(e.createdAt)})})))})).catch((function(e){t(e)}))}))}},{key:"insertPost",value:function(e,t,n,r){return m.a.post(f,{name:e,birth:t,owner:n,species:r})}},{key:"deletePost",value:function(e){return m.a.delete("".concat(f).concat(e))}}]),e}(),g=v,b=n("343b"),h=n.n(b),w=(n("ec02"),{components:{DatePick:h.a},name:"PostComponent",data:function(){return{posts:[],username:"",pw:"",error:"",name:"",species:"",birth:"2010-01-01",owner:"",loggedin:!1}},created:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,g.getPosts();case 3:e.posts=t.sent,t.next=9;break;case 6:t.prev=6,t.t0=t["catch"](0),e.error=t.t0.message;case 9:case"end":return t.stop()}}),t,null,[[0,6]])})))()},methods:{login:function(){""!=this.username&&""!=this.pw?"admin"===this.username&&"admin"===this.pw?this.loggedin=!0:alert("Hibás adatok!"):alert("Kérem töltse ki az adatokat!")},createPost:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n=!1,""==e.name||""==e.owner||""==e.species){t.next=15;break}for(r=0;r<e.posts.length;r++)e.name===e.posts[r].name&&e.owner===e.posts[r].owner&&e.birth===e.posts[r].birth&&(n=!0,alert("Az adatok már szerepelnek!"));if(!1!==n){t.next=9;break}return t.next=6,g.insertPost(e.name,e.birth,e.owner,e.species);case 6:return t.next=8,g.getPosts();case 8:e.posts=t.sent;case 9:e.name="",e.birth="2010-01-01",e.owner="",e.species="",t.next=16;break;case 15:alert("Töltse ki megfelelően az adatokat!");case 16:case"end":return t.stop()}}),t)})))()},deletePost:function(e){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,g.deletePost(e);case 2:return n.next=4,g.getPosts();case 4:t.posts=n.sent;case 5:case"end":return n.stop()}}),n)})))()}}}),_=w,x=(n("4242"),n("2877")),k=Object(x["a"])(_,s,i,!1,null,"1c1c4124",null),j=k.exports,P={name:"App",components:{PostComponent:j}},y=P,O=(n("034f"),Object(x["a"])(y,a,o,!1,null,null,null)),z=O.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(z)}}).$mount("#app")},"83a3":function(e,t,n){},"85ec":function(e,t,n){},cf05:function(e,t,n){e.exports=n.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.dbb69403.js.map