"use strict";(self.webpackChunkai_agents_lab_reinvent=self.webpackChunkai_agents_lab_reinvent||[]).push([[988],{1130:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>g,frontMatter:()=>c,metadata:()=>i,toc:()=>d});var o=e(4848),s=e(8453),r=(e(3974),e(2763));const c={},a="\ud83d\udc50 Get your connection string",i={id:"mongodb-atlas/get-connection-string",title:"\ud83d\udc50 Get your connection string",description:"In order to ingest data into your cluster later in the lab, you will need to get the connection string for your cluster.",source:"@site/docs/20-mongodb-atlas/3-get-connection-string.mdx",sourceDirName:"20-mongodb-atlas",slug:"/mongodb-atlas/get-connection-string",permalink:"/mdb-aws-ai-agents-lab/es/docs/mongodb-atlas/get-connection-string",draft:!1,unlisted:!1,editUrl:"https://github.com/mongodb-developer/mdb-aws-ai-agents-lab/blob/main/docs/20-mongodb-atlas/3-get-connection-string.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udc50 Deploy a database cluster",permalink:"/mdb-aws-ai-agents-lab/es/docs/mongodb-atlas/create-cluster"},next:{title:"AWS",permalink:"/mdb-aws-ai-agents-lab/es/docs/category/aws"}},l={},d=[];function u(n){const t={admonition:"admonition",code:"code",h1:"h1",header:"header",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"-get-your-connection-string",children:"\ud83d\udc50 Get your connection string"})}),"\n",(0,o.jsx)(t.p,{children:"In order to ingest data into your cluster later in the lab, you will need to get the connection string for your cluster."}),"\n",(0,o.jsxs)(t.p,{children:["In the Atlas UI, navigate to the ",(0,o.jsx)(t.strong,{children:"Overview"})," page. In the ",(0,o.jsx)(t.strong,{children:"Clusters section"}),", select the cluster you just created and click ",(0,o.jsx)(t.strong,{children:"Connect"}),"."]}),"\n",(0,o.jsx)(r.A,{url:"https://cloud.mongodb.com",src:"img/screenshots/20-mongodb-atlas/3-get-conn-string/1-connect-button.png",alt:"Screenshot of the connect button"}),"\n",(0,o.jsx)(t.p,{children:"A modal will display several ways to connect to your database."}),"\n",(0,o.jsx)(r.A,{url:"https://cloud.mongodb.com",src:"img/screenshots/20-mongodb-atlas/3-get-conn-string/2-connect-modal.png",alt:"Screenshot of the connect modal"}),"\n",(0,o.jsxs)(t.p,{children:["Select ",(0,o.jsx)(t.strong,{children:"Compass"}),". While we won't be using Compass to import the data, it's an easy way to see your connection string."]}),"\n",(0,o.jsx)(r.A,{url:"https://cloud.mongodb.com",src:"img/screenshots/20-mongodb-atlas/3-get-conn-string/3-connect-compass.png",alt:"Screenshot of the connection string"}),"\n",(0,o.jsx)(t.p,{children:"Look for your connection string. It should look something like:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"mongodb+srv://<username>:<password>@<cluster-url>/\n"})}),"\n",(0,o.jsx)(t.p,{children:"Click the copy button next to your connection string to copy it to your clipboard. Paste the connection string somewhere safe."}),"\n",(0,o.jsx)(t.admonition,{type:"tip",children:(0,o.jsxs)(t.p,{children:["Don't forget to replace ",(0,o.jsx)(t.code,{children:"<password>"})," with the password you set when you created the cluster."]})})]})}function g(n={}){const{wrapper:t}={...(0,s.R)(),...n.components};return t?(0,o.jsx)(t,{...n,children:(0,o.jsx)(u,{...n})}):u(n)}},3974:(n,t,e)=>{e.d(t,{A:()=>c});e(6540);var o=e(8774),s=e(4586),r=e(4848);function c(n){const t=(0,s.A)(),e=t?.siteConfig?.customFields?.utmParams||"",c=`${n.to}?${e}`;return(0,r.jsx)(o.A,{...n,to:c})}},2763:(n,t,e)=>{e.d(t,{A:()=>c});e(6540);var o=e(4848);function s(n){const t=n.url||"http://localhost:3000";return(0,o.jsxs)("div",{className:"browser container",children:[(0,o.jsxs)("div",{className:"row",children:[(0,o.jsxs)("div",{className:"column left",children:[(0,o.jsx)("span",{className:"dot",style:{background:"#ED594A"}}),(0,o.jsx)("span",{className:"dot",style:{background:"#FDD800"}}),(0,o.jsx)("span",{className:"dot",style:{background:"#5AC05A"}})]}),(0,o.jsx)("div",{className:"column middle",children:(0,o.jsx)("input",{type:"text",value:t})}),(0,o.jsx)("div",{className:"column right",children:(0,o.jsxs)("div",{style:{float:"right"},children:[(0,o.jsx)("span",{className:"bar"}),(0,o.jsx)("span",{className:"bar"}),(0,o.jsx)("span",{className:"bar"})]})})]}),(0,o.jsx)("div",{className:"content",children:n.children})]})}var r=e(6025);function c(n){return(0,o.jsx)(s,{...n,children:(0,o.jsx)("img",{src:(0,r.Ay)(n.src),alt:n.alt})})}},8453:(n,t,e)=>{e.d(t,{R:()=>c,x:()=>a});var o=e(6540);const s={},r=o.createContext(s);function c(n){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof n?n(t):{...t,...n}}),[t,n])}function a(n){let t;return t=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:c(n.components),o.createElement(r.Provider,{value:t},n.children)}}}]);