"use strict";(self.webpackChunk_log4u_admin_frontend=self.webpackChunk_log4u_admin_frontend||[]).push([[9697],{9697:(e,i,l)=>{l.r(i),l.d(i,{default:()=>h});var s=l(9379),a=l(5043),n=l(5604),t=l(3892),d=l(7353),o=l(1906),r=l(3189),c=l(1079),x=l(4944),m=l(579);const f={id:"",zipCode:"",name:"",stateCode:"",stateName:"",location:[NaN,NaN]};function h(e){let{id:i,onClose:l}=e;const h=(0,x.dh)(),{isLoading:p,isFetching:u,error:b,data:j}=(0,n.I)({queryKey:["location",i],queryFn:c.o,retry:!1});a.useEffect((()=>{b&&h({severity:"error",message:b instanceof Error?b.message:JSON.stringify(b)})}),[b]);const A=(0,t.Wx)({initialValues:(0,s.A)((0,s.A)({},f),j),enableReinitialize:!0,onSubmit:()=>{}});return(0,m.jsxs)(d.A,{children:[(0,m.jsx)("form",{onSubmit:A.handleSubmit,onReset:A.handleReset,children:(0,m.jsxs)(d.A,{sx:{p:3,display:"grid"},children:[(0,m.jsxs)(d.A,{sx:{display:"inline-flex"},children:[(0,m.jsxs)(d.A,{sx:{p:1,width:"50%"},children:[(0,m.jsx)(r.A_,{fieldName:"name",label:"Name",disabled:!0,formik:A}),(0,m.jsx)(r.A_,{fieldName:"stateName",label:"State Name",disabled:!0,formik:A})]},"left"),(0,m.jsxs)(d.A,{sx:{p:1,width:"50%"},children:[(0,m.jsx)(r.A_,{fieldName:"zipCode",label:"Zip Code",disabled:!0,formik:A}),(0,m.jsx)(r.A_,{fieldName:"stateCode",label:"State Code",disabled:!0,formik:A})]},"right")]},"controls"),(0,m.jsx)(d.A,{sx:{marginTop:-2,display:"inline-flex"},children:(0,m.jsx)(r.QI,{fieldName:"location",label:["Latitude","Longitude"],disabled:!0,formik:A})},"location"),(0,m.jsxs)(d.A,{sx:{display:"inline-flex"},children:[(0,m.jsx)(d.A,{sx:{p:1,paddingTop:0,width:"50%"},children:(0,m.jsx)(o.A,{fullWidth:!0,variant:"contained",size:"small",color:"primary",type:"button",onClick:()=>{l("Edit",j)},children:"Edit"})},"left"),(0,m.jsx)(d.A,{sx:{p:1,paddingTop:0,width:"50%"},children:(0,m.jsx)(o.A,{fullWidth:!0,variant:"contained",size:"small",color:"primary",type:"button",onClick:()=>{l("Close")},children:"Cancel"})},"right")]},"buttons")]})}),(0,m.jsx)(r.aH,{visible:p||u})]})}}}]);
//# sourceMappingURL=9697.671c8530.chunk.js.map