"use strict";(self.webpackChunkai_agents_lab_reinvent=self.webpackChunkai_agents_lab_reinvent||[]).push([[654],{7889:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>d,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var r=t(4848),s=t(8453);const a={},d="\ud83d\udc50 Build and execute the graph",o={id:"create-agent/build-and-execute-graph",title:"\ud83d\udc50 Build and execute the graph",description:"Now that we have defined the nodes and edges of the graph, let's put the graph together and execute it to ensure that our agent is working as expected.",source:"@site/docs/60-create-agent/6-build-and-execute-graph.mdx",sourceDirName:"60-create-agent",slug:"/create-agent/build-and-execute-graph",permalink:"/mdb-aws-ai-agents-lab/es/docs/create-agent/build-and-execute-graph",draft:!1,unlisted:!1,editUrl:"https://github.com/mongodb-developer/mdb-aws-ai-agents-lab/blob/main/docs/60-create-agent/6-build-and-execute-graph.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udc50 Define conditional edges",permalink:"/mdb-aws-ai-agents-lab/es/docs/create-agent/define-conditional-edges"},next:{title:"Add Memory to the Agent",permalink:"/mdb-aws-ai-agents-lab/es/docs/category/add-memory-to-the-agent"}},i={},c=[];function l(e){const n={code:"code",h1:"h1",header:"header",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"-build-and-execute-the-graph",children:"\ud83d\udc50 Build and execute the graph"})}),"\n",(0,r.jsx)(n.p,{children:"Now that we have defined the nodes and edges of the graph, let's put the graph together and execute it to ensure that our agent is working as expected."}),"\n",(0,r.jsxs)(n.p,{children:["Fill in any ",(0,r.jsx)(n.code,{children:"<CODE_BLOCK_N>"})," placeholders and run the cells under the ",(0,r.jsx)(n.strong,{children:"Step 10: Build the graph"})," and ",(0,r.jsx)(n.strong,{children:"Step 11: Execute the graph"})," sections in the notebook to build and execute the graph."]}),"\n",(0,r.jsx)(n.p,{children:"The answers for code blocks in this section are as follows:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"CODE_BLOCK_17"})}),"\n",(0,r.jsxs)(t,{children:[(0,r.jsx)("summary",{children:"Answer"}),(0,r.jsx)("div",{children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'graph.add_node("agent", agent)\n'})})})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"CODE_BLOCK_18"})}),"\n",(0,r.jsxs)(t,{children:[(0,r.jsx)("summary",{children:"Answer"}),(0,r.jsx)("div",{children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'graph.add_node("tools", tool_node)\n'})})})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"CODE_BLOCK_19"})}),"\n",(0,r.jsxs)(t,{children:[(0,r.jsx)("summary",{children:"Answer"}),(0,r.jsx)("div",{children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'graph.add_edge(START, "agent")\n'})})})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"CODE_BLOCK_20"})}),"\n",(0,r.jsxs)(t,{children:[(0,r.jsx)("summary",{children:"Answer"}),(0,r.jsx)("div",{children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'graph.add_edge("tools", "agent")\n'})})})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"CODE_BLOCK_21"})}),"\n",(0,r.jsxs)(t,{children:[(0,r.jsx)("summary",{children:"Answer"}),(0,r.jsx)("div",{children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'graph.add_conditional_edges(\n    "agent",\n    route_tools,\n    {"tools": "tools", END: END},\n)\n'})})})]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>d,x:()=>o});var r=t(6540);const s={},a=r.createContext(s);function d(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);