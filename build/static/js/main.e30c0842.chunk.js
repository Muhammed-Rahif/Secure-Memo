(this["webpackJsonpsecure-memo"]=this["webpackJsonpsecure-memo"]||[]).push([[0],{289:function(e,t){},323:function(e,t,a){},330:function(e,t){},332:function(e,t){},343:function(e,t){},345:function(e,t){},372:function(e,t){},374:function(e,t){},375:function(e,t){},380:function(e,t){},382:function(e,t){},401:function(e,t){},413:function(e,t){},416:function(e,t){},567:function(e,t,a){},568:function(e,t,a){"use strict";a.r(t);var r=a(0),o=a.n(r),n=a(15),i=a.n(n),c=a(95),s=a(96),l=a(296),d=a(294),m=a(16),j=(a(323),a(47)),u=a.n(j),b=a(641),h=a(614),p=a(607),O=a(642),g=a(604),x=a(615),f=a(637),y=a(137),v=a.n(y),w=a(77),k=a(605),S=a(606),T=a(68),M=a(293),B=a(2);function I(){return Object(B.jsxs)(w.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(B.jsx)(g.a,{color:"inherit",href:"./",children:"Secure Memo"})," ",(new Date).getFullYear(),"."]})}Object(M.a)({palette:{type:"dark"}});var C=Object(k.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));function U(e){var t=C(),a=Object(T.a)({reValidateMode:"onChange"}),r=a.register,o=a.handleSubmit,n=a.formState.errors;return Object(B.jsxs)(S.a,{component:"main",maxWidth:"xs",children:[Object(B.jsx)(p.a,{}),Object(B.jsxs)("div",{className:t.paper,children:[Object(B.jsx)(b.a,{className:t.avatar,children:Object(B.jsx)(v.a,{})}),Object(B.jsx)(w.a,{component:"h1",variant:"h5",children:"Sign in"}),Object(B.jsxs)("form",{className:t.form,onSubmit:o((function(t){e.signInUser(t)})),children:[Object(B.jsx)(O.a,Object(m.a)(Object(m.a)({variant:"outlined",margin:"normal",fullWidth:!0,id:"email",label:"Email Address",autoComplete:"off",autoFocus:!0},r("email",{required:!0,pattern:/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/})),{},{error:!!n.email,helperText:n.email?"required"===n.email.type?"Email address is required.":"Type a valid email address.":"Type your email address."})),Object(B.jsx)(O.a,Object(m.a)(Object(m.a)({variant:"outlined",margin:"normal",fullWidth:!0,label:"Password",type:"password",id:"password",autoComplete:"off"},r("password",{required:!0,minLength:8})),{},{error:!!n.password,helperText:n.password?"required"===n.password.type?"Password is required.":"Minimum lenght is 8.":"Type your password."})),Object(B.jsx)(h.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:t.submit,children:"Sign In"}),Object(B.jsx)(x.a,{container:!0,justify:"flex-end",children:Object(B.jsx)(x.a,{item:!0,children:Object(B.jsx)(g.a,{href:"/signup",variant:"body2",children:"Don't have an account? Sign Up"})})})]})]}),Object(B.jsx)(f.a,{mt:8,children:Object(B.jsx)(I,{})})]})}var N=a(183),D=a(17),L=a(36);function E(){return Object(B.jsxs)(w.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(B.jsx)(g.a,{color:"inherit",href:"./",children:"Secure Memo"})," ",(new Date).getFullYear(),"."]})}var q=Object(k.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)}}}));function A(e){var t=q(),a=Object(T.a)({reValidateMode:"onChange"}),r=a.register,o=a.handleSubmit,n=a.formState.errors;return Object(B.jsxs)(S.a,{component:"main",maxWidth:"xs",children:[Object(B.jsx)(p.a,{}),Object(B.jsxs)("div",{className:t.paper,children:[Object(B.jsx)(b.a,{className:t.avatar,children:Object(B.jsx)(v.a,{})}),Object(B.jsx)(w.a,{component:"h1",variant:"h5",children:"Sign up"}),Object(B.jsxs)("form",{className:t.form,onSubmit:o((function(t){e.signUpUser(t)})),children:[Object(B.jsxs)(x.a,{container:!0,spacing:2,children:[Object(B.jsx)(x.a,{item:!0,xs:12,sm:6,children:Object(B.jsx)(O.a,Object(m.a)(Object(m.a)(Object(L.a)({autoComplete:"fname",variant:"outlined",fullWidth:!0,id:"firstName",label:"First Name",autoFocus:!0},"autoComplete","off"),r("firstName",{required:!0,minLength:3})),{},{error:!!n.firstName,helperText:n.firstName?"required"===n.firstName.type?"First name is required.":" Minimum lenght 3.":"Type your first name."}))}),Object(B.jsx)(x.a,{item:!0,xs:12,sm:6,children:Object(B.jsx)(O.a,Object(m.a)(Object(m.a)({variant:"outlined",fullWidth:!0,id:"lastName",label:"Last Name",autoComplete:"off"},r("lastName",{required:!0,minLength:3})),{},{error:!!n.lastName,helperText:n.lastName?"required"===n.lastName.type?"Last name is required.":" Minimum lenght 3.":"Type your last name."}))}),Object(B.jsx)(x.a,{item:!0,xs:12,children:Object(B.jsx)(O.a,Object(m.a)(Object(m.a)({variant:"outlined",fullWidth:!0,id:"email",label:"Email Address",autoComplete:"off"},r("email",{required:!0,pattern:/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/})),{},{error:!!n.email,helperText:n.email?"required"===n.email.type?"Email address is required.":"Type a valid email address.":"Type your email address."}))}),Object(B.jsx)(x.a,{item:!0,xs:12,children:Object(B.jsx)(O.a,Object(m.a)(Object(m.a)({variant:"outlined",fullWidth:!0,label:"Password",type:"password",id:"password",autoComplete:"off"},r("password",{required:!0,minLength:8})),{},{error:!!n.password,helperText:n.password?"required"===n.password.type?"Password is required.":"Minimum lenght is 8.":"Type your password."}))})]}),Object(B.jsx)(h.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:t.submit,children:"Sign Up"}),Object(B.jsx)(x.a,{container:!0,justify:"flex-end",children:Object(B.jsx)(x.a,{item:!0,children:Object(B.jsx)(g.a,{href:"/signin",variant:"body2",children:"Already have an account? Sign in"})})})]})]}),Object(B.jsx)(f.a,{mt:5,children:Object(B.jsx)(E,{})})]})}var z=a(13),H=a(623),W=a(624),F=a(625),V=a(188),P=a(629),Y=a(613),R=a(571),Z=a(628),G=a(620),J=a(627),K=a(140),X=a.n(K),$=a(288),Q=a.n($),_=a(141),ee=a.n(_),te=a(142),ae=a.n(te),re=a(4),oe=a(621),ne=a(618),ie=a(619),ce=a(91),se=a.n(ce),le=a(92),de=a.n(le),me=a(93),je=a.n(me),ue=a(616),be=a(617),he=a(285),pe=a.n(he),Oe=Object(k.a)({list:{width:250},fullList:{width:"auto"},profileSection:{width:"100%",height:"10rem",display:"flex",alignItems:"center",justifyContent:"center",padding:"0 !important"},bgImage:{backgroundImage:"url('../profile-bg.jpg')",filter:"opacity(75%)",height:"100%",width:"100%",justifyContent:"center",alignItems:"center",display:"flex",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover"}}),ge=Object(k.a)((function(e){return{root:{"& > *":{margin:e.spacing(1)}},orange:{color:e.palette.getContrastText(ue.a[500]),backgroundColor:ue.a[500]},purple:{color:e.palette.getContrastText(be.a[500]),backgroundColor:be.a[500]},small:{width:e.spacing(3),height:e.spacing(3)},large:{width:e.spacing(7),height:e.spacing(7)}}}));function xe(e){var t=e.anchor,a=Oe(),n=ge(),i=o.a.useState({top:!1,left:!1,bottom:!1,right:!1}),c=Object(z.a)(i,2),s=c[0],l=c[1],d=Object(D.g)(),j=function(e,t){return function(a){("keydown"!==a.type||"Tab"!==a.key&&"Shift"!==a.key)&&l(Object(m.a)(Object(m.a)({},s),{},Object(L.a)({},e,t)))}};return Object(r.useEffect)((function(){e.active&&document.getElementById("openDrawer").click()}),[]),Object(B.jsx)("div",{children:Object(B.jsxs)(o.a.Fragment,{children:[Object(B.jsx)(h.a,{style:{display:"none"},hidden:!0,id:"openDrawer",onClick:j(t,!0),children:t}),Object(B.jsx)(oe.a,{anchor:t,open:s[t],onClose:j(t,!1),children:function(e){return Object(B.jsxs)("div",{className:Object(re.a)(a.list,Object(L.a)({},a.fullList,"top"===e||"bottom"===e)),role:"presentation",onClick:j(e,!1),onKeyDown:j(e,!1),children:[Object(B.jsx)(Y.a,{className:a.profileSection,children:Object(B.jsx)("div",{className:a.bgImage,children:Object(B.jsx)(b.a,{className:[n.orange,n.large],children:"OP"})})}),Object(B.jsx)(ne.a,{}),Object(B.jsxs)(Y.a,{children:[Object(B.jsxs)(R.a,{button:!0,children:[Object(B.jsx)(ie.a,{children:Object(B.jsx)(se.a,{})}),Object(B.jsx)(G.a,{primary:"All Memos"})]},"All Memos"),Object(B.jsxs)(R.a,{button:!0,children:[Object(B.jsx)(ie.a,{children:Object(B.jsx)(de.a,{})}),Object(B.jsx)(G.a,{primary:"Hidden Memos"})]},"Hidden Memos"),Object(B.jsxs)(R.a,{button:!0,children:[Object(B.jsx)(ie.a,{children:Object(B.jsx)(je.a,{})}),Object(B.jsx)(G.a,{primary:"Secure Memos"})]},"Secure Memos"),Object(B.jsx)(ne.a,{}),Object(B.jsxs)(R.a,{onClick:function(){d.push("/about-us")},button:!0,children:[Object(B.jsx)(ie.a,{children:Object(B.jsx)(pe.a,{})}),Object(B.jsx)(G.a,{primary:"About Us"})]},"Secure Memos")]})]})}(t)})]},t)})}var fe=a(622),ye=a(139),ve=a.n(ye),we=a(572),ke=a(639),Se=a(626),Te=a(610),Me=a(643),Be=a(644),Ie=a(287),Ce=a.n(Ie),Ue=a(94),Ne=a.n(Ue),De=a(645),Le=Object(k.a)((function(e){return{appBar:{position:"relative"},title:{marginLeft:e.spacing(2),flex:1},devider:{maxWidth:"95%",margin:"auto"}}})),Ee=o.a.forwardRef((function(e,t){return Object(B.jsx)(we.a,Object(m.a)({direction:"up",ref:t},e))}));function qe(e){var t=Le(),a=o.a.useState(!1),n=Object(z.a)(a,2),i=n[0],c=n[1],s=o.a.useState(null),l=Object(z.a)(s,2),d=l[0],j=l[1],b=o.a.useState(!1),p=Object(z.a)(b,2),g=p[0],x=p[1],f=o.a.useState(""),y=Object(z.a)(f,2),v=y[0],k=y[1],S=Object(T.a)({reValidateMode:"onChange",defaultValues:{memoType:"allMemos",modified:"false"}}),M=S.register,I=S.setValue,C=S.handleSubmit,U=S.formState.errors;Object(r.useEffect)((function(){c(!0),setTimeout((function(){j(document.getElementById("bodyTextarea").clientHeight+2.5*document.getElementById("bodyTextarea").clientHeight/10+"px")}),500)}),[]);var N=function(){document.getElementById("addBtn").click(),c(!1)};return Object(B.jsx)("div",{children:Object(B.jsx)(fe.a,{fullScreen:!0,open:i,onClose:N,TransitionComponent:Ee,children:Object(B.jsxs)("form",{className:t.form,autoComplete:"off",onSubmit:C((function(t){e.createUserMemo(t),N()})),children:[Object(B.jsx)("input",{hidden:"true",ref:M("modified")}),Object(B.jsx)(H.a,{className:t.appBar,children:Object(B.jsxs)(W.a,{children:[Object(B.jsx)(Be.a,{title:"Cancel",arrow:!0,children:Object(B.jsx)(F.a,{edge:"start",color:"inherit",onClick:N,"aria-label":"close",children:Object(B.jsx)(ve.a,{})})}),Object(B.jsx)(w.a,{variant:"h6",className:t.title,children:"Create a new Memo"}),Object(B.jsx)(Be.a,{title:"Save Memo",arrow:!0,children:Object(B.jsx)(h.a,{autoFocus:!0,color:"inherit",variant:"outlined",startIcon:Object(B.jsx)(Ce.a,{}),type:"submit",children:"save"})})]})}),Object(B.jsxs)(Y.a,{children:[Object(B.jsx)(R.a,{style:{paddingBottom:0},children:Object(B.jsx)(G.a,{primary:"Memo Heading"})}),Object(B.jsx)(R.a,{children:Object(B.jsx)(O.a,{id:"outlined-basic",label:"Memo Heading",variant:"outlined",fullWidth:!0,ref:M("memoTitle",{required:!0,minLength:10}),error:!!U.memoTitle,autoFocus:!!U.memoTitle,onChange:function(e){I("memoTitle",e.target.value,{shouldValidate:!0})},helperText:U.memoTitle?"required"===U.memoTitle.type?"Memo Title is required.":"Memo Title minimum lenght is 10.":"Memo Title here."})}),Object(B.jsx)(ne.a,{className:t.devider}),Object(B.jsxs)(R.a,{style:{paddingBottom:0},children:[Object(B.jsx)(G.a,{primary:"Memo Body"}),Object(B.jsx)("p",{style:{textAlign:"right"},children:Object(B.jsx)("small",{children:"* Markdown enabled"})})]}),Object(B.jsx)(R.a,{children:Object(B.jsx)(O.a,{id:"bodyTextarea",label:"Memo Body",variant:"outlined",rows:"7",multiline:!0,value:v,fullWidth:!0,"aria-label":"textarea",onChange:function(e){!function(e){k(u()("#bodyTextarea").val()),k(e.target.value)}(e),I("memoBody",e.target.value,{shouldValidate:!0})},ref:M("memoBody",{required:!0,minLength:12}),autoFocus:!!U.memoBody,error:!!U.memoBody,helperText:U.memoBody?"required"===U.memoBody.type?"Memo body is required.":"Memo body Minimum lenght is 12.":"Memo Body here."})}),Object(B.jsxs)(R.a,{style:{paddingBottom:0},children:[Object(B.jsx)(G.a,{primary:"Memo Body Preview"}),Object(B.jsxs)("p",{style:{textAlign:"right"},children:["Scrollable",Object(B.jsx)(De.a,{id:"mdSwitch",onChange:function(e){x(document.getElementById("mdSwitch").checked),function(e){x(e.target.checked),g?(document.getElementById("markdown-preview").style.overflowY="visible",document.getElementById("markdown-preview").style.height="auto"):(document.getElementById("markdown-preview").style.overflowY="scroll",document.getElementById("markdown-preview").style.height=d)}(e)},color:"primary",checked:g})]})]}),Object(B.jsx)(R.a,{children:Object(B.jsx)(V.a,{id:"markdown-preview",variant:"outlined",style:{minHeight:d,margin:".13rem",width:"100vw",overflowX:"scroll",overflowY:"visible",paddingLeft:".7rem"},children:Object(B.jsx)(Ne.a,{children:v})})}),Object(B.jsx)(ne.a,{className:t.devider}),Object(B.jsx)(R.a,{style:{paddingBottom:0},children:Object(B.jsx)(G.a,{primary:"Add Memo to"})}),Object(B.jsx)(R.a,{children:Object(B.jsxs)(Te.a,{variant:"outlined",fullWidth:!0,className:t.formControl,children:[Object(B.jsx)(Me.a,{id:"demo-simple-select-outlined-label",children:"Add to"}),Object(B.jsxs)(ke.a,Object(m.a)(Object(m.a)({defaultValue:"allMemos",labelId:"demo-simple-select-outlined-label",id:"demo-simple-select-outlined",label:"Add to",onChange:function(e){I("memoType",e.target.value,{shouldValidate:!0})}},M("memoType",{required:!0})),{},{autoFocus:!!U.memoType,error:!!U.memoType,helperText:"Memo will add to all memos section by default.",children:[Object(B.jsxs)(Se.a,{value:"allMemos",children:[Object(B.jsx)(se.a,{})," All Memos"]}),Object(B.jsxs)(Se.a,{value:"hiddenMemos",children:[Object(B.jsx)(de.a,{})," Hidden"]}),Object(B.jsxs)(Se.a,{value:"secureMemos",children:[Object(B.jsx)(je.a,{})," Secure"]})]}))]})}),Object(B.jsx)(ne.a,{className:t.devider})]})]})})})}var Ae=a(638),ze=a(295),He=Object(k.a)((function(e){return{text:{padding:e.spacing(2,2,0)},paper:{paddingBottom:50},list:{marginBottom:e.spacing(2),minHeight:"80vh"},subheader:{backgroundColor:e.palette.background.paper},appBar:{top:"auto",bottom:0},grow:{flexGrow:1},fabButton:{position:"absolute",zIndex:1,top:-30,left:0,right:0,margin:"0 auto"}}}));function We(e){var t=He(),a=Object(r.useState)(!1),n=Object(z.a)(a,2),i=n[0],c=n[1],s=Object(r.useState)(!1),l=Object(z.a)(s,2),d=l[0],m=l[1],j=Object(r.useState)(null),h=Object(z.a)(j,2),O=h[0],g=h[1],x=Object(r.useState)(new Array),f=Object(z.a)(x,2),y=f[0],v=f[1],k=function(){g(null)};return o.a.useEffect((function(){var t=e.getLoggedInUserData();u.a.ajax({url:"./get-user-memos",data:{userId:t.userId,memoType:"allMemos"},method:"post",success:function(e){v(e)}})})),Object(B.jsxs)(o.a.Fragment,{children:[Object(B.jsx)(p.a,{}),Object(B.jsxs)(V.a,{square:!0,className:t.paper,children:[Object(B.jsx)(w.a,{className:t.text,variant:"h5",gutterBottom:!0,children:"All Memos"}),Object(B.jsxs)(Y.a,{className:t.list,children:[Object(B.jsx)(J.a,{className:t.subheader,children:"Today"}),y.map((function(t){var a=t.memoId;t.memoDate;return delete t.memoId,delete t.memoDate,(t=e.decryptToOrgObj(t)).memoBody=t.memoBody.substring(0,45),Object(B.jsxs)(R.a,{onClick:function(){window.location.href="./view-memo/".concat(a)},button:!0,children:[Object(B.jsx)(Z.a,{children:Object(B.jsx)(b.a,{alt:"Profile Picture",children:t.memoTitle.charAt(0).toUpperCase()})}),Object(B.jsx)(G.a,{style:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:"65vw"},primary:t.memoTitle,secondary:t.memoBody})]})}))]})]}),Object(B.jsx)(H.a,{position:"fixed",color:"primary",className:t.appBar,children:Object(B.jsxs)(W.a,{children:[Object(B.jsx)(F.a,{onClick:function(){c(!i),document.getElementById("openDrawer").click()},edge:"start",color:"inherit","aria-label":"open drawer",children:Object(B.jsx)(X.a,{})}),Object(B.jsx)(Be.a,{title:"Create new Memo",arrow:!0,children:Object(B.jsx)(P.a,{id:"addBtn",color:"secondary","aria-label":"add",className:t.fabButton,onClick:function(){d?setTimeout((function(){m(!1)}),500):m(!0)},children:Object(B.jsx)(Q.a,{})})}),Object(B.jsx)("div",{className:t.grow}),Object(B.jsx)(Be.a,{title:"Search",arrow:!0,children:Object(B.jsx)(F.a,{color:"inherit",children:Object(B.jsx)(ee.a,{})})}),Object(B.jsx)(Be.a,{title:"Options",arrow:!0,children:Object(B.jsx)(F.a,{"aria-controls":"simple-menu",edge:"end",color:"inherit","aria-aria-haspopup":"true",onClick:function(e){g(e.currentTarget)},children:Object(B.jsx)(ae.a,{})})}),Object(B.jsxs)(ze.a,{id:"simple-menu",anchorEl:O,keepMounted:!0,open:Boolean(O),onClose:k,children:[Object(B.jsx)(Se.a,{onClick:k,children:"Profile"}),Object(B.jsx)(Se.a,{onClick:k,children:"My account"}),Object(B.jsx)(Se.a,{onClick:function(){k(),e.logoutUser()},children:"Logout"})]})]})}),Object(B.jsx)(xe,{anchor:"left",active:i}),d?Object(B.jsx)(qe,{createUserMemo:e.createUserMemo}):null]})}var Fe=a(289),Ve=a.n(Fe),Pe=a(630),Ye=a(631);function Re(){return Object(B.jsxs)(w.a,{variant:"body2",color:"textSecondary",children:["Copyright \xa9 ",Object(B.jsx)(g.a,{color:"inherit",href:"./",children:"Secure Memo"})," ",(new Date).getFullYear(),"."]})}var Ze=Object(k.a)((function(e){return{root:{display:"flex",flexDirection:"column",minHeight:"100vh"},main:{marginTop:e.spacing(8),marginBottom:e.spacing(2)},footer:{padding:e.spacing(3,2),marginTop:"auto",backgroundColor:"dark"===e.palette.type?e.palette.grey[200]:e.palette.grey[800]}}}));function Ge(){var e=Ze(),t=Object(Pe.a)("(prefers-color-scheme: dark)"),a=o.a.useMemo((function(){return Object(M.a)({palette:{type:t?"dark":"light"}})}),[t]);return Object(B.jsxs)(Ye.a,{theme:a,children:[Object(B.jsx)(p.a,{}),Object(B.jsxs)("div",{className:e.root,children:[Object(B.jsx)(p.a,{}),Object(B.jsxs)(S.a,{component:"main",className:e.main,maxWidth:"sm",children:[Object(B.jsx)(w.a,{variant:"h2",component:"h1",gutterBottom:!0,children:Object(B.jsx)(g.a,{href:"./",style:{color:"white"},children:"Secure Memo"})}),Object(B.jsxs)(w.a,{variant:"h5",component:"h2",gutterBottom:!0,children:["This website created and maintained by ",Object(B.jsx)(g.a,{href:"https://github.com/Muhammed-Rahif",variant:"h5",style:{color:"white"},children:Object(B.jsx)("b",{children:"Muhammed Rahif."})}),Object(B.jsx)("br",{})]}),Object(B.jsx)(w.a,{variant:"subtitle1",component:"h3",children:"I hope you will contact me for any inquiries..."}),Object(B.jsx)(w.a,{variant:"body1",children:"Have a nice day."})]}),Object(B.jsx)("footer",{className:e.footer,children:Object(B.jsxs)(S.a,{maxWidth:"sm",children:[Object(B.jsxs)(w.a,{variant:"body1",children:["Made with"," ",Object(B.jsx)(g.a,{variant:"body1",href:"https://material-ui.com/",style:{color:"white"},children:"React Material UI"})]}),Object(B.jsx)(Re,{})]})})]})]})}var Je=a(186),Ke=a.n(Je),Xe=a(290),$e=a.n(Xe),Qe=Object(k.a)((function(e){return{appBar:{position:"relative"},title:{marginLeft:e.spacing(2),flex:1},devider:{maxWidth:"95%",margin:"auto"}}})),_e=o.a.forwardRef((function(e,t){return Object(B.jsx)(we.a,Object(m.a)({direction:"up",ref:t},e))}));function et(e){var t=Qe(),a=o.a.useState(!1),n=Object(z.a)(a,2),i=n[0],c=n[1],s=o.a.useState(e.memoType),l=Object(z.a)(s,2),d=l[0],j=l[1],u=o.a.useState(null),b=Object(z.a)(u,2),p=b[0],g=b[1],x=o.a.useState(!1),f=Object(z.a)(x,2),y=f[0],v=f[1],k=o.a.useState(e.memoTitle),S=Object(z.a)(k,2),M=S[0],I=S[1],C=o.a.useState(e.memoBody),U=Object(z.a)(C,2),N=U[0],D=U[1],E=Object(T.a)({reValidateMode:"onChange",defaultValues:{memoBody:e.memoBody,memoTitle:e.memoTitle,memoType:e.memoType,modified:"true",memoId:e.memoId}}),q=E.register,A=E.setValue,P=E.handleSubmit,Z=E.formState.errors;Object(r.useEffect)((function(){c(!0),setTimeout((function(){g(document.getElementById("bodyTextarea").clientHeight+2.5*document.getElementById("bodyTextarea").clientHeight/10+"px")}),500)}),[]);var J=function(){document.getElementById("editBtn").click(),c(!1)};return Object(B.jsx)("div",{children:Object(B.jsx)(fe.a,{fullScreen:!0,open:i,onClose:J,TransitionComponent:_e,children:Object(B.jsxs)("form",{className:t.form,autoComplete:"off",onSubmit:P((function(t){console.log(t),e.updateUserMemo(t),J()})),children:[Object(B.jsx)("input",{hidden:"true",ref:q("modified")}),Object(B.jsx)("input",{hidden:"true",ref:q("memoId")}),Object(B.jsx)(H.a,{className:t.appBar,children:Object(B.jsxs)(W.a,{children:[Object(B.jsx)(Be.a,{title:"Cancel",arrow:!0,children:Object(B.jsx)(F.a,{edge:"start",color:"inherit",onClick:J,"aria-label":"close",children:Object(B.jsx)(ve.a,{})})}),Object(B.jsx)(w.a,{variant:"h6",className:t.title,children:"Edit Memo"}),Object(B.jsx)(Be.a,{title:"Update Memo",arrow:!0,children:Object(B.jsx)(h.a,{autoFocus:!0,color:"inherit",variant:"outlined",startIcon:Object(B.jsx)($e.a,{}),type:"submit",children:"update"})})]})}),Object(B.jsxs)(Y.a,{children:[Object(B.jsx)(R.a,{style:{paddingBottom:0},children:Object(B.jsx)(G.a,{primary:"Memo Heading"})}),Object(B.jsx)(R.a,{children:Object(B.jsx)(O.a,{id:"outlined-basic",label:"Memo Heading",variant:"outlined",fullWidth:!0,value:M,ref:q("memoTitle",{required:!0,minLength:10}),error:!!Z.memoTitle,autoFocus:!!Z.memoTitle,onChange:function(e){I(e.target.value),A("memoTitle",e.target.value,{shouldValidate:!0})},helperText:Z.memoTitle?"required"===Z.memoTitle.type?"Memo Title is required.":"Memo Title minimum lenght is 10.":"Memo Title here."})}),Object(B.jsx)(ne.a,{className:t.devider}),Object(B.jsxs)(R.a,{style:{paddingBottom:0},children:[Object(B.jsx)(G.a,{primary:"Memo Body"}),Object(B.jsx)("p",{style:{textAlign:"right"},children:Object(B.jsx)("small",{children:"* Markdown enabled"})})]}),Object(B.jsx)(R.a,{children:Object(B.jsx)(O.a,{id:"bodyTextarea",label:"Memo Body",variant:"outlined",rows:"7",multiline:!0,fullWidth:!0,"aria-label":"textarea",value:N,onChange:function(e){D(document.getElementById("bodyTextarea").value),A("memoBody",e.target.value,{shouldValidate:!0})},ref:q("memoBody",{required:!0,minLength:12}),autoFocus:!!Z.memoBody,error:!!Z.memoBody,helperText:Z.memoBody?"required"===Z.memoBody.type?"Memo body is required.":"Memo body Minimum lenght is 12.":"Memo Body here."})}),Object(B.jsx)(ne.a,{className:t.devider}),Object(B.jsxs)(R.a,{style:{paddingBottom:0},children:[Object(B.jsx)(G.a,{primary:"Memo Body Preview"}),Object(B.jsxs)("p",{style:{textAlign:"right"},children:["Scrollable",Object(B.jsx)(De.a,Object(m.a)(Object(m.a)(Object(L.a)({id:"mdSwitch",onChange:function(e){v(document.getElementById("mdSwitch").checked),function(e){v(e.target.checked),y?(document.getElementById("markdown-preview").style.overflowY="visible",document.getElementById("markdown-preview").style.height="auto"):(document.getElementById("markdown-preview").style.overflowY="scroll",document.getElementById("markdown-preview").style.height=p)}(e)},color:"primary",style:{paddingBottom:0},checked:y},"onChange",(function(e){A("memoType",e.target.value,{shouldValidate:!0})})),q("memoType",{required:!0})),{},{autoFocus:!!Z.memoType,error:!!Z.memoType,helperText:"Memo will add to all memos section by default."}))]})]}),Object(B.jsx)(R.a,{children:Object(B.jsx)(V.a,{id:"markdown-preview",variant:"outlined",style:{minHeight:p,margin:".13rem",width:"100vw",overflowY:"visible",paddingLeft:".7rem"},children:Object(B.jsx)(Ne.a,{children:N})})}),Object(B.jsx)(ne.a,{className:t.devider}),Object(B.jsx)(R.a,{style:{paddingBottom:0},children:Object(B.jsx)(G.a,{primary:"Add Memo to"})}),Object(B.jsx)(R.a,{children:Object(B.jsxs)(Te.a,{variant:"outlined",fullWidth:!0,className:t.formControl,children:[Object(B.jsx)(Me.a,{id:"demo-simple-select-outlined-label",children:"Add to"}),Object(B.jsxs)(ke.a,{labelId:"demo-simple-select-outlined-label",id:"demo-simple-select-outlined",value:d,onChange:function(e){j(e.target.value)},label:"Add to",children:[Object(B.jsxs)(Se.a,{value:"allMemos",children:[Object(B.jsx)(se.a,{})," All Memos"]}),Object(B.jsxs)(Se.a,{value:"hiddenMemos",children:[Object(B.jsx)(de.a,{})," Hidden"]}),Object(B.jsxs)(Se.a,{value:"secureMemos",children:[Object(B.jsx)(je.a,{})," Secure"]})]})]})}),Object(B.jsx)(ne.a,{className:t.devider})]})]})})})}var tt=a(640),at=a(292),rt=a.n(at),ot=a(291),nt=a.n(ot),it=a(635),ct=a(633),st=a(634),lt=a(632),dt=Object(k.a)((function(e){return{text:{padding:e.spacing(2,2,0)},paper:{paddingBottom:50},list:{marginBottom:e.spacing(2),minHeight:"80vh",padding:"1.5rem"},subheader:{backgroundColor:e.palette.background.paper},appBar:{top:"auto",bottom:0},grow:{flexGrow:1},fabButton:{position:"absolute",zIndex:1,top:-30,left:0,right:0,margin:"0 auto"}}}));function mt(e){return Object(B.jsx)(Ae.a,Object(m.a)({elevation:6,variant:"filled"},e))}function jt(e){var t,a,n=dt(),i=Object(r.useState)(!1),c=Object(z.a)(i,2),s=c[0],l=c[1],d=Object(r.useState)(!1),m=Object(z.a)(d,2),j=m[0],b=m[1],O=Object(r.useState)(!1),g=Object(z.a)(O,2),x=g[0],f=g[1],y=o.a.useState(null),v=Object(z.a)(y,2),k=v[0],S=v[1],T=o.a.useState(""),M=Object(z.a)(T,2),I=M[0],C=M[1],U=o.a.useState(!1),N=Object(z.a)(U,2),D=N[0],L=N[1],E=function(){L(!1)},q=function(){S(null)},A=function(e,t){"clickaway"!==t&&f(!1)};return Object(r.useEffect)((function(){var t=window.location.href.substring(window.location.href.lastIndexOf("/")+1);u.a.ajax({url:"/get-memo-data",data:{userId:e.getLoggedInUserData().userId,memoId:t,memoType:"allMemos"},method:"post",success:function(t){if(t.memoId){var a=t.memoId,r=t.memoDate;delete t.memoId,delete t.memoDate,(t=e.decryptToOrgObj(t)).memoId=a,t.memoDate=r,C(t)}else window.location.href="/"}})})),Object(B.jsxs)(o.a.Fragment,{children:[Object(B.jsx)(p.a,{}),Object(B.jsxs)(V.a,{square:!0,className:n.paper,children:[Object(B.jsx)(w.a,{className:n.text,variant:"h5",gutterBottom:!0,children:I.memoTitle}),Object(B.jsx)(Y.a,{style:{overflowX:"scroll"},className:n.list,children:Object(B.jsx)(Ne.a,{children:I.memoBody})})]}),Object(B.jsx)(H.a,{position:"fixed",color:"primary",className:n.appBar,children:Object(B.jsxs)(W.a,{children:[Object(B.jsx)(F.a,{onClick:function(){l(!s),document.getElementById("openDrawer").click()},edge:"start",color:"inherit","aria-label":"open drawer",children:Object(B.jsx)(X.a,{})}),Object(B.jsx)(Be.a,{title:"Edit this Memo",arrow:!0,children:Object(B.jsx)(P.a,{id:"addBtn",color:"secondary","aria-label":"add",className:n.fabButton,onClick:function(){j?setTimeout((function(){b(!1)}),500):b(!0)},children:Object(B.jsx)(Ke.a,{})})}),Object(B.jsx)("div",{className:n.grow}),Object(B.jsx)(Be.a,{title:"Search",arrow:!0,children:Object(B.jsx)(F.a,{color:"inherit",children:Object(B.jsx)(ee.a,{})})}),Object(B.jsx)(Be.a,{title:"Options",arrow:!0,children:Object(B.jsx)(F.a,{"aria-controls":"simple-menu",edge:"end",color:"inherit","aria-aria-haspopup":"true",onClick:function(e){S(e.currentTarget)},children:Object(B.jsx)(ae.a,{})})}),Object(B.jsxs)(ze.a,{id:"simple-menu",anchorEl:k,keepMounted:!0,open:Boolean(k),onClose:q,children:[Object(B.jsxs)(Se.a,{id:"editBtn",onClick:function(){q(),j?setTimeout((function(){b(!1)}),500):b(!0)},children:[Object(B.jsx)(Ke.a,{fontSize:"small"}),"Edit"]}),Object(B.jsxs)(Se.a,{onClick:function(){q(),L(!0)},children:[Object(B.jsx)(nt.a,{fontSize:"small"}),"Delete"]}),Object(B.jsxs)(Se.a,{onClick:q,children:[Object(B.jsx)(rt.a,{fontSize:"small"}),"Home"]})]})]})}),Object(B.jsx)(xe,{anchor:"left",active:s}),x?(t="Memo updated successsfully..!",a="success",Object(B.jsx)(tt.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:x,autoHideDuration:6e3,onClose:A,children:Object(B.jsx)(mt,{onClose:A,severity:a,children:t})})):null,j?Object(B.jsx)(et,{memoTitle:I.memoTitle,memoBody:I.memoBody,memoId:I.memoId,memoDate:I.memoDate,memoType:I.memoType,showSnackBar:f,updateUserMemo:e.updateUserMemo}):null,D?Object(B.jsxs)(fe.a,{open:D,onClose:E,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[Object(B.jsx)(lt.a,{id:"alert-dialog-title",children:"Are you sure to delete this memo ?"}),Object(B.jsx)(ct.a,{children:Object(B.jsx)(st.a,{id:"alert-dialog-description",children:"Once deleted you will not able to undo or recover it. It will permanently deleted.. Make sure that want move forward.. If so click the OK button down below..!"})}),Object(B.jsxs)(it.a,{children:[Object(B.jsx)(h.a,{onClick:E,color:"primary",children:"Nop.. Don't delete this memo.!"}),Object(B.jsx)(h.a,{onClick:function(){E(),e.dltUserMemo({memoId:I.memoId,memoType:I.memoType})},color:"secondary",autoFocus:!0,children:"Ok, Delete this memo.. I am sure..!"})]})]}):null]})}var ut=a(298),bt=a(636),ht=a(324),pt=a(442),Ot="SecureMemoStorage",gt="secure memo key";function xt(e){return Object(B.jsx)(Ae.a,Object(m.a)({elevation:6,variant:"filled"},e))}var ft=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(e){var r;return Object(c.a)(this,a),(r=t.call(this,e)).BackdropClose=function(){r.setState({backdropOpen:!1})},r.backdropToggle=function(){r.setState({backdropOpen:!r.state.backdropOpen})},r.encryptObj=function(e){var t={};return Object.keys(e).map((function(a){t[a]=ht.AES.encrypt(e[a],gt).toString()})),t},r.encUnSaltStr=function(e){return ht.AES.encrypt(e,ht.enc.Utf8.parse(gt),{iv:{words:[0,0,0,0],sigBytes:16}}).toString()},r.decryptToOrgObj=function(e){var t={};return Object.keys(e).map((function(a){t[a]=ht.AES.decrypt(e[a],gt).toString(ht.enc.Utf8),t[a]=t[a].replace(/['"]+/g,"")})),t},r.signUpUser=function(e){r.backdropToggle();var t=e.email;delete e.email,(e=r.encryptObj(e)).email=r.encUnSaltStr(t),u.a.ajax({method:"post",url:"./signup-user",data:e,success:function(e){e.status?(r.backdropToggle(),r.setState({userData:e.userData}),r.setState({userLoggedIn:!0}),r.verifyUserLogin(),D.a):(r.backdropToggle(),r.setState({snackbar:{openSnackbar:!0,msg:"Can't sign up : ".concat(e.errorMsg),type:"error",position:{vertical:"top",horizontal:"center"}}}))}})},r.signInUser=function(e){r.backdropToggle();var t=e.email;delete e.email,(e=r.encryptObj(e)).email=r.encUnSaltStr(t),u.a.ajax({method:"post",url:"./signin-user",data:e,success:function(e){e.status?(r.backdropToggle(),r.setState({userData:e.userData}),r.setState({userLoggedIn:!0}),r.verifyUserLogin(),D.a):(r.backdropToggle(),r.setState({snackbar:{openSnackbar:!0,msg:"Can't sign in : ".concat(e.errorMsg),type:"error",position:{vertical:"top",horizontal:"center"}}}))}})},r.logoutUser=function(){r.setState({userLoggedIn:!1,userData:null}),pt.remove(Ot),window.location.reload()},r.getLoggedInUserData=function(){return pt.get(Ot)},r.createUserMemo=function(e){r.backdropToggle(),e=r.encryptObj(e);var t=r.getLoggedInUserData();Object.assign(t,e),u.a.ajax({method:"post",url:"./create-user-memo",data:t,success:function(e){r.backdropToggle(),e.status?r.setState({snackbar:{openSnackbar:!0,msg:e.firstMemo?"Successfully saved your first memo.!":"Successfully saved your memo.!",type:"success",position:{vertical:"bottom",horizontal:"left"}}}):r.setState({snackbar:{openSnackbar:!0,msg:"Oops..! Something went wrong, Try again.",type:"error",position:{vertical:"bottom",horizontal:"left"}}})}})},r.updateUserMemo=function(e){r.backdropToggle();var t=e.memoId;delete e.memoId,(e=r.encryptObj(e)).memoId=t;var a=r.getLoggedInUserData();Object.assign(a,e),u.a.ajax({method:"post",url:"/update-user-memo",data:a,success:function(e){r.backdropToggle(),e.status?r.setState({snackbar:{openSnackbar:!0,msg:"Successfully updated your memo.!",type:"success",position:{vertical:"bottom",horizontal:"left"}}}):r.setState({snackbar:{openSnackbar:!0,msg:"Oops..! Something went wrong, Try again.",type:"error",position:{vertical:"bottom",horizontal:"left"}}})}})},r.getUserMemo=function(e,t){alert("editUserMemo")},r.dltUserMemo=function(e){r.backdropToggle();var t=r.getLoggedInUserData();Object.assign(t,e),u.a.ajax({method:"post",url:"/delete-user-memo",data:t,success:function(e){r.backdropToggle(),e.status?(r.setState({snackbar:{openSnackbar:!0,msg:"Successfully deleted.!",type:"success",position:{vertical:"bottom",horizontal:"left"}}}),window.location.href="/"):r.setState({snackbar:{openSnackbar:!0,msg:"Oops..! Something went wrong, Try again.",type:"error",position:{vertical:"bottom",horizontal:"left"}}})}})},r.editUserMemo=function(e,t){alert("editUserMemo")},r.SnackbarClose=function(e,t){"clickaway"!==t&&r.setState({snackbar:{openSnackbar:!1}})},r.verifyUserLogin=function(){var e=r.state.userData,t=pt.get(Ot);t?r.setState({userData:t,userLoggedIn:!0}):pt.set(Ot,e)},r.componentDidMount=function(){r.verifyUserLogin()},r.state={userData:!1,userLoggedIn:!1,myMemos:[],snackbar:{openSnackbar:!1,msg:"",type:"success",position:{vertical:"bottom",horizontal:"left"}},backdropOpen:!1},r}return Object(s.a)(a,[{key:"render",value:function(){return Object(B.jsxs)(N.a,{children:[Object(B.jsx)(ut.a,{style:{zIndex:999999},open:this.state.backdropOpen,children:Object(B.jsx)(bt.a,{color:"inherit"})}),this.state.snackbar.openSnackbar?Object(B.jsx)(tt.a,{open:this.state.snackbar.openSnackbar,autoHideDuration:6e3,style:{position:"absolute"},onClose:this.SnackbarClose,anchorOrigin:this.state.snackbar.position,children:Object(B.jsx)(xt,{onClose:this.SnackbarClose,severity:this.state.snackbar.type,children:this.state.snackbar.msg})}):null,Object(B.jsxs)(D.d,{children:[Object(B.jsx)(D.b,{exact:!0,path:"/",component:U,children:this.state.userLoggedIn?Object(B.jsx)(We,{decryptToOrgObj:this.decryptToOrgObj,getLoggedInUserData:this.getLoggedInUserData,createUserMemo:this.createUserMemo,logoutUser:this.logoutUser}):Object(B.jsx)(D.a,{push:!0,to:"./signup"})}),Object(B.jsx)(D.b,{path:"/signin",children:this.state.userLoggedIn?Object(B.jsx)(D.a,{push:!0,to:"./"}):Object(B.jsx)(U,{signInUser:this.signInUser})}),Object(B.jsx)(D.b,{path:"/signup",children:this.state.userLoggedIn?Object(B.jsx)(D.a,{push:!0,to:"./"}):Object(B.jsx)(A,{signUpUser:this.signUpUser})}),Object(B.jsx)(D.b,{path:"/my-memos",children:Object(B.jsx)(We,{decryptToOrgObj:this.decryptToOrgObj,getLoggedInUserData:this.getLoggedInUserData,createUserMemo:this.createUserMemo,logoutUser:this.logoutUser})}),Object(B.jsx)(D.b,{path:"/my-profile",children:Object(B.jsx)(Ve.a,{})}),Object(B.jsx)(D.b,{path:"/about-us",children:Object(B.jsx)(Ge,{})}),Object(B.jsx)(D.b,{path:"/view-memo/:id",children:Object(B.jsx)(jt,{dltUserMemo:this.dltUserMemo,getLoggedInUserData:this.getLoggedInUserData,decryptToOrgObj:this.decryptToOrgObj,updateUserMemo:this.updateUserMemo})}),Object(B.jsx)(D.b,{path:"/edit-memo/:id",children:Object(B.jsx)(et,{})})]})]})}}]),a}(r.Component);a(567);i.a.render(Object(B.jsx)(ft,{}),document.getElementById("root"))}},[[568,1,2]]]);
//# sourceMappingURL=main.e30c0842.chunk.js.map