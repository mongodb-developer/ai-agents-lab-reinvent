"use strict";(self.webpackChunkai_agents_lab_reinvent=self.webpackChunkai_agents_lab_reinvent||[]).push([[639],{7140:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>r,default:()=>l,frontMatter:()=>o,metadata:()=>c,toc:()=>h});var a=n(4848),s=n(8453);const o={},r="\ud83d\udcd8 Concepts",c={id:"create-agent/concepts",title:"\ud83d\udcd8 Concepts",description:"Here is a quick overview of concepts that you will come across in this section of the lab:",source:"@site/docs/60-create-agent/1-concepts.mdx",sourceDirName:"60-create-agent",slug:"/create-agent/concepts",permalink:"/mdb-aws-ai-agents-lab/es/docs/create-agent/concepts",draft:!1,unlisted:!1,editUrl:"https://github.com/mongodb-developer/mdb-aws-ai-agents-lab/blob/main/docs/60-create-agent/1-concepts.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Create Agent",permalink:"/mdb-aws-ai-agents-lab/es/docs/category/create-agent"},next:{title:"\ud83d\udc50 Define graph state",permalink:"/mdb-aws-ai-agents-lab/es/docs/create-agent/define-graph-state"}},i={},h=[{value:"Graph State",id:"graph-state",level:2},{value:"Nodes",id:"nodes",level:2},{value:"Edges",id:"edges",level:2}];function d(e){const t={h1:"h1",h2:"h2",header:"header",p:"p",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"-concepts",children:"\ud83d\udcd8 Concepts"})}),"\n",(0,a.jsx)(t.p,{children:"Here is a quick overview of concepts that you will come across in this section of the lab:"}),"\n",(0,a.jsx)(t.p,{children:"In this lab, we will use LangGraph by LangChain to orchestrate the MongoDB learning assistant. LangGraph allows you to model agentic systems as graphs. Graphs in LangGraph have the following core features:"}),"\n",(0,a.jsx)(t.h2,{id:"graph-state",children:"Graph State"}),"\n",(0,a.jsx)(t.p,{children:"Each graph in has a state which is a shared data structure that all the nodes can access and make updates to. You can define custom attributes within the state depending on what parameters you want to track across the nodes of the graph."}),"\n",(0,a.jsx)(t.h2,{id:"nodes",children:"Nodes"}),"\n",(0,a.jsx)(t.p,{children:"Nodes in LangGraph are Python functions that encode the logic of your agents. They receive the current state of the graph as input, perform some computation and return an updated state."}),"\n",(0,a.jsx)(t.h2,{id:"edges",children:"Edges"}),"\n",(0,a.jsx)(t.p,{children:"Edges in LangGraph are Python functions that determine which graph node to execute next based on the current state of the graph. Edges can be conditional or fixed."})]})}function l(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>c});var a=n(6540);const s={},o=a.createContext(s);function r(e){const t=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);