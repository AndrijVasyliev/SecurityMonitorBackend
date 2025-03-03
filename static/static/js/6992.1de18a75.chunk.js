"use strict";(self.webpackChunk_log4u_admin_frontend=self.webpackChunk_log4u_admin_frontend||[]).push([[6992],{6992:(e,r,i)=>{i.r(r),i.d(r,{default:()=>j});var o=i(5043),a=i(9781),t=i(2836),l=i(3892),s=i(899),d=i(7353),n=i(1906),u=i(2805),c=i(3608),m=i(2177),f=i(9336),b=i(3189),p=i(1079),v=i(4944),h=i(8833),g=i(6431),k=i(579);const N=s.Ik({truckNumber:s.ai().integer().typeError("Truck Number must be a integer number").required("Truck Number is required"),status:s.Yj().oneOf(h.IY).required("Status is required"),crossborder:s.Yj().oneOf(h.p5).required("Crossborder is required"),certificate:s.Yj().oneOf(h.mW).required("Certificate is required"),type:s.Yj().oneOf(h.Ju).required("Type is required"),equipment:s.YO(s.Yj().oneOf(h.pI)).min(0).required("Equipment is required"),payload:s.ai().integer().typeError("Payload must be a integer number").required("Payload is required"),grossWeight:s.Yj().required("Gross Weight is required"),make:s.Yj().required("Make is required"),model:s.Yj().required("Model is required"),year:s.ai().integer().typeError("Year must be a integer number").required("Year is required"),color:s.Yj().required("Color is required"),vinCode:s.Yj().required("Vin Code is required"),licencePlate:s.Yj().required("Licence Plate is required"),insideDims:s.Yj().required("Inside Dims is required"),doorDims:s.Yj().required("Door Dims is required"),owner:s.Ik({id:s.Yj().required()}).required("Owner is required"),coordinator:s.Ik({id:s.Yj().required()}).typeError("Enter correct coordinator").nullable(),driver:s.Ik({id:s.Yj().required()}).typeError("Enter correct driver").nullable()}),x={truckNumber:void 0,status:"Available",crossborder:"Yes",certificate:"Hazmat",type:"Cargo van",equipment:[],payload:void 0,grossWeight:void 0,make:void 0,model:void 0,year:void 0,color:void 0,vinCode:void 0,licencePlate:void 0,insideDims:void 0,doorDims:void 0,owner:null,coordinator:null,driver:null};function j(e){let{onClose:r}=e;const[i,s]=o.useState({}),[j,A]=o.useState({}),y=(0,a.jE)(),q=(0,v.dh)(),{mutate:E,isLoading:w}=(0,t.n)(p.u,{onSuccess:e=>{q({severity:"success",message:"Created"}),y.invalidateQueries(["trucks"]),r("Create",e)},onError:e=>{q({severity:"error",message:e instanceof Error?e.message:JSON.stringify(e)})}}),I=(0,l.Wx)({initialValues:x,enableReinitialize:!0,validationSchema:N,onSubmit:e=>{E(e)}});o.useEffect((()=>{I.values.owner?(s({owner:I.values.owner.id}),A({owner:I.values.owner.id})):(I.setFieldValue("driver",null,!0),I.setFieldValue("coordinator",null,!0),s((e=>Object.keys(e).length?{}:e)),A((e=>Object.keys(e).length?{}:e)))}),[I.values.owner]),o.useEffect((()=>{I.values.coordinator&&I.values.coordinator.owner&&I.values.coordinator.id!==(I.values.owner&&I.values.owner.id)&&I.setFieldValue("owner",I.values.coordinator.owner,!0)}),[I.values.coordinator]),o.useEffect((()=>{I.values.driver&&I.values.driver.owner&&I.values.driver.id!==(I.values.owner&&I.values.owner.id)&&I.setFieldValue("owner",I.values.driver.owner,!0)}),[I.values.driver]);return(0,k.jsxs)(d.A,{sx:{height:"100%"},children:[(0,k.jsx)("form",{onSubmit:I.handleSubmit,onReset:I.handleReset,style:{height:"100%"},children:(0,k.jsxs)(d.A,{sx:{p:3,height:"100%"},children:[(0,k.jsx)(f.A,{}),(0,k.jsxs)(d.A,{sx:{maxHeight:"calc(100% - 70px)",overflowX:"hidden",overflowY:"scroll"},children:[(0,k.jsxs)(d.A,{sx:{display:"inline-flex",width:"100%"},children:[(0,k.jsxs)(d.A,{sx:{p:1,paddingBottom:0,width:"50%"},children:[(0,k.jsx)(b.A_,{fieldName:"truckNumber",label:"Truck Number",number:!0,formik:I}),(0,k.jsx)(b.zM,{fieldName:"crossborder",label:"Cross Border",items:h.p5,formik:I}),(0,k.jsx)(b.zM,{fieldName:"type",label:"Type",items:h.Ju,formik:I}),(0,k.jsx)(b.A_,{fieldName:"payload",label:"Payload",number:!0,formik:I}),(0,k.jsx)(b.A_,{fieldName:"make",label:"Make",formik:I}),(0,k.jsx)(b.A_,{fieldName:"year",label:"Year",number:!0,formik:I}),(0,k.jsx)(b.A_,{fieldName:"vinCode",label:"Vin Code",formik:I}),(0,k.jsx)(b.A_,{fieldName:"insideDims",label:"Inside Dims",placeholder:"length x width x height",formik:I})]},"left"),(0,k.jsxs)(d.A,{sx:{p:1,paddingBottom:0,width:"50%"},children:[(0,k.jsx)(b.zM,{fieldName:"status",label:"Status",items:h.IY,disabledItems:h.IY.filter((e=>"Available"!==e&&"Not Available"!==e)),formik:I}),(0,k.jsx)(b.zM,{fieldName:"certificate",label:"Certificate",items:h.mW,formik:I}),(0,k.jsx)(b.yJ,{fieldName:"equipment",label:"Equipment",items:h.pI,formik:I}),(0,k.jsx)(b.A_,{fieldName:"grossWeight",label:"Gross Weight",formik:I}),(0,k.jsx)(b.A_,{fieldName:"model",label:"Model",formik:I}),(0,k.jsx)(b.A_,{fieldName:"color",label:"Color",formik:I}),(0,k.jsx)(b.A_,{fieldName:"licencePlate",label:"Licence Plate",formik:I}),(0,k.jsx)(b.A_,{fieldName:"doorDims",label:"Door Dims",placeholder:"width x height",formik:I})]},"right")]},"centerControls"),(0,k.jsxs)(d.A,{sx:{p:1,paddingBottom:0,paddingTop:0},children:[(0,k.jsx)(b.Lw,{fieldName:"owner",label:"Owner",getSelectedLabel:e=>"".concat(e.fullName,", ").concat((0,g.Pw)(e),", ").concat(e.phone),getItemLabel:e=>"".concat(e.fullName),getItemSecondLabel:e=>"".concat((0,g.Pw)(e),", ").concat(e.phone),ListIcon:u.A,queryFn:p.Dc,startEmpty:!1,orderby:"fullName",order:"asc",formik:I}),(0,k.jsx)(b.Lw,{fieldName:"coordinator",label:"Coordinator",getSelectedLabel:e=>"".concat(e.fullName,", ").concat((0,g.Pw)(e),", ").concat(e.phone),getItemLabel:e=>"".concat(e.fullName),getItemSecondLabel:e=>"".concat((0,g.Pw)(e),", ").concat(e.phone),ListIcon:c.A,queryFn:p.gS,startEmpty:!1,orderby:"fullName",order:"asc",additionalQueryParams:j,formik:I}),(0,k.jsx)(b.Lw,{fieldName:"driver",label:"Driver",getSelectedLabel:e=>"".concat(e.fullName,", ").concat((0,g.Pw)(e),", ").concat(e.phone),getItemLabel:e=>"".concat(e.fullName).concat(e.driveTrucks&&e.driveTrucks[0]?", On Truck: "+e.driveTrucks[0].truckNumber:""),getItemSecondLabel:e=>"".concat((0,g.Pw)(e),", ").concat(e.phone),getOptionDisabled:e=>{var r;return!(null===(r=e.driveTrucks)||void 0===r||!r.length)},ListIcon:m.A,queryFn:p.If,startEmpty:!1,orderby:"fullName",order:"asc",additionalQueryParams:i,formik:I})]},"bottomControls")]},"controls"),(0,k.jsx)(f.A,{}),(0,k.jsxs)(d.A,{sx:{paddingTop:3,display:"flex"},children:[(0,k.jsx)(d.A,{sx:{p:1,paddingTop:0,width:"50%"},children:(0,k.jsx)(n.A,{fullWidth:!0,variant:"contained",size:"small",color:"primary",type:"submit",children:"Create"})},"left"),(0,k.jsx)(d.A,{sx:{p:1,paddingTop:0,width:"50%"},children:(0,k.jsx)(n.A,{fullWidth:!0,variant:"contained",size:"small",color:"primary",type:"button",onClick:()=>{r("Close")},children:"Cancel"})},"right")]},"buttons")]})}),(0,k.jsx)(b.aH,{visible:w})]})}},8833:(e,r,i)=>{i.d(r,{$W:()=>f,IY:()=>s,Jf:()=>c,Ju:()=>l,Lv:()=>b,Ny:()=>p,P7:()=>h,Sr:()=>t,fo:()=>a,h9:()=>m,lk:()=>v,mW:()=>n,p5:()=>d,pI:()=>u,z5:()=>o});const o=["EN","UA","ES","RU"],a=["Admin","Super Admin"],t=["BROKER DOMESTIC","BROKER INTERNATIONAL","FREIGHT FORWARDER DOMESTIC","FREIGHT FORWARDER INTERNATIONAL","SHIPPER/CONSIGNEE DOMESTIC","SHIPPER/CONSIGNEE INTERNATIONAL","OTHER"],l=["Cargo van","Reefer van","Box truck","Box truck Reefer","Straight truck","Hotshot","Tented box"],s=["Available","Not Available","Will be available","On route"],d=["Yes","No"],n=["Hazmat","Tsa","TWIC","Tanker Endorsement"],u=["Dock height risers","Air ride","Lift gate","Keep from freezing","ICC bar","Vertical E-track","Horizontal E-track","Pallet jack","PPE","Ramps","Straps","Loads bars","Blankets","Pads","Fire extinguisher","Metal hooks","Reefer","Heater"],c=["Available","Planned","In Progress","TONU","Cancelled","Completed"],m=["New","On route to PU","On site PU","Loaded, Waiting GTG","GTG","Completed"],f=["New","On route to DEL","On site DEL","Unloaded, Waiting GTG","GTG","Completed"],b=["LBS","KG","TON"],p=["FT","IN","M","CM"];let v=function(e){return e.PickUp="PickUp",e.Delivery="Delivery",e}({}),h=function(e){return e.FCFS="FCFS",e.APPT="APPT",e.ASAP="ASAP",e.Direct="Direct",e}({})}}]);
//# sourceMappingURL=6992.1de18a75.chunk.js.map