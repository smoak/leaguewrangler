(this.webpackJsonpleaguewrangler=this.webpackJsonpleaguewrangler||[]).push([[0],{178:function(e,t,a){"use strict";a.r(t);var n={};a.r(n),a.d(n,"session",(function(){return at}));var r,c,s=a(39),i=a(216),o=a(128),l=a(40),j=a(126),u=a(129),d=a(0),b=a(20),m=a(34),O=a.n(m),v=a(78),h=a(107),p=a.n(h),g=a(108),f=a.n(g),x=a(127),w=Object(x.a)({palette:{primary:p.a,secondary:f.a}}),N=function(e){return!!e.session.userToken},S=a(217),k=a(120),y=a(13),I=a(202),C=a(9),T=a(49),E=a(209),R=a(210),U=a(36),A=a(218),L=Object(A.a)(r||(r=Object(U.a)(["\n  query GetCurrentUserEvents {\n    currentUser {\n      events {\n        id: eventId\n        title\n        endTimestamp\n        startTimestamp\n        viewerRsvpStatus\n        team {\n          id: teamId\n          shortName\n          photoThumbnailUrl\n        }\n        location {\n          name\n          address\n          googleMapsUrl\n        }\n      }\n    }\n  }\n"]))),B=a(205),$=a(221),P=a(206),W=a(63),Y=a(207),D=a(204),F=a(109),M=a.n(F),q=a(203);!function(e){e.AVAILABLE="AVAILABLE",e.MAYBE="MAYBE",e.NO="NO",e.NONE="NONE",e.YES="YES"}(c||(c={}));var _,G=a(201),z=a(111),J=a.n(z),K=a(110),V=a.n(K),Q=a(3),H=function(e){var t=e.className,a=e.isNotPlaying,n=e.onRsvp,r=Object(d.useCallback)((function(){n(c.NO)}),[n]),s=a?Object(Q.jsx)(V.a,{className:t,color:"primary"}):Object(Q.jsx)(J.a,{className:t});return Object(Q.jsx)(G.a,{"aria-label":"Not Playing",onClick:r,children:s})},X=a(113),Z=a.n(X),ee=a(112),te=a.n(ee),ae=function(e){var t=e.isPlaying,a=e.className,n=e.onRsvp,r=Object(d.useCallback)((function(){n(c.YES)}),[n]),s=t?Object(Q.jsx)(te.a,{className:a,color:"primary"}):Object(Q.jsx)(Z.a,{className:a});return Object(Q.jsx)(G.a,{"aria-label":"Playing",onClick:r,children:s})},ne=a(115),re=a.n(ne),ce=a(114),se=a.n(ce),ie=function(e){var t=e.onRsvp,a=e.className,n=e.isTentative,r=Object(d.useCallback)((function(){t(c.MAYBE)}),[t]),s=n?Object(Q.jsx)(se.a,{className:a,color:"primary"}):Object(Q.jsx)(re.a,{className:a});return Object(Q.jsx)(G.a,{"aria-label":"Tentative",onClick:r,children:s})},oe=a(51),le=Object(A.a)(_||(_=Object(U.a)(["\n  mutation SaveEventRsvp($eventId: Int!, $rsvpStatus: RsvpStatus!, $teamId: Int!, $comments: String) {\n    saveRsvp(comments: $comments, eventId: $eventId, rsvpStatus: $rsvpStatus, teamId: $teamId) {\n      id: eventId\n      viewerRsvpStatus\n    }\n  }\n"]))),je=Object(I.a)({icon:{fontSize:40}}),ue=Object(C.a)(je)((function(e){var t=e.classes,a=e.eventId,n=e.teamId,r=e.rsvpStatus,s=function(e){var t=e.eventId,a=e.teamId,n=Object(T.a)(le),r=Object(oe.a)(n,2),c=r[0];return{loading:r[1].loading,saveRsvpCallback:Object(d.useCallback)((function(e){c({variables:{eventId:t,teamId:a,rsvpStatus:e}})}),[t,a,c])}}({teamId:n,eventId:a}),i=s.loading,o=s.saveRsvpCallback;return i?Object(Q.jsx)(q.a,{className:t.icon,color:"secondary"}):Object(Q.jsxs)(Q.Fragment,{children:[Object(Q.jsx)(ae,{className:t.icon,isPlaying:r===c.YES,onRsvp:o}),Object(Q.jsx)(ie,{className:t.icon,isTentative:r===c.MAYBE,onRsvp:o}),Object(Q.jsx)(H,{className:t.icon,isNotPlaying:r===c.NO,onRsvp:o})]})})),de=Object(C.a)((function(){return Object(I.a)({card:{width:"100%"}})}))((function(e){var t=e.classes,a=e.eventId,n=e.location,r=e.rsvpStatus,c=e.startTime,s=e.teamId,i=e.teamPhotoUrl,o=e.title,l=c?Object(Q.jsx)(M.a,{format:"LLLL",date:c}):null;return Object(Q.jsxs)(D.a,{className:t.card,children:[Object(Q.jsx)(B.a,{avatar:Object(Q.jsx)($.a,{"aria-label":"teamPhoto",src:i||""}),title:o,subheader:l}),Object(Q.jsx)(P.a,{children:Object(Q.jsx)(W.a,{component:"p",children:n})}),Object(Q.jsx)(Y.a,{children:Object(Q.jsx)(ue,{rsvpStatus:r,teamId:s,eventId:a})})]})})),be=a(208),me=Object(C.a)((function(){return Object(I.a)({card:{maxWidth:354,width:"100%"}})}))((function(e){var t=e.classes.card,a=Object(Q.jsx)(be.a,{height:6}),n=Object(Q.jsx)(be.a,{height:6,width:"80%"});return Object(Q.jsxs)(D.a,{className:t,children:[Object(Q.jsx)(B.a,{avatar:Object(Q.jsx)(be.a,{variant:"circle",width:40,height:40}),title:a,subheader:n}),Object(Q.jsx)(P.a,{children:Object(Q.jsx)(be.a,{variant:"rect",height:50})}),Object(Q.jsx)(Y.a,{children:Object(Q.jsx)(G.a,{children:Object(Q.jsx)(be.a,{variant:"rect"})})})]})}));function Oe(e){return null!==e&&void 0!==e}var ve,he,pe=function(){var e=Object(T.b)(L),t=e.loading,a=e.data,n=e.error;if(t)return Object(Q.jsx)(me,{});if(n||!a)return Object(Q.jsx)(Q.Fragment,{children:"Some error"});var r=a.currentUser.events.filter(Oe);return r.length>0?Object(Q.jsx)(E.a,{children:r.map((function(e){return Object(Q.jsx)(R.a,{children:Object(Q.jsx)(de,{eventId:e.id,teamId:e.team.id,title:e.title,teamPhotoUrl:e.team.photoThumbnailUrl,location:e.location?e.location.name:"",startTime:e.startTimestamp?new Date(1e3*e.startTimestamp):void 0,rsvpStatus:e.viewerRsvpStatus})},e.id)}))}):Object(Q.jsx)(Q.Fragment,{children:"No events scheduled"})},ge=Object(C.a)((function(e){return Object(I.a)({main:{display:"flex",justifyContent:"center",alignItems:"center",marginTop:e.spacing(2)}})}))((function(e){var t=e.classes;return Object(Q.jsx)("div",{className:t.main,children:Object(Q.jsx)(pe,{})})})),fe=function(){return Object(Q.jsx)(k.a,{children:Object(Q.jsx)(y.c,{children:Object(Q.jsx)(y.a,{exact:!0,path:"/",component:ge})})})},xe=function(){return Object(Q.jsx)(fe,{})},we=a(211),Ne=a(212),Se=a(122),ke=a.n(Se),ye=a(121),Ie=a.n(ye),Ce=Object(A.a)(ve||(ve=Object(U.a)(["\n  query GetUserAvatar {\n    currentUser {\n      profilePhotoThumbnailUrl\n    }\n  }\n"]))),Te=Object(I.a)({avatar:{margin:10}}),Ee=Object(C.a)(Te)((function(e){var t=e.classes,a=Object(T.b)(Ce),n=a.loading,r=a.data;return n?Object(Q.jsx)(q.a,{color:"secondary"}):r&&r.currentUser?Object(Q.jsx)($.a,{src:r.currentUser.profilePhotoThumbnailUrl,className:t.avatar}):Object(Q.jsx)(Ie.a,{})})),Re=Object(I.a)({menuButton:{marginLeft:-12,marginRight:20},grow:{flexGrow:1}}),Ue=Object(C.a)(Re)((function(e){var t=e.classes;return Object(Q.jsx)(we.a,{position:"static",children:Object(Q.jsxs)(Ne.a,{children:[Object(Q.jsx)(G.a,{className:t.menuButton,color:"inherit","aria-label":"Menu",children:Object(Q.jsx)(ke.a,{})}),Object(Q.jsx)(W.a,{variant:"h6",color:"inherit",className:t.grow,children:"League Wrangler"}),Object(Q.jsx)(Ee,{})]})})})),Ae=a(131),Le=a(124),Be=a.n(Le),$e=a(123),Pe=a.n($e),We=a(214),Ye=a(222),De=a(220),Fe=a(215),Me=a(219),qe="userToken",_e=Object(A.a)(he||(he=Object(U.a)(["\n  mutation CreateUserToken($username: String!, $password: String!) {\n    createUserToken(username: $username, password: $password) {\n      token\n    }\n  }\n"]))),Ge=a(213),ze=function(e){var t=e.className,a=e.isDisabled,n=e.onClick;return Object(Q.jsx)(Ge.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:t,onClick:function(e){function t(t){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(e){e.preventDefault(),n()})),disabled:a,children:"Sign in"})},Je=function(e){var t=Object(d.useState)(e),a=Object(oe.a)(t,2),n=a[0],r=a[1];return{value:n,onChange:Object(d.useCallback)((function(e){r(e.target.value)}),[])}},Ke=function(e){var t,a=e.submitButtonClassname,n=e.formClassname,r=Je(""),c=r.value,s=r.onChange,i=Je(""),o=i.value,l=i.onChange,j=Object(T.a)(_e),u=Object(oe.a)(j,2),b=u[0],m=u[1],O=m.data,v=m.error,h=m.loading,p=Object(d.useCallback)((function(){b({variables:{username:c,password:o}})}),[b,c,o]);O&&O.createUserToken&&(t=O.createUserToken.token,localStorage.setItem(qe,t),window.location.reload());var g=h?Object(Q.jsx)(q.a,{color:"secondary"}):Object(Q.jsx)(ze,{onClick:p,isDisabled:!c||!o,className:a});return Object(Q.jsxs)("div",{className:n,children:[Object(Q.jsxs)(We.a,{margin:"normal",required:!0,fullWidth:!0,error:!!v,children:[Object(Q.jsx)(Ye.a,{htmlFor:"username",children:"Username"}),Object(Q.jsx)(De.a,{id:"username",name:"username",autoComplete:"username",autoFocus:!0,value:c,onChange:s})]}),Object(Q.jsxs)(We.a,{margin:"normal",required:!0,fullWidth:!0,error:!!v,children:[Object(Q.jsx)(Ye.a,{htmlFor:"password",children:"Password"}),Object(Q.jsx)(De.a,{name:"password",type:"password",id:"password",autoComplete:"current-password",value:o,onChange:l})]}),Object(Q.jsx)(Fe.a,{control:Object(Q.jsx)(Me.a,{value:"remember",color:"primary"}),label:"Remember me"}),g]})},Ve=a(71),Qe=Be()((function(e){return Object(I.a)({main:Object(Ve.a)({width:"auto",display:"block",marginLeft:e.spacing(3),marginRight:e.spacing(3)},e.breakpoints.up(400+e.spacing(6)),{width:400,marginLeft:"auto",marginRight:"auto"}),paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center",padding:"".concat(e.spacing(2),"px ").concat(e.spacing(3),"px ").concat(e.spacing(3),"px")},avatar:{margin:e.spacing(),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing()},submit:{marginTop:e.spacing(3)}})}))((function(e){var t=e.classes;return Object(Q.jsx)("div",{className:t.main,children:Object(Q.jsxs)(Ae.a,{className:t.paper,children:[Object(Q.jsx)($.a,{className:t.avatar,children:Object(Q.jsx)(Pe.a,{})}),Object(Q.jsx)(W.a,{component:"h1",variant:"h5",children:"Sign in"}),Object(Q.jsx)(Ke,{formClassname:t.form,submitButtonClassname:t.submit})]})})})),He=function(e){var t=e.isAuthenticated;return Object(Q.jsxs)("div",{children:[Object(Q.jsx)(S.a,{}),Object(Q.jsx)(Ue,{}),t?Object(Q.jsx)(xe,{}):Object(Q.jsx)(Qe,{})]})},Xe=Object(v.b)((function(e){return{isAuthenticated:N(e)}}))(He),Ze=a(52),et=a(125),tt={},at=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:tt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SESSION.SET_USER_TOKEN":return Object(s.a)(Object(s.a)({},e),{},{userToken:t.payload});default:return e}},nt=function(){var e=Object(Ze.combineReducers)(Object(s.a)({},n)),t=Object(et.composeWithDevTools)();return Object(Ze.createStore)(e,t)},rt=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ct(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var st=nt(),it=localStorage.getItem(qe),ot=Object(u.a)({uri:"/graphql"}),lt=Object(j.a)((function(e,t){var a=t.headers;return{headers:Object(s.a)(Object(s.a)({},a),{},{authorization:it?"Bearer ".concat(it):""})}})),jt=new l.a({link:lt.concat(ot),cache:new o.a});it&&st.dispatch({type:"SESSION.SET_USER_TOKEN",payload:it}),O.a.render(Object(Q.jsx)(b.a,{client:jt,children:Object(Q.jsx)(i.a,{theme:w,children:Object(Q.jsx)(v.a,{store:st,children:Object(Q.jsx)(Xe,{})})})}),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location.toString()).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("","/service-worker.js");rt?(!function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):ct(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):ct(e)}))}}()}},[[178,1,2]]]);
//# sourceMappingURL=main.b680b390.chunk.js.map