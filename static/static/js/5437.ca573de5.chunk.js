"use strict";(self.webpackChunk_log4u_admin_frontend=self.webpackChunk_log4u_admin_frontend||[]).push([[5437],{8807:(e,t,n)=>{n.d(t,{A:()=>m});var l=n(9379),a=n(5043),i=n(5563),o=n(950),r=n(4944),s=n(9129),d=n(7392),c=n(7166),u=n(6910),h=n(4133),v=n(5552),p=n(579);function m(e){let{location:t,onRefClick:n,addInfo:m,children:x}=e;const[g,f]=a.useState(null),[A,b]=a.useState([]),[j,k]=a.useState(null),y=a.useMemo((()=>(0,o.A)((e=>{((null===j||void 0===j?void 0:j.geocode(e))||Promise.reject()).then((t=>{if(t.results.length<1&&e.location){const t=new google.maps.LatLng(e.location),n={address_components:[],formatted_address:"[".concat(t.lat(),", ").concat(t.lng(),"]"),geometry:{location:t,location_type:google.maps.GeocoderLocationType.APPROXIMATE,viewport:new google.maps.LatLngBounds},place_id:"[".concat(t.lat(),", ").concat(t.lng(),"]"),types:[]};b([n])}else t.results.forEach((e=>e.formatted_address=(0,s.s)(e.address_components))),b(t.results)})).catch((()=>{b([])}))}),400)),[j]);a.useEffect((()=>{const e=t&&(0,h.U)(A);t&&e&&(null===e||void 0===e?void 0:e.place_id)!==(null===g||void 0===g?void 0:g.place_id)&&f(e)}),[t,A]),a.useEffect((()=>{t?y({location:{lat:t[0],lng:t[1]}}):(b([]),f(null))}),[j,t.join(",")]);return(0,p.jsxs)("span",{style:{display:"flex"},children:[(0,p.jsx)(i.Wrapper,(0,l.A)((0,l.A)({},(0,v.iz)()),{},{render:e=>{const t=(0,r.dh)(),[,n]=(0,r.pn)();return a.useLayoutEffect((()=>(e===i.Status.LOADING&&n(!0),e===i.Status.FAILURE&&t({severity:"error",message:"Error loading maps!"}),e===i.Status.SUCCESS&&k(new window.google.maps.Geocoder),()=>{e===i.Status.LOADING&&n(!1)})),[e]),null}})),(0,p.jsxs)("span",{style:{textOverflow:"ellipsis",overflow:"hidden",textAlign:"left"},title:"".concat(g?g.formatted_address:"")+"\n"+m,children:[n?(0,p.jsx)("a",{href:"#",target:"_blank",onClick:n,children:g?g.formatted_address:""}):g?g.formatted_address:"",m?(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("br",{}),m]}):null,x]}),g?(0,p.jsx)(d.A,{size:"small",onClick:e=>{(0,c.d)(e),navigator.clipboard.writeText(g.formatted_address)},children:(0,p.jsx)(u.A,{sx:{height:"16px",width:"16px"}})}):null]})}},5437:(e,t,n)=>{n.r(t),n.d(t,{default:()=>Z});var l=n(45),a=n(9379),i=n(5043),o=n(3216),r=n(9781),s=n(2836),d=n(5604),c=n(4535),u=n(1546),h=n(7784),v=n(1962),p=n(7739),m=n(39),x=n(6353),g=n(2143),f=n(7353),A=n(1806),b=n(3460),j=n(9650),k=n(4882),y=n(9090),S=n(8076),C=n(8093),E=n(5263),P=n(4496),F=n(1596),N=n(7392),T=n(141),R=n(3560),w=n(3768),D=n(9662),I=n(579);const O=(0,D.A)((0,I.jsx)("path",{d:"M12 13V9c0-.55-.45-1-1-1H7V6h5V4H9.5V3h-2v1H6c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h4v2H5v2h2.5v1h2v-1H11c.55 0 1-.45 1-1m7.59-.48-5.66 5.65-2.83-2.83-1.41 1.42L13.93 21 21 13.93z"}),"PriceCheck");var L=n(1809),H=n(9397),z=n(524),_=n(8612),M=n(1079),U=n(4944),G=n(8833),B=n(7166),W=n(8807),J=n(9904),V=n(7302);const K=["status"],q=[{id:"loadNumber",orderField:"loadNumber",getData:e=>({data:"".concat(e.loadNumber)}),numeric:!0,disablePadding:!1,label:"Load\xa0Number"},{id:"ref",getData:e=>{const t="".concat(null!==e&&void 0!==e&&e.ref&&null!==e&&void 0!==e&&e.ref[0]?null===e||void 0===e?void 0:e.ref[0]:""),n="".concat(null!==e&&void 0!==e&&e.ref&&null!==e&&void 0!==e&&e.ref[1]?null===e||void 0===e?void 0:e.ref[1]:""),l="".concat(null!==e&&void 0!==e&&e.ref&&null!==e&&void 0!==e&&e.ref[2]?null===e||void 0===e?void 0:e.ref[2]:"");return{data:(0,I.jsxs)("span",{children:[t,(0,I.jsx)("br",{}),n,(0,I.jsx)("br",{}),l]}),title:t+(n?"\n"+n:"")+(l?"\n"+l:"")}},numeric:!1,disablePadding:!1,label:"REF\xa0Number"},{id:"firstPickUp",getData:e=>{var t;const n=e=>{e.preventDefault(),(0,B.d)(e)},l=null===e||void 0===e||null===(t=e.stops)||void 0===t?void 0:t.at(0),a=null===l||void 0===l?void 0:l.facility,i=null===a||void 0===a?void 0:a.facilityLocation,o=null===l||void 0===l?void 0:l.timeFrame,r=null===o||void 0===o?void 0:o.type,s="FCFS"===(null===o||void 0===o?void 0:o.type)?null===o||void 0===o?void 0:o.from:null===o||void 0===o?void 0:o.at,d="FCFS"===(null===o||void 0===o?void 0:o.type)?null===o||void 0===o?void 0:o.to:null,c="".concat(s?J.k.format((0,V.bb)(s)):""),u="".concat(d?J.k.format((0,V.bb)(d)):""),h="".concat(r," ").concat(c).concat(u?" - "+u:"");return i?{data:(0,I.jsx)(W.A,{location:i,onRefClick:n,addInfo:h})}:{data:""}},numeric:!1,disablePadding:!1,label:"First\xa0PickUp"},{id:"lastDelivery",getData:e=>{var t;const n=e=>{e.preventDefault(),(0,B.d)(e)},l=null===e||void 0===e||null===(t=e.stops)||void 0===t?void 0:t.at(-1),a=null===l||void 0===l?void 0:l.facility,i=null===a||void 0===a?void 0:a.facilityLocation,o=null===l||void 0===l?void 0:l.timeFrame,r=null===o||void 0===o?void 0:o.type,s="FCFS"===(null===o||void 0===o?void 0:o.type)?null===o||void 0===o?void 0:o.to:null===o||void 0===o?void 0:o.at,d="FCFS"===(null===o||void 0===o?void 0:o.type)?null===o||void 0===o?void 0:o.to:null,c="".concat(s?J.k.format((0,V.bb)(s)):""),u="".concat(d?J.k.format((0,V.bb)(d)):""),h="".concat(r," ").concat(c).concat(u?" - "+u:"");return i?{data:(0,I.jsx)(W.A,{location:i,onRefClick:n,addInfo:h})}:{data:""}},numeric:!1,disablePadding:!1,label:"Last\xa0Delivery"},{id:"miles",getData:e=>{if(null!==e&&void 0!==e&&e.milesHaversine){const t="".concat(e.milesByRoads?e.milesByRoads.toFixed(2):""),n="".concat(e.milesHaversine.toFixed(2));return{data:(0,I.jsxs)("span",{children:[(0,I.jsx)("b",{children:t}),(0,I.jsx)("br",{}),n]}),title:t||"? - By roads\n"+n+" - Distance"}}return{data:""}},numeric:!0,disablePadding:!1,label:"Miles"},{id:"status",orderField:"status",getData:e=>{const t="".concat(e.status),n=e.stops.find((e=>e.type===G.lk.PickUp&&e.status!==G.h9.at(0)&&e.status!==G.h9.at(-1)||e.type===G.lk.Delivery&&e.status!==G.$W.at(0)&&e.status!==G.$W.at(-1))),l="".concat(n?null===n||void 0===n?void 0:n.status:"");return{data:(0,I.jsxs)("span",{children:[(0,I.jsx)("b",{children:t}),(0,I.jsx)("br",{}),l]}),title:l?t+"\n"+l:t}},numeric:!1,disablePadding:!1,label:"Load\xa0Status"},{id:"truck",getData:e=>{if(null!==e&&void 0!==e&&e.truck){const t="./trucks/view/".concat(e.truck.id),n="".concat(e.truck.truckNumber);return{data:(0,I.jsx)("span",{children:(0,I.jsx)("a",{href:t,target:"_blank",onClick:B.d,children:n})}),title:n}}return{data:""}},numeric:!0,disablePadding:!1,label:"Truck"}],Q=(0,c.Ay)(k.A)((e=>{let{theme:t}=e;return{backgroundColor:t.palette.background.default}})),$=(0,c.Ay)(m.A)((()=>({maxWidth:"100px",paddingTop:"6px",paddingBottom:"6px",whiteSpace:"nowrap",textOverflow:"ellipsis",overflow:"hidden"})));function X(e){const{onSelectAllClick:t,order:n,orderBy:l,numSelected:a,rowCount:i,onRequestSort:o}=e;return(0,I.jsx)(Q,{children:(0,I.jsxs)(S.A,{children:[(0,I.jsx)($,{padding:"checkbox",children:(0,I.jsx)(v.A,{name:"enhanced-table-checkbox-select-all",color:"primary",indeterminate:a>0&&a<i,checked:i>0&&a===i,onChange:t,inputProps:{"aria-label":"enhanced-table-checkbox-select-all"}})}),q.map((e=>{return(0,I.jsx)($,{align:e.numeric?"right":"center",padding:e.disablePadding?"none":"normal",sortDirection:l===e.id&&n,children:(0,I.jsxs)(C.A,{active:e.orderField&&l===e.orderField,hideSortIcon:!e.orderField,direction:l===e.orderField?n:"asc",onClick:e.orderField?(t=e.orderField,e=>{o(e,t)}):()=>{},children:[e.label,e.orderField&&l===e.orderField?(0,I.jsx)(f.A,{component:"span",sx:z.A,children:"desc"===n?"sorted descending":"sorted ascending"}):null]})},e.id);var t}))]})})}function Y(e){const{selected:t,setQueryParams:n}=e,[d,c]=i.useState(""),[m,A]=i.useState(!1),[b,j]=i.useState([...G.Jf]),[k,y]=i.useState(0),[S,C]=i.useState(0),[F,D]=i.useState(!1),z=(0,o.zy)(),W=(0,o.Zp)(),J=(0,r.jE)(),V=(0,U.dh)(),{mutate:q,isLoading:Q}=(0,s.n)(M.Cn,{onSuccess:()=>{V({severity:"success",message:"Deleted"}),J.invalidateQueries(["loads"])},onError:e=>{V({severity:"error",message:e instanceof Error?e.message:JSON.stringify(e)})}}),$=()=>{A(!1),X()},X=()=>{b.length&&b.length!==G.Jf.length?(n((e=>(0,a.A)((0,a.A)({},e),{},{status:b}))),D(!1)):(n((e=>{const{status:t}=e,n=(0,l.A)(e,K);return(0,a.A)({},n)})),D(!1))},Y=()=>{D(!1),c(""),j([...G.Jf]),y(0),C(0),n({})},Z=()=>{D(!1);const e={};d&&(e.refNumber=d),b.length&&b.length!==G.Jf.length&&(e.status=b),k&&(e.loadNumber=k),S&&(e.truckNumber=S),n(e)},ee=e=>{"Enter"===e.key&&(d||k||S?Z():Y())};return(0,I.jsxs)(E.A,{sx:(0,a.A)({overflow:"hidden",pl:{sm:2},pr:{xs:1,sm:1}},t.length>0&&{bgcolor:e=>(0,u.X4)(e.palette.primary.main,e.palette.action.activatedOpacity)}),children:[t.length>0?(0,I.jsxs)(P.A,{sx:{flex:"1 1 100%"},color:"inherit",variant:"subtitle1",component:"div",children:[t.length," selected"]}):(0,I.jsx)(P.A,{sx:{flex:"1 1 100%",whiteSpace:"nowrap",textOverflow:"ellipsis",overflow:"hidden"},variant:"h6",id:"tableTitle",component:"div",children:"Loads"}),(0,I.jsx)(f.A,{component:"div",sx:{"& .MuiTextField-root":{m:1,width:"140px"}},children:(0,I.jsx)(h.A,{label:"REF Number",value:d||"",onChange:e=>{c(e.target.value),D(!0)},onKeyUp:ee,size:"small"})}),(0,I.jsx)(f.A,{component:"div",sx:{"& .MuiTextField-root":{m:1,width:"140px"}},children:(0,I.jsx)(h.A,{select:!0,SelectProps:{multiple:!0,open:m,renderValue:e=>e.join(", "),onOpen:()=>{A(!0)},onClose:$},label:"Select Status",value:b,onChange:e=>{j(e.target.value),D(!0)},onKeyUpCapture:e=>{"Enter"===e.key&&((0,B.d)(e),$())},onKeyDownCapture:e=>{"Enter"===e.key&&(0,B.d)(e)},onBlur:X,size:"small",fullWidth:!0,title:b.join(", "),children:G.Jf.map((e=>(0,I.jsxs)(g.A,{value:e,children:[(0,I.jsx)(v.A,{checked:b.indexOf(e)>-1,id:e}),(0,I.jsx)(x.A,{primary:e})]},e)))})}),(0,I.jsx)(f.A,{component:"div",sx:{"& .MuiTextField-root":{m:1,width:"140px"}},children:(0,I.jsx)(h.A,{label:"Load Number",value:k||"",onChange:e=>{Number.isFinite(Number(e.target.value))&&(y(Number(e.target.value)),D(!0))},onKeyUp:ee,size:"small"})}),(0,I.jsx)(f.A,{component:"div",sx:{"& .MuiTextField-root":{m:1,width:"140px"}},children:(0,I.jsx)(h.A,{label:"Truck Number",value:S||"",onChange:e=>{Number.isFinite(Number(e.target.value))&&(C(Number(e.target.value)),D(!0))},onKeyUp:ee,size:"small"})}),(0,I.jsx)(p.A,{title:"Filter list",children:!F&&(d||k||S||b.length&&b.length!==G.Jf.length)||F&&!d&&F&&(!b.length||b.length===G.Jf.length)&&F&&!k&&F&&!S?(0,I.jsx)("span",{children:(0,I.jsx)(N.A,{onClick:Y,children:(0,I.jsx)(H.A,{})})}):(0,I.jsx)("span",{children:(0,I.jsx)(N.A,{disabled:!k&&!S,onClick:Z,children:(0,I.jsx)(L.A,{})})})}),(0,I.jsxs)(f.A,{sx:{p:1,display:"inline-flex"},children:[(0,I.jsx)(p.A,{title:"Create",children:(0,I.jsx)("span",{children:(0,I.jsx)(N.A,{onClick:()=>{W("./create",{relative:"path",state:{from:z},replace:!1})},children:(0,I.jsx)(T.A,{})})})}),(0,I.jsx)(p.A,{title:"Edit",children:(0,I.jsx)("span",{children:(0,I.jsx)(N.A,{disabled:1!==t.length,onClick:()=>{W("./edit/".concat(t[0]),{relative:"path",state:{from:z},replace:!1})},children:(0,I.jsx)(R.A,{})})})}),(0,I.jsx)(p.A,{title:"Set Rate Info",children:(0,I.jsx)("span",{children:(0,I.jsx)(N.A,{disabled:1!==t.length,onClick:()=>{W("./setRateInfo/".concat(t[0]),{relative:"path",state:{from:z},replace:!1})},children:(0,I.jsx)(O,{})})})}),(0,I.jsx)(p.A,{title:"Delete",children:(0,I.jsx)("span",{children:(0,I.jsx)(N.A,{disabled:1!==t.length,onClick:()=>{q("".concat(t[0]))},children:(0,I.jsx)(w.A,{})})})})]}),(0,I.jsx)(_.A,{visible:Q})]})}function Z(){const[e,t]=i.useState("desc"),[n,l]=i.useState("loadNumber"),[a,r]=i.useState([]),[s,c]=i.useState(0),[u,h]=i.useState(15),[p,m]=i.useState({}),x=i.useRef(null),g=(0,o.zy)(),k=(0,o.Zp)(),C=(0,U.dh)(),{isLoading:E,isFetching:P,error:N,data:{items:T,total:R}={items:[],total:0}}=(0,d.I)({queryKey:["loads",s,u,n,e,p],queryFn:M.Qk,keepPreviousData:!0,retry:!1});i.useEffect((()=>{N&&C({severity:"error",message:N instanceof Error?N.message:JSON.stringify(N)})}),[N]);const w=T||[];i.useEffect((()=>{if(x.current){x.current.scrollTo({top:0,left:0,behavior:"smooth"})}}),[w]),i.useEffect((()=>{const e=[];a.forEach((t=>{w.find((e=>e.id===t))&&e.push(t)})),r(e)}),[w]);return(0,I.jsxs)(f.A,{sx:{width:"100%",height:"100%"},children:[(0,I.jsxs)(F.A,{sx:{width:"100%",height:"100%",backgroundColor:"unset"},children:[(0,I.jsx)(Y,{selected:a,setQueryParams:e=>{m(e),c(0)}}),(0,I.jsx)(j.A,{ref:x,sx:{height:"calc(100% - 115px)"},children:(0,I.jsxs)(A.A,{sx:{minWidth:750},"aria-labelledby":"tableTitle",size:"small",stickyHeader:!0,children:[(0,I.jsx)(X,{numSelected:a.length,order:e,orderBy:n,onSelectAllClick:e=>{if(e.target.checked){const e=w.map((e=>e.id));r(e)}else r([])},onRequestSort:(a,i)=>{const o=n===i&&"asc"===e;n===i&&"desc"===e?(t(void 0),l(void 0)):(t(o?"desc":"asc"),l(i))},rowCount:w.length}),(0,I.jsx)(b.A,{children:w.map(((e,t)=>{const n=(l="".concat(e.id),-1!==a.indexOf(l));var l;const i="enhanced-table-checkbox-".concat(t);return(0,I.jsxs)(S.A,{hover:!0,onDoubleClick:t=>{k("./view/".concat(e.id),{relative:"path",state:{from:g},replace:!1})},role:"checkbox","aria-checked":n,tabIndex:-1,selected:n,sx:{cursor:"pointer"},children:[(0,I.jsx)($,{padding:"checkbox",children:(0,I.jsx)(v.A,{id:"".concat(i),color:"primary",checked:n,inputProps:{"aria-labelledby":i},onClick:t=>((e,t)=>{e.stopPropagation();const n=a.indexOf(t);let l=[];-1===n?l=l.concat(a,t):0===n?l=l.concat(a.slice(1)):n===a.length-1?l=l.concat(a.slice(0,-1)):n>0&&(l=l.concat(a.slice(0,n),a.slice(n+1))),r(l)})(t,"".concat(e.id))})}),q.map((t=>{const n=t.getData(e);return(0,I.jsx)($,{title:n.title,align:t.numeric?"right":"center",children:n.data},t.id)}))]},e.id)}))})]})}),(0,I.jsx)(y.A,{rowsPerPageOptions:[5,10,15,20,25,35,50],component:"div",count:R,rowsPerPage:u,page:s,onPageChange:(e,t)=>{c(t)},onRowsPerPageChange:e=>{h(parseInt(e.target.value,10)),c(0)}})]}),(0,I.jsx)(_.A,{visible:E||P})]})}},8833:(e,t,n)=>{n.d(t,{$W:()=>v,IY:()=>r,Jf:()=>u,Ju:()=>o,Lv:()=>p,Ny:()=>m,P7:()=>g,Sr:()=>i,fo:()=>a,h9:()=>h,lk:()=>x,mW:()=>d,p5:()=>s,pI:()=>c,z5:()=>l});const l=["EN","UA","ES","RU"],a=["Admin","Super Admin"],i=["BROKER DOMESTIC","BROKER INTERNATIONAL","FREIGHT FORWARDER DOMESTIC","FREIGHT FORWARDER INTERNATIONAL","SHIPPER/CONSIGNEE DOMESTIC","SHIPPER/CONSIGNEE INTERNATIONAL","OTHER"],o=["Cargo van","Reefer van","Box truck","Box truck Reefer","Straight truck","Hotshot","Tented box"],r=["Available","Not Available","Will be available","On route"],s=["Yes","No"],d=["Hazmat","Tsa","TWIC","Tanker Endorsement"],c=["Dock height risers","Air ride","Lift gate","Keep from freezing","ICC bar","Vertical E-track","Horizontal E-track","Pallet jack","PPE","Ramps","Straps","Loads bars","Blankets","Pads","Fire extinguisher","Metal hooks","Reefer","Heater"],u=["Available","Planned","In Progress","TONU","Cancelled","Completed"],h=["New","On route to PU","On site PU","Loaded, Waiting GTG","GTG","Completed"],v=["New","On route to DEL","On site DEL","Unloaded, Waiting GTG","GTG","Completed"],p=["LBS","KG","TON"],m=["FT","IN","M","CM"];let x=function(e){return e.PickUp="PickUp",e.Delivery="Delivery",e}({}),g=function(e){return e.FCFS="FCFS",e.APPT="APPT",e.ASAP="ASAP",e.Direct="Direct",e}({})},9904:(e,t,n)=>{n.d(t,{k:()=>l});const l=Intl.DateTimeFormat("en-US",{year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric",hour12:!0})},6910:(e,t,n)=>{n.d(t,{A:()=>i});var l=n(9662),a=n(579);const i=(0,l.A)((0,a.jsx)("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2m0 16H8V7h11z"}),"ContentCopy")},3768:(e,t,n)=>{n.d(t,{A:()=>i});var l=n(9662),a=n(579);const i=(0,l.A)((0,a.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"}),"Delete")},3560:(e,t,n)=>{n.d(t,{A:()=>i});var l=n(9662),a=n(579);const i=(0,l.A)((0,a.jsx)("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z"}),"Edit")}}]);
//# sourceMappingURL=5437.ca573de5.chunk.js.map