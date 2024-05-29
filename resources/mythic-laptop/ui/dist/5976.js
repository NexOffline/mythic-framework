"use strict";(self.webpackChunkmythic_phone=self.webpackChunkmythic_phone||[]).push([[5976,1616],{35976:(e,t,o)=>{o.r(t),o.d(t,{default:()=>u});var r=o(89526),n=(o(92070),o(88590)),a=o(14710),i=o(33933),l=o(16025),s=o(71529),c=o(57170),p=o(20785),d=o(21616),m=(0,s.Z)((function(e){return{wrapper:{height:"100%",background:e.palette.secondary.main},header:{background:e.palette.primary.main,fontSize:20,padding:15,lineHeight:"45px",height:78},headerAction:{textAlign:"right","&:hover":{color:e.palette.text.main,transition:"color ease-in 0.15s"}},body:{padding:10,height:"88.75%",overflowY:"auto",overflowX:"hidden","&::-webkit-scrollbar":{width:6},"&::-webkit-scrollbar-thumb":{background:"#ffffff52"},"&::-webkit-scrollbar-thumb:hover":{background:e.palette.primary.main},"&::-webkit-scrollbar-track":{background:"transparent"}},emptyMsg:{width:"100%",textAlign:"center",fontSize:20,fontWeight:"bold",marginTop:"25%"}}}));const u=function(e){var t=e.myReputations,o=e.loading,s=e.onRefresh,u=m();return r.createElement("div",{className:u.wrapper},r.createElement(n.Z,{position:"static",className:u.header},r.createElement(a.ZP,{container:!0},r.createElement(a.ZP,{item:!0,xs:8},"Labor"),r.createElement(a.ZP,{item:!0,xs:4,className:u.headerAction},r.createElement(i.Z,{title:"Refresh Jobs"},r.createElement(l.Z,{onClick:s},r.createElement(c.G,{className:"fa ".concat(o?"fa-spin":""),icon:["fas","arrows-rotate"]})))))),r.createElement("div",{className:u.body},Boolean(t)?t.length>0?t.sort((function(e,t){return e.label.localeCompare(t.label)})).map((function(e){return r.createElement(d.default,{key:"labor-".concat(e.id),rep:e,disabled:o})})):r.createElement("div",{className:u.emptyMsg},"No Reputation Built"):r.createElement(p.aN,{static:!0,text:"Loading"})))}},21616:(e,t,o)=>{o.r(t),o.d(t,{default:()=>d});var r=o(89526),n=o(92070),a=o(72757),i=o(14710),l=o(95404),s=o(71529),c=(o(57170),o(21447),o(87961)),p=(0,s.Z)((function(e){return{wrapper:{padding:10,background:e.palette.secondary.dark,"&:not(:last-of-type)":{marginBottom:10}},details:{position:"absolute",width:"100%",height:"fit-content",top:0,bottom:0,margin:"auto"},title:{fontSize:20,color:e.palette.primary.main,fontWeight:"bold",textAlign:"center"},progressLabel:{fontSize:16,textAlign:"center"},duty:{fontSize:16,fontWeight:"bold",position:"absolute",height:"fit-content",width:"fit-content",top:0,bottom:0,left:0,right:0,margin:"auto"},actions:{position:"absolute",height:"fit-content",width:"fit-content",top:0,bottom:0,left:0,right:0,margin:"auto"},progressContainer:{padding:10}}}));const d=function(e){var t,o,s,d,m=e.rep,u=(e.myGroup,e.disabled,p());(0,n.I0)(),(0,c.VY)();return r.createElement(a.Z,{className:u.wrapper},r.createElement(i.ZP,{container:!0},r.createElement(i.ZP,{item:!0,xs:12,style:{position:"relative",height:38}},r.createElement("div",{className:u.details},r.createElement("div",{className:u.title},m.label)))),r.createElement(i.ZP,{container:!0},r.createElement(i.ZP,{item:!0,xs:2,style:{position:"relative"}},r.createElement("div",{className:u.progressLabel},null!==(t=null===(o=m.current)||void 0===o?void 0:o.label)&&void 0!==t?t:"No Rank")),r.createElement(i.ZP,{item:!0,xs:8,style:{position:"relative"}},r.createElement("div",{className:u.progressContainer},r.createElement(l.Z,{variant:"determinate",value:function(){var e,t,o,r,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:500,a=null!==(e=null==m||null===(t=m.current)||void 0===t?void 0:t.value)&&void 0!==e?e:0,i=null!==(o=null==m||null===(r=m.next)||void 0===r?void 0:r.value)&&void 0!==o?o:1e3;return 100*(n-a)/(i-a)}(m.value)}))),r.createElement(i.ZP,{item:!0,xs:2,style:{position:"relative"}},r.createElement("div",{className:u.progressLabel},null!==(s=null===(d=m.next)||void 0===d?void 0:d.label)&&void 0!==s?s:"Unknown"))))}},88590:(e,t,o)=>{o.d(t,{Z:()=>g});var r=o(71972),n=o(17692),a=o(89526),i=o(23060),l=o(82082),s=o(47671),c=o(26966),p=o(9333),d=o(72757),m=o(24989);function u(e){return(0,m.Z)("MuiAppBar",e)}(0,o(36787).Z)("MuiAppBar",["root","positionFixed","positionAbsolute","positionSticky","positionStatic","positionRelative","colorDefault","colorPrimary","colorSecondary","colorInherit","colorTransparent"]);var f=o(67557);const h=["className","color","enableColorOnDark","position"],b=(0,s.ZP)(d.Z,{name:"MuiAppBar",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,t[`position${(0,p.Z)(o.position)}`],t[`color${(0,p.Z)(o.color)}`]]}})((({theme:e,ownerState:t})=>{const o="light"===e.palette.mode?e.palette.grey[100]:e.palette.grey[900];return(0,n.Z)({display:"flex",flexDirection:"column",width:"100%",boxSizing:"border-box",flexShrink:0},"fixed"===t.position&&{position:"fixed",zIndex:e.zIndex.appBar,top:0,left:"auto",right:0,"@media print":{position:"absolute"}},"absolute"===t.position&&{position:"absolute",zIndex:e.zIndex.appBar,top:0,left:"auto",right:0},"sticky"===t.position&&{position:"sticky",zIndex:e.zIndex.appBar,top:0,left:"auto",right:0},"static"===t.position&&{position:"static"},"relative"===t.position&&{position:"relative"},"default"===t.color&&{backgroundColor:o,color:e.palette.getContrastText(o)},t.color&&"default"!==t.color&&"inherit"!==t.color&&"transparent"!==t.color&&{backgroundColor:e.palette[t.color].main,color:e.palette[t.color].contrastText},"inherit"===t.color&&{color:"inherit"},"dark"===e.palette.mode&&!t.enableColorOnDark&&{backgroundColor:null,color:null},"transparent"===t.color&&(0,n.Z)({backgroundColor:"transparent",color:"inherit"},"dark"===e.palette.mode&&{backgroundImage:"none"}))})),g=a.forwardRef((function(e,t){const o=(0,c.Z)({props:e,name:"MuiAppBar"}),{className:a,color:s="primary",enableColorOnDark:d=!1,position:m="fixed"}=o,g=(0,r.Z)(o,h),v=(0,n.Z)({},o,{color:s,position:m,enableColorOnDark:d}),k=(e=>{const{color:t,position:o,classes:r}=e,n={root:["root",`color${(0,p.Z)(t)}`,`position${(0,p.Z)(o)}`]};return(0,l.Z)(n,u,r)})(v);return(0,f.jsx)(b,(0,n.Z)({square:!0,component:"header",ownerState:v,elevation:4,className:(0,i.Z)(k.root,a,"fixed"===m&&"mui-fixed"),ref:t},g))}))}}]);