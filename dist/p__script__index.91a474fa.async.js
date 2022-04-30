(self.webpackChunk=self.webpackChunk||[]).push([[4756],{98143:function(W,v,e){"use strict";e.d(v,{Z:function(){return b}});var F=e(19377),h=e(12924),ue={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"}}]},name:"delete",theme:"outlined"},U=ue,oe=e(18932),f=function(g,C){return h.createElement(oe.Z,(0,F.Z)((0,F.Z)({},g),{},{ref:C,icon:U}))};f.displayName="DeleteOutlined";var b=h.forwardRef(f)},6604:function(W){W.exports={"left-tree-container":"left-tree-container___3ivV3","left-tree-scroller":"left-tree-scroller___r-ES6","log-container":"log-container___2Beqi"}},52407:function(W,v,e){"use strict";e.r(v);var F=e(85690),h=e(89438),ue=e(56045),U=e(84768),oe=e(40697),f=e(28637),b=e(30606),x=e(8452),g=e(15082),C=e(70307),Ye=e(46810),m=e(95625),ve=e(22205),w=e.n(ve),V=e(12924),u=e.n(V),De=e(30827),S=e(58997),Me=m.Z.Option,j=s=>{var B=s.handleCancel,Pe=s.treeData,q=s.visible,_=g.Z.useForm(),t=(0,C.Z)(_,1),D=t[0],Ee=(0,V.useState)(!1),ee=(0,C.Z)(Ee,2),y=ee[0],N=ee[1],p=(0,V.useState)([]),te=(0,C.Z)(p,2),R=te[0],ie=te[1],H=function(){var o=(0,b.Z)(w().mark(function Z(i){return w().wrap(function(z){for(;;)switch(z.prev=z.next){case 0:N(!0),i.path=i.path||"",De.W.post("".concat(S.Z.apiPrefix,"scripts"),{data:{filename:i.filename,path:i.path,content:""}}).then(ae=>{var ce=ae.code,ne=ae.data;ce===200?(f.ZP.success("\u4FDD\u5B58\u6587\u4EF6\u6210\u529F"),B({filename:i.filename,path:i.path,key:"".concat(i.path,"-").concat(i.filename)})):f.ZP.error(ne),N(!1)}).finally(()=>N(!1));case 3:case"end":return z.stop()}},Z)}));return function(i){return o.apply(this,arguments)}}();return(0,V.useEffect)(()=>{D.resetFields();var o=Pe.filter(Z=>Z.disabled);ie([{key:""},...o])},[q]),u().createElement(h.Z,{title:"\u65B0\u5EFA\u6587\u4EF6",visible:q,forceRender:!0,onOk:()=>{D.validateFields().then(o=>{H(o)}).catch(o=>{console.log("Validate Failed:",o)})},onCancel:()=>B(),confirmLoading:y},u().createElement(g.Z,{form:D,layout:"vertical",name:"edit_name_modal"},u().createElement(g.Z.Item,{name:"filename",label:"\u6587\u4EF6\u540D",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u6587\u4EF6\u540D"}]},u().createElement(U.Z,{placeholder:"\u8BF7\u8F93\u5165\u6587\u4EF6\u540D"})),u().createElement(g.Z.Item,{label:"\u7236\u76EE\u5F55",name:"path",initialValue:R&&R.length>0?R[0].key:""},u().createElement(m.Z,{placeholder:"\u8BF7\u9009\u62E9\u7236\u76EE\u5F55"},R.map(o=>u().createElement(Me,{value:o.key},o.key||"\u6839"))))))};v.default=j},73380:function(W,v,e){"use strict";e.r(v);var F=e(53370),h=e(73085),ue=e(76438),U=e(91988),oe=e(56045),f=e(84768),b=e(20861),x=e(51067),g=e(69399),C=e(47556),Ye=e(15284),m=e(9466),ve=e(99454),w=e(64367),V=e(52097),u=e(49289),De=e(40697),S=e(28637),Me=e(85690),j=e(89438),s=e(70307),B=e(18158),Pe=e(62244),q=e(42039),_=e(12924),t=e.n(_),D=e(58997),Ee=e(24071),ee=e(1138),y=e(30827),N=e(6604),p=e.n(N),te=e(25549),R=e(31519),ie=e(7553),H=e(12064),o=e(7753),Z=e(98143),i=e(3980),Oe=e(52407),z=e(66292),ae=e.n(z),ce=e(9399),ne=q.Z.Text;function he(M,le){var P=[];if(M){var G=[];return le.forEach(A=>{if(A.title.toLocaleLowerCase().includes(M))G.push(A);else{var $=[];(A.children||[]).forEach(J=>{J.title.toLocaleLowerCase().includes(M)&&$.push(J)}),$.length>0&&(G.push((0,B.Z)((0,B.Z)({},A),{},{children:$})),P.push(A.key))}}),{tree:G,expandedKeys:P}}return{tree:le,expandedKeys:P}}var ke={".py":"python",".js":"javascript",".sh":"shell",".ts":"typescript"},be=M=>{var le=M.headerStyle,P=M.isPhone,G=M.theme,A=M.socketMessage,$=(0,_.useState)("\u8BF7\u9009\u62E9\u811A\u672C\u6587\u4EF6"),J=(0,s.Z)($,2),we=J[0],fe=J[1],qe=(0,_.useState)("\u8BF7\u9009\u62E9\u811A\u672C\u6587\u4EF6"),ge=(0,s.Z)(qe,2),L=ge[0],T=ge[1],et=(0,_.useState)(),Ce=(0,s.Z)(et,2),O=Ce[0],Be=Ce[1],tt=(0,_.useState)([]),ye=(0,s.Z)(tt,2),c=ye[0],de=ye[1],at=(0,_.useState)([]),pe=(0,s.Z)(at,2),nt=pe[0],Q=pe[1],lt=(0,_.useState)(!1),Ze=(0,s.Z)(lt,2),_t=Ze[0],Ae=Ze[1],rt=(0,_.useState)(""),Le=(0,s.Z)(rt,2),Ie=Le[0],st=Le[1],ut=(0,_.useState)(),Fe=(0,s.Z)(ut,2),ot=Fe[0],Et=Fe[1],_e=(0,_.useRef)(),it=(0,_.useState)(!1),Se=(0,s.Z)(it,2),ct=Se[0],Re=Se[1],dt=(0,_.useState)(""),Te=(0,s.Z)(dt,2),mt=Te[0],vt=Te[1],Dt=(0,_.useState)(!1),Ke=(0,s.Z)(Dt,2),re=Ke[0],K=Ke[1],X=(0,_.useRef)(null),Mt=(0,_.useState)(!1),We=(0,s.Z)(Mt,2),Pt=We[0],Ue=We[1],Ot=(0,_.useState)(),xe=(0,s.Z)(Ot,2),E=xe[0],Ve=xe[1],ht=(0,_.useState)([]),je=(0,s.Z)(ht,2),ft=je[0],me=je[1],gt=()=>{Ae(!0),y.W.get("".concat(D.Z.apiPrefix,"scripts/files")).then(n=>{de(n.data),Q(n.data),Ct()}).finally(()=>Ae(!1))},Ne=n=>{y.W.get("".concat(D.Z.apiPrefix,"scripts/").concat(n.value,"?path=").concat(n.parent||"")).then(a=>{T(a.data)})},Ct=()=>{var n=ce.m.location.query,a=n.p,l=n.s;if(l){var r="".concat(a,"/").concat(l),Y={node:{title:l,value:l,key:a?r:l,parent:a}};me([a]),He([r],Y)}},se=(n,a)=>{if(!(a.key===O||!n)){T("\u52A0\u8F7D\u4E2D...");var l=n?ke[n.slice(-3)]:"";st(P&&l==="typescript"?"javascript":l),Be(a.key),fe(a.parent||a.value),Ve(a),Ne(a)}},Bt=n=>{me(n)},He=(0,_.useCallback)((n,a)=>{var l=X.current?X.current.getValue().replace(/\r\n/g,`
`):L;l!==L?j.Z.confirm({title:"\u786E\u8BA4\u79BB\u5F00",content:t().createElement(t().Fragment,null,"\u5F53\u524D\u4FEE\u6539\u672A\u4FDD\u5B58\uFF0C\u786E\u5B9A\u79BB\u5F00\u5417"),onOk(){se(n[0],a.node),K(!1)},onCancel(){console.log("Cancel")}}):(K(!1),se(n[0],a.node))},[L]),yt=(0,_.useCallback)(n=>{var a=n.target.value;pt(a)},[c,Q]),pt=(0,_.useCallback)(ae()(n=>{vt(n);var a=he(n.toLocaleLowerCase(),c),l=a.tree,r=a.expandedKeys;me(r),Q(l)},300),[c,Q]),ze=()=>{setTimeout(()=>{K(!0)},300)},Ge=()=>{K(!1),T("\u52A0\u8F7D\u4E2D..."),Ne(E)},$e=()=>{j.Z.confirm({title:"\u786E\u8BA4\u4FDD\u5B58",content:t().createElement(t().Fragment,null,"\u786E\u8BA4\u4FDD\u5B58\u6587\u4EF6",t().createElement(ne,{style:{wordBreak:"break-all"},type:"warning"},E.value)," ","\uFF0C\u4FDD\u5B58\u540E\u4E0D\u53EF\u6062\u590D"),onOk(){var n=X.current?X.current.getValue().replace(/\r\n/g,`
`):L;return new Promise((a,l)=>{y.W.put("".concat(D.Z.apiPrefix,"scripts"),{data:{filename:E.value,path:E.parent||"",content:n}}).then(r=>{r.code===200?(S.ZP.success("\u4FDD\u5B58\u6210\u529F"),T(n),K(!1)):S.ZP.error(r),a(null)}).catch(r=>l(r))})},onCancel(){console.log("Cancel")}})},Je=()=>{j.Z.confirm({title:"\u786E\u8BA4\u5220\u9664",content:t().createElement(t().Fragment,null,"\u786E\u8BA4\u5220\u9664\u6587\u4EF6",t().createElement(ne,{style:{wordBreak:"break-all"},type:"warning"},O)," ","\uFF0C\u5220\u9664\u540E\u4E0D\u53EF\u6062\u590D"),onOk(){y.W.delete("".concat(D.Z.apiPrefix,"scripts"),{data:{filename:E.value,path:E.parent||""}}).then(n=>{if(n.code===200){S.ZP.success("\u5220\u9664\u6210\u529F");var a=[...c];if(E.parent){var l=a.findIndex(d=>d.key===E.parent),r=a[l],Y=r.children.findIndex(d=>d.key===E.key);r.children.splice(Y,1),a.splice(l,1,(0,B.Z)({},r))}else{var I=a.findIndex(d=>d.key===E.key);a.splice(I,1)}de(a)}else S.ZP.error(n)})},onCancel(){console.log("Cancel")}})},Qe=()=>{Ue(!0)},Zt=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{filename:"",path:"",key:""},l=a.filename,r=a.path,Y=a.key;if(l){var I=[...c],d={title:l,key:Y,value:l,parent:r};if(r){var Xe=I.findIndex(Lt=>Lt.key===r),k=I[Xe];k.children&&k.children.length>0?k.children.unshift(d):k.children=[d],I.splice(Xe,1,(0,B.Z)({},k))}else I.unshift(d);de(I),se(d.value,d),K(!0)}Ue(!1)},It=()=>{y.W.post("".concat(D.Z.apiPrefix,"scripts/download"),{data:{filename:E.value}}).then(n=>{var a=new Blob([n],{type:"application/json"}),l=URL.createObjectURL(a),r=document.createElement("a");r.href=l,r.download=E.value,document.documentElement.appendChild(r),r.click(),document.documentElement.removeChild(r)})};(0,_.useEffect)(()=>{var n=mt||"",a=he(n.toLocaleLowerCase(),c),l=a.tree;Q(l),Be(""),Ve(null),fe("\u8BF7\u9009\u62E9\u811A\u672C\u6587\u4EF6"),T("\u8BF7\u9009\u62E9\u811A\u672C\u6587\u4EF6")},[c]),(0,_.useEffect)(()=>{gt(),_e&&_e.current&&Et(_e.current.clientHeight)},[]);var At=re?t().createElement(u.Z,null,t().createElement(u.Z.Item,{key:"save",icon:t().createElement(H.Z,null),onClick:$e},"\u4FDD\u5B58"),t().createElement(u.Z.Item,{key:"exit",icon:t().createElement(o.Z,null),onClick:Ge},"\u9000\u51FA\u7F16\u8F91")):t().createElement(u.Z,null,t().createElement(u.Z.Item,{key:"add",icon:t().createElement(H.Z,null),onClick:Qe},"\u65B0\u5EFA"),t().createElement(u.Z.Item,{key:"edit",icon:t().createElement(o.Z,null),onClick:ze,disabled:!O},"\u7F16\u8F91"),t().createElement(u.Z.Item,{key:"delete",icon:t().createElement(Z.Z,null),onClick:Je,disabled:!O},"\u5220\u9664"));return t().createElement(Ee.ZP,{className:"ql-container-wrapper log-wrapper",title:we,loading:_t,extra:P?[t().createElement(w.Z,{className:"log-select",value:O,dropdownStyle:{maxHeight:400,overflow:"auto"},treeData:c,placeholder:"\u8BF7\u9009\u62E9\u811A\u672C",showSearch:!0,onSelect:se}),t().createElement(C.Z,{overlay:At,trigger:["click"]},t().createElement(m.Z,{type:"primary",icon:t().createElement(i.Z,null)}))]:re?[t().createElement(m.Z,{type:"primary",onClick:$e},"\u4FDD\u5B58"),t().createElement(m.Z,{type:"primary",onClick:Ge},"\u9000\u51FA\u7F16\u8F91")]:[t().createElement(x.Z,{title:"\u65B0\u5EFA"},t().createElement(m.Z,{type:"primary",onClick:Qe,icon:t().createElement(H.Z,null)})),t().createElement(x.Z,{title:"\u7F16\u8F91"},t().createElement(m.Z,{disabled:!O,type:"primary",onClick:ze,icon:t().createElement(o.Z,null)})),t().createElement(x.Z,{title:"\u5220\u9664"},t().createElement(m.Z,{type:"primary",disabled:!O,onClick:Je,icon:t().createElement(Z.Z,null)})),t().createElement(m.Z,{type:"primary",onClick:()=>{Re(!0)}},"\u8C03\u8BD5")],header:{style:le}},t().createElement("div",{className:"".concat(p()["log-container"]," log-container")},!P&&t().createElement(ie.Z,{split:"vertical",size:200,maxSize:-100},t().createElement("div",{className:p()["left-tree-container"]},c.length>0?t().createElement(t().Fragment,null,t().createElement(f.Z.Search,{className:p()["left-tree-search"],onChange:yt,placeholder:"\u8BF7\u8F93\u5165\u811A\u672C\u540D",allowClear:!0}),t().createElement("div",{className:p()["left-tree-scroller"],ref:_e},t().createElement(U.Z,{className:p()["left-tree"],treeData:nt,showIcon:!0,height:ot,selectedKeys:[O],expandedKeys:ft,onExpand:Bt,showLine:{showLeafIcon:!0},onSelect:He}))):t().createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100%"}},t().createElement(h.Z,{description:"\u6682\u65E0\u811A\u672C",image:h.Z.PRESENTED_IMAGE_SIMPLE}))),t().createElement(ee.ZP,{language:Ie,value:L,theme:G,options:{readOnly:!re,fontSize:12,lineNumbersMinChars:3,folding:!1,glyphMargin:!1},onMount:n=>{X.current=n}})),P&&t().createElement(R.fk,{value:L,options:{lineNumbers:!0,lineWrapping:!0,styleActiveLine:!0,matchBrackets:!0,mode:Ie,readOnly:!re},onBeforeChange:(n,a,l)=>{T(l)},onChange:(n,a,l)=>{}}),t().createElement(te.default,{visible:ct,treeData:c,currentNode:E,content:L,socketMessage:A,handleCancel:()=>{Re(!1)}}),t().createElement(Oe.default,{visible:Pt,treeData:c,handleCancel:Zt})))};v.default=be},47556:function(W,v,e){"use strict";var F=e(28706);v.Z=F.Z}}]);