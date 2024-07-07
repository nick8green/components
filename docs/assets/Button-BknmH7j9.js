import{j as n}from"./jsx-runtime-QvZ8i92b.js";import{useMDXComponents as r}from"./index-FeUjBnvO.js";import{M as i,C as s}from"./index-BypL691k.js";import{B as l,D as c}from"./Button.stories-OU5ClG1S.js";import"./index-uubelm5h.js";import"./iframe-BUbUh-6e.js";import"../sb-preview/runtime.js";import"./index-Dei0BBcc.js";import"./index-D-8MO0q_.js";import"./index-D0OBZnxu.js";import"./index-DrFu-skq.js";import"./index-BYpvUHm1.js";function o(t){const e={code:"code",em:"em",h1:"h1",h2:"h2",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{of:l,title:"Button"}),`
`,n.jsx(e.h1,{id:"button",children:"Button"}),`
`,n.jsx(e.p,{children:"Button component with different props."}),`
`,n.jsx(e.h4,{id:"example",children:"Example"}),`
`,n.jsx(s,{of:c}),`
`,n.jsx(e.h2,{id:"usage",children:"Usage"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`import {Button} from "@nick8green/components";

const Example = () => {
  return (
      <Button
        label='Button'
        onClick={()=> console.log("Clicked")}
      />
  );
};

export default Example;
`})}),`
`,n.jsx(e.h4,{id:"arguments",children:"Arguments"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"text"})," ",n.jsx(e.em,{children:n.jsx(e.code,{children:"string"})})," - A string that represents the text content of the button."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"type"})," ",n.jsx(e.em,{children:n.jsx(e.code,{children:"ButtonType"})})," - The type of button to be used. Default to 'button'."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"disabled"})," ",n.jsx(e.em,{children:n.jsx(e.code,{children:"boolean"})})," - A boolean indicating whether the button should be disabled or not. When disabled, the button cannot be clicked or interacted with."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"onClick"})," ",n.jsx(e.em,{children:n.jsx(e.code,{children:"() => void"})})," - A function that is called when the button is clicked. It receives a MouseEventHandler for handling the click event on the button element."]}),`
`]})]})}function C(t={}){const{wrapper:e}={...r(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(o,{...t})}):o(t)}export{C as default};
