"use strict";(self.webpackChunkai_agents_lab_reinvent=self.webpackChunkai_agents_lab_reinvent||[]).push([[786],{4211:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var s=n(4848),a=n(8453);const r={},i="\ud83d\udc50 Instantiate the LLM",o={id:"create-agent/instantiate-llm",title:"\ud83d\udc50 Instantiate the LLM",description:'Now let\'s instantiate the LLM that will serve as the "brain" of our agent, and give it access to the tools we defined previously.',source:"@site/docs/60-create-agent/3-instantiate-llm.mdx",sourceDirName:"60-create-agent",slug:"/create-agent/instantiate-llm",permalink:"/mdb-aws-ai-agents-lab/es/docs/create-agent/instantiate-llm",draft:!1,unlisted:!1,editUrl:"https://github.com/mongodb-developer/mdb-aws-ai-agents-lab/blob/main/docs/60-create-agent/3-instantiate-llm.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udc50 Define graph state",permalink:"/mdb-aws-ai-agents-lab/es/docs/create-agent/define-graph-state"},next:{title:"\ud83d\udc50 Define graph nodes",permalink:"/mdb-aws-ai-agents-lab/es/docs/create-agent/define-graph-nodes"}},l={},c=[];function d(e){const t={code:"code",h1:"h1",header:"header",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"-instantiate-the-llm",children:"\ud83d\udc50 Instantiate the LLM"})}),"\n",(0,s.jsx)(t.p,{children:'Now let\'s instantiate the LLM that will serve as the "brain" of our agent, and give it access to the tools we defined previously.'}),"\n",(0,s.jsxs)(t.p,{children:["Fill in any ",(0,s.jsx)(t.code,{children:"<CODE_BLOCK_N>"})," placeholders and run the cells under the ",(0,s.jsx)(t.strong,{children:"Step 7: Instantiate the LLM"})," section in the notebook to initialize the LLM for our agent and give it access to tools."]}),"\n",(0,s.jsx)(t.p,{children:"The answers for code blocks in this section are as follows:"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"CODE_BLOCK_11"})}),"\n",(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{children:"Answer"}),(0,s.jsx)("div",{children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:'ChatFireworks(model="accounts/fireworks/models/firefunction-v2", temperature=0.0)\n'})})})]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"CODE_BLOCK_12"})}),"\n",(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{children:"Answer"}),(0,s.jsx)("div",{children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"llm.bind_tools(tools)\n"})})})]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"CODE_BLOCK_13"})}),"\n",(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{children:"Answer"}),(0,s.jsx)("div",{children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"prompt | bind_tools\n"})})})]})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>o});var s=n(6540);const a={},r=s.createContext(a);function i(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);