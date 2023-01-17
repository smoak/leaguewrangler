(this.webpackJsonpleaguewrangler=this.webpackJsonpleaguewrangler||[]).push([[0],{170:function(e,t,a){"use strict";a.r(t);var n={};a.r(n),a.d(n,"session",(function(){return at}));var r,c,s=a(229),i=a(232),o=a(227),l=a(228),j=a(247),u=a(65),d=a.n(u),b=a(93),m=a(144),O=a(214),v=a(62),h=Object(m.a)({palette:{primary:O.a,secondary:v.a}}),g=function(e){return!!e.session.userToken},p=a(225),x=a(138),f=a(25),w=a(243),N=a(252),S=a(242),y=a(222),k=a(230),I=a(245),T=a(24),C=a(231),U=Object(C.a)(r||(r=Object(T.a)(["\n  query GetCurrentUserEvents {\n    currentUser {\n      events {\n        id: eventId\n        title\n        endTimestamp\n        startTimestamp\n        viewerRsvpStatus\n        team {\n          id: teamId\n          shortName\n          photoThumbnailUrl\n        }\n        location {\n          name\n          address\n          googleMapsUrl\n        }\n      }\n    }\n  }\n"]))),E=a(254),R=a(240),A=a(255),B=a(256),$=a(253),P=a(251);!function(e){e.AVAILABLE="AVAILABLE",e.MAYBE="MAYBE",e.NO="NO",e.NONE="NONE",e.YES="YES"}(c||(c={}));var W,L=a(248),F=a(132),M=a.n(F),D=a(129),Y=a.n(D),z=a(0),q=a(2),_=function(e){var t=e.className,a=e.isNotPlaying,n=e.onRsvp,r=Object(z.useCallback)((function(){n(c.NO)}),[n]),s=a?Object(q.jsx)(Y.a,{className:t,color:"primary"}):Object(q.jsx)(M.a,{className:t});return Object(q.jsx)(L.a,{"aria-label":"Not Playing",onClick:r,size:"large",children:s})},G=a(134),J=a.n(G),K=a(133),V=a.n(K),Q=function(e){var t=e.isPlaying,a=e.className,n=e.onRsvp,r=Object(z.useCallback)((function(){n(c.YES)}),[n]),s=t?Object(q.jsx)(V.a,{className:a,color:"primary"}):Object(q.jsx)(J.a,{className:a});return Object(q.jsx)(L.a,{"aria-label":"Playing",onClick:r,size:"large",children:s})},H=a(136),X=a.n(H),Z=a(135),ee=a.n(Z),te=function(e){var t=e.onRsvp,a=e.className,n=e.isTentative,r=Object(z.useCallback)((function(){t(c.MAYBE)}),[t]),s=n?Object(q.jsx)(ee.a,{className:a,color:"primary"}):Object(q.jsx)(X.a,{className:a});return Object(q.jsx)(L.a,{"aria-label":"Tentative",onClick:r,size:"large",children:s})},ae=a(16),ne=Object(C.a)(W||(W=Object(T.a)(["\n  mutation SaveEventRsvp($eventId: Int!, $rsvpStatus: RsvpStatus!, $teamId: Int!, $comments: String) {\n    saveRsvp(comments: $comments, eventId: $eventId, rsvpStatus: $rsvpStatus, teamId: $teamId) {\n      id: eventId\n      viewerRsvpStatus\n    }\n  }\n"]))),re=a(221),ce=Object(y.a)({icon:{fontSize:30}}),se=Object(k.a)(ce)((function(e){var t=e.classes,a=e.eventId,n=e.teamId,r=e.rsvpStatus,s=function(e){var t=e.eventId,a=e.teamId,n=Object(re.a)(ne),r=Object(ae.a)(n,2),c=r[0];return{loading:r[1].loading,saveRsvpCallback:Object(z.useCallback)((function(e){c({variables:{eventId:t,teamId:a,rsvpStatus:e}})}),[t,a,c])}}({teamId:n,eventId:a}),i=s.loading,o=s.saveRsvpCallback;return i?Object(q.jsx)(P.a,{className:t.icon,color:"secondary"}):Object(q.jsxs)(q.Fragment,{children:[Object(q.jsx)(Q,{className:t.icon,isPlaying:r===c.YES,onRsvp:o}),Object(q.jsx)(te,{className:t.icon,isTentative:r===c.MAYBE,onRsvp:o}),Object(q.jsx)(_,{className:t.icon,isNotPlaying:r===c.NO,onRsvp:o})]})})),ie=a(238),oe=function(e){var t=e.locationName,a=e.locationUrl;return a||N.a,Object(q.jsx)(N.a,{component:"p",children:Object(q.jsx)(ie.a,{href:a,target:"_blank",rel:"noreferrer",children:t})})},le=function(){return Object(y.a)({card:{width:"100%",display:"flex",flexDirection:"column",justifyContent:"space-between"}})},je=function(e){var t=e.startTime;if(!t)return null;var a=1e3*t;return Object(q.jsx)("time",{dateTime:a.toString(),children:new Intl.DateTimeFormat(navigator.language,{dateStyle:"full",timeStyle:"short"}).format(new Date(a))})},ue=Object(k.a)(le)((function(e){var t=e.classes,a=e.eventId,n=e.location,r=e.locationMapsUrl,c=e.rsvpStatus,s=e.startTime,i=e.teamId,o=e.teamPhotoUrl,l=e.title;return Object(q.jsxs)($.a,{className:t.card,children:[Object(q.jsx)(E.a,{avatar:Object(q.jsx)(R.a,{"aria-label":"teamPhoto",src:null!==o&&void 0!==o?o:""}),title:l,subheader:Object(q.jsx)(je,{startTime:s})}),Object(q.jsx)(A.a,{children:Object(q.jsx)(oe,{locationName:n,locationUrl:r})}),Object(q.jsx)(B.a,{disableSpacing:!0,children:Object(q.jsx)(se,{rsvpStatus:c,teamId:i,eventId:a})})]})})),de=a(241),be=function(){return Object(y.a)({card:{maxWidth:354,width:"100%"}})},me=Object(k.a)(be)((function(e){var t=e.classes.card,a=Object(q.jsx)(de.a,{height:6}),n=Object(q.jsx)(de.a,{height:6,width:"80%"});return Object(q.jsxs)($.a,{className:t,children:[Object(q.jsx)(E.a,{avatar:Object(q.jsx)(de.a,{variant:"circular",width:40,height:40}),title:a,subheader:n}),Object(q.jsx)(A.a,{children:Object(q.jsx)(de.a,{variant:"rectangular",height:50})}),Object(q.jsx)(B.a,{children:Object(q.jsx)(L.a,{size:"large",children:Object(q.jsx)(de.a,{variant:"rectangular"})})})]})}));function Oe(e){return null!==e&&void 0!==e}var ve,he,ge=function(){var e=Object(I.a)(U),t=e.loading,a=e.data,n=e.error;if(t)return Object(q.jsxs)(q.Fragment,{children:[Object(q.jsx)(S.a,{item:!0,xs:4,"data-testid":"skeleton-event-1",children:Object(q.jsx)(me,{})}),Object(q.jsx)(S.a,{item:!0,xs:4,children:Object(q.jsx)(me,{})}),Object(q.jsx)(S.a,{item:!0,xs:4,children:Object(q.jsx)(me,{})})]});if(n||!a)return Object(q.jsx)(S.a,{item:!0,xs:8,children:"Some error"});var r=a.currentUser.events.filter(Oe);return r.length>0?Object(q.jsx)(q.Fragment,{children:r.map((function(e){var t,a,n,r;return Object(q.jsx)("article",{children:Object(q.jsx)(S.a,{item:!0,xs:6,style:{display:"flex"},children:Object(q.jsx)(ue,{eventId:e.id,teamId:e.team.id,title:e.title,teamPhotoUrl:null!==(t=e.team.photoThumbnailUrl)&&void 0!==t?t:null,location:e.location?e.location.name:"",locationMapsUrl:null!==(a=null===(n=e.location)||void 0===n?void 0:n.googleMapsUrl)&&void 0!==a?a:void 0,startTime:null!==(r=e.startTimestamp)&&void 0!==r?r:void 0,rsvpStatus:e.viewerRsvpStatus})})},e.id)}))}):Object(q.jsx)(q.Fragment,{children:"No events scheduled"})},pe=Object(k.a)((function(e){return Object(y.a)({main:{display:"flex",justifyContent:"center",alignItems:"center",margin:e.spacing(2)}})}))((function(e){var t=e.classes;return Object(q.jsxs)(w.a,{maxWidth:"md",children:[Object(q.jsx)(N.a,{variant:"h3",className:t.main,children:"Events"}),Object(q.jsx)(S.a,{container:!0,spacing:2,children:Object(q.jsx)(ge,{})})]})})),xe=function(){return Object(q.jsx)(x.a,{children:Object(q.jsx)(f.c,{children:Object(q.jsx)(f.a,{exact:!0,path:"/",component:pe})})})},fe=function(){return Object(q.jsx)(xe,{})},we=a(249),Ne=a(250),Se=a(140),ye=a.n(Se),ke=a(139),Ie=a.n(ke),Te=Object(C.a)(ve||(ve=Object(T.a)(["\n  query GetUserAvatar {\n    currentUser {\n      profilePhotoThumbnailUrl\n    }\n  }\n"]))),Ce=Object(y.a)({avatar:{margin:10}}),Ue=Object(k.a)(Ce)((function(e){var t=e.classes,a=Object(I.a)(Te),n=a.loading,r=a.data;return n?Object(q.jsx)(P.a,{color:"secondary"}):r&&r.currentUser?Object(q.jsx)(R.a,{src:r.currentUser.profilePhotoThumbnailUrl,className:t.avatar}):Object(q.jsx)(Ie.a,{"data-testid":"avatar-placeholder"})})),Ee=Object(y.a)({menuButton:{marginLeft:-12,marginRight:20},grow:{flexGrow:1}}),Re=Object(k.a)(Ee)((function(e){var t=e.classes;return Object(q.jsx)(we.a,{position:"static",children:Object(q.jsxs)(Ne.a,{children:[Object(q.jsx)(L.a,{className:t.menuButton,color:"inherit","aria-label":"Menu",size:"large",children:Object(q.jsx)(ye.a,{})}),Object(q.jsx)(N.a,{variant:"h6",color:"inherit",className:t.grow,children:"League Wrangler"}),Object(q.jsx)(Ue,{})]})})})),Ae=a(239),Be=a(141),$e=a.n(Be),Pe=a(257),We=a(237),Le=a(235),Fe=a(258),Me=a(234),De="userToken",Ye=Object(C.a)(he||(he=Object(T.a)(["\n  mutation CreateUserToken($username: String!, $password: String!) {\n    createUserToken(username: $username, password: $password) {\n      token\n    }\n  }\n"]))),ze=a(244),qe=function(e){var t=e.className,a=e.isDisabled,n=e.onClick;return Object(q.jsx)(ze.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:t,onClick:function(e){function t(t){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(e){e.preventDefault(),n()})),disabled:a,children:"Sign in"})},_e=function(e){var t=Object(z.useState)(e),a=Object(ae.a)(t,2),n=a[0],r=a[1];return{value:n,onChange:Object(z.useCallback)((function(e){r(e.target.value)}),[])}},Ge=function(e){var t,a=e.submitButtonClassname,n=e.formClassname,r=_e(""),c=r.value,s=r.onChange,i=_e(""),o=i.value,l=i.onChange,j=Object(re.a)(Ye),u=Object(ae.a)(j,2),d=u[0],b=u[1],m=b.data,O=b.error,v=b.loading,h=Object(z.useCallback)((function(){d({variables:{username:c,password:o}})}),[d,c,o]);m&&m.createUserToken&&(t=m.createUserToken.token,localStorage.setItem(De,t),window.location.reload());var g=v?Object(q.jsx)(P.a,{color:"secondary"}):Object(q.jsx)(qe,{onClick:h,isDisabled:!c||!o,className:a});return Object(q.jsxs)("div",{className:n,children:[Object(q.jsxs)(Pe.a,{margin:"normal",required:!0,fullWidth:!0,error:!!O,children:[Object(q.jsx)(We.a,{htmlFor:"username",children:"Username"}),Object(q.jsx)(Le.a,{id:"username",name:"username",autoComplete:"username",autoFocus:!0,value:c,onChange:s})]}),Object(q.jsxs)(Pe.a,{margin:"normal",required:!0,fullWidth:!0,error:!!O,children:[Object(q.jsx)(We.a,{htmlFor:"password",children:"Password"}),Object(q.jsx)(Le.a,{name:"password",type:"password",id:"password",autoComplete:"current-password",value:o,onChange:l,"data-testid":"password-textbox"})]}),Object(q.jsx)(Fe.a,{control:Object(q.jsx)(Me.a,{value:"remember",color:"primary"}),label:"Remember me"}),g]})},Je=a(7),Ke=function(e){return Object(y.a)({main:Object(Je.a)({width:"auto",display:"block",marginLeft:e.spacing(3),marginRight:e.spacing(3)},e.breakpoints.up("sm"),{width:552,marginLeft:"auto",marginRight:"auto"}),paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center",padding:"".concat(e.spacing(2)," ").concat(e.spacing(3)," ").concat(e.spacing(3))},avatar:{margin:e.spacing(),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing()},submit:{marginTop:e.spacing(3)}})},Ve=Object(k.a)(Ke)((function(e){var t=e.classes;return Object(q.jsx)("div",{className:t.main,children:Object(q.jsxs)(Ae.a,{className:t.paper,children:[Object(q.jsx)(R.a,{className:t.avatar,children:Object(q.jsx)($e.a,{})}),Object(q.jsx)(N.a,{component:"h1",variant:"h5",children:"Sign in"}),Object(q.jsx)(Ge,{formClassname:t.form,submitButtonClassname:t.submit})]})})})),Qe=function(e){var t=e.isAuthenticated;return Object(q.jsxs)("div",{children:[Object(q.jsx)(p.a,{}),Object(q.jsx)(Re,{}),t?Object(q.jsx)(fe,{}):Object(q.jsx)(Ve,{})]})},He=Object(b.b)((function(e){return{isAuthenticated:g(e)}}))(Qe),Xe=a(80),Ze=a(95),et=a(142),tt={},at=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:tt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SESSION.SET_USER_TOKEN":return Object(Xe.a)(Object(Xe.a)({},e),{},{userToken:t.payload});default:return e}},nt=function(){var e=Object(Ze.combineReducers)(Object(Xe.a)({},n)),t=Object(et.composeWithDevTools)();return Object(Ze.createStore)(e,t)},rt=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ct(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var st=nt(),it=localStorage.getItem(De),ot=new s.a({uri:"/graphql",headers:{authorization:it?"Bearer ".concat(it):""},cache:new i.a});it&&st.dispatch({type:"SESSION.SET_USER_TOKEN",payload:it}),d.a.render(Object(q.jsx)(o.a,{client:ot,children:Object(q.jsx)(l.a,{injectFirst:!0,children:Object(q.jsx)(j.a,{theme:h,children:Object(q.jsx)(b.a,{store:st,children:Object(q.jsx)(He,{})})})})}),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location.toString()).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("","/service-worker.js");rt?(!function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):ct(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):ct(e)}))}}()}},[[170,1,2]]]);
//# sourceMappingURL=main.fa83bdba.chunk.js.map