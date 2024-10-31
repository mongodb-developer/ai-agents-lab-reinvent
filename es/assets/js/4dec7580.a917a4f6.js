"use strict";(self.webpackChunkai_agents_lab_reinvent=self.webpackChunkai_agents_lab_reinvent||[]).push([[679],{1984:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var t=s(4848),o=s(8453);const r={},i="\ud83d\udc50 Create agent tools",c={id:"agent-tools/create-agent-tools",title:"\ud83d\udc50 Create agent tools",description:"The easiest way to define custom tools for agents in LangChain is using the @tool decorator. The decorator makes tools out of functions by using the function name as the tool name by default, and the function's docstring as the tool's description.",source:"@site/docs/50-agent-tools/4-create-agent-tools.mdx",sourceDirName:"50-agent-tools",slug:"/agent-tools/create-agent-tools",permalink:"/mdb-aws-ai-agents-lab/es/docs/agent-tools/create-agent-tools",draft:!1,unlisted:!1,editUrl:"https://github.com/mongodb-developer/mdb-aws-ai-agents-lab/blob/main/docs/50-agent-tools/4-create-agent-tools.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udc50 Create a vector search index",permalink:"/mdb-aws-ai-agents-lab/es/docs/agent-tools/create-vector-search-index"},next:{title:"Create Agent",permalink:"/mdb-aws-ai-agents-lab/es/docs/category/create-agent"}},a={},l=[];function d(e){const n={code:"code",h1:"h1",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components},{Details:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"-create-agent-tools",children:"\ud83d\udc50 Create agent tools"})}),"\n",(0,t.jsxs)(n.p,{children:["The easiest way to define custom tools for agents in LangChain is using the ",(0,t.jsx)(n.code,{children:"@tool"})," decorator. The decorator makes tools out of functions by using the function name as the tool name by default, and the function's docstring as the tool's description."]}),"\n",(0,t.jsx)(n.p,{children:"We want the MongoDB learning assistant to have access to the following tools:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"get_information_for_question_answering"}),": Uses vector search to retrieve information to answer questions"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"get_article_content_for_summarization"}),": Gets the content of articles for summarization"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Fill in any ",(0,t.jsx)(n.code,{children:"<CODE_BLOCK_N>"})," placeholders and run the cells under the ",(0,t.jsx)(n.strong,{children:"Step 5: Create agent tools"})," section in the notebook to create tools for the agent to use."]}),"\n",(0,t.jsx)(n.p,{children:"The answers for code blocks in this section are as follows:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"CODE_BLOCK_3"})}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:"Answer"}),(0,t.jsx)("div",{children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"embedding_model.encode(text)\n"})})})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"CODE_BLOCK_4"})}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:"Answer"}),(0,t.jsx)("div",{children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"get_embedding(user_query)\n"})})})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"CODE_BLOCK_5"})}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:"Answer"}),(0,t.jsx)("div",{children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'[\n    {\n        "$vectorSearch": {\n            "index": VS_INDEX_NAME,\n            "path": "embedding",\n            "queryVector": query_embedding,\n            "numCandidates": 150,\n            "limit": 5,\n        }\n    },\n    {\n        "$project": {\n            "_id": 0,\n            "body": 1,\n            "score": {"$meta": "vectorSearchScore"},\n        }\n    },\n]\n'})})})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"CODE_BLOCK_6"})}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:"Answer"}),(0,t.jsx)("div",{children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"vs_collection.aggregate(pipeline)\n"})})})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"CODE_BLOCK_7"})}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:"Answer"}),(0,t.jsx)("div",{children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"mongodb_client[DB_NAME][FULL_COLLECTION_NAME]\n"})})})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"CODE_BLOCK_8"})}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:"Answer"}),(0,t.jsx)("div",{children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'{"title": user_query}\n'})})})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"CODE_BLOCK_9"})}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:"Answer"}),(0,t.jsx)("div",{children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'{"_id": 0, "body": 1}\n'})})})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"CODE_BLOCK_10"})}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:"Answer"}),(0,t.jsx)("div",{children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"full_collection.find_one(query, projection)\n"})})})]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>c});var t=s(6540);const o={},r=t.createContext(o);function i(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);