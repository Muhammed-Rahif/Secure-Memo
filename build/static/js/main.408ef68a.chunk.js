(this["webpackJsonpsecure-memo"]=this["webpackJsonpsecure-memo"]||[]).push([[0],{294:function(e,t){},328:function(e,t,a){},335:function(e,t){},337:function(e,t){},348:function(e,t){},350:function(e,t){},377:function(e,t){},379:function(e,t){},380:function(e,t){},385:function(e,t){},387:function(e,t){},406:function(e,t){},418:function(e,t){},421:function(e,t){},572:function(e,t,a){},573:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(15),i=a.n(o),c=a(96),s=a(97),l=a(301),d=a(299),m=a(16),j=(a(328),a(47)),u=a.n(j),b=a(648),h=a(620),p=a(613),O=a(649),g=a(610),x=a(621),f=a(644),y=a(138),v=a.n(y),w=a(77),S=a(611),k=a(612),T=a(68),M=a(298),C=a(1);function I(){return Object(C.jsxs)(w.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(C.jsx)(g.a,{color:"inherit",href:"./",children:"Secure Memo"})," ",(new Date).getFullYear(),"."]})}Object(M.a)({palette:{type:"dark"}});var B=Object(S.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));function U(e){var t=B(),a=Object(T.a)({reValidateMode:"onChange"}),n=a.register,r=a.handleSubmit,o=a.formState.errors;return Object(C.jsxs)(k.a,{component:"main",maxWidth:"xs",children:[Object(C.jsx)(p.a,{}),Object(C.jsxs)("div",{className:t.paper,children:[Object(C.jsx)(b.a,{className:t.avatar,children:Object(C.jsx)(v.a,{})}),Object(C.jsx)(w.a,{component:"h1",variant:"h5",children:"Sign in"}),Object(C.jsxs)("form",{className:t.form,onSubmit:r((function(t){e.signInUser(t)})),children:[Object(C.jsx)(O.a,Object(m.a)(Object(m.a)({variant:"outlined",margin:"normal",fullWidth:!0,id:"email",label:"Email Address",autoComplete:"off",autoFocus:!0},n("email",{required:!0,pattern:/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/})),{},{error:!!o.email,helperText:o.email?"required"===o.email.type?"Email address is required.":"Type a valid email address.":"Type your email address."})),Object(C.jsx)(O.a,Object(m.a)(Object(m.a)({variant:"outlined",margin:"normal",fullWidth:!0,label:"Password",type:"password",id:"password",autoComplete:"off"},n("password",{required:!0,minLength:8})),{},{error:!!o.password,helperText:o.password?"required"===o.password.type?"Password is required.":"Minimum lenght is 8.":"Type your password."})),Object(C.jsx)(h.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:t.submit,children:"Sign In"}),Object(C.jsx)(x.a,{container:!0,justify:"flex-end",children:Object(C.jsx)(x.a,{item:!0,children:Object(C.jsx)(g.a,{href:"/signup",variant:"body2",children:"Don't have an account? Sign Up"})})})]})]}),Object(C.jsx)(f.a,{mt:8,children:Object(C.jsx)(I,{})})]})}var D=a(132),N=a(17),L=a(46);function E(){return Object(C.jsxs)(w.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(C.jsx)(g.a,{color:"inherit",href:"./",children:"Secure Memo"})," ",(new Date).getFullYear(),"."]})}var q=Object(S.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)}}}));function A(e){var t=q(),a=Object(T.a)({reValidateMode:"onChange"}),n=a.register,r=a.handleSubmit,o=a.formState.errors;return Object(C.jsxs)(k.a,{component:"main",maxWidth:"xs",children:[Object(C.jsx)(p.a,{}),Object(C.jsxs)("div",{className:t.paper,children:[Object(C.jsx)(b.a,{className:t.avatar,children:Object(C.jsx)(v.a,{})}),Object(C.jsx)(w.a,{component:"h1",variant:"h5",children:"Sign up"}),Object(C.jsxs)("form",{className:t.form,onSubmit:r((function(t){e.signUpUser(t)})),children:[Object(C.jsxs)(x.a,{container:!0,spacing:2,children:[Object(C.jsx)(x.a,{item:!0,xs:12,sm:6,children:Object(C.jsx)(O.a,Object(m.a)(Object(m.a)(Object(L.a)({autoComplete:"fname",variant:"outlined",fullWidth:!0,id:"firstName",label:"First Name",autoFocus:!0},"autoComplete","off"),n("firstName",{required:!0,minLength:3})),{},{error:!!o.firstName,helperText:o.firstName?"required"===o.firstName.type?"First name is required.":" Minimum lenght 3.":"Type your first name."}))}),Object(C.jsx)(x.a,{item:!0,xs:12,sm:6,children:Object(C.jsx)(O.a,Object(m.a)(Object(m.a)({variant:"outlined",fullWidth:!0,id:"lastName",label:"Last Name",autoComplete:"off"},n("lastName",{required:!0,minLength:3})),{},{error:!!o.lastName,helperText:o.lastName?"required"===o.lastName.type?"Last name is required.":" Minimum lenght 3.":"Type your last name."}))}),Object(C.jsx)(x.a,{item:!0,xs:12,children:Object(C.jsx)(O.a,Object(m.a)(Object(m.a)({variant:"outlined",fullWidth:!0,id:"email",label:"Email Address",autoComplete:"off"},n("email",{required:!0,pattern:/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/})),{},{error:!!o.email,helperText:o.email?"required"===o.email.type?"Email address is required.":"Type a valid email address.":"Type your email address."}))}),Object(C.jsx)(x.a,{item:!0,xs:12,children:Object(C.jsx)(O.a,Object(m.a)(Object(m.a)({variant:"outlined",fullWidth:!0,label:"Password",type:"password",id:"password",autoComplete:"off"},n("password",{required:!0,minLength:8})),{},{error:!!o.password,helperText:o.password?"required"===o.password.type?"Password is required.":"Minimum lenght is 8.":"Type your password."}))})]}),Object(C.jsx)(h.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:t.submit,children:"Sign Up"}),Object(C.jsx)(x.a,{container:!0,justify:"flex-end",children:Object(C.jsx)(x.a,{item:!0,children:Object(C.jsx)(g.a,{href:"/signin",variant:"body2",children:"Already have an account? Sign in"})})})]})]}),Object(C.jsx)(f.a,{mt:5,children:Object(C.jsx)(E,{})})]})}var H=a(13),z=a(630),W=a(631),F=a(632),V=a(188),P=a(636),Y=a(619),R=a(576),Z=a(635),G=a(626),X=a(634),J=a(141),K=a.n(J),$=a(293),Q=a.n($),_=a(142),ee=a.n(_),te=a(143),ae=a.n(te),ne=a(4),re=a(628),oe=a(624),ie=a(625),ce=a(92),se=a.n(ce),le=a(93),de=a.n(le),me=a(94),je=a.n(me),ue=a(622),be=a(623),he=a(290),pe=a.n(he),Oe=a(627),ge=Object(S.a)({list:{width:250},fullList:{width:"auto"},profileSection:{width:"100%",height:"10rem",display:"flex",alignItems:"center",justifyContent:"center",padding:"0 !important"},bgImage:{backgroundImage:"url('../profile-bg.jpg')",filter:"opacity(75%)",height:"100%",width:"100%",justifyContent:"center",alignItems:"center",display:"flex",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover"}}),xe=Object(S.a)((function(e){return{root:{"& > *":{margin:e.spacing(1)}},orange:{color:e.palette.getContrastText(ue.a[500]),backgroundColor:ue.a[500]},purple:{color:e.palette.getContrastText(be.a[500]),backgroundColor:be.a[500]},small:{width:e.spacing(3),height:e.spacing(3)},large:{width:e.spacing(7),height:e.spacing(7)}}}));function fe(e){var t=e.anchor,a=ge(),o=xe(),i=r.a.useState({top:!1,left:!1,bottom:!1,right:!1}),c=Object(H.a)(i,2),s=c[0],l=c[1],d=Object(N.g)(),j=function(e,t){return function(a){("keydown"!==a.type||"Tab"!==a.key&&"Shift"!==a.key)&&l(Object(m.a)(Object(m.a)({},s),{},Object(L.a)({},e,t)))}};return Object(n.useEffect)((function(){e.active&&document.getElementById("openDrawer").click()}),[]),Object(C.jsx)("div",{children:Object(C.jsxs)(r.a.Fragment,{children:[Object(C.jsx)(h.a,{style:{display:"none"},hidden:!0,id:"openDrawer",onClick:j(t,!0),children:t}),Object(C.jsx)(re.a,{anchor:t,open:s[t],onClose:j(t,!1),children:function(e){return Object(C.jsxs)("div",{className:Object(ne.a)(a.list,Object(L.a)({},a.fullList,"top"===e||"bottom"===e)),role:"presentation",onClick:j(e,!1),onKeyDown:j(e,!1),children:[Object(C.jsx)(Y.a,{className:a.profileSection,children:Object(C.jsx)("div",{className:a.bgImage,children:Object(C.jsx)(b.a,{className:[o.orange,o.large],children:"OP"})})}),Object(C.jsx)(oe.a,{}),Object(C.jsxs)(Y.a,{children:[Object(C.jsxs)(R.a,{onClick:function(){d.push("/all-memos")},button:!0,children:[Object(C.jsx)(ie.a,{children:Object(C.jsx)(se.a,{})}),Object(C.jsx)(G.a,{primary:"All Memos"})]},"All Memos"),Object(C.jsxs)(R.a,{disabled:"true",button:!0,children:[Object(C.jsx)(ie.a,{children:Object(C.jsx)(de.a,{})}),Object(C.jsx)(Oe.a,{badgeContent:"Coming soon",color:"primary",variant:"standard",children:Object(C.jsx)(G.a,{primary:"Hidden Memos"})})]},"Hidden Memos"),Object(C.jsxs)(R.a,{disabled:"true",button:!0,children:[Object(C.jsx)(ie.a,{children:Object(C.jsx)(je.a,{})}),Object(C.jsx)(Oe.a,{badgeContent:"Coming soon",color:"primary",variant:"standard",children:Object(C.jsx)(G.a,{primary:"Secure Memos"})})]},"Secure Memos"),Object(C.jsx)(oe.a,{}),Object(C.jsxs)(R.a,{onClick:function(){d.push("/about-us")},button:!0,children:[Object(C.jsx)(ie.a,{children:Object(C.jsx)(pe.a,{})}),Object(C.jsx)(G.a,{primary:"About Us"})]},"Secure Memos")]})]})}(t)})]},t)})}var ye=a(629),ve=a(140),we=a.n(ve),Se=a(577),ke=a(646),Te=a(633),Me=a(616),Ce=a(650),Ie=a(651),Be=a(292),Ue=a.n(Be),De=a(95),Ne=a.n(De),Le=a(652),Ee=Object(S.a)((function(e){return{appBar:{position:"relative"},title:{marginLeft:e.spacing(2),flex:1},devider:{maxWidth:"95%",margin:"auto"}}})),qe=r.a.forwardRef((function(e,t){return Object(C.jsx)(Se.a,Object(m.a)({direction:"up",ref:t},e))}));function Ae(e){var t=Ee(),a=r.a.useState(!1),o=Object(H.a)(a,2),i=o[0],c=o[1],s=r.a.useState(null),l=Object(H.a)(s,2),d=l[0],j=l[1],b=r.a.useState(!1),p=Object(H.a)(b,2),g=p[0],x=p[1],f=r.a.useState(""),y=Object(H.a)(f,2),v=y[0],S=y[1],k=Object(T.a)({reValidateMode:"onChange",defaultValues:{memoType:"allMemos",modified:"false"}}),M=k.register,I=k.setValue,B=k.handleSubmit,U=k.formState.errors;Object(n.useEffect)((function(){c(!0),setTimeout((function(){j(document.getElementById("bodyTextarea").clientHeight+2.5*document.getElementById("bodyTextarea").clientHeight/10+"px")}),500)}),[]);var D=function(){document.getElementById("addBtn").click(),c(!1)};return Object(C.jsx)("div",{children:Object(C.jsx)(ye.a,{fullScreen:!0,open:i,onClose:D,TransitionComponent:qe,children:Object(C.jsxs)("form",{className:t.form,autoComplete:"off",onSubmit:B((function(t){e.createUserMemo(t),D()})),children:[Object(C.jsx)("input",{hidden:"true",ref:M("modified")}),Object(C.jsx)(z.a,{className:t.appBar,children:Object(C.jsxs)(W.a,{children:[Object(C.jsx)(Ie.a,{title:"Cancel",arrow:!0,children:Object(C.jsx)(F.a,{edge:"start",color:"inherit",onClick:D,"aria-label":"close",children:Object(C.jsx)(we.a,{})})}),Object(C.jsx)(w.a,{variant:"h6",className:t.title,children:"Create a new Memo"}),Object(C.jsx)(Ie.a,{title:"Save Memo",arrow:!0,children:Object(C.jsx)(h.a,{autoFocus:!0,color:"inherit",variant:"outlined",startIcon:Object(C.jsx)(Ue.a,{}),type:"submit",children:"save"})})]})}),Object(C.jsxs)(Y.a,{children:[Object(C.jsx)(R.a,{style:{paddingBottom:0},children:Object(C.jsx)(G.a,{primary:"Memo Heading"})}),Object(C.jsx)(R.a,{children:Object(C.jsx)(O.a,{id:"outlined-basic",label:"Memo Heading",variant:"outlined",fullWidth:!0,ref:M("memoTitle",{required:!0,minLength:10}),error:!!U.memoTitle,autoFocus:!!U.memoTitle,onChange:function(e){I("memoTitle",e.target.value,{shouldValidate:!0})},helperText:U.memoTitle?"required"===U.memoTitle.type?"Memo Title is required.":"Memo Title minimum lenght is 10.":"Memo Title here."})}),Object(C.jsx)(oe.a,{className:t.devider}),Object(C.jsxs)(R.a,{style:{paddingBottom:0},children:[Object(C.jsx)(G.a,{primary:"Memo Body"}),Object(C.jsx)("p",{style:{textAlign:"right"},children:Object(C.jsx)("small",{children:"* Markdown enabled"})})]}),Object(C.jsx)(R.a,{children:Object(C.jsx)(O.a,{id:"bodyTextarea",label:"Memo Body",variant:"outlined",rows:"7",multiline:!0,value:v,fullWidth:!0,"aria-label":"textarea",onChange:function(e){!function(e){S(u()("#bodyTextarea").val()),S(e.target.value)}(e),I("memoBody",e.target.value,{shouldValidate:!0})},ref:M("memoBody",{required:!0,minLength:12}),autoFocus:!!U.memoBody,error:!!U.memoBody,helperText:U.memoBody?"required"===U.memoBody.type?"Memo body is required.":"Memo body Minimum lenght is 12.":"Memo Body here."})}),Object(C.jsxs)(R.a,{style:{paddingBottom:0},children:[Object(C.jsx)(G.a,{primary:"Memo Body Preview"}),Object(C.jsxs)("p",{style:{textAlign:"right"},children:["Scrollable",Object(C.jsx)(Le.a,{id:"mdSwitch",onChange:function(e){x(document.getElementById("mdSwitch").checked),function(e){x(e.target.checked),g?(document.getElementById("markdown-preview").style.overflowY="visible",document.getElementById("markdown-preview").style.height="auto"):(document.getElementById("markdown-preview").style.overflowY="scroll",document.getElementById("markdown-preview").style.height=d)}(e)},color:"primary",checked:g})]})]}),Object(C.jsx)(R.a,{children:Object(C.jsx)(V.a,{id:"markdown-preview",variant:"outlined",style:{minHeight:d,margin:".13rem",width:"100vw",overflowX:"scroll",overflowY:"visible",paddingLeft:".7rem"},children:Object(C.jsx)(Ne.a,{children:v})})}),Object(C.jsx)(oe.a,{className:t.devider}),Object(C.jsx)(R.a,{style:{paddingBottom:0},children:Object(C.jsx)(G.a,{primary:"Add Memo to"})}),Object(C.jsx)(R.a,{children:Object(C.jsxs)(Me.a,{variant:"outlined",fullWidth:!0,className:t.formControl,children:[Object(C.jsx)(Ce.a,{id:"demo-simple-select-outlined-label",children:"Add to"}),Object(C.jsxs)(ke.a,Object(m.a)(Object(m.a)({defaultValue:"allMemos",labelId:"demo-simple-select-outlined-label",id:"demo-simple-select-outlined",label:"Add to",onChange:function(e){I("memoType",e.target.value,{shouldValidate:!0})}},M("memoType",{required:!0})),{},{autoFocus:!!U.memoType,error:!!U.memoType,helperText:"Memo will add to all memos section by default.",children:[Object(C.jsxs)(Te.a,{value:"allMemos",children:[Object(C.jsx)(se.a,{})," All Memos"]}),Object(C.jsx)(Te.a,{disabled:"true",value:"hiddenMemos",children:Object(C.jsxs)(Oe.a,{badgeContent:"Coming soon",color:"primary",variant:"standard",children:[Object(C.jsx)(de.a,{})," Hidden"]})}),Object(C.jsx)(Te.a,{disabled:"true",value:"secureMemos",children:Object(C.jsxs)(Oe.a,{badgeContent:"Coming soon",color:"primary",variant:"standard",children:[Object(C.jsx)(je.a,{})," Secure"]})})]}))]})}),Object(C.jsx)(oe.a,{className:t.devider})]})]})})})}var He=a(645),ze=a(300),We=Object(S.a)((function(e){return{text:{padding:e.spacing(2,2,0)},paper:{paddingBottom:50},list:{marginBottom:e.spacing(2),minHeight:"80vh"},subheader:{backgroundColor:e.palette.background.paper},appBar:{top:"auto",bottom:0},grow:{flexGrow:1},fabButton:{position:"absolute",zIndex:1,top:-30,left:0,right:0,margin:"0 auto"}}}));function Fe(e){var t=We(),a=Object(n.useState)(!1),o=Object(H.a)(a,2),i=o[0],c=o[1],s=Object(n.useState)(!1),l=Object(H.a)(s,2),d=l[0],m=l[1],j=Object(n.useState)(null),h=Object(H.a)(j,2),O=h[0],g=h[1],x=Object(n.useState)(new Array),f=Object(H.a)(x,2),y=f[0],v=f[1],S=function(){g(null)};r.a.useEffect((function(){var t=e.getLoggedInUserData();u.a.ajax({url:"./get-user-memos",data:{userId:t.userId,memoType:"allMemos"},method:"post",success:function(e){e.reverse(),v(e)}})}));var k=null;return Object(C.jsxs)(r.a.Fragment,{children:[Object(C.jsx)(p.a,{}),Object(C.jsxs)(V.a,{square:!0,className:t.paper,children:[Object(C.jsx)(w.a,{className:t.text,variant:"h5",gutterBottom:!0,children:"All Memos"}),Object(C.jsx)(Y.a,{className:t.list,children:y.map((function(a){var n=a.memoId,o=a.memoDate;o=new Date(o),Date.prototype.addDays=function(e){var t=new Date(this.valueOf());return t.setDate(t.getDate()+e),t};var i=new Date,c=new Date;c=c.addDays(-1),delete a.memoId,delete a.memoDate,(a=e.decryptToOrgObj(a)).memoBody=a.memoBody.substring(0,45);return Object(C.jsxs)(r.a.Fragment,{children:[function(){var e,a={year:"numeric",weekday:"long",month:"long",day:"numeric"};if(e=o.toLocaleDateString("en-US",a)===i.toLocaleDateString("en-US",a)?"Today":o.toLocaleDateString("en-US",a)===c.toLocaleDateString("en-US",a)?"Yesterday":o.toLocaleDateString("en-US",a),k!==e)return k=e,Object(C.jsx)(X.a,{className:t.subheader,children:e})}(),Object(C.jsxs)(R.a,{onClick:function(){window.location.href="./view-memo/".concat(n)},button:!0,children:[Object(C.jsx)(Z.a,{children:Object(C.jsx)(b.a,{alt:"Profile Picture",children:a.memoTitle.charAt(0).toUpperCase()})}),Object(C.jsx)(G.a,{style:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:"65vw"},primary:a.memoTitle,secondary:a.memoBody})]})]})}))})]}),Object(C.jsx)(z.a,{position:"fixed",color:"primary",className:t.appBar,children:Object(C.jsxs)(W.a,{children:[Object(C.jsx)(F.a,{onClick:function(){c(!i),document.getElementById("openDrawer").click()},edge:"start",color:"inherit","aria-label":"open drawer",children:Object(C.jsx)(K.a,{})}),Object(C.jsx)(Ie.a,{title:"Create new Memo",arrow:!0,children:Object(C.jsx)(P.a,{id:"addBtn",color:"secondary","aria-label":"add",className:t.fabButton,onClick:function(){d?setTimeout((function(){m(!1)}),500):m(!0)},children:Object(C.jsx)(Q.a,{})})}),Object(C.jsx)("div",{className:t.grow}),Object(C.jsx)(Ie.a,{title:"Search",arrow:!0,children:Object(C.jsx)(F.a,{color:"inherit",children:Object(C.jsx)(ee.a,{})})}),Object(C.jsx)(Ie.a,{title:"Options",arrow:!0,children:Object(C.jsx)(F.a,{"aria-controls":"simple-menu",edge:"end",color:"inherit","aria-aria-haspopup":"true",onClick:function(e){g(e.currentTarget)},children:Object(C.jsx)(ae.a,{})})}),Object(C.jsxs)(ze.a,{id:"simple-menu",anchorEl:O,keepMounted:!0,open:Boolean(O),onClose:S,children:[Object(C.jsx)(Te.a,{onClick:S,children:"Profile"}),Object(C.jsx)(Te.a,{onClick:S,children:"My account"}),Object(C.jsx)(Te.a,{onClick:function(){S(),e.logoutUser()},children:"Logout"})]})]})}),Object(C.jsx)(fe,{anchor:"left",active:i}),d?Object(C.jsx)(Ae,{createUserMemo:e.createUserMemo}):null]})}var Ve=a(294),Pe=a.n(Ve),Ye=a(637),Re=a(638);function Ze(){return Object(C.jsxs)(w.a,{variant:"body2",color:"textSecondary",children:["Copyright \xa9 ",Object(C.jsx)(g.a,{color:"inherit",href:"./",children:"Secure Memo"})," ",(new Date).getFullYear(),"."]})}var Ge=Object(S.a)((function(e){return{root:{display:"flex",flexDirection:"column",minHeight:"100vh"},main:{marginTop:e.spacing(8),marginBottom:e.spacing(2)},footer:{padding:e.spacing(3,2),marginTop:"auto",backgroundColor:"dark"===e.palette.type?e.palette.grey[200]:e.palette.grey[800]}}}));function Xe(){var e=Ge(),t=Object(Ye.a)("(prefers-color-scheme: dark)"),a=r.a.useMemo((function(){return Object(M.a)({palette:{type:t?"dark":"light"}})}),[t]);return Object(C.jsxs)(Re.a,{theme:a,children:[Object(C.jsx)(p.a,{}),Object(C.jsxs)("div",{className:e.root,children:[Object(C.jsx)(p.a,{}),Object(C.jsxs)(k.a,{component:"main",className:e.main,maxWidth:"sm",children:[Object(C.jsx)(w.a,{variant:"h2",component:"h1",gutterBottom:!0,children:Object(C.jsx)(g.a,{href:"./",style:{color:"white"},children:"Secure Memo"})}),Object(C.jsxs)(w.a,{variant:"h5",component:"h2",gutterBottom:!0,children:["This website created and maintained by ",Object(C.jsx)(g.a,{href:"https://github.com/Muhammed-Rahif",variant:"h5",style:{color:"white"},children:Object(C.jsx)("b",{children:"Muhammed Rahif."})}),Object(C.jsx)("br",{})]}),Object(C.jsx)(w.a,{variant:"subtitle1",component:"h3",children:"I hope you will contact me for any inquiries..."}),Object(C.jsx)(w.a,{variant:"body1",children:"Have a nice day."})]}),Object(C.jsx)("footer",{className:e.footer,children:Object(C.jsxs)(k.a,{maxWidth:"sm",children:[Object(C.jsxs)(w.a,{variant:"body1",children:["Made with"," ",Object(C.jsx)(g.a,{variant:"body1",href:"https://material-ui.com/",style:{color:"white"},children:"React Material UI"})]}),Object(C.jsx)(Ze,{})]})})]})]})}var Je=a(186),Ke=a.n(Je),$e=a(295),Qe=a.n($e),_e=Object(S.a)((function(e){return{appBar:{position:"relative"},title:{marginLeft:e.spacing(2),flex:1},devider:{maxWidth:"95%",margin:"auto"}}})),et=r.a.forwardRef((function(e,t){return Object(C.jsx)(Se.a,Object(m.a)({direction:"up",ref:t},e))}));function tt(e){var t=_e(),a=r.a.useState(!1),o=Object(H.a)(a,2),i=o[0],c=o[1],s=r.a.useState(e.memoType),l=Object(H.a)(s,2),d=l[0],m=l[1],j=r.a.useState(null),u=Object(H.a)(j,2),b=u[0],p=u[1],g=r.a.useState(!1),x=Object(H.a)(g,2),f=x[0],y=x[1],v=r.a.useState(e.memoTitle),S=Object(H.a)(v,2),k=S[0],M=S[1],I=r.a.useState(e.memoBody),B=Object(H.a)(I,2),U=B[0],D=B[1],N=Object(T.a)({reValidateMode:"onChange",defaultValues:{memoBody:e.memoBody,memoTitle:e.memoTitle,memoType:e.memoType,modified:"true",memoId:e.memoId}}),L=N.register,E=N.setValue,q=N.handleSubmit,A=N.formState.errors;Object(n.useEffect)((function(){c(!0),setTimeout((function(){p(document.getElementById("bodyTextarea").clientHeight+2.5*document.getElementById("bodyTextarea").clientHeight/10+"px")}),500)}),[]);var P=function(){document.getElementById("editBtn").click(),c(!1)},Z=function(e){y(document.getElementById("mdSwitch").checked),function(e){y(e.target.checked),f?(document.getElementById("markdown-preview").style.overflowY="visible",document.getElementById("markdown-preview").style.height="auto"):(document.getElementById("markdown-preview").style.overflowY="scroll",document.getElementById("markdown-preview").style.height=b)}(e)};return Object(C.jsx)("div",{children:Object(C.jsx)(ye.a,{fullScreen:!0,open:i,onClose:P,TransitionComponent:et,children:Object(C.jsxs)("form",{className:t.form,autoComplete:"off",onSubmit:q((function(t){console.log(t),e.updateUserMemo(t),P()})),children:[Object(C.jsx)("input",{hidden:"true",ref:L("modified")}),Object(C.jsx)("input",{hidden:"true",ref:L("memoId")}),Object(C.jsx)(z.a,{className:t.appBar,children:Object(C.jsxs)(W.a,{children:[Object(C.jsx)(Ie.a,{title:"Cancel",arrow:!0,children:Object(C.jsx)(F.a,{edge:"start",color:"inherit",onClick:P,"aria-label":"close",children:Object(C.jsx)(we.a,{})})}),Object(C.jsx)(w.a,{variant:"h6",className:t.title,children:"Edit Memo"}),Object(C.jsx)(Ie.a,{title:"Update Memo",arrow:!0,children:Object(C.jsx)(h.a,{autoFocus:!0,color:"inherit",variant:"outlined",startIcon:Object(C.jsx)(Qe.a,{}),type:"submit",children:"update"})})]})}),Object(C.jsxs)(Y.a,{children:[Object(C.jsx)(R.a,{style:{paddingBottom:0},children:Object(C.jsx)(G.a,{primary:"Memo Heading"})}),Object(C.jsx)(R.a,{children:Object(C.jsx)(O.a,{id:"outlined-basic",label:"Memo Heading",variant:"outlined",fullWidth:!0,value:k,ref:L("memoTitle",{required:!0,minLength:10}),error:!!A.memoTitle,autoFocus:!!A.memoTitle,onChange:function(e){M(e.target.value),E("memoTitle",e.target.value,{shouldValidate:!0})},helperText:A.memoTitle?"required"===A.memoTitle.type?"Memo Title is required.":"Memo Title minimum lenght is 10.":"Memo Title here."})}),Object(C.jsx)(oe.a,{className:t.devider}),Object(C.jsxs)(R.a,{style:{paddingBottom:0},children:[Object(C.jsx)(G.a,{primary:"Memo Body"}),Object(C.jsx)("p",{style:{textAlign:"right"},children:Object(C.jsx)("small",{children:"* Markdown enabled"})})]}),Object(C.jsx)(R.a,{children:Object(C.jsx)(O.a,{id:"bodyTextarea",label:"Memo Body",variant:"outlined",rows:"7",multiline:!0,fullWidth:!0,"aria-label":"textarea",value:U,onChange:function(e){D(document.getElementById("bodyTextarea").value),E("memoBody",e.target.value,{shouldValidate:!0})},ref:L("memoBody",{required:!0,minLength:12}),autoFocus:!!A.memoBody,error:!!A.memoBody,helperText:A.memoBody?"required"===A.memoBody.type?"Memo body is required.":"Memo body Minimum lenght is 12.":"Memo Body here."})}),Object(C.jsx)(oe.a,{className:t.devider}),Object(C.jsxs)(R.a,{style:{paddingBottom:0},children:[Object(C.jsx)(G.a,{primary:"Memo Body Preview"}),Object(C.jsxs)("p",{style:{textAlign:"right"},children:["Scrollable",Object(C.jsx)(Le.a,{id:"mdSwitch",onChange:Z,color:"primary",style:{paddingBottom:0},checked:f,onClick:Z})]})]}),Object(C.jsx)(R.a,{children:Object(C.jsx)(V.a,{id:"markdown-preview",variant:"outlined",style:{minHeight:b,margin:".13rem",width:"100vw",overflowY:"visible",paddingLeft:".7rem"},children:Object(C.jsx)(Ne.a,{children:U})})}),Object(C.jsx)(oe.a,{className:t.devider}),Object(C.jsx)(R.a,{style:{paddingBottom:0},children:Object(C.jsx)(G.a,{primary:"Add Memo to"})}),Object(C.jsx)(R.a,{children:Object(C.jsxs)(Me.a,{variant:"outlined",fullWidth:!0,className:t.formControl,children:[Object(C.jsx)(Ce.a,{id:"demo-simple-select-outlined-label",children:"Add to"}),Object(C.jsxs)(ke.a,{labelId:"demo-simple-select-outlined-label",id:"demo-simple-select-outlined",value:d,onChange:function(e){m(e.target.value)},label:"Add to",children:[Object(C.jsxs)(Te.a,{value:"allMemos",children:[Object(C.jsx)(se.a,{})," All Memos"]}),Object(C.jsx)(Te.a,{disabled:"true",value:"hiddenMemos",children:Object(C.jsxs)(Oe.a,{badgeContent:"Coming soon",color:"primary",variant:"standard",children:[Object(C.jsx)(de.a,{})," Hidden"]})}),Object(C.jsx)(Te.a,{disabled:"true",value:"secureMemos",children:Object(C.jsxs)(Oe.a,{badgeContent:"Coming soon",color:"primary",variant:"standard",children:[Object(C.jsx)(je.a,{})," Secure"]})})]})]})}),Object(C.jsx)(oe.a,{className:t.devider})]})]})})})}var at=a(647),nt=a(297),rt=a.n(nt),ot=a(296),it=a.n(ot),ct=a(642),st=a(640),lt=a(641),dt=a(639),mt=Object(S.a)((function(e){return{text:{padding:e.spacing(2,2,0)},paper:{paddingBottom:50},list:{marginBottom:e.spacing(2),minHeight:"80vh",padding:"1.5rem"},subheader:{backgroundColor:e.palette.background.paper},appBar:{top:"auto",bottom:0},grow:{flexGrow:1},fabButton:{position:"absolute",zIndex:1,top:-30,left:0,right:0,margin:"0 auto"}}}));function jt(e){return Object(C.jsx)(He.a,Object(m.a)({elevation:6,variant:"filled"},e))}function ut(e){var t,a,o=mt(),i=Object(n.useState)(!1),c=Object(H.a)(i,2),s=c[0],l=c[1],d=Object(n.useState)(!1),m=Object(H.a)(d,2),j=m[0],b=m[1],O=Object(n.useState)(!1),g=Object(H.a)(O,2),x=g[0],f=g[1],y=r.a.useState(null),v=Object(H.a)(y,2),S=v[0],k=v[1],T=r.a.useState(""),M=Object(H.a)(T,2),I=M[0],B=M[1],U=r.a.useState(!1),D=Object(H.a)(U,2),N=D[0],L=D[1],E=function(){L(!1)},q=function(){k(null)},A=function(e,t){"clickaway"!==t&&f(!1)};return Object(n.useEffect)((function(){var t=window.location.href.substring(window.location.href.lastIndexOf("/")+1);u.a.ajax({url:"/get-user-memo",data:{userId:e.getLoggedInUserData().userId,memoId:t,memoType:"allMemos"},method:"post",success:function(t){if(t.memoId){var a=t.memoId,n=t.memoDate;delete t.memoId,delete t.memoDate,(t=e.decryptToOrgObj(t)).memoId=a,t.memoDate=n,B(t)}else window.location.href="/"}})})),Object(C.jsxs)(r.a.Fragment,{children:[Object(C.jsx)(p.a,{}),Object(C.jsxs)(V.a,{square:!0,className:o.paper,children:[Object(C.jsx)(w.a,{className:o.text,variant:"h5",gutterBottom:!0,children:I.memoTitle}),Object(C.jsx)(Y.a,{style:{overflowX:"scroll"},className:o.list,children:Object(C.jsx)(Ne.a,{children:I.memoBody})})]}),Object(C.jsx)(z.a,{position:"fixed",color:"primary",className:o.appBar,children:Object(C.jsxs)(W.a,{children:[Object(C.jsx)(F.a,{onClick:function(){l(!s),document.getElementById("openDrawer").click()},edge:"start",color:"inherit","aria-label":"open drawer",children:Object(C.jsx)(K.a,{})}),Object(C.jsx)(Ie.a,{title:"Edit this Memo",arrow:!0,children:Object(C.jsx)(P.a,{id:"addBtn",color:"secondary","aria-label":"add",className:o.fabButton,onClick:function(){j?setTimeout((function(){b(!1)}),500):b(!0)},children:Object(C.jsx)(Ke.a,{})})}),Object(C.jsx)("div",{className:o.grow}),Object(C.jsx)(Ie.a,{title:"Search",arrow:!0,children:Object(C.jsx)(F.a,{color:"inherit",children:Object(C.jsx)(ee.a,{})})}),Object(C.jsx)(Ie.a,{title:"Options",arrow:!0,children:Object(C.jsx)(F.a,{"aria-controls":"simple-menu",edge:"end",color:"inherit","aria-aria-haspopup":"true",onClick:function(e){k(e.currentTarget)},children:Object(C.jsx)(ae.a,{})})}),Object(C.jsxs)(ze.a,{id:"simple-menu",anchorEl:S,keepMounted:!0,open:Boolean(S),onClose:q,children:[Object(C.jsxs)(Te.a,{id:"editBtn",onClick:function(){q(),j?setTimeout((function(){b(!1)}),500):b(!0)},children:[Object(C.jsx)(Ke.a,{fontSize:"small"}),"Edit"]}),Object(C.jsxs)(Te.a,{onClick:function(){q(),L(!0)},children:[Object(C.jsx)(it.a,{fontSize:"small"}),"Delete"]}),Object(C.jsxs)(Te.a,{onClick:q,children:[Object(C.jsx)(rt.a,{fontSize:"small"}),"Home"]})]})]})}),Object(C.jsx)(fe,{anchor:"left",active:s}),x?(t="Memo updated successsfully..!",a="success",Object(C.jsx)(at.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:x,autoHideDuration:6e3,onClose:A,children:Object(C.jsx)(jt,{onClose:A,severity:a,children:t})})):null,j?Object(C.jsx)(tt,{memoTitle:I.memoTitle,memoBody:I.memoBody,memoId:I.memoId,memoDate:I.memoDate,memoType:I.memoType,showSnackBar:f,updateUserMemo:e.updateUserMemo}):null,N?Object(C.jsxs)(ye.a,{open:N,onClose:E,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[Object(C.jsx)(dt.a,{id:"alert-dialog-title",children:"Are you sure to delete this memo ?"}),Object(C.jsx)(st.a,{children:Object(C.jsx)(lt.a,{id:"alert-dialog-description",children:"Once deleted you will not able to undo or recover it. It will permanently deleted.. Make sure that want move forward.. If so click the OK button down below..!"})}),Object(C.jsxs)(ct.a,{children:[Object(C.jsx)(h.a,{onClick:E,color:"primary",children:"Nop.. Don't delete this memo.!"}),Object(C.jsx)(h.a,{onClick:function(){E(),e.dltUserMemo({memoId:I.memoId,memoType:I.memoType})},color:"secondary",autoFocus:!0,children:"Ok, Delete this memo.. I am sure..!"})]})]}):null]})}var bt=a(303),ht=a(643),pt=Object(S.a)((function(e){return{wrapper:{display:"flex",alignItems:"center",justifyContent:"center",background:"whitesmoke",flexDirection:"column",marginTop:"5rem"}}}));var Ot=function(e){var t=pt(),a=Object(N.g)();return Object(C.jsxs)("div",{className:t.wrapper,children:[Object(C.jsx)(w.a,{variant:"h1",component:"h2",gutterBottom:!0,children:"404"}),Object(C.jsx)(w.a,{variant:"h4",gutterBottom:!0,children:Object(C.jsx)("b",{children:"Ooops..!"})}),Object(C.jsx)(w.a,{variant:"h4",gutterBottom:!0,children:"THAT PAGE DOESN'T EXIST OR IS UNAVAILABLE."}),Object(C.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"row"},children:[Object(C.jsx)(h.a,{variant:"outlined",color:"primary",onClick:function(){a.push("/")},children:"Take Me Home"}),Object(C.jsx)(h.a,{style:{marginLeft:"2rem"},variant:"outlined",onClick:function(){window.location.href="https://github.com/Muhammed-Rahif"},children:"Contact Developer"})]})]})},gt=a(329),xt=a(447),ft="SecureMemoStorage",yt="secure memo key";function vt(e){return Object(C.jsx)(He.a,Object(m.a)({elevation:6,variant:"filled"},e))}var wt=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).BackdropClose=function(){n.setState({backdropOpen:!1})},n.backdropToggle=function(){n.setState({backdropOpen:!n.state.backdropOpen})},n.encryptObj=function(e){var t={};return Object.keys(e).map((function(a){t[a]=gt.AES.encrypt(e[a],yt).toString()})),t},n.encUnSaltStr=function(e){return gt.AES.encrypt(e,gt.enc.Utf8.parse(yt),{iv:{words:[0,0,0,0],sigBytes:16}}).toString()},n.decryptToOrgObj=function(e){var t={};return Object.keys(e).map((function(a){t[a]=gt.AES.decrypt(e[a],yt).toString(gt.enc.Utf8),t[a]=t[a].replace(/['"]+/g,"")})),t},n.signUpUser=function(e){n.backdropToggle();var t=e.email;delete e.email,(e=n.encryptObj(e)).email=n.encUnSaltStr(t),u.a.ajax({method:"post",url:"./signup-user",data:e,success:function(e){e.status?(n.backdropToggle(),n.setState({userData:e.userData}),n.setState({userLoggedIn:!0}),n.verifyUserLogin(),N.a):(n.backdropToggle(),n.setState({snackbar:{openSnackbar:!0,msg:"Can't sign up : ".concat(e.errorMsg),type:"error",position:{vertical:"top",horizontal:"center"}}}))}})},n.signInUser=function(e){n.backdropToggle();var t=e.email;delete e.email,(e=n.encryptObj(e)).email=n.encUnSaltStr(t),u.a.ajax({method:"post",url:"./signin-user",data:e,success:function(e){e.status?(n.backdropToggle(),n.setState({userData:e.userData}),n.setState({userLoggedIn:!0}),n.verifyUserLogin(),N.a):(n.backdropToggle(),n.setState({snackbar:{openSnackbar:!0,msg:"Can't sign in : ".concat(e.errorMsg),type:"error",position:{vertical:"top",horizontal:"center"}}}))}})},n.logoutUser=function(){n.setState({userLoggedIn:!1,userData:null}),xt.remove(ft),window.location.reload()},n.getLoggedInUserData=function(){return xt.get(ft)},n.createUserMemo=function(e){n.backdropToggle(),e=n.encryptObj(e);var t=n.getLoggedInUserData();Object.assign(t,e),u.a.ajax({method:"post",url:"./create-user-memo",data:t,success:function(e){n.backdropToggle(),e.status?n.setState({snackbar:{openSnackbar:!0,msg:e.firstMemo?"Successfully saved your first memo.!":"Successfully saved your memo.!",type:"success",position:{vertical:"bottom",horizontal:"left"}}}):n.setState({snackbar:{openSnackbar:!0,msg:"Oops..! Something went wrong, Try again.",type:"error",position:{vertical:"bottom",horizontal:"left"}}})}})},n.updateUserMemo=function(e){n.backdropToggle();var t=e.memoId;delete e.memoId,(e=n.encryptObj(e)).memoId=t;var a=n.getLoggedInUserData();Object.assign(a,e),u.a.ajax({method:"post",url:"/update-user-memo",data:a,success:function(e){n.backdropToggle(),e.status?n.setState({snackbar:{openSnackbar:!0,msg:"Successfully updated your memo.!",type:"success",position:{vertical:"bottom",horizontal:"left"}}}):n.setState({snackbar:{openSnackbar:!0,msg:"Oops..! Something went wrong, Try again.",type:"error",position:{vertical:"bottom",horizontal:"left"}}})}})},n.getUserMemo=function(e,t){alert("editUserMemo")},n.dltUserMemo=function(e){n.backdropToggle();var t=n.getLoggedInUserData();Object.assign(t,e),u.a.ajax({method:"post",url:"/delete-user-memo",data:t,success:function(e){n.backdropToggle(),e.status?(n.setState({snackbar:{openSnackbar:!0,msg:"Successfully deleted.!",type:"success",position:{vertical:"bottom",horizontal:"left"}}}),window.location.href="/"):n.setState({snackbar:{openSnackbar:!0,msg:"Oops..! Something went wrong, Try again.",type:"error",position:{vertical:"bottom",horizontal:"left"}}})}})},n.SnackbarClose=function(e,t){"clickaway"!==t&&n.setState({snackbar:{openSnackbar:!1}})},n.verifyUserLogin=function(){var e=n.state.userData,t=xt.get(ft);t?n.setState({userData:t,userLoggedIn:!0}):xt.set(ft,e)},n.componentDidMount=function(){n.verifyUserLogin()},n.state={userData:!1,userLoggedIn:!1,myMemos:[],snackbar:{openSnackbar:!1,msg:"",type:"success",position:{vertical:"bottom",horizontal:"left"}},backdropOpen:!1},n}return Object(s.a)(a,[{key:"render",value:function(){return Object(C.jsxs)(D.a,{children:[Object(C.jsx)(bt.a,{style:{zIndex:999999},open:this.state.backdropOpen,children:Object(C.jsx)(ht.a,{color:"inherit"})}),this.state.snackbar.openSnackbar?Object(C.jsx)(at.a,{open:this.state.snackbar.openSnackbar,autoHideDuration:6e3,style:{position:"absolute"},onClose:this.SnackbarClose,anchorOrigin:this.state.snackbar.position,children:Object(C.jsx)(vt,{onClose:this.SnackbarClose,severity:this.state.snackbar.type,children:this.state.snackbar.msg})}):null,Object(C.jsxs)(N.d,{children:[Object(C.jsx)(N.b,{exact:!0,path:"/",component:U,children:this.state.userLoggedIn?Object(C.jsx)(N.a,{push:!0,to:"./all-memos"}):Object(C.jsx)(N.a,{push:!0,to:"./signup"})}),Object(C.jsx)(N.b,{path:"/signin",children:this.state.userLoggedIn?Object(C.jsx)(N.a,{push:!0,to:"./"}):Object(C.jsx)(U,{signInUser:this.signInUser})}),Object(C.jsx)(N.b,{path:"/signup",children:this.state.userLoggedIn?Object(C.jsx)(N.a,{push:!0,to:"./"}):Object(C.jsx)(A,{signUpUser:this.signUpUser})}),Object(C.jsx)(N.b,{path:"/all-memos",children:this.state.userLoggedIn?Object(C.jsx)(Fe,{decryptToOrgObj:this.decryptToOrgObj,getLoggedInUserData:this.getLoggedInUserData,createUserMemo:this.createUserMemo,logoutUser:this.logoutUser}):Object(C.jsx)(U,{signInUser:this.signInUser})}),Object(C.jsx)(N.b,{path:"/my-profile",children:this.state.userLoggedIn?Object(C.jsx)(Pe.a,{}):Object(C.jsx)(U,{signInUser:this.signInUser})}),Object(C.jsx)(N.b,{path:"/view-memo/:id",children:this.state.userLoggedIn?Object(C.jsx)(ut,{dltUserMemo:this.dltUserMemo,getLoggedInUserData:this.getLoggedInUserData,decryptToOrgObj:this.decryptToOrgObj,updateUserMemo:this.updateUserMemo}):Object(C.jsx)(U,{signInUser:this.signInUser})}),Object(C.jsx)(N.b,{path:"/about-us",children:Object(C.jsx)(Xe,{})}),Object(C.jsx)(N.b,{path:"/404",component:Ot}),Object(C.jsx)(N.b,{path:"/",component:Ot}),Object(C.jsx)(N.b,{path:"/*",component:Ot}),Object(C.jsx)(N.b,{component:Ot})]})]})}}]),a}(n.Component);a(572);i.a.render(Object(C.jsx)(wt,{}),document.getElementById("root"))}},[[573,1,2]]]);
//# sourceMappingURL=main.408ef68a.chunk.js.map