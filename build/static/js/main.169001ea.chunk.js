(this["webpackJsonpsecure-memo"]=this["webpackJsonpsecure-memo"]||[]).push([[0],{287:function(e,t){},322:function(e,t,a){},329:function(e,t){},331:function(e,t){},342:function(e,t){},344:function(e,t){},371:function(e,t){},373:function(e,t){},374:function(e,t){},379:function(e,t){},381:function(e,t){},400:function(e,t){},412:function(e,t){},415:function(e,t){},555:function(e,t,a){},556:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(15),c=a.n(i),s=a(91),o=a(92),l=a(294),d=a(292),j=a(17),u=(a(322),a(182)),b=a.n(u),m=a(619),h=a(597),p=a(590),O=a(620),x=a(587),g=a(598),f=a(615),y=a(134),v=a.n(y),w=a(110),S=a(588),k=a(589),C=a(140),M=a(291),B=a(2);function I(){return Object(B.jsxs)(w.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(B.jsx)(x.a,{color:"inherit",href:"./",children:"Secure Memo"})," ",(new Date).getFullYear(),"."]})}Object(M.a)({palette:{type:"dark"}});var N=Object(S.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));function T(e){var t=N(),a=Object(C.a)({reValidateMode:"onChange"}),n=a.register,r=a.handleSubmit,i=a.formState.errors;return Object(B.jsxs)(k.a,{component:"main",maxWidth:"xs",children:[Object(B.jsx)(p.a,{}),Object(B.jsxs)("div",{className:t.paper,children:[Object(B.jsx)(m.a,{className:t.avatar,children:Object(B.jsx)(v.a,{})}),Object(B.jsx)(w.a,{component:"h1",variant:"h5",children:"Sign in"}),Object(B.jsxs)("form",{className:t.form,onSubmit:r((function(t){e.signInUser(t)})),children:[Object(B.jsx)(O.a,Object(j.a)(Object(j.a)({variant:"outlined",margin:"normal",fullWidth:!0,id:"email",label:"Email Address",autoComplete:"off",autoFocus:!0},n("email",{required:!0,pattern:/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/})),{},{error:!!i.email,helperText:i.email?"required"===i.email.type?"Email address is required.":"Type a valid email address.":"Type your email address."})),Object(B.jsx)(O.a,Object(j.a)(Object(j.a)({variant:"outlined",margin:"normal",fullWidth:!0,label:"Password",type:"password",id:"password",autoComplete:"off"},n("password",{required:!0,minLength:8})),{},{error:!!i.password,helperText:i.password?"required"===i.password.type?"Password is required.":"Minimum lenght is 8.":"Type your password."})),Object(B.jsx)(h.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:t.submit,children:"Sign In"}),Object(B.jsx)(g.a,{container:!0,justify:"flex-end",children:Object(B.jsx)(g.a,{item:!0,children:Object(B.jsx)(x.a,{href:"/signup",variant:"body2",children:"Don't have an account? Sign Up"})})})]})]}),Object(B.jsx)(f.a,{mt:8,children:Object(B.jsx)(I,{})})]})}var U=a(181),E=a(16),D=a(46);function L(){return Object(B.jsxs)(w.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(B.jsx)(x.a,{color:"inherit",href:"./",children:"Secure Memo"})," ",(new Date).getFullYear(),"."]})}var A=Object(S.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)}}}));function H(e){var t=A(),a=Object(C.a)({reValidateMode:"onChange"}),n=a.register,r=a.handleSubmit,i=a.formState.errors;return Object(B.jsxs)(k.a,{component:"main",maxWidth:"xs",children:[Object(B.jsx)(p.a,{}),Object(B.jsxs)("div",{className:t.paper,children:[Object(B.jsx)(m.a,{className:t.avatar,children:Object(B.jsx)(v.a,{})}),Object(B.jsx)(w.a,{component:"h1",variant:"h5",children:"Sign up"}),Object(B.jsxs)("form",{className:t.form,onSubmit:r((function(t){e.signUpUser(t)})),children:[Object(B.jsxs)(g.a,{container:!0,spacing:2,children:[Object(B.jsx)(g.a,{item:!0,xs:12,sm:6,children:Object(B.jsx)(O.a,Object(j.a)(Object(j.a)(Object(D.a)({autoComplete:"fname",variant:"outlined",fullWidth:!0,id:"firstName",label:"First Name",autoFocus:!0},"autoComplete","off"),n("firstName",{required:!0,minLength:3})),{},{error:!!i.firstName,helperText:i.firstName?"required"===i.firstName.type?"First name is required.":" Minimum lenght 3.":"Type your first name."}))}),Object(B.jsx)(g.a,{item:!0,xs:12,sm:6,children:Object(B.jsx)(O.a,Object(j.a)(Object(j.a)({variant:"outlined",fullWidth:!0,id:"lastName",label:"Last Name",autoComplete:"off"},n("lastName",{required:!0,minLength:3})),{},{error:!!i.lastName,helperText:i.lastName?"required"===i.lastName.type?"Last name is required.":" Minimum lenght 3.":"Type your last name."}))}),Object(B.jsx)(g.a,{item:!0,xs:12,children:Object(B.jsx)(O.a,Object(j.a)(Object(j.a)({variant:"outlined",fullWidth:!0,id:"email",label:"Email Address",autoComplete:"off"},n("email",{required:!0,pattern:/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/})),{},{error:!!i.email,helperText:i.email?"required"===i.email.type?"Email address is required.":"Type a valid email address.":"Type your email address."}))}),Object(B.jsx)(g.a,{item:!0,xs:12,children:Object(B.jsx)(O.a,Object(j.a)(Object(j.a)({variant:"outlined",fullWidth:!0,label:"Password",type:"password",id:"password",autoComplete:"off"},n("password",{required:!0,minLength:8})),{},{error:!!i.password,helperText:i.password?"required"===i.password.type?"Password is required.":"Minimum lenght is 8.":"Type your password."}))})]}),Object(B.jsx)(h.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:t.submit,children:"Sign Up"}),Object(B.jsx)(g.a,{container:!0,justify:"flex-end",children:Object(B.jsx)(g.a,{item:!0,children:Object(B.jsx)(x.a,{href:"/signin",variant:"body2",children:"Already have an account? Sign in"})})})]})]}),Object(B.jsx)(f.a,{mt:5,children:Object(B.jsx)(L,{})})]})}var q=a(13),W=a(606),z=a(607),F=a(608),Y=a(187),P=a(612),R=a(596),J=a(559),Z=a(611),G=a(603),Q=a(610),V=a(137),$=a.n(V),K=a(286),X=a.n(K),_=a(138),ee=a.n(_),te=a(139),ae=a.n(te),ne=a(4),re=a(604),ie=a(601),ce=a(602),se=a(87),oe=a.n(se),le=a(88),de=a.n(le),je=a(89),ue=a.n(je),be=a(599),me=a(600),he=a(283),pe=a.n(he),Oe=Object(S.a)({list:{width:250},fullList:{width:"auto"},profileSection:{width:"100%",height:"10rem",display:"flex",alignItems:"center",justifyContent:"center",padding:"0 !important"},bgImage:{backgroundImage:"url('https://picsum.photos/300/200')",filter:"opacity(75%)",height:"100%",width:"100%",justifyContent:"center",alignItems:"center",display:"flex"}}),xe=Object(S.a)((function(e){return{root:{"& > *":{margin:e.spacing(1)}},orange:{color:e.palette.getContrastText(be.a[500]),backgroundColor:be.a[500]},purple:{color:e.palette.getContrastText(me.a[500]),backgroundColor:me.a[500]},small:{width:e.spacing(3),height:e.spacing(3)},large:{width:e.spacing(7),height:e.spacing(7)}}}));function ge(e){var t=e.anchor,a=Oe(),i=xe(),c=r.a.useState({top:!1,left:!1,bottom:!1,right:!1}),s=Object(q.a)(c,2),o=s[0],l=s[1],d=Object(E.g)(),u=function(e,t){return function(a){("keydown"!==a.type||"Tab"!==a.key&&"Shift"!==a.key)&&l(Object(j.a)(Object(j.a)({},o),{},Object(D.a)({},e,t)))}};return Object(n.useEffect)((function(){e.active&&document.getElementById("openDrawer").click()}),[]),Object(B.jsx)("div",{children:Object(B.jsxs)(r.a.Fragment,{children:[Object(B.jsx)(h.a,{style:{display:"none"},hidden:!0,id:"openDrawer",onClick:u(t,!0),children:t}),Object(B.jsx)(re.a,{anchor:t,open:o[t],onClose:u(t,!1),children:function(e){return Object(B.jsxs)("div",{className:Object(ne.a)(a.list,Object(D.a)({},a.fullList,"top"===e||"bottom"===e)),role:"presentation",onClick:u(e,!1),onKeyDown:u(e,!1),children:[Object(B.jsx)(R.a,{className:a.profileSection,children:Object(B.jsx)("div",{className:a.bgImage,children:Object(B.jsx)(m.a,{className:[i.orange,i.large],children:"OP"})})}),Object(B.jsx)(ie.a,{}),Object(B.jsxs)(R.a,{children:[Object(B.jsxs)(J.a,{button:!0,children:[Object(B.jsx)(ce.a,{children:Object(B.jsx)(oe.a,{})}),Object(B.jsx)(G.a,{primary:"All Memos"})]},"All Memos"),Object(B.jsxs)(J.a,{button:!0,children:[Object(B.jsx)(ce.a,{children:Object(B.jsx)(de.a,{})}),Object(B.jsx)(G.a,{primary:"Hidden Memos"})]},"Hidden Memos"),Object(B.jsxs)(J.a,{button:!0,children:[Object(B.jsx)(ce.a,{children:Object(B.jsx)(ue.a,{})}),Object(B.jsx)(G.a,{primary:"Secure Memos"})]},"Secure Memos"),Object(B.jsx)(ie.a,{}),Object(B.jsxs)(J.a,{onClick:function(){d.push("/about-us")},button:!0,children:[Object(B.jsx)(ce.a,{children:Object(B.jsx)(pe.a,{})}),Object(B.jsx)(G.a,{primary:"About Us"})]},"Secure Memos")]})]})}(t)})]},t)})}var fe=a(605),ye=a(136),ve=a.n(ye),we=a(560),Se=a(617),ke=a(609),Ce=a(593),Me=a(621),Be=a(622),Ie=a(285),Ne=a.n(Ie),Te=a(90),Ue=a.n(Te),Ee=a(623),De=Object(S.a)((function(e){return{appBar:{position:"relative"},title:{marginLeft:e.spacing(2),flex:1},devider:{maxWidth:"95%",margin:"auto"}}})),Le=r.a.forwardRef((function(e,t){return Object(B.jsx)(we.a,Object(j.a)({direction:"up",ref:t},e))}));function Ae(e){var t=De(),a=r.a.useState(!1),i=Object(q.a)(a,2),c=i[0],s=i[1],o=r.a.useState("allMemos"),l=Object(q.a)(o,2),d=l[0],j=l[1],u=r.a.useState(null),b=Object(q.a)(u,2),m=b[0],p=b[1],x=r.a.useState(!1),g=Object(q.a)(x,2),f=g[0],y=g[1],v=r.a.useState("Some memo heading content"),S=Object(q.a)(v,2),k=S[0],C=S[1],M=r.a.useState("Some memo body content"),I=Object(q.a)(M,2),N=I[0],T=I[1];Object(n.useEffect)((function(){s(!0),setTimeout((function(){p(document.getElementById("bodyTextarea").clientHeight+2.5*document.getElementById("bodyTextarea").clientHeight/10+"px")}),500)}),[]);var U=function(){document.getElementById("addBtn").click(),s(!1)};return Object(B.jsx)("div",{children:Object(B.jsxs)(fe.a,{fullScreen:!0,open:c,onClose:U,TransitionComponent:Le,children:[Object(B.jsx)(W.a,{className:t.appBar,children:Object(B.jsxs)(z.a,{children:[Object(B.jsx)(Be.a,{title:"Cancel",arrow:!0,children:Object(B.jsx)(F.a,{edge:"start",color:"inherit",onClick:U,"aria-label":"close",children:Object(B.jsx)(ve.a,{})})}),Object(B.jsx)(w.a,{variant:"h6",className:t.title,children:"Create a new Memo"}),Object(B.jsx)(Be.a,{title:"Save Memo",arrow:!0,children:Object(B.jsx)(h.a,{autoFocus:!0,color:"inherit",onClick:function(){U(),e.showSnackBar(!0)},variant:"outlined",startIcon:Object(B.jsx)(Ne.a,{}),children:"save"})})]})}),Object(B.jsx)(R.a,{children:Object(B.jsxs)("form",{className:t.form,autoComplete:"off",children:[Object(B.jsx)(J.a,{style:{paddingBottom:0},children:Object(B.jsx)(G.a,{primary:"Memo Heading"})}),Object(B.jsx)(J.a,{children:Object(B.jsx)(O.a,{id:"outlined-basic",label:"Memo Heading",variant:"outlined",fullWidth:!0,value:k,onChange:function(){C(event.target.value)}})}),Object(B.jsx)(ie.a,{className:t.devider}),Object(B.jsxs)(J.a,{style:{paddingBottom:0},children:[Object(B.jsx)(G.a,{primary:"Memo Body"}),Object(B.jsx)("p",{style:{textAlign:"right"},children:Object(B.jsx)("small",{children:"* Markdown enabled"})})]}),Object(B.jsx)(J.a,{children:Object(B.jsx)(O.a,{id:"bodyTextarea",label:"Memo Body",variant:"outlined",rows:"7",multiline:!0,fullWidth:!0,"aria-label":"textarea",value:N,onChange:function(){T(document.getElementById("bodyTextarea").value)}})}),Object(B.jsxs)(J.a,{style:{paddingBottom:0},children:[Object(B.jsx)(G.a,{primary:"Memo Body Preview"}),Object(B.jsxs)("p",{style:{textAlign:"right"},children:["Scrollable",Object(B.jsx)(Ee.a,{id:"mdSwitch",onChange:function(e){y(document.getElementById("mdSwitch").checked),function(e){y(e.target.checked),f?(document.getElementById("markdown-preview").style.overflowY="visible",document.getElementById("markdown-preview").style.height="auto"):(document.getElementById("markdown-preview").style.overflowY="scroll",document.getElementById("markdown-preview").style.height=m)}(e)},color:"primary",checked:f})]})]}),Object(B.jsx)(J.a,{children:Object(B.jsx)(Y.a,{id:"markdown-preview",variant:"outlined",style:{minHeight:m,margin:".13rem",width:"100vw",overflowY:"visible",paddingLeft:".7rem"},children:Object(B.jsx)(Ue.a,{children:N})})}),Object(B.jsx)(ie.a,{className:t.devider}),Object(B.jsx)(J.a,{style:{paddingBottom:0},children:Object(B.jsx)(G.a,{primary:"Add Memo to"})}),Object(B.jsx)(J.a,{children:Object(B.jsxs)(Ce.a,{variant:"outlined",fullWidth:!0,className:t.formControl,children:[Object(B.jsx)(Me.a,{id:"demo-simple-select-outlined-label",children:"Add to"}),Object(B.jsxs)(Se.a,{labelId:"demo-simple-select-outlined-label",id:"demo-simple-select-outlined",value:d,onChange:function(e){j(e.target.value)},label:"Add to",children:[Object(B.jsxs)(ke.a,{value:"allMemos",children:[Object(B.jsx)(oe.a,{})," All Memos"]}),Object(B.jsxs)(ke.a,{value:"hiddenMemos",children:[Object(B.jsx)(de.a,{})," Hidden"]}),Object(B.jsxs)(ke.a,{value:"secureMemos",children:[Object(B.jsx)(ue.a,{})," Secure"]})]})]})}),Object(B.jsx)(ie.a,{className:t.devider})]})})]})})}var He=a(618),qe=a(616),We=a(293),ze=[{id:1,primary:"Brunch this week?",secondary:"I'll be in the neighbourhood this week. Let's grab a bite to eat",person:"/static/images/avatar/5.jpg"},{id:2,primary:"Birthday Gift",secondary:"Do you have a suggestion for a good present for John on his work\n      anniversary. I am really confused & would love your thoughts on it.",person:"/static/images/avatar/1.jpg"},{id:3,primary:"Recipe to try",secondary:"I am try out this new BBQ recipe, I think this might be amazing",person:"/static/images/avatar/2.jpg"},{id:4,primary:"Yes!",secondary:"I have the tickets to the ReactConf for this year.",person:"/static/images/avatar/3.jpg"},{id:5,primary:"Doctor's Appointment",secondary:"My appointment for the doctor was rescheduled for next Saturday.",person:"/static/images/avatar/4.jpg"},{id:6,primary:"Discussion",secondary:"Menus that are generated by the bottom app bar (such as a bottom\n      navigation drawer or overflow menu) open as bottom sheets at a higher elevation\n      than the bar.",person:"/static/images/avatar/5.jpg"},{id:7,primary:"Summer BBQ",secondary:"Who wants to have a cookout this weekend? I just got some furniture\n      for my backyard and would love to fire up the grill.",person:"/static/images/avatar/1.jpg"}],Fe=Object(S.a)((function(e){return{text:{padding:e.spacing(2,2,0)},paper:{paddingBottom:50},list:{marginBottom:e.spacing(2),minHeight:"80vh"},subheader:{backgroundColor:e.palette.background.paper},appBar:{top:"auto",bottom:0},grow:{flexGrow:1},fabButton:{position:"absolute",zIndex:1,top:-30,left:0,right:0,margin:"0 auto"}}}));function Ye(e){return Object(B.jsx)(qe.a,Object(j.a)({elevation:6,variant:"filled"},e))}function Pe(e){var t,a,i=Fe(),c=Object(n.useState)(!1),s=Object(q.a)(c,2),o=s[0],l=s[1],d=Object(n.useState)(!1),j=Object(q.a)(d,2),u=j[0],b=j[1],h=Object(n.useState)(!1),O=Object(q.a)(h,2),x=O[0],g=O[1],f=r.a.useState(null),y=Object(q.a)(f,2),v=y[0],S=y[1],k=function(){S(null)},C=function(e,t){"clickaway"!==t&&g(!1)};return Object(B.jsxs)(r.a.Fragment,{children:[Object(B.jsx)(p.a,{}),Object(B.jsxs)(Y.a,{square:!0,className:i.paper,children:[Object(B.jsx)(w.a,{className:i.text,variant:"h5",gutterBottom:!0,children:"Inbox"}),Object(B.jsx)(R.a,{className:i.list,children:ze.map((function(e){var t=e.id,a=e.primary,n=e.secondary;e.person;return Object(B.jsxs)(r.a.Fragment,{children:[1===t&&Object(B.jsx)(Q.a,{className:i.subheader,children:"Today"}),3===t&&Object(B.jsx)(Q.a,{className:i.subheader,children:"Yesterday"}),Object(B.jsxs)(J.a,{button:!0,children:[Object(B.jsx)(Z.a,{children:Object(B.jsx)(m.a,{alt:"Profile Picture",children:a.charAt(0).toUpperCase()})}),Object(B.jsx)(G.a,{onClick:function(){window.location.href="./view-memo/1234"},primary:a,secondary:n})]})]},t)}))})]}),Object(B.jsx)(W.a,{position:"fixed",color:"primary",className:i.appBar,children:Object(B.jsxs)(z.a,{children:[Object(B.jsx)(F.a,{onClick:function(){l(!o),document.getElementById("openDrawer").click()},edge:"start",color:"inherit","aria-label":"open drawer",children:Object(B.jsx)($.a,{})}),Object(B.jsx)(Be.a,{title:"Create new Memo",arrow:!0,children:Object(B.jsx)(P.a,{id:"addBtn",color:"secondary","aria-label":"add",className:i.fabButton,onClick:function(){u?setTimeout((function(){b(!1)}),500):b(!0)},children:Object(B.jsx)(X.a,{})})}),Object(B.jsx)("div",{className:i.grow}),Object(B.jsx)(Be.a,{title:"Search",arrow:!0,children:Object(B.jsx)(F.a,{color:"inherit",children:Object(B.jsx)(ee.a,{})})}),Object(B.jsx)(Be.a,{title:"Options",arrow:!0,children:Object(B.jsx)(F.a,{"aria-controls":"simple-menu",edge:"end",color:"inherit","aria-aria-haspopup":"true",onClick:function(e){S(e.currentTarget)},children:Object(B.jsx)(ae.a,{})})}),Object(B.jsxs)(We.a,{id:"simple-menu",anchorEl:v,keepMounted:!0,open:Boolean(v),onClose:k,children:[Object(B.jsx)(ke.a,{onClick:k,children:"Profile"}),Object(B.jsx)(ke.a,{onClick:k,children:"My account"}),Object(B.jsx)(ke.a,{onClick:function(){k(),e.logoutUser()},children:"Logout"})]})]})}),Object(B.jsx)(ge,{anchor:"left",active:o}),x?(t="Memo saved successsfully..!",a="success",Object(B.jsx)(He.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:x,autoHideDuration:6e3,onClose:C,children:Object(B.jsx)(Ye,{onClose:C,severity:a,children:t})})):null,u?Object(B.jsx)(Ae,{showSnackBar:g}):null]})}var Re=a(287),Je=a.n(Re),Ze=a(613),Ge=a(614);function Qe(){return Object(B.jsxs)(w.a,{variant:"body2",color:"textSecondary",children:["Copyright \xa9 ",Object(B.jsx)(x.a,{color:"inherit",href:"./",children:"Secure Memo"})," ",(new Date).getFullYear(),"."]})}var Ve=Object(S.a)((function(e){return{root:{display:"flex",flexDirection:"column",minHeight:"100vh"},main:{marginTop:e.spacing(8),marginBottom:e.spacing(2)},footer:{padding:e.spacing(3,2),marginTop:"auto",backgroundColor:"dark"===e.palette.type?e.palette.grey[200]:e.palette.grey[800]}}}));function $e(){var e=Ve(),t=Object(Ze.a)("(prefers-color-scheme: dark)"),a=r.a.useMemo((function(){return Object(M.a)({palette:{type:t?"dark":"light"}})}),[t]);return Object(B.jsxs)(Ge.a,{theme:a,children:[Object(B.jsx)(p.a,{}),Object(B.jsxs)("div",{className:e.root,children:[Object(B.jsx)(p.a,{}),Object(B.jsxs)(k.a,{component:"main",className:e.main,maxWidth:"sm",children:[Object(B.jsx)(w.a,{variant:"h2",component:"h1",gutterBottom:!0,children:Object(B.jsx)(x.a,{href:"./",style:{color:"white"},children:"Secure Memo"})}),Object(B.jsxs)(w.a,{variant:"h5",component:"h2",gutterBottom:!0,children:["This website created and maintained by ",Object(B.jsx)(x.a,{href:"https://github.com/Muhammed-Rahif",variant:"h5",style:{color:"white"},children:Object(B.jsx)("b",{children:"Muhammed Rahif."})}),Object(B.jsx)("br",{})]}),Object(B.jsx)(w.a,{variant:"subtitle1",component:"h3",children:"I hope you will contact me for any inquiries..."}),Object(B.jsx)(w.a,{variant:"body1",children:"Have a nice day."})]}),Object(B.jsx)("footer",{className:e.footer,children:Object(B.jsxs)(k.a,{maxWidth:"sm",children:[Object(B.jsxs)(w.a,{variant:"body1",children:["Made with"," ",Object(B.jsx)(x.a,{variant:"body1",href:"https://material-ui.com/",style:{color:"white"},children:"React Material UI"})]}),Object(B.jsx)(Qe,{})]})})]})]})}var Ke=a(185),Xe=a.n(Ke),_e=a(288),et=a.n(_e),tt=Object(S.a)((function(e){return{appBar:{position:"relative"},title:{marginLeft:e.spacing(2),flex:1},devider:{maxWidth:"95%",margin:"auto"}}})),at=r.a.forwardRef((function(e,t){return Object(B.jsx)(we.a,Object(j.a)({direction:"up",ref:t},e))}));function nt(e){var t=tt(),a=r.a.useState(!1),i=Object(q.a)(a,2),c=i[0],s=i[1],o=r.a.useState("allMemos"),l=Object(q.a)(o,2),d=l[0],j=l[1],u=r.a.useState(null),b=Object(q.a)(u,2),m=b[0],p=b[1],x=r.a.useState(!1),g=Object(q.a)(x,2),f=g[0],y=g[1],v=r.a.useState("Some memo heading content"),S=Object(q.a)(v,2),k=S[0],C=S[1],M=r.a.useState("Some memo body content"),I=Object(q.a)(M,2),N=I[0],T=I[1];Object(n.useEffect)((function(){s(!0),j("hiddenMemos"),setTimeout((function(){p(document.getElementById("bodyTextarea").clientHeight+2.5*document.getElementById("bodyTextarea").clientHeight/10+"px")}),500)}),[]);var U=function(){document.getElementById("editBtn").click(),s(!1)};return Object(B.jsx)("div",{children:Object(B.jsxs)(fe.a,{fullScreen:!0,open:c,onClose:U,TransitionComponent:at,children:[Object(B.jsx)(W.a,{className:t.appBar,children:Object(B.jsxs)(z.a,{children:[Object(B.jsx)(Be.a,{title:"Cancel",arrow:!0,children:Object(B.jsx)(F.a,{edge:"start",color:"inherit",onClick:U,"aria-label":"close",children:Object(B.jsx)(ve.a,{})})}),Object(B.jsx)(w.a,{variant:"h6",className:t.title,children:"Edit Memo"}),Object(B.jsx)(Be.a,{title:"Save Memo",arrow:!0,children:Object(B.jsx)(h.a,{autoFocus:!0,color:"inherit",onClick:function(){U(),e.showSnackBar(!0)},variant:"outlined",startIcon:Object(B.jsx)(et.a,{}),children:"update"})})]})}),Object(B.jsx)(R.a,{children:Object(B.jsxs)("form",{className:t.form,autoComplete:"off",children:[Object(B.jsx)(J.a,{style:{paddingBottom:0},children:Object(B.jsx)(G.a,{primary:"Memo Heading"})}),Object(B.jsx)(J.a,{children:Object(B.jsx)(O.a,{id:"outlined-basic",label:"Memo Heading",variant:"outlined",fullWidth:!0,value:k,onChange:function(){C(event.target.value)}})}),Object(B.jsx)(ie.a,{className:t.devider}),Object(B.jsxs)(J.a,{style:{paddingBottom:0},children:[Object(B.jsx)(G.a,{primary:"Memo Body"}),Object(B.jsx)("p",{style:{textAlign:"right"},children:Object(B.jsx)("small",{children:"* Markdown enabled"})})]}),Object(B.jsx)(J.a,{children:Object(B.jsx)(O.a,{id:"bodyTextarea",label:"Memo Body",variant:"outlined",rows:"7",multiline:!0,fullWidth:!0,"aria-label":"textarea",value:N,onChange:function(){T(document.getElementById("bodyTextarea").value)}})}),Object(B.jsx)(ie.a,{className:t.devider}),Object(B.jsxs)(J.a,{style:{paddingBottom:0},children:[Object(B.jsx)(G.a,{primary:"Memo Body Preview"}),Object(B.jsxs)("p",{style:{textAlign:"right"},children:["Scrollable",Object(B.jsx)(Ee.a,{id:"mdSwitch",onChange:function(e){y(document.getElementById("mdSwitch").checked),function(e){y(e.target.checked),f?(document.getElementById("markdown-preview").style.overflowY="visible",document.getElementById("markdown-preview").style.height="auto"):(document.getElementById("markdown-preview").style.overflowY="scroll",document.getElementById("markdown-preview").style.height=m)}(e)},color:"primary",style:{paddingBottom:0},checked:f})]})]}),Object(B.jsx)(J.a,{children:Object(B.jsx)(Y.a,{id:"markdown-preview",variant:"outlined",style:{minHeight:m,margin:".13rem",width:"100vw",overflowY:"visible",paddingLeft:".7rem"},children:Object(B.jsx)(Ue.a,{children:N})})}),Object(B.jsx)(ie.a,{className:t.devider}),Object(B.jsx)(J.a,{style:{paddingBottom:0},children:Object(B.jsx)(G.a,{primary:"Add Memo to"})}),Object(B.jsx)(J.a,{children:Object(B.jsxs)(Ce.a,{variant:"outlined",fullWidth:!0,className:t.formControl,children:[Object(B.jsx)(Me.a,{id:"demo-simple-select-outlined-label",children:"Add to"}),Object(B.jsxs)(Se.a,{labelId:"demo-simple-select-outlined-label",id:"demo-simple-select-outlined",value:d,onChange:function(e){j(e.target.value)},label:"Add to",children:[Object(B.jsxs)(ke.a,{value:"allMemos",children:[Object(B.jsx)(oe.a,{})," All Memos"]}),Object(B.jsxs)(ke.a,{value:"hiddenMemos",children:[Object(B.jsx)(de.a,{})," Hidden"]}),Object(B.jsxs)(ke.a,{value:"secureMemos",children:[Object(B.jsx)(ue.a,{})," Secure"]})]})]})}),Object(B.jsx)(ie.a,{className:t.devider})]})})]})})}var rt=a(290),it=a.n(rt),ct=a(289),st=a.n(ct),ot=Object(S.a)((function(e){return{text:{padding:e.spacing(2,2,0)},paper:{paddingBottom:50},list:{marginBottom:e.spacing(2),minHeight:"80vh",padding:"1.5rem"},subheader:{backgroundColor:e.palette.background.paper},appBar:{top:"auto",bottom:0},grow:{flexGrow:1},fabButton:{position:"absolute",zIndex:1,top:-30,left:0,right:0,margin:"0 auto"}}}));function lt(e){return Object(B.jsx)(qe.a,Object(j.a)({elevation:6,variant:"filled"},e))}function dt(){var e,t,a=ot(),i=Object(n.useState)(!1),c=Object(q.a)(i,2),s=c[0],o=c[1],l=Object(n.useState)(!1),d=Object(q.a)(l,2),j=d[0],u=d[1],b=Object(n.useState)(!1),m=Object(q.a)(b,2),h=m[0],O=m[1],x=r.a.useState(null),g=Object(q.a)(x,2),f=g[0],y=g[1],v=function(){y(null)},S=function(e,t){"clickaway"!==t&&O(!1)};return Object(B.jsxs)(r.a.Fragment,{children:[Object(B.jsx)(p.a,{}),Object(B.jsxs)(Y.a,{square:!0,className:a.paper,children:[Object(B.jsx)(w.a,{className:a.text,variant:"h5",gutterBottom:!0,children:"Your Memo Heading"}),Object(B.jsx)(R.a,{className:a.list,children:Object(B.jsx)(Ue.a,{})})]}),Object(B.jsx)(W.a,{position:"fixed",color:"primary",className:a.appBar,children:Object(B.jsxs)(z.a,{children:[Object(B.jsx)(F.a,{onClick:function(){o(!s),document.getElementById("openDrawer").click()},edge:"start",color:"inherit","aria-label":"open drawer",children:Object(B.jsx)($.a,{})}),Object(B.jsx)(Be.a,{title:"Edit this Memo",arrow:!0,children:Object(B.jsx)(P.a,{id:"addBtn",color:"secondary","aria-label":"add",className:a.fabButton,onClick:function(){j?setTimeout((function(){u(!1)}),500):u(!0)},children:Object(B.jsx)(Xe.a,{})})}),Object(B.jsx)("div",{className:a.grow}),Object(B.jsx)(Be.a,{title:"Search",arrow:!0,children:Object(B.jsx)(F.a,{color:"inherit",children:Object(B.jsx)(ee.a,{})})}),Object(B.jsx)(Be.a,{title:"Options",arrow:!0,children:Object(B.jsx)(F.a,{"aria-controls":"simple-menu",edge:"end",color:"inherit","aria-aria-haspopup":"true",onClick:function(e){y(e.currentTarget)},children:Object(B.jsx)(ae.a,{})})}),Object(B.jsxs)(We.a,{id:"simple-menu",anchorEl:f,keepMounted:!0,open:Boolean(f),onClose:v,children:[Object(B.jsxs)(ke.a,{id:"editBtn",onClick:function(){v(),j?setTimeout((function(){u(!1)}),500):u(!0)},children:[Object(B.jsx)(Xe.a,{fontSize:"small"}),"Edit"]}),Object(B.jsxs)(ke.a,{onClick:v,children:[Object(B.jsx)(st.a,{fontSize:"small"}),"Delete"]}),Object(B.jsxs)(ke.a,{onClick:v,children:[Object(B.jsx)(it.a,{fontSize:"small"}),"Home"]})]})]})}),Object(B.jsx)(ge,{anchor:"left",active:s}),h?(e="Memo updated successsfully..!",t="success",Object(B.jsx)(He.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:h,autoHideDuration:6e3,onClose:S,children:Object(B.jsx)(lt,{onClose:S,severity:t,children:e})})):null,j?Object(B.jsx)(nt,{showSnackBar:O}):null]})}var jt=a(323),ut="SecureMemoStorage",bt="secure memo key";function mt(e){return Object(B.jsx)(qe.a,Object(j.a)({elevation:6,variant:"filled"},e))}var ht=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).encryptObj=function(e){var t={};return Object.keys(e).map((function(a){t[a]=jt.AES.encrypt(e[a],bt).toString()})),t},n.decryptToOrgObj=function(e){var t={};return Object.keys(e).map((function(a){console.log(e[a]),t[a]=jt.AES.decrypt(e[a],bt).toString(jt.enc.Utf8),t[a]=t[a].replace(/['"]+/g,"")})),t},n.signUpUser=function(e){b.a.ajax({method:"post",url:"./signup-user",data:n.encryptObj(e),success:function(e){e.status?(n.setState({userData:e.userData}),n.setState({userLoggedIn:!0}),n.verifyUserLogin(),E.a):n.setState({snackbar:{openSnackbar:!0,msg:"Can't sign up : ".concat(e.errorMsg),type:"error",position:{vertical:"center",horizontal:"top"}}})}})},n.signInUser=function(e){b.a.ajax({method:"post",url:"./signin-user",data:n.encryptObj(e),success:function(e){e.status?(n.setState({userData:e.userData}),n.setState({userLoggedIn:!0}),n.verifyUserLogin(),E.a):n.setState({snackbar:{openSnackbar:!0,msg:"Can't sign in : ".concat(e.errorMsg),type:"error",position:{vertical:"center",horizontal:"top"}}})}})},n.logoutUser=function(){n.setState({userLoggedIn:!1,userData:null}),window.localStorage.setItem(ut,"null"),window.location.reload()},n.createUserMemo=function(e,t){alert("createUserMemo")},n.updateUserMemo=function(e,t,a){alert("updateUserMemo")},n.getUserMemo=function(e,t){alert("editUserMemo")},n.dltUserMemo=function(e,t){alert("dltUserMemo")},n.editUserMemo=function(e,t){alert("editUserMemo")},n.handleSnackbarClose=function(e,t){"clickaway"!==t&&n.setState({snackbar:{openSnackbar:!1}})},n.verifyUserLogin=function(){var e=n.state.userData,t=JSON.parse(window.localStorage.getItem(ut));console.log(e),t?(console.log(e),n.setState({userData:t,userLoggedIn:!0}),console.log("seting state")):window.localStorage.setItem(ut,JSON.stringify(e)),console.log(n.state.userData)},n.componentDidMount=function(){n.verifyUserLogin()},n.state={userData:null,userLoggedIn:!1,myMemos:[],snackbar:{openSnackbar:!1,msg:"",type:"success",position:{vertical:"left",horizontal:"bottom"}}},n}return Object(o.a)(a,[{key:"render",value:function(){return console.log(JSON.parse(window.localStorage.getItem(ut))),console.log(this.state.userLoggedIn),Object(B.jsxs)(U.a,{children:[this.state.snackbar.openSnackbar?Object(B.jsx)(He.a,{open:this.state.snackbar.openSnackbar,autoHideDuration:6e3,onClose:this.handleSnackbarClose,anchorOrigin:this.state.snackbar.position,children:Object(B.jsx)(mt,{onClose:this.handleSnackbarClose,severity:this.state.snackbar.type,children:this.state.snackbar.msg})}):null,Object(B.jsxs)(E.d,{children:[Object(B.jsx)(E.b,{exact:!0,path:"/",component:T,children:this.state.userLoggedIn?Object(B.jsx)(Pe,{logoutUser:this.logoutUser}):Object(B.jsx)(E.a,{push:!0,to:"./signup"})}),Object(B.jsx)(E.b,{path:"/signin",children:this.state.userLoggedIn?Object(B.jsx)(E.a,{push:!0,to:"./"}):Object(B.jsx)(T,{signInUser:this.signInUser})}),Object(B.jsx)(E.b,{path:"/signup",children:this.state.userLoggedIn?Object(B.jsx)(E.a,{push:!0,to:"./"}):Object(B.jsx)(H,{signUpUser:this.signUpUser})}),Object(B.jsx)(E.b,{path:"/my-memos",children:Object(B.jsx)(Pe,{logoutUser:this.logoutUser})}),Object(B.jsx)(E.b,{path:"/my-profile",children:Object(B.jsx)(Je.a,{})}),Object(B.jsx)(E.b,{path:"/about-us",children:Object(B.jsx)($e,{})}),Object(B.jsx)(E.b,{path:"/view-memo/:id",children:Object(B.jsx)(dt,{})}),Object(B.jsx)(E.b,{path:"/edit-memo/:id",children:Object(B.jsx)(nt,{})})]})]})}}]),a}(n.Component);a(555);c.a.render(Object(B.jsx)(ht,{}),document.getElementById("root"))}},[[556,1,2]]]);
//# sourceMappingURL=main.169001ea.chunk.js.map