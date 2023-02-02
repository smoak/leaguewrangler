(this.webpackJsonpleaguewrangler=this.webpackJsonpleaguewrangler||[]).push([[0],{171:function(e,t,a){"use strict";a.r(t);var n={};a.r(n),a.d(n,"session",(function(){return tt}));var r,c,s=a(230),i=a(233),o=a(228),l=a(229),j=a(248),u=a(64),d=a.n(u),b=a(94),m=a(144),O=a(215),h=a(63),v=Object(m.a)({palette:{primary:O.a,secondary:h.a}}),g=function(e){return!!e.session.userToken},x=a(260),p=a(244),f=a(226),w=a(138),S=a(25),N=a(251),k=a(243),y=a(223),I=a(231),T=a(246),C=a(24),U=a(232),E=Object(U.a)(r||(r=Object(C.a)(["\n  query GetCurrentUserEvents {\n    currentUser {\n      events {\n        id: eventId\n        title\n        endTimestamp\n        startTimestamp\n        viewerRsvpStatus\n        team {\n          id: teamId\n          shortName\n          photoThumbnailUrl\n        }\n        location {\n          name\n          address\n          googleMapsUrl\n        }\n      }\n    }\n  }\n"]))),R=a(253),A=a(241),W=a(254),$=a(255),P=a(252),B=a(250);!function(e){e.AVAILABLE="AVAILABLE",e.MAYBE="MAYBE",e.NO="NO",e.NONE="NONE",e.YES="YES"}(c||(c={}));var F,L=a(249),M=a(132),D=a.n(M),Y=a(129),z=a.n(Y),q=a(0),_=a(2),G=function(e){var t=e.className,a=e.isNotPlaying,n=e.onRsvp,r=Object(q.useCallback)((function(){n(c.NO)}),[n]),s=a?Object(_.jsx)(z.a,{className:t,color:"primary"}):Object(_.jsx)(D.a,{className:t});return Object(_.jsx)(L.a,{"aria-label":"Not Playing",onClick:r,size:"large",children:s})},J=a(134),K=a.n(J),V=a(133),Q=a.n(V),H=function(e){var t=e.isPlaying,a=e.className,n=e.onRsvp,r=Object(q.useCallback)((function(){n(c.YES)}),[n]),s=t?Object(_.jsx)(Q.a,{className:a,color:"primary"}):Object(_.jsx)(K.a,{className:a});return Object(_.jsx)(L.a,{"aria-label":"Playing",onClick:r,size:"large",children:s})},X=a(136),Z=a.n(X),ee=a(135),te=a.n(ee),ae=function(e){var t=e.onRsvp,a=e.className,n=e.isTentative,r=Object(q.useCallback)((function(){t(c.MAYBE)}),[t]),s=n?Object(_.jsx)(te.a,{className:a,color:"primary"}):Object(_.jsx)(Z.a,{className:a});return Object(_.jsx)(L.a,{"aria-label":"Tentative",onClick:r,size:"large",children:s})},ne=a(16),re=Object(U.a)(F||(F=Object(C.a)(["\n  mutation SaveEventRsvp($eventId: Int!, $rsvpStatus: RsvpStatus!, $teamId: Int!, $comments: String) {\n    saveRsvp(comments: $comments, eventId: $eventId, rsvpStatus: $rsvpStatus, teamId: $teamId) {\n      id: eventId\n      viewerRsvpStatus\n    }\n  }\n"]))),ce=a(222),se=Object(y.a)({icon:{fontSize:30}}),ie=Object(I.a)(se)((function(e){var t=e.classes,a=e.eventId,n=e.teamId,r=e.rsvpStatus,s=function(e){var t=e.eventId,a=e.teamId,n=Object(ce.a)(re),r=Object(ne.a)(n,2),c=r[0];return{loading:r[1].loading,saveRsvpCallback:Object(q.useCallback)((function(e){c({variables:{eventId:t,teamId:a,rsvpStatus:e}})}),[t,a,c])}}({teamId:n,eventId:a}),i=s.loading,o=s.saveRsvpCallback;return i?Object(_.jsx)(B.a,{className:t.icon,color:"secondary"}):Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)(H,{className:t.icon,isPlaying:r===c.YES,onRsvp:o}),Object(_.jsx)(ae,{className:t.icon,isTentative:r===c.MAYBE,onRsvp:o}),Object(_.jsx)(G,{className:t.icon,isNotPlaying:r===c.NO,onRsvp:o})]})})),oe=a(239),le=function(e){var t=e.locationName,a=e.locationUrl;return a||N.a,Object(_.jsx)(N.a,{component:"p",children:Object(_.jsx)(oe.a,{href:a,target:"_blank",rel:"noreferrer",children:t})})},je=function(e){var t=e.startTime;if(!t)return null;var a=1e3*t;return Object(_.jsx)("time",{dateTime:a.toString(),children:new Intl.DateTimeFormat(navigator.language,{dateStyle:"full",timeStyle:"short"}).format(new Date(a))})},ue=function(e){var t=e.eventId,a=e.location,n=e.locationMapsUrl,r=e.rsvpStatus,c=e.startTime,s=e.teamId,i=e.teamPhotoUrl,o=e.title;return Object(_.jsxs)(P.a,{component:"article",sx:{height:"100%",display:"flex",flexDirection:"column"},children:[Object(_.jsx)(R.a,{avatar:Object(_.jsx)(A.a,{"aria-label":"teamPhoto",src:null!==i&&void 0!==i?i:""}),title:o,subheader:Object(_.jsx)(je,{startTime:c})}),Object(_.jsx)(W.a,{sx:{flexGrow:1},children:Object(_.jsx)(le,{locationName:a,locationUrl:n})}),Object(_.jsx)($.a,{disableSpacing:!0,children:Object(_.jsx)(ie,{rsvpStatus:r,teamId:s,eventId:t})})]})},de=a(242),be=function(){return Object(y.a)({card:{maxWidth:354,width:"100%"}})},me=Object(I.a)(be)((function(e){var t=e.classes.card,a=Object(_.jsx)(de.a,{height:6}),n=Object(_.jsx)(de.a,{height:6,width:"80%"});return Object(_.jsxs)(P.a,{className:t,children:[Object(_.jsx)(R.a,{avatar:Object(_.jsx)(de.a,{variant:"circular",width:40,height:40}),title:a,subheader:n}),Object(_.jsx)(W.a,{children:Object(_.jsx)(de.a,{variant:"rectangular",height:50})}),Object(_.jsx)($.a,{children:Object(_.jsx)(L.a,{size:"large",children:Object(_.jsx)(de.a,{variant:"rectangular"})})})]})}));function Oe(e){return null!==e&&void 0!==e}var he,ve,ge=function(){var e=Object(T.a)(E),t=e.loading,a=e.data,n=e.error;if(t)return Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)(k.a,{item:!0,xs:4,"data-testid":"skeleton-event-1",children:Object(_.jsx)(me,{})}),Object(_.jsx)(k.a,{item:!0,xs:4,children:Object(_.jsx)(me,{})}),Object(_.jsx)(k.a,{item:!0,xs:4,children:Object(_.jsx)(me,{})})]});if(n||!a)return Object(_.jsx)(k.a,{item:!0,xs:8,children:"Some error"});var r=a.currentUser.events.filter(Oe);return r.length>0?Object(_.jsx)(_.Fragment,{children:r.map((function(e){var t,a,n,r;return Object(_.jsx)(k.a,{item:!0,xs:12,sm:6,md:4,children:Object(_.jsx)(ue,{eventId:e.id,teamId:e.team.id,title:e.title,teamPhotoUrl:null!==(t=e.team.photoThumbnailUrl)&&void 0!==t?t:null,location:e.location?e.location.name:"",locationMapsUrl:null!==(a=null===(n=e.location)||void 0===n?void 0:n.googleMapsUrl)&&void 0!==a?a:void 0,startTime:null!==(r=e.startTimestamp)&&void 0!==r?r:void 0,rsvpStatus:e.viewerRsvpStatus})},e.id)}))}):Object(_.jsx)(_.Fragment,{children:"No events scheduled"})},xe=Object(I.a)((function(e){return Object(y.a)({main:{display:"flex",justifyContent:"center",alignItems:"center",margin:e.spacing(2)}})}))((function(e){var t=e.classes;return Object(_.jsxs)(p.a,{maxWidth:"md",children:[Object(_.jsx)(N.a,{variant:"h3",className:t.main,children:"Events"}),Object(_.jsx)(k.a,{container:!0,spacing:2,children:Object(_.jsx)(ge,{})})]})})),pe=function(){return Object(_.jsx)(w.a,{children:Object(_.jsx)(S.c,{children:Object(_.jsx)(S.a,{exact:!0,path:"/",component:xe})})})},fe=function(){return Object(_.jsx)(pe,{})},we=a(256),Se=a(257),Ne=a(140),ke=a.n(Ne),ye=a(139),Ie=a.n(ye),Te=Object(U.a)(he||(he=Object(C.a)(["\n  query GetUserAvatar {\n    currentUser {\n      profilePhotoThumbnailUrl\n    }\n  }\n"]))),Ce=Object(y.a)({avatar:{margin:10}}),Ue=Object(I.a)(Ce)((function(e){var t=e.classes,a=Object(T.a)(Te),n=a.loading,r=a.data;return n?Object(_.jsx)(B.a,{color:"secondary"}):r&&r.currentUser?Object(_.jsx)(A.a,{src:r.currentUser.profilePhotoThumbnailUrl,className:t.avatar}):Object(_.jsx)(Ie.a,{"data-testid":"avatar-placeholder"})})),Ee=function(){return Object(_.jsx)(we.a,{position:"static",children:Object(_.jsxs)(Se.a,{children:[Object(_.jsx)(L.a,{edge:"start",color:"inherit","aria-label":"Menu",sx:{mr:2},size:"large",children:Object(_.jsx)(ke.a,{})}),Object(_.jsx)(N.a,{variant:"h6",color:"inherit",sx:{flexGrow:1},children:"League Wrangler"}),Object(_.jsx)(Ue,{})]})})},Re=a(240),Ae=a(141),We=a.n(Ae),$e=a(258),Pe=a(238),Be=a(236),Fe=a(259),Le=a(235),Me="userToken",De=Object(U.a)(ve||(ve=Object(C.a)(["\n  mutation CreateUserToken($username: String!, $password: String!) {\n    createUserToken(username: $username, password: $password) {\n      token\n    }\n  }\n"]))),Ye=a(245),ze=function(e){var t=e.className,a=e.isDisabled,n=e.onClick;return Object(_.jsx)(Ye.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:t,onClick:function(e){function t(t){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(e){e.preventDefault(),n()})),disabled:a,children:"Sign in"})},qe=function(e){var t=Object(q.useState)(e),a=Object(ne.a)(t,2),n=a[0],r=a[1];return{value:n,onChange:Object(q.useCallback)((function(e){r(e.target.value)}),[])}},_e=function(e){var t,a=e.submitButtonClassname,n=e.formClassname,r=qe(""),c=r.value,s=r.onChange,i=qe(""),o=i.value,l=i.onChange,j=Object(ce.a)(De),u=Object(ne.a)(j,2),d=u[0],b=u[1],m=b.data,O=b.error,h=b.loading,v=Object(q.useCallback)((function(){d({variables:{username:c,password:o}})}),[d,c,o]);m&&m.createUserToken&&(t=m.createUserToken.token,localStorage.setItem(Me,t),window.location.reload());var g=h?Object(_.jsx)(B.a,{color:"secondary"}):Object(_.jsx)(ze,{onClick:v,isDisabled:!c||!o,className:a});return Object(_.jsxs)("div",{className:n,children:[Object(_.jsxs)($e.a,{margin:"normal",required:!0,fullWidth:!0,error:!!O,children:[Object(_.jsx)(Pe.a,{htmlFor:"username",children:"Username"}),Object(_.jsx)(Be.a,{id:"username",name:"username",autoComplete:"username",autoFocus:!0,value:c,onChange:s})]}),Object(_.jsxs)($e.a,{margin:"normal",required:!0,fullWidth:!0,error:!!O,children:[Object(_.jsx)(Pe.a,{htmlFor:"password",children:"Password"}),Object(_.jsx)(Be.a,{name:"password",type:"password",id:"password",autoComplete:"current-password",value:o,onChange:l,"data-testid":"password-textbox"})]}),Object(_.jsx)(Fe.a,{control:Object(_.jsx)(Le.a,{value:"remember",color:"primary"}),label:"Remember me"}),g]})},Ge=a(7),Je=function(e){return Object(y.a)({main:Object(Ge.a)({width:"auto",display:"block",marginLeft:e.spacing(3),marginRight:e.spacing(3)},e.breakpoints.up("sm"),{width:552,marginLeft:"auto",marginRight:"auto"}),paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center",padding:"".concat(e.spacing(2)," ").concat(e.spacing(3)," ").concat(e.spacing(3))},avatar:{margin:e.spacing(),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing()},submit:{marginTop:e.spacing(3)}})},Ke=Object(I.a)(Je)((function(e){var t=e.classes;return Object(_.jsx)("div",{className:t.main,children:Object(_.jsxs)(Re.a,{className:t.paper,children:[Object(_.jsx)(A.a,{className:t.avatar,children:Object(_.jsx)(We.a,{})}),Object(_.jsx)(N.a,{component:"h1",variant:"h5",children:"Sign in"}),Object(_.jsx)(_e,{formClassname:t.form,submitButtonClassname:t.submit})]})})})),Ve=function(e){var t=e.isAuthenticated;return Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)(f.a,{}),Object(_.jsx)(Ee,{}),Object(_.jsx)("main",{children:Object(_.jsx)(x.a,{sx:{bgcolor:"background.paper",pb:6},children:Object(_.jsx)(p.a,{maxWidth:"md",children:t?Object(_.jsx)(fe,{}):Object(_.jsx)(Ke,{})})})})]})},Qe=Object(b.b)((function(e){return{isAuthenticated:g(e)}}))(Ve),He=a(80),Xe=a(95),Ze=a(142),et={},tt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:et,t=arguments.length>1?arguments[1]:void 0;return"SESSION.SET_USER_TOKEN"===t.type?Object(He.a)(Object(He.a)({},e),{},{userToken:t.payload}):e},at=function(){var e=Object(Xe.combineReducers)(Object(He.a)({},n)),t=Object(Ze.composeWithDevTools)();return Object(Xe.createStore)(e,t)},nt=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function rt(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var ct=at(),st=localStorage.getItem(Me),it=new s.a({uri:"/graphql",headers:{authorization:st?"Bearer ".concat(st):""},cache:new i.a});st&&ct.dispatch({type:"SESSION.SET_USER_TOKEN",payload:st}),d.a.render(Object(_.jsx)(o.a,{client:it,children:Object(_.jsx)(l.a,{injectFirst:!0,children:Object(_.jsx)(j.a,{theme:v,children:Object(_.jsx)(b.a,{store:ct,children:Object(_.jsx)(Qe,{})})})})}),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location.toString()).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("","/service-worker.js");nt?(!function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):rt(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):rt(e)}))}}()}},[[171,1,2]]]);
//# sourceMappingURL=main.dce901bc.chunk.js.map