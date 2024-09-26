"use strict";(self.webpackChunkdilanx_support=self.webpackChunkdilanx_support||[]).push([[89],{4894:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var i=t(4848),o=t(8453);const s={pagination_prev:"paper/index",pagination_next:null},r="Contributing to Paper",a={id:"paper/contribute/index",title:"Contributing to Paper",description:"This page is intended for people that want to contribute to Paper itself. If you're looking to built your own application using Paper's APIs, see Developing with Paper.",source:"@site/docs/paper/contribute/index.md",sourceDirName:"paper/contribute",slug:"/paper/contribute/",permalink:"/paper/contribute/",draft:!1,unlisted:!1,editUrl:"https://github.com/dilanx/support.dilanxd.com/blob/main/docs/paper/contribute/index.md",tags:[],version:"current",frontMatter:{pagination_prev:"paper/index",pagination_next:null},previous:{title:"Paper",permalink:"/paper/"}},l={},d=[{value:"About this project",id:"about-this-project",level:2},{value:"Technical stack",id:"technical-stack",level:3},{value:"About the repository",id:"about-the-repository",level:2},{value:"Setting up your development environment",id:"setting-up-your-development-environment",level:2},{value:"Finding something to work on",id:"finding-something-to-work-on",level:2},{value:"Ideas",id:"ideas",level:3},{value:"Avoid existing features",id:"avoid-existing-features",level:3},{value:"Avoid or collaborate on duplicate work",id:"avoid-or-collaborate-on-duplicate-work",level:3},{value:"Limitations",id:"limitations",level:3},{value:"Starting to make changes",id:"starting-to-make-changes",level:2},{value:"Developing your changes",id:"developing-your-changes",level:2},{value:"User experience",id:"user-experience",level:3},{value:"Code quality",id:"code-quality",level:3},{value:"Testing",id:"testing",level:3},{value:"Submitting your changes",id:"submitting-your-changes",level:2},{value:"Acknowledging contributions",id:"acknowledging-contributions",level:2},{value:"Questions",id:"questions",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"contributing-to-paper",children:"Contributing to Paper"})}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["This page is intended for people that want to contribute to Paper itself. If you're looking to built your own application using Paper's APIs, see ",(0,i.jsx)(n.a,{href:"/paper/develop/",children:"Developing with Paper"}),"."]})}),"\n",(0,i.jsx)(n.p,{children:"Thank you for your interest in contributing to Paper! Contributions are welcome from everyone. I know this is long, but I've included the important information needed to develop effectively for Paper."}),"\n",(0,i.jsx)(n.h2,{id:"about-this-project",children:"About this project"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Paper"})," is a website built to help Northwestern students plan out their courses."]}),"\n",(0,i.jsx)(n.h3,{id:"technical-stack",children:"Technical stack"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Written in ",(0,i.jsx)(n.strong,{children:"TypeScript"})]}),"\n",(0,i.jsxs)(n.li,{children:["Built with ",(0,i.jsx)(n.strong,{children:"React"})]}),"\n",(0,i.jsxs)(n.li,{children:["Uses ",(0,i.jsx)(n.strong,{children:"Tailwind CSS"})," for styling"]}),"\n",(0,i.jsxs)(n.li,{children:["Uses ",(0,i.jsx)(n.strong,{children:"Framer Motion"})," for animations and transitions"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"about-the-repository",children:"About the repository"}),"\n",(0,i.jsxs)(n.p,{children:["This repository contains ",(0,i.jsx)(n.strong,{children:"only the client side"})," for Paper. At the moment, the server side is closed source. However, if you're interested in adding something to the server side (for example, new API endpoints involving user data or backend computation), let me know and I'd be happy to figure something out! I love creative ideas and am open to collaboration on cool things."]}),"\n",(0,i.jsx)(n.h2,{id:"setting-up-your-development-environment",children:"Setting up your development environment"}),"\n",(0,i.jsxs)(n.p,{children:["You're welcome to use any development environment you'd like, but I use ",(0,i.jsx)(n.a,{href:"https://code.visualstudio.com/",children:"Visual Studio Code"}),"."]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Fork the repository, clone it, and navigate within"}),"\n",(0,i.jsxs)(n.li,{children:["Install dependencies with ",(0,i.jsx)(n.code,{children:"npm install"})]}),"\n",(0,i.jsxs)(n.li,{children:["Start the development server with ",(0,i.jsx)(n.code,{children:"npm start"})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["You may want to set up ",(0,i.jsx)(n.a,{href:"https://eslint.org/",children:"ESLint"})," and ",(0,i.jsx)(n.a,{href:"https://prettier.io/",children:"Prettier"})," in your editor to help with code linting and formatting. While you don't need to do this locally, all pull requests made to Paper will be checked for linting and formatting errors."]}),"\n",(0,i.jsx)(n.h2,{id:"finding-something-to-work-on",children:"Finding something to work on"}),"\n",(0,i.jsx)(n.h3,{id:"ideas",children:"Ideas"}),"\n",(0,i.jsxs)(n.p,{children:["You can check out the ",(0,i.jsx)(n.a,{href:"/paper/contribute/ideas",children:"ideas list"})," for ideas or come up with some on your own! If you want to chat with me about it, feel free to send a message to ",(0,i.jsx)(n.a,{href:"mailto:support@dilanxd.com",children:"support@dilanxd.com"})," and I'd be happy to help you out."]}),"\n",(0,i.jsx)(n.h3,{id:"avoid-existing-features",children:"Avoid existing features"}),"\n",(0,i.jsxs)(n.p,{children:["You're welcome to add enhancements to existing features, but make sure what you're building doesn't already exist. You can ",(0,i.jsx)(n.a,{href:"https://www.paper.nu",children:"explore the application"}),", ",(0,i.jsx)(n.a,{href:"https://support.dilanxd.com/paper/",children:"read through the documentation"}),", and ",(0,i.jsx)(n.a,{href:"https://github.com/dilanx/paper.nu/tree/main/src",children:"look through the code"})," to see what's already there."]}),"\n",(0,i.jsx)(n.h3,{id:"avoid-or-collaborate-on-duplicate-work",children:"Avoid or collaborate on duplicate work"}),"\n",(0,i.jsxs)(n.p,{children:["Check out the ",(0,i.jsx)(n.a,{href:"https://github.com/dilanx/paper/pulls",children:"pull requests"})," to see if someone is already working on something you're interested in. If it looks like it's not progressing, you could totally do the same thing."]}),"\n",(0,i.jsx)(n.h3,{id:"limitations",children:"Limitations"}),"\n",(0,i.jsx)(n.p,{children:"Here are a few limitations from ideas that have been brought up a lot:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"CTEC integration"})}),"\n",(0,i.jsxs)(n.p,{children:["The Northwestern University CTEC Office does not have a public API for accessing CTEC data because the data is locked behind an authentication wall, along with the fact that CTECs must be inaccessible to those who do not complete their CTECs the previous quarter. Additionally, scraping the data on your own is illegal. ",(0,i.jsx)(n.a,{href:"https://support.dilanxd.com/paper/ratings/",children:"Paper Ratings"})," is a simple alternative that has been approved by the Office of the Registrar."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Very specific course ratings"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://support.dilanxd.com/paper/ratings/",children:"Paper Ratings"})," is a simple alternative to CTEC data that has been approved by the Office of the Registrar. However, they have advised against allowing section-specific ratings with professor data (like RateMyProfessors) since inaccuracies here can be problematic to the professors and the university. CTECs should be prioritized, but Paper Ratings allows for a general idea of how a course is overall."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Major requirements"})}),"\n",(0,i.jsx)(n.p,{children:"Major requirements are not available in a public API. I'm trying to reach out to schools to see what I can get but haven't had much luck yet. Right now, major requirements change somewhat often and are specific to different departments within schools, so there's a LOT of stuff go through if it were done manually. If you have ideas around this, I'd love to hear them!"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"starting-to-make-changes",children:"Starting to make changes"}),"\n",(0,i.jsxs)(n.p,{children:["Right when you start working on something, I'd recommend creating a pull request to ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"dev"})})," (not ",(0,i.jsx)(n.code,{children:"main"}),"), even before you finish. This helps others keep track of what's currently being worked on and can help you get feedback early on. You don't have to though; just note that others may start working on the same thing if you don't."]}),"\n",(0,i.jsx)(n.p,{children:"Use labels on the PRs, ensuring you only have one of the following at a time:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"in progress"})," - your PR is still being worked on and is not complete"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"help wanted"})," - you need help with something in your PR"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"needs review"})," - your PR is ready for review"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"developing-your-changes",children:"Developing your changes"}),"\n",(0,i.jsx)(n.p,{children:"Explore the code to see how things are done and follow the patterns you see. If you have ideas for improvement, go for it! Just make sure to keep things consistent and make good changes in other places if needed to keep things nicely organized."}),"\n",(0,i.jsx)(n.h3,{id:"user-experience",children:"User experience"}),"\n",(0,i.jsx)(n.p,{children:"At the core of Paper is the functionality and user experience, which includes the user interface design, consistency, and performance. Here are some things to keep in mind:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Deviation from the design of the rest of the application should be avoided and may be rejected. New UI enhancements are always welcome (I LOVE change for the better lol), but making something that does not look like it belongs in the application should be avoided."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Fluidity is key. Smooth animations and transitions should be present everywhere that makes sense. They should provide a fluid, natural user experience. No animations or transitions somewhere in a place where they should be should be resolved, but too many animations can be overwhelming or make the application feel unresponsive. These aren't too hard to change, so feel free to experiment!"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Performance is important. Paper handles a LOT of course data and loads big chunks of data often. The client side includes a custom caching system to help minimize reloading big chunks of data when there's no new data to load. Make sure to be mindful of how your changes affect performance and network usage."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Functionality should be intuitive at its core. The more features you have, the more convoluted the application becomes. However, we want as many cool and useful features as possible! The balance is key. Make sure your changes are intuitive and easy to use."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"code-quality",children:"Code quality"}),"\n",(0,i.jsx)(n.p,{children:"Code quality is important to keep the application maintainable and easy to work with. Here are some things to keep in mind:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"ESLint"})," linting and quality checks are run on all pull request commits. You can use the ",(0,i.jsx)(n.a,{href:"https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint",children:"ESLint VS Code extension"})," to get live feedback on your code in your editor. You can also run ",(0,i.jsx)(n.code,{children:"npm run lint:eslint"})," to check for linting errors across the application."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Prettier"})," formatting checks are run on all pull request commits. You can use the ",(0,i.jsx)(n.a,{href:"https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode",children:"Prettier VS Code extension"})," to enable automatic formatting on save. You can also run ",(0,i.jsx)(n.code,{children:"npm run lint:prettier"})," to check for formatting errors across the application."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"testing",children:"Testing"}),"\n",(0,i.jsx)(n.p,{children:"Testing is important to ensure that your changes work as expected. Paper does not have much of a testing suite at the moment, but make sure you try to break your features and ensure they work as expected through extensive testing, including of any edge cases you can think of."}),"\n",(0,i.jsx)(n.h2,{id:"submitting-your-changes",children:"Submitting your changes"}),"\n",(0,i.jsxs)(n.p,{children:["When you're ready to submit, update your pull request label to ",(0,i.jsx)(n.code,{children:"needs review"})," or create a pull request if you haven't already."]}),"\n",(0,i.jsx)(n.p,{children:"Maintainers will review your changes and provide feedback. If everything looks good, your changes will be released with the next app version!"}),"\n",(0,i.jsx)(n.h2,{id:"acknowledging-contributions",children:"Acknowledging contributions"}),"\n",(0,i.jsxs)(n.p,{children:["At the core of the Paper is its functionality and user experience and not watermarks or credits. However, credits (including of myself) are available in the about menu when clicking on the Paper logo or when pressing ",(0,i.jsx)(n.code,{children:"About"})," on the toolbar. All contributors will be listed on GitHub, but those that make significant contributions will be listed in the same about menu as well!"]}),"\n",(0,i.jsx)(n.h2,{id:"questions",children:"Questions"}),"\n",(0,i.jsxs)(n.p,{children:["Since at the moment the application was built entirely by myself (Dilan), no one knows this application more than I do! Don't hesitate to reach out with any questions with an email to ",(0,i.jsx)(n.a,{href:"mailto:support@dilanxd.com",children:"support@dilanxd.com"}),"."]})]})}function c(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var i=t(6540);const o={},s=i.createContext(o);function r(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);