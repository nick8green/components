import{j as n}from"./jsx-runtime-QvZ8i92b.js";import{useMDXComponents as t}from"./index-FeUjBnvO.js";import{M as p,C as i}from"./index-BypL691k.js";import{D as s,a}from"./Dropdown.stories-L1XfCTDG.js";import"./index-uubelm5h.js";import"./iframe-BUbUh-6e.js";import"../sb-preview/runtime.js";import"./index-Dei0BBcc.js";import"./index-D-8MO0q_.js";import"./index-D0OBZnxu.js";import"./index-DrFu-skq.js";import"./index-C3gSemMU.js";import"./index-DEUJ_QDu.js";function r(e){const o={code:"code",h1:"h1",h2:"h2",h4:"h4",p:"p",pre:"pre",...t(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(p,{of:s,title:"Dropdown"}),`
`,n.jsx(o.h1,{id:"dropdown",children:"Dropdown"}),`
`,n.jsx(o.p,{children:"Dropdown component with different props."}),`
`,n.jsx(o.h4,{id:"example",children:"Example"}),`
`,n.jsx(i,{of:a}),`
`,n.jsx(o.h2,{id:"usage",children:"Usage"}),`
`,n.jsx(o.pre,{children:n.jsx(o.code,{className:"language-ts",children:`import {Dropdown} from "@nick8green/components";

const Example = () => {
  return (
      <Dropdown
        id='demo'
        options={[
            {
                label: "Option 1",
                value: "1",
            },
            {
                label: "Option 2",
                value: "2",
            },
            {
                label: "Option 3",
                value: "3",
            },
        ]}
        onChange={()=> console.log("Clicked")}
      />
  );
};

export default Example;
`})}),`
`,n.jsx(o.h4,{id:"arguments",children:"Arguments"}),`
`,n.jsx(o.p,{children:"TBD"})]})}function M(e={}){const{wrapper:o}={...t(),...e.components};return o?n.jsx(o,{...e,children:n.jsx(r,{...e})}):r(e)}export{M as default};
