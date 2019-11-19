(window.webpackJsonpleaguewrangler=window.webpackJsonpleaguewrangler||[]).push([[0],{223:function(e,t,n){e.exports=n(345)},345:function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"session",(function(){return Fe}));var r=n(34),c=n(0),o=n.n(c),i=n(55),l=n.n(i),s=n(74),u=function(e){return!!e.session.userToken},m=n(70),p=n.n(m),f=n(133),g=n(35),d=n(14),b=n(46),v=n(7),h=n(45),E=n(47);function O(){var e=Object(h.a)(["\n  query GetCurrentUserEvents {\n    currentUser {\n      events {\n        eventId\n        title\n        endTimestamp\n        startTimestamp\n        viewerRsvpStatus\n        team {\n          shortName\n          photoThumbnailUrl\n        }\n        location {\n          name\n          address\n          googleMapsUrl\n        }\n      }\n    }\n  }\n"]);return O=function(){return e},e}var y,w=Object(E.a)(O()),j=n(41),S=n.n(j),N=n(126),P=n.n(N);!function(e){e.AVAILABLE="AVAILABLE",e.MAYBE="MAYBE",e.NO="NO",e.NONE="NONE",e.YES="YES"}(y||(y={}));var k=n(128),T=n.n(k),C=n(127),U=n.n(C),D=function(e){var t=e.isPlaying,n=e.className,a=t?o.a.createElement(U.a,{className:n,color:"primary"}):o.a.createElement(T.a,{className:n});return o.a.createElement(v.j,{"aria-label":"Playing"},a)},L=n(130),A=n.n(L),x=n(129),B=n.n(x),I=function(e){var t=e.className,n=e.isTentative?o.a.createElement(B.a,{className:t,color:"primary"}):o.a.createElement(A.a,{className:t});return o.a.createElement(v.j,{"aria-label":"Tentative"},n)},W=n(132),R=n.n(W),M=n(131),F=n.n(M),Y=function(e){var t=e.className,n=e.isNotPlaying?o.a.createElement(F.a,{className:t,color:"primary"}):o.a.createElement(R.a,{className:t});return o.a.createElement(v.j,{"aria-label":"Not Playing"},n)},q=Object(d.createStyles)({icon:{fontSize:40}}),$=Object(d.withStyles)(q)((function(e){var t=e.classes,n=e.rsvpStatus;return o.a.createElement(o.a.Fragment,null,o.a.createElement(D,{className:t.icon,isPlaying:n===y.YES}),o.a.createElement(I,{className:t.icon,isTentative:n===y.MAYBE}),o.a.createElement(Y,{className:t.icon,isNotPlaying:n===y.NO}))})),_=Object(d.withStyles)((function(){return Object(d.createStyles)({card:{width:"100%"}})}))((function(e){var t=e.classes,n=e.title,a=e.teamPhotoUrl,r=e.startTime,c=e.location,i=e.rsvpStatus,l=r?o.a.createElement(P.a,{format:"LLLL",date:r}):null;return o.a.createElement(S.a,{className:t.card},o.a.createElement(v.e,{avatar:o.a.createElement(v.a,{"aria-label":"teamPhoto",src:a||""}),title:n,subheader:l}),o.a.createElement(v.d,null,o.a.createElement(v.p,{component:"p"},c)),o.a.createElement(v.c,null,o.a.createElement($,{rsvpStatus:i})))})),G=n(65),V=n.n(G),z=n(66),J=n.n(z),K=n(67),Q=n.n(K),H=n(36),X=n.n(H),Z=n(349),ee=Object(d.withStyles)((function(){return Object(d.createStyles)({card:{maxWidth:354,width:"100%"}})}))((function(e){var t=e.classes.card,n=o.a.createElement(Z.a,{height:6}),a=o.a.createElement(Z.a,{height:6,width:"80%"});return o.a.createElement(S.a,{className:t},o.a.createElement(Q.a,{avatar:o.a.createElement(Z.a,{variant:"circle",width:40,height:40}),title:n,subheader:a}),o.a.createElement(J.a,null,o.a.createElement(Z.a,{variant:"rect",height:50})),o.a.createElement(V.a,null,o.a.createElement(X.a,null,o.a.createElement(Z.a,{variant:"rect"}))))}));function te(e){return null!==e&&void 0!==e}var ne=function(){var e=Object(b.b)(w),t=e.loading,n=e.data,a=e.error;if(t)return o.a.createElement(ee,null);if(a||!n)return o.a.createElement(o.a.Fragment,null,"Some error");var r=n.currentUser.events.filter(te);return r.length>0?o.a.createElement(v.m,null,r.map((function(e){return o.a.createElement(v.n,{key:e.eventId},o.a.createElement(_,{title:e.title,teamPhotoUrl:e.team.photoThumbnailUrl,location:e.location?e.location.name:"",startTime:e.startTimestamp?new Date(1e3*e.startTimestamp):void 0,rsvpStatus:e.viewerRsvpStatus}))}))):o.a.createElement(o.a.Fragment,null,"No events scheduled")},ae=Object(d.withStyles)((function(e){return Object(d.createStyles)({main:{display:"flex",justifyContent:"center",alignItems:"center",marginTop:2*e.spacing.unit}})}))((function(e){var t=e.classes;return o.a.createElement("div",{className:t.main},o.a.createElement(ne,null))})),re=function(){return o.a.createElement(f.a,null,o.a.createElement(g.c,null,o.a.createElement(g.a,{exact:!0,path:"/",component:ae})))},ce=function(){return o.a.createElement(re,null)},oe=n(68),ie=n.n(oe),le=n(69),se=n.n(le),ue=n(136),me=n.n(ue),pe=n(135),fe=n.n(pe);function ge(){var e=Object(h.a)(["\n  query GetUserAvatar {\n    currentUser {\n      profilePhotoThumbnailUrl\n    }\n  }\n"]);return ge=function(){return e},e}var de=Object(E.a)(ge()),be=Object(d.createStyles)({avatar:{margin:10}}),ve=Object(d.withStyles)(be)((function(e){var t=e.classes,n=Object(b.b)(de),a=n.loading,r=n.data;return a?o.a.createElement(v.g,{color:"secondary"}):r&&r.currentUser?o.a.createElement(v.a,{src:r.currentUser.profilePhotoThumbnailUrl,className:t.avatar}):o.a.createElement(fe.a,null)})),he=Object(d.createStyles)({menuButton:{marginLeft:-12,marginRight:20},grow:{flexGrow:1}}),Ee=Object(d.withStyles)(he)((function(e){var t=e.classes;return o.a.createElement(ie.a,{position:"static"},o.a.createElement(se.a,null,o.a.createElement(X.a,{className:t.menuButton,color:"inherit","aria-label":"Menu"},o.a.createElement(me.a,null)),o.a.createElement(v.p,{variant:"h6",color:"inherit",className:t.grow},"League Wrangler"),o.a.createElement(ve,null)))})),Oe=n(137),ye=n.n(Oe),we=n(9),je=n.n(we),Se=n(75),Ne=function(e){var t=e.className,n=e.isDisabled,a=e.onClick;return o.a.createElement(v.b,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:t,onClick:function(e){function t(t){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(e){e.preventDefault(),a()})),disabled:n},"Sign in")};function Pe(){var e=Object(h.a)(["\n  mutation CreateUserToken($username: String!, $password: String!) {\n    createUserToken(username: $username, password: $password) {\n      token\n    }\n  }\n"]);return Pe=function(){return e},e}var ke=Object(E.a)(Pe()),Te=function(e){var t=Object(c.useState)(e),n=Object(Se.a)(t,2),a=n[0],r=n[1];return{value:a,onChange:Object(c.useCallback)((function(e){r(e.target.value)}),[])}},Ce=function(e){var t,n=e.submitButtonClassname,a=e.formClassname,r=Te(""),i=r.value,l=r.onChange,s=Te(""),u=s.value,m=s.onChange,p=Object(b.a)(ke),f=Object(Se.a)(p,2),g=f[0],d=f[1],h=d.data,E=d.error,O=d.loading,y=Object(c.useCallback)((function(){g({variables:{username:i,password:u}})}),[g,i,u]);h&&(t=h.createUserToken.token,localStorage.setItem("userToken",t),window.location.reload());var w=O?o.a.createElement(v.g,{color:"secondary"}):o.a.createElement(Ne,{onClick:y,isDisabled:!i||!u,className:n});return o.a.createElement("div",{className:a},o.a.createElement(v.h,{margin:"normal",required:!0,fullWidth:!0,error:!!E},o.a.createElement(v.l,{htmlFor:"username"},"Username"),o.a.createElement(v.k,{id:"username",name:"username",autoComplete:"username",autoFocus:!0,value:i,onChange:l})),o.a.createElement(v.h,{margin:"normal",required:!0,fullWidth:!0,error:!!E},o.a.createElement(v.l,{htmlFor:"password"},"Password"),o.a.createElement(v.k,{name:"password",type:"password",id:"password",autoComplete:"current-password",value:u,onChange:m})),o.a.createElement(v.i,{control:o.a.createElement(v.f,{value:"remember",color:"primary"}),label:"Remember me"}),w)},Ue=je()((function(e){return Object(d.createStyles)({main:Object(r.a)({width:"auto",display:"block",marginLeft:3*e.spacing.unit,marginRight:3*e.spacing.unit},e.breakpoints.up(400+3*e.spacing.unit*2),{width:400,marginLeft:"auto",marginRight:"auto"}),paper:{marginTop:8*e.spacing.unit,display:"flex",flexDirection:"column",alignItems:"center",padding:"".concat(2*e.spacing.unit,"px ").concat(3*e.spacing.unit,"px ").concat(3*e.spacing.unit,"px")},avatar:{margin:e.spacing.unit,backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing.unit},submit:{marginTop:3*e.spacing.unit}})}))((function(e){var t=e.classes;return o.a.createElement("div",{className:t.main},o.a.createElement(v.o,{className:t.paper},o.a.createElement(v.a,{className:t.avatar},o.a.createElement(ye.a,null)),o.a.createElement(v.p,{component:"h1",variant:"h5"},"Sign in"),o.a.createElement(Ce,{formClassname:t.form,submitButtonClassname:t.submit})))})),De=function(e){var t=e.isAuthenticated;return o.a.createElement("div",null,o.a.createElement(p.a,null),o.a.createElement(Ee,null),t?o.a.createElement(ce,null):o.a.createElement(Ue,null))},Le=Object(s.b)((function(e){return{isAuthenticated:u(e)}}))(De),Ae=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function xe(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var Be=n(43),Ie=n(138);function We(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function Re(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?We(n,!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):We(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Me={},Fe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Me,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SESSION.SET_USER_TOKEN":return Re({},e,{userToken:t.payload});default:return e}};function Ye(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var qe=function(){var e=Object(Be.combineReducers)(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ye(n,!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ye(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},a)),t=Object(Ie.composeWithDevTools)();return Object(Be.createStore)(e,t)},$e=n(29),_e=n(42),Ge=n(141),Ve=n(37),ze=n(18),Je=n(140),Ke=n.n(Je),Qe=n(139),He=n.n(Qe),Xe=Object(d.createMuiTheme)({palette:{primary:He.a,secondary:Ke.a},typography:{useNextVariants:!0}});function Ze(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function et(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ze(n,!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ze(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var tt=qe(),nt=localStorage.getItem("userToken"),at=Object(_e.b)({uri:"/graphql"}),rt=Object(Ge.a)((function(e,t){return{headers:et({},t.headers,{authorization:nt?"Bearer ".concat(nt):""})}})),ct=new $e.a({link:rt.concat(at),cache:new Ve.a});nt&&tt.dispatch({type:"SESSION.SET_USER_TOKEN",payload:nt}),l.a.render(o.a.createElement(ze.a,{client:ct},o.a.createElement(d.MuiThemeProvider,{theme:Xe},o.a.createElement(s.a,{store:tt},o.a.createElement(Le,null)))),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location.toString()).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("","/service-worker.js");Ae?(!function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):xe(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):xe(e)}))}}()}},[[223,1,2]]]);
//# sourceMappingURL=main.5e43e5c2.chunk.js.map