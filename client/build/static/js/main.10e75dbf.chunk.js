(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{271:function(e,t,n){e.exports=n(492)},302:function(e,t){},305:function(e,t,n){},306:function(e,t,n){},382:function(e,t,n){},384:function(e,t,n){},385:function(e,t,n){},386:function(e,t,n){},458:function(e,t,n){},470:function(e,t,n){},471:function(e,t,n){},485:function(e,t,n){},486:function(e,t,n){},492:function(e,t,n){"use strict";n.r(t);var a=n(23),r=n(0),c=n.n(r),o=n(29),i=n.n(o),u=n(83),l=n(43),s=n(176),m=n.n(s),p=n(76),d=n.n(p),f=n(77),E=n.n(f),h=n(179),b=n.n(h),v=n(22),g=n.n(v),O=n(25),j=(n(305),n(178)),y=n.n(j),x=n(84),N=Object(r.createContext)({currentUser:null,isAuth:!1,draft:null,pins:[],currentPin:null,socket:null}),_=(n(306),function(){var e=Object(r.useContext)(N).dispatch,t=Object(O.unstable_useMediaQuery)("(max-width: 650px)");return c.a.createElement(x.GoogleLogout,{onLogoutSuccess:function(){e({type:"SIGNOUT_USER"})},render:function(e){var n=e.onClick;return c.a.createElement("span",{className:"root-signOut",onClick:n},c.a.createElement(g.a,{style:{display:t?"none":"block"},variant:"body1",className:"buttonText-sign-out"},"SignOut"),c.a.createElement(y.a,{className:"buttonIcon-sign-out"}))}})}),w=function(e){var t=e.currentUser,n=Object(O.unstable_useMediaQuery)("(max-width: 650px)");if(t)return c.a.createElement("div",{className:"grow"},c.a.createElement("img",{className:"picture",src:t.picture,alt:t.name}),c.a.createElement(g.a,{className:n?"mobile":null,component:"h1",variant:"h5",color:"inherit",noWrap:!0},t.name))},C=function(e){var t=e.currentUser,n=Object(O.unstable_useMediaQuery)("(max-width: 650px)");return c.a.createElement("div",{className:"root-header"},c.a.createElement(d.a,{position:"static"},c.a.createElement(E.a,{style:{background:"rgb(153,50,204)"}},c.a.createElement("div",{className:"grow"},c.a.createElement(b.a,{className:"icon"}),c.a.createElement(g.a,{className:n?"mobile":null,component:"h1",variant:"h5",color:"inherit",noWrap:!0},"GeoPins")),c.a.createElement(w,{currentUser:t}),c.a.createElement(_,null))))},P=n(12),S=n.n(P),k=n(19),T=n(21),A=n(40),I=(n(381),n(382),n(181)),D=n.n(I),U=n(182),R=n.n(U),L=function(e){var t=e.size,n=e.color,a=e.onClick;return c.a.createElement(R.a,{onClick:a,style:{fontSize:t,color:n}})},G=function(e){var t=e.draft,n=e.color,a=e.handleSelectedPin,r=e.pin;return t?c.a.createElement(A.a,Object.assign({},t,{offsetLeft:-19,offsetTop:-40}),c.a.createElement(L,{size:40,color:n,onClick:function(){return a?a(r):null}})):null},F=(n(384),function(e){var t=e.setViewPort;return c.a.createElement("div",{className:"navigationControl"},c.a.createElement(A.b,{onViewportChange:function(e){return t(e)}}))}),B=n(38),M=n(183),z=n.n(M),V=(n(385),function(){return c.a.createElement("div",{className:"no-content-root"},c.a.createElement(z.a,{className:"no-content-icon"}),c.a.createElement(g.a,{noWrap:!0,component:"h2",variant:"h6",align:"center",color:"textPrimary",gutterBottom:!0},"Click on the map to add Pin"))}),W=(n(386),n(52)),H=n.n(W),Q=n(36),J=n.n(Q),Y=n(184),K=n.n(Y),Z=function(e){var t=e.setTitle,n=e.setImage,a=e.image,r=e.title;return c.a.createElement("div",null,c.a.createElement(H.a,{name:"title",label:"Title",placeholder:"Inser Pin Title",onChange:function(e){return t(e.target.value)},value:r}),c.a.createElement("input",{accept:"image/*",id:"image",type:"file",className:"input-create-pin",onChange:function(e){return n(e.target.files[0])}}),c.a.createElement("label",{htmlFor:"image"},c.a.createElement(J.a,{style:{color:a&&"green"},component:"span",size:"small",className:"button-create-pin"},c.a.createElement(K.a,null))))},X=n(85),q=n.n(X),$=n(185),ee=n.n($),te=function(e){var t=e.handleSubmit,n=e.title,a=e.image,r=e.content,o=e.handleClearButton,i=e.submitting;return c.a.createElement("div",null,c.a.createElement(J.a,{className:"button-create-pin",variant:"contained",color:"primary",onClick:o},c.a.createElement(q.a,{className:"left-icon-create-pin"}),"Discart"),c.a.createElement(J.a,{type:"submit",className:"button-create-pin",variant:"contained",color:"secondary",disabled:!a||!n.trim()||!r.trim()||i,onClick:t},"Submit",c.a.createElement(ee.a,{className:"right-icon-create-pin"})))},ne=n(186),ae=n.n(ne),re=function(){return c.a.createElement(g.a,{className:"align-center-create-pin",component:"h2",variant:"h4",color:"secondary"},c.a.createElement(ae.a,{className:"icon-large-create-pin"})," ","Pin Location")},ce=function(e){var t=e.setContent,n=e.content,a=e.mobileSize;return c.a.createElement("div",{className:"content-field-create-pin"},c.a.createElement(H.a,{name:"contet",label:"Content",multiline:!0,rows:a?"3":"6",margin:"normal",fullWidth:!0,variant:"outlined",onChange:function(e){return t(e.target.value)},value:n}))},oe=n(37),ie=n.n(oe),ue=n(53),le=n.n(ue);le.a.config();var se=function(){var e=Object(k.a)(S.a.mark(function e(t){var n;return S.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.cloudinary.com/v1_1/Vasia/image/upload",e.next=3,ie.a.post("https://api.cloudinary.com/v1_1/Vasia/image/upload",t);case 3:return n=e.sent,e.abrupt("return",n.data.url);case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),me=n(187),pe=function e(){var t=this;Object(me.a)(this,e),this.BASE_URL="/pins",this.idToken=function(){return window.gapi.auth2.getAuthInstance().currentUser.get().getAuthResponse().id_token},this.createNewPin=function(){var e=Object(k.a)(S.a.mark(function e(n){var a,r;return S.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ie.a.post(t.BASE_URL,n,{headers:{authorization:t.idToken()}});case 2:return a=e.sent,r=a.data,e.abrupt("return",r);case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),this.getAllPins=Object(k.a)(S.a.mark(function e(){var n,a;return S.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ie.a.get(t.BASE_URL,{headers:{authorization:t.idToken()}});case 2:return n=e.sent,a=n.data,e.abrupt("return",a);case 5:case"end":return e.stop()}},e)})),this.deletePin=function(){var e=Object(k.a)(S.a.mark(function e(n){var a,r;return S.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ie.a.delete("".concat(t.BASE_URL,"/").concat(n),{headers:{authorization:t.idToken()}});case 2:return a=e.sent,r=a.data,e.abrupt("return",r);case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),this.createComment=function(){var e=Object(k.a)(S.a.mark(function e(n,a){var r,c;return S.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ie.a.put("".concat(t.BASE_URL,"/comments/").concat(n),a,{headers:{authorization:t.idToken()}});case 2:return r=e.sent,c=r.data,e.abrupt("return",c);case 5:case"end":return e.stop()}},e)}));return function(t,n){return e.apply(this,arguments)}}()},de=new pe,fe=function(e){var t=e.setHeight,n=Object(r.useState)(""),o=Object(a.a)(n,2),i=o[0],u=o[1],l=Object(r.useState)(""),s=Object(a.a)(l,2),m=s[0],p=s[1],d=Object(r.useState)(""),f=Object(a.a)(d,2),E=f[0],h=f[1],b=Object(r.useState)(!1),v=Object(a.a)(b,2),g=v[0],j=v[1],y=Object(r.useContext)(N),x=y.state,_=y.dispatch,w=Object(O.unstable_useMediaQuery)("(max-width: 650px)"),C=function(){var e=Object(k.a)(S.a.mark(function e(n){var a,r,c,o,u,l;return S.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n.preventDefault(),j(!0),a=x.draft,r=a.latitude,c=a.longitude,e.next=6,A();case 6:return o=e.sent,u={title:i,image:o,content:E,latitude:r,longitude:c},e.next=10,de.createNewPin(u);case 10:l=e.sent,t("90%"),T(),P(l),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),j(!1);case 19:case"end":return e.stop()}},e,null,[[0,16]])}));return function(t){return e.apply(this,arguments)}}(),P=function(e){x.socket.emit("pinCreated",e)},T=function(){u(""),p(null),h(""),_({type:"DELETE_DRAFT"})},A=function(){var e=Object(k.a)(S.a.mark(function e(){var t;return S.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return(t=new FormData).append("file",m),t.append("upload_preset","geopins"),t.append("cloud_name","Vasia"),e.next=6,se(t);case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();return c.a.createElement("form",{className:"create-pin-root"},c.a.createElement(re,null),c.a.createElement(Z,{setTitle:u,setImage:p,image:m,title:i}),c.a.createElement(ce,{setContent:h,content:E}),c.a.createElement(te,{mobileSize:w,handleSubmit:C,handleClearButton:T,title:i,image:m,content:E,submitting:g}))},Ee=(n(458),n(191)),he=n.n(Ee),be=n(192),ve=n.n(be),ge=n(188),Oe=n.n(ge),je=(n(470),n(42)),ye=n.n(je),xe=n(61),Ne=n.n(xe),_e=n(189),we=n.n(_e),Ce=n(78),Pe=n.n(Ce),Se=(n(471),(new pe).createComment),ke=function(){var e=Object(r.useState)(""),t=Object(a.a)(e,2),n=t[0],o=t[1],i=Object(r.useContext)(N).state,u=function(){var e=Object(k.a)(S.a.mark(function e(){var t,a,r;return S.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t={text:n},a=i.currentPin._id,e.next=4,Se(a,t);case 4:r=e.sent,l(r),o("");case 7:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),l=function(e){i.socket.emit("createComment",e)};return c.a.createElement(c.a.Fragment,null,c.a.createElement("form",{className:"create-comment-form"},c.a.createElement(Ne.a,{disabled:!n.trim(),className:"create-comment-clear-button",onClick:function(){return o("")}},c.a.createElement(q.a,null)),c.a.createElement(ye.a,{className:"create-comment-input",multiline:!0,placeholder:"Add comment",onChange:function(e){return o(e.target.value)},value:n}),c.a.createElement(Ne.a,{disabled:!n.trim(),className:"create-comment-send-button",onClick:u},c.a.createElement(we.a,null))),c.a.createElement(Pe.a,null))},Te=n(60),Ae=n.n(Te),Ie=n(79),De=n.n(Ie),Ue=n(82),Re=n.n(Ue),Le=n(80),Ge=n.n(Le),Fe=n(81),Be=n.n(Fe),Me=n(190),ze=n.n(Me),Ve=function(e){var t=e.comments;return c.a.createElement(c.a.Fragment,null,t.map(function(e,t){return c.a.createElement(De.a,{key:t,alignItems:"flex-start"},c.a.createElement(Ge.a,null,c.a.createElement(Be.a,{src:e.author.picture,alt:e.author.name})),c.a.createElement(Re.a,{primary:e.text,secondary:c.a.createElement(c.a.Fragment,null,c.a.createElement(g.a,{className:"comments-inline",component:"span",color:"textPrimary"},e.author.name),ze()(e.createdAt)," ","ago")}))}))},We=(n(485),function(e){var t=e.comments;return c.a.createElement(Ae.a,{className:"root-comments"},c.a.createElement(Ve,{comments:t}))}),He=function(){var e=Object(r.useContext)(N).state.currentPin,t=e.title,n=e.author,a=e.content,o=e.createdAt,i=e.comments;return c.a.createElement("div",{className:"root-pin-content"},c.a.createElement(B.b,{component:"h2",variant:"h4",color:"primary",gutterBottom:!0},t),c.a.createElement(B.b,{className:"pin-content-text",component:"h3",variant:"h6",color:"inherit",gutterBottom:!0},c.a.createElement(he.a,{className:"pin-content-icon"})," ",n.name),c.a.createElement(B.b,{className:"pin-content-text",variant:"subtitle2",color:"inherit",gutterBottom:!0},c.a.createElement(ve.a,{className:"pin-content-icon"}),Oe()(o,"MMM Do, YYYY, HH:mm")),c.a.createElement(B.b,{variant:"subtitle1",gutterBottom:!0},a),c.a.createElement(ke,null),c.a.createElement(We,{comments:i}))},Qe=function(e){var t=e.setHeight,n=Object(r.useContext)(N).state,a=n.draft,o=n.currentPin,i=Object(O.unstable_useMediaQuery)("(max-width: 650px)");return c.a.createElement(B.a,{className:i?"blog-root-mobile":"blog-root"},a||o?a&&!o?c.a.createElement(fe,{setHeight:t}):!a&&o?c.a.createElement(He,null):void 0:c.a.createElement(V,null))},Je=function(e){var t=e.pins,n=e.highlightNewPin,a=e.handleSelectedPin;return t.map(function(e){return c.a.createElement(G,{key:e._id,draft:e,color:n(e),handleSelectedPin:a,pin:e})})},Ye=n(193),Ke=n.n(Ye),Ze=function(e){var t=e.popup,n=e.handleClosePin,a=e.isAuthUser,r=e.handleDeletePin,o=Object(O.unstable_useMediaQuery)("(max-width: 650px)");return c.a.createElement("div",null,t&&c.a.createElement(A.c,{anchor:"top",latitude:t.latitude,longitude:t.longitude,closeOnClick:!1,onClose:function(){return n()}},c.a.createElement("img",{style:{height:o&&"100px",width:o&&"100px",margin:o&&"0, auto"},className:"popup-image",src:t.image,alt:t.tittle}),c.a.createElement("div",{className:"popup-tab"},c.a.createElement(B.b,null,t.latitude.toFixed(6),",",t.longitude.toFixed(6)),a()&&c.a.createElement(J.a,{onClick:r},c.a.createElement(Ke.a,{className:"popup-delete-icon"})))))};le.a.config();var Xe=new pe,qe=Xe.getAllPins,$e=Xe.deletePin,et={latitude:37.7577,longitude:-122.4376,zoom:13},tt=function(){var e=Object(r.useState)(et),t=Object(a.a)(e,2),n=t[0],o=t[1],i=Object(r.useState)(null),u=Object(a.a)(i,2),l=u[0],s=u[1],m=Object(r.useState)(null),p=Object(a.a)(m,2),d=p[0],f=p[1],E=Object(r.useState)("90%"),h=Object(a.a)(E,2),b=h[0],v=h[1],g=Object(r.useContext)(N),j=g.state,y=g.dispatch,x=Object(O.unstable_useMediaQuery)("(max-width: 650px)"),_=function(){var e=Object(k.a)(S.a.mark(function e(){var t;return S.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return v("90%"),e.next=3,$e(d._id);case 3:t=e.sent,w(t);case 5:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),w=function(e){j.socket.emit("pinDeleted",e)},C=function(){var e=Object(k.a)(S.a.mark(function e(){var t;return S.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,qe();case 2:t=e.sent,y({type:"GET_PINS",payload:t});case 4:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();Object(r.useEffect)(function(){"geolocation"in navigator&&navigator.geolocation.getCurrentPosition(function(e){var t=e.coords,a=t.latitude,r=t.longitude;o(Object(T.a)({},n,{latitude:a,longitude:r})),s({latitude:a,longitude:r})})},[]),Object(r.useEffect)(function(){C()},[]),Object(r.useEffect)(function(){v(b),setTimeout(function(){d&&j.pins.findIndex(function(e){return e._id===d._id})>-1||f(null)},300)},[j.pins.length]);var P={height:x?b:"calc(100vh - 74px)",width:x?"100%":"66%"};return c.a.createElement("div",{className:x?"map-root-mobile":"map-root"},c.a.createElement("div",{style:P},c.a.createElement(A.d,Object.assign({mapboxApiAccessToken:"pk.eyJ1Ijoic2tlbG1hbiIsImEiOiJjanV5aXBldWowZ2ZnNDRvNDcxamEzcWd0In0.JwOHCN2wOuyyKgjg_Of2Mw",width:"100%",height:"100%",mapStyle:"mapbox://styles/mapbox/streets-v9"},n,{onViewportChange:function(e){return o(e)},onClick:function(e){var t=e.lngLat,n=e.leftButton;if(v("70%"),f(null),n){j.draft||y({type:"CREATE_DRAFT"});var r=Object(a.a)(t,2),c=r[0],o=r[1];y({type:"UPDATE_DRAFT",payload:{latitude:o,longitude:c}})}},scrollZoom:!x}),c.a.createElement(F,{setViewPort:o}),c.a.createElement(G,{draft:l,color:"red"}),c.a.createElement(G,{draft:j.draft,color:"hotpink"}),c.a.createElement(Je,{pins:j.pins,highlightNewPin:function(e){return D()(Date.now(),e.createdAt)<=5?"limegreen":"darkblue"},handleSelectedPin:function(e){v("70%"),f(null),setTimeout(function(){f(e),y({type:"SET_PIN",payload:e})})}}),c.a.createElement("div",null,c.a.createElement(Ze,{popup:d,handleClosePin:function(){v("90%"),f(null),y({type:"CLOSE_POPUP_PIN"})},isAuthUser:function(){return j.currentUser._id===d.author._id},handleDeletePin:_})))),c.a.createElement(Qe,{setHeight:v}))},nt=function(e,t){var n=e.socket;n.on("showNewPin",function(e){t({type:"PIN_CREATED",payload:e})}),n.on("updatedAfterDelete",function(e){t({type:"PIN_DELETED",payload:e})}),n.on("commentsUpdate",function(e){t({type:"CREATE_COMMENT",payload:e})})},at=function(){var e=Object(r.useContext)(N),t=e.state,n=e.dispatch,a=t.currentUser;return Object(r.useEffect)(function(){nt(t,n)},[]),c.a.createElement(c.a.Fragment,null,c.a.createElement(C,{currentUser:a}),c.a.createElement(tt,null))};n(486);le.a.config();var rt=function(e){var t=e.onSuccess,n=e.onFailure;return c.a.createElement("div",{className:"root"},c.a.createElement(g.a,{component:"h1",variant:"h2",gutterBottom:!0,noWrap:!0,style:{color:"rgb(66, 133, 244"}},"Welcome"),c.a.createElement(x.GoogleLogin,{clientId:"498092480911-f1n0tiuhi9jsdv6b2mr4m846ed45b2du.apps.googleusercontent.com",onSuccess:t,onFailure:n,isSignedIn:!0,theme:"dark"}))},ct=function(){var e=Object(k.a)(S.a.mark(function e(t){return S.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ie.a.post("/auth",null,{headers:{authorization:t}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),ot=function(){var e=Object(r.useContext)(N),t=e.dispatch,n=e.state,a=function(){var e=Object(k.a)(S.a.mark(function e(n){var a,r,c;return S.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a=n.getAuthResponse().id_token,e.next=4,ct(a);case 4:r=e.sent,c=r.data,t({type:"LOGIN_USER",payload:c}),t({type:"IS_LOGGED_IN",payload:n.isSignedIn()}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),t({type:"IS_LOGGED_IN",payload:!1});case 13:case"end":return e.stop()}},e,null,[[0,10]])}));return function(t){return e.apply(this,arguments)}}(),o=function(e){console.log(e),t({type:"IS_LOGGED_IN",payload:!1})};return n.isAuth?c.a.createElement(l.a,{to:"/"}):c.a.createElement(rt,{onSuccess:a,onFailure:o})},it=n(195);function ut(e,t){var n=t.type,a=t.payload;switch(n){case"LOGIN_USER":return Object(T.a)({},e,{currentUser:a});case"IS_LOGGED_IN":return Object(T.a)({},e,{isAuth:a});case"SIGNOUT_USER":return Object(T.a)({},e,{isAuth:!1,currentUser:null});case"CREATE_DRAFT":return Object(T.a)({},e,{currentPin:null,draft:{latitude:0,longitude:0}});case"UPDATE_DRAFT":return Object(T.a)({},e,{draft:a});case"DELETE_DRAFT":return Object(T.a)({},e,{draft:null});case"GET_PINS":return Object(T.a)({},e,{pins:a});case"PIN_CREATED":var r=a,c=e.pins.filter(function(e){return e._id!==r._id});return Object(T.a)({},e,{pins:[].concat(Object(it.a)(c),[r])});case"PIN_DELETED":var o=a,i=e.pins.filter(function(e){return o._id!==e._id});if(e.currentPin)if(o._id===e.currentPin._id)return Object(T.a)({},e,{currentPin:null,pins:i});return Object(T.a)({},e,{pins:i});case"SET_PIN":return Object(T.a)({},e,{currentPin:a,draft:null});case"CREATE_COMMENT":var u=a,l=e.pins.map(function(e){return e._id===u._id?u:e});return Object(T.a)({},e,{pins:l,currentPin:u});case"CLOSE_POPUP_PIN":return Object(T.a)({},e,{draft:null,currentPin:null});case"SET_SOCKET":return Object(T.a)({},e,{socket:a});default:return e}}var lt=n(196),st=function(e){var t=e.component,n=Object(lt.a)(e,["component"]),a=Object(r.useContext)(N).state;return c.a.createElement(l.b,Object.assign({render:function(e){return a.isAuth?c.a.createElement(t,e):c.a.createElement(l.a,{to:"/login"})}},n))};i.a.render(c.a.createElement(function(){var e,t=Object(r.useContext)(N),n=Object(r.useReducer)(ut,t),o=Object(a.a)(n,2),i=o[0],s=o[1];return Object(r.useEffect)(function(){e=m()(),s({type:"SET_SOCKET",payload:e})},[]),c.a.createElement(u.a,null,c.a.createElement(N.Provider,{value:{state:i,dispatch:s}},c.a.createElement(l.d,null,c.a.createElement(st,{exact:!0,path:"/",component:at}),c.a.createElement(l.b,{path:"/login",component:ot}))))},null),document.getElementById("root"))}},[[271,1,2]]]);
//# sourceMappingURL=main.10e75dbf.chunk.js.map