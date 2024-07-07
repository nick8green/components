import{D as B,f as H}from"./index-C3gSemMU.js";import{j as d}from"./jsx-runtime-QvZ8i92b.js";var n=(e=>(e.DROPDOWN="dropdown",e.EMAIL="email",e.NUMBER="number",e.TELEPHONE="telephone",e.TEXT="text",e))(n||{});const _=({id:e,label:g,max:w,min:M,onChange:L,options:A=[],placeholder:W,type:m="text",value:X=""})=>{const c={id:e,onChange:L,placeholder:W,value:X};return m==="number"&&(c.max=w,c.min=M),d.jsxs("div",{children:[g&&d.jsx("label",{htmlFor:e,children:g}),m==="dropdown"?d.jsx(B,{...c,options:A}):d.jsx("input",{...c,name:e,type:m})]})};_.__docgenInfo={description:"",methods:[],displayName:"Input",props:{id:{required:!0,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"string"},description:""},max:{required:!1,tsType:{name:"number"},description:""},min:{required:!1,tsType:{name:"number"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},options:{required:!1,tsType:{name:"Array",elements:[{name:"Option"}],raw:"Option[]"},description:"",defaultValue:{value:"[]",computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:""},type:{required:!1,tsType:{name:"InputType"},description:"",defaultValue:{value:"InputType.TEXT",computed:!0}},value:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}}}};const U={title:"Input",component:_,argTypes:{label:{control:"text"},type:{options:Object.keys(n).filter(e=>e!=="DROPDOWN"),mapping:n}}},r="storybookInput",a="Story Input",u=H(),o={args:{id:r,label:a,onChange:()=>console.log("input changed!")}},t={args:{id:r,label:a,onChange:u,options:[{label:"Option 1",value:"1"},{label:"Option 2",value:"2"},{label:"Option 3",value:"3"}],placeholder:"choose and option",type:n.DROPDOWN}},s={args:{id:r,label:a,onChange:u,type:n.TEXT}},p={args:{id:r,label:a,onChange:u,type:n.NUMBER}},i={args:{id:r,label:a,onChange:u,type:n.EMAIL}},l={args:{id:r,label:a,max:10,min:0,onChange:u,type:n.TELEPHONE}};var y,T,b;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    id,
    label,
    onChange: () => console.log("input changed!")
  }
}`,...(b=(T=o.parameters)==null?void 0:T.docs)==null?void 0:b.source}}};var f,h,E;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    id,
    label,
    onChange,
    options: [{
      label: "Option 1",
      value: "1"
    }, {
      label: "Option 2",
      value: "2"
    }, {
      label: "Option 3",
      value: "3"
    }],
    placeholder: "choose and option",
    type: InputType.DROPDOWN
  }
}`,...(E=(h=t.parameters)==null?void 0:h.docs)==null?void 0:E.source}}};var O,x,v;s.parameters={...s.parameters,docs:{...(O=s.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    id,
    label,
    onChange,
    type: InputType.TEXT
  }
}`,...(v=(x=s.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var D,I,N;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    id,
    label,
    onChange,
    type: InputType.NUMBER
  }
}`,...(N=(I=p.parameters)==null?void 0:I.docs)==null?void 0:N.source}}};var j,q,C;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    id,
    label,
    onChange,
    type: InputType.EMAIL
  }
}`,...(C=(q=i.parameters)==null?void 0:q.docs)==null?void 0:C.source}}};var S,P,R;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    id,
    label,
    max: 10,
    min: 0,
    onChange,
    type: InputType.TELEPHONE
  }
}`,...(R=(P=l.parameters)==null?void 0:P.docs)==null?void 0:R.source}}};const V=["Default","Dropdown","Text","Number","Email","Telephone"],z=Object.freeze(Object.defineProperty({__proto__:null,Default:o,Dropdown:t,Email:i,Number:p,Telephone:l,Text:s,__namedExportsOrder:V,default:U},Symbol.toStringTag,{value:"Module"}));export{o as D,z as I};
